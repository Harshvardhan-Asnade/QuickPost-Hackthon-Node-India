"use client";

import * as React from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  PenTool,
  Plus,
  Trash2,
  FileText,
  Loader2 as Spinner,
} from "lucide-react";
import PostIdeasCard from "@/components/post-ideas-card";
import PostEditorCard from "@/components/post-editor-card";
import PostPreviewCard from "@/components/post-preview-card";
import { generatePostIdeas } from "@/ai/flows/generate-post-ideas";
import { draftPostCopy } from "@/ai/flows/draft-post-copy";
import { suggestRelevantHashtags } from "@/ai/flows/suggest-relevant-hashtags";
import { useToast } from "@/hooks/use-toast";

export interface Post {
  id: string;
  title: string;
  copy: string;
  hashtags: string[];
  image: string;
}

export default function PostGeniusApp() {
  const { toast } = useToast();
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [activePost, setActivePost] = React.useState<Post | null>(null);

  const [ideas, setIdeas] = React.useState<string[]>([]);
  const [isGeneratingIdeas, setIsGeneratingIdeas] = React.useState(false);
  const [isDraftingCopy, setIsDraftingCopy] = React.useState(false);
  const [isGeneratingHashtags, setIsGeneratingHashtags] =
    React.useState(false);

  const handleGenerateIdeas = async (keywords: string) => {
    if (!keywords) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter some keywords to generate ideas.",
      });
      return;
    }
    setIsGeneratingIdeas(true);
    setActivePost(null);
    setIdeas([]);
    try {
      const result = await generatePostIdeas({ keywords });
      setIdeas(
        result.ideas.split("\n").filter((idea) => idea.trim().length > 0)
      );
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error Generating Ideas",
        description: "Could not generate post ideas. Please try again.",
      });
    } finally {
      setIsGeneratingIdeas(false);
    }
  };

  const handleSelectIdea = async (idea: string) => {
    setIsDraftingCopy(true);
    setActivePost(null);
    try {
      const { draftCopy } = await draftPostCopy({ postIdea: idea });
      const newPost: Post = {
        id: crypto.randomUUID(),
        title: idea.replace(/^\d+\.\s*/, ""),
        copy: draftCopy,
        hashtags: [],
        image: `https://picsum.photos/1080/1350?random=${Math.random()}`,
      };
      setActivePost(newPost);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error Drafting Copy",
        description: "Could not draft post copy. Please try again.",
      });
    } finally {
      setIsDraftingCopy(false);
    }
  };

  const handleGenerateHashtags = async () => {
    if (!activePost) return;
    setIsGeneratingHashtags(true);
    try {
      const { hashtags } = await suggestRelevantHashtags({
        postContent: activePost.copy,
      });
      setActivePost({
        ...activePost,
        hashtags: [...new Set([...activePost.hashtags, ...hashtags])],
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error Generating Hashtags",
        description: "Could not suggest hashtags. Please try again.",
      });
    } finally {
      setIsGeneratingHashtags(false);
    }
  };

  const handleSaveDraft = () => {
    if (!activePost) return;
    const existingPostIndex = posts.findIndex((p) => p.id === activePost.id);
    if (existingPostIndex > -1) {
      const updatedPosts = [...posts];
      updatedPosts[existingPostIndex] = activePost;
      setPosts(updatedPosts);
    } else {
      setPosts([...posts, activePost]);
    }
    toast({
      title: "Draft Saved!",
      description: "Your post has been saved successfully.",
    });
  };

  const handleNewPost = () => {
    setActivePost(null);
    setIdeas([]);
  };

  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter((p) => p.id !== postId));
    if (activePost?.id === postId) {
      setActivePost(null);
    }
    toast({
      title: "Post Deleted",
    });
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <PenTool className="size-5" />
            </div>
            <span className="text-lg font-bold">PostGenius</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={handleNewPost}
                className="font-semibold"
              >
                <Plus />
                New Post
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarGroup className="mt-4">
            <SidebarGroupLabel>Drafts</SidebarGroupLabel>
            <SidebarMenu>
              {posts.map((post) => (
                <SidebarMenuItem key={post.id}>
                  <SidebarMenuButton
                    onClick={() => setActivePost(post)}
                    isActive={activePost?.id === post.id}
                    tooltip={{ children: post.title, side: "right" }}
                  >
                    <FileText />
                    <span>{post.title}</span>
                  </SidebarMenuButton>
                  <SidebarMenuAction
                    onClick={() => handleDeletePost(post.id)}
                    showOnHover
                  >
                    <Trash2 />
                  </SidebarMenuAction>
                </SidebarMenuItem>
              ))}
              {posts.length === 0 && (
                 <p className="px-2 text-xs text-sidebar-foreground/70">No drafts saved yet.</p>
              )}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="grid h-full grid-cols-1 gap-8 xl:grid-cols-2">
            <div className="flex flex-col gap-8">
              <PostIdeasCard
                onGenerate={handleGenerateIdeas}
                onSelectIdea={handleSelectIdea}
                ideas={ideas}
                isLoading={isGeneratingIdeas}
                isIdeaSelected={!!activePost}
              />
              {isDraftingCopy ? (
                <div className="flex h-64 items-center justify-center rounded-lg border bg-card">
                  <Spinner className="size-8 animate-spin text-primary" />
                </div>
              ) : activePost ? (
                <PostEditorCard
                  post={activePost}
                  setPost={setActivePost}
                  onGenerateHashtags={handleGenerateHashtags}
                  isGeneratingHashtags={isGeneratingHashtags}
                  onSaveDraft={handleSaveDraft}
                />
              ) : null}
            </div>
            <div className="min-h-[50vh] xl:min-h-0">
              {activePost && <PostPreviewCard post={activePost} />}
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
