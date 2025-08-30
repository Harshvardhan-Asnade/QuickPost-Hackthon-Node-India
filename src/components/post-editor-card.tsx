"use client";

import * as React from "react";
import type { Post } from "@/app/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Save, Calendar, Loader2 as Spinner, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface PostEditorCardProps {
  post: Post;
  setPost: React.Dispatch<React.SetStateAction<Post | null>>;
  onGenerateHashtags: () => void;
  isGeneratingHashtags: boolean;
  onSaveDraft: () => void;
}

export default function PostEditorCard({
  post,
  setPost,
  onGenerateHashtags,
  isGeneratingHashtags,
  onSaveDraft,
}: PostEditorCardProps) {
  const handleCopyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(p => p ? { ...p, copy: e.target.value } : null);
  };

  const handleHashtagChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const newHashtag = e.currentTarget.value.trim().replace(/#/g, '');
      if (newHashtag && !post.hashtags.includes(newHashtag)) {
        setPost(p => p ? { ...p, hashtags: [...p.hashtags, newHashtag] } : null);
      }
      e.currentTarget.value = '';
    }
  };

  const removeHashtag = (tagToRemove: string) => {
    setPost(p => p ? { ...p, hashtags: p.hashtags.filter(tag => tag !== tagToRemove) } : null);
  };

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>Craft Your Post</CardTitle>
        <CardDescription>Edit your post copy and add hashtags.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <Textarea
          value={post.copy}
          onChange={handleCopyChange}
          placeholder="Your post content goes here..."
          className="min-h-[150px] flex-grow resize-none"
        />
        <div className="space-y-2">
          <label className="text-sm font-medium">Hashtags</label>
          <div className="flex flex-wrap gap-2 rounded-md border border-input p-2">
            {post.hashtags.map((tag) => (
              <Badge key={tag} variant="secondary" className="group">
                #{tag}
                <button onClick={() => removeHashtag(tag)} className="ml-1 rounded-full opacity-50 group-hover:opacity-100 transition-opacity">
                    <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
             <input
                type="text"
                onKeyDown={handleHashtagChange}
                placeholder="Add hashtags..."
                className="flex-1 bg-transparent text-sm outline-none"
              />
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onGenerateHashtags}
            disabled={isGeneratingHashtags}
          >
            {isGeneratingHashtags ? (
              <Spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Suggest with AI
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Feature Coming Soon!</AlertDialogTitle>
              <AlertDialogDescription>
                Directly scheduling posts to your favorite social media platforms is on our roadmap. Stay tuned!
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Got it</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button onClick={onSaveDraft}>
          <Save className="mr-2 h-4 w-4" />
          Save Draft
        </Button>
      </CardFooter>
    </Card>
  );
}
