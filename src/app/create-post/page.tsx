
'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Image as ImageIcon, Video, Wand2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  platform: z.enum(['instagram', 'x', 'linkedin', 'facebook', 'tiktok', 'pinterest']),
  postType: z.enum(['promo', 'announcement', 'quote', 'story', 'meme', 'question']),
  tone: z.enum(['friendly', 'professional', 'funny', 'inspirational', 'persuasive']),
  keywords: z.string().min(1, 'Keywords are required.'),
  length: z.enum(['short', 'medium', 'long']),
  count: z.coerce.number().int().min(1).max(10).optional().default(4),
});

export type PostGenerationRequest = z.infer<typeof formSchema>;

const Logo = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
      <path
        d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
        fill="currentColor"
      ></path>
    </svg>
  );

export default function CreatePostPage() {

  const form = useForm<PostGenerationRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platform: 'x',
      postType: 'promo',
      tone: 'friendly',
      keywords: '',
      length: 'medium',
      count: 4,
    },
  });

  function onSubmit(values: PostGenerationRequest) {
    console.log(values);
  }


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex items-center justify-between h-16 px-8 border-b">
        <Link href="/" className="flex items-center gap-2">
            <Logo/>
            <h1 className="text-xl font-bold">SocialPostr</h1>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Templates
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Analytics
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Settings
          </Link>
        </nav>
        <Avatar>
          <AvatarImage src="https://picsum.photos/40/40" alt="User" data-ai-hint="woman" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Create a New Post</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="platform"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Platform</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a platform" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="x">X (Twitter)</SelectItem>
                          <SelectItem value="linkedin">LinkedIn</SelectItem>
                          <SelectItem value="facebook">Facebook</SelectItem>
                          <SelectItem value="tiktok">TikTok</SelectItem>
                          <SelectItem value="pinterest">Pinterest</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="postType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Post Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a post type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="promo">Promo</SelectItem>
                          <SelectItem value="announcement">Announcement</SelectItem>
                          <SelectItem value="quote">Quote</SelectItem>
                          <SelectItem value="story">Story</SelectItem>
                          <SelectItem value="meme">Meme</SelectItem>
                          <SelectItem value="question">Question</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tone</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a tone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="funny">Funny</SelectItem>
                        <SelectItem value="inspirational">Inspirational</SelectItem>
                        <SelectItem value="persuasive">Persuasive</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., AI, social media, marketing" {...field} />
                    </FormControl>
                    <FormDescription>
                      Comma-separated keywords that should be included in the post.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="length"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Length</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a length" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="short">Short</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="long">Long</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="count"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Posts</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit">
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Posts
                </Button>

                <Button variant="outline" type="button">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Add Image
                </Button>
              </div>

            </form>
          </Form>

        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Preview</h2>
          <Tabs defaultValue="twitter" className="w-full">
            <TabsList>
              <TabsTrigger value="twitter">Twitter</TabsTrigger>
              <TabsTrigger value="facebook">Facebook</TabsTrigger>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
            </TabsList>
            <TabsContent value="twitter">
                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <div className="relative aspect-[16/9]">
                        <Image src="https://picsum.photos/600/338" alt="Post preview" fill data-ai-hint="abstract background" />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                            <h3 className="text-xl font-bold text-white">Your Post Preview</h3>
                            <p className="text-sm text-white/80">
                            This is how your post will look on Twitter. Adjust your content to fit within the character limit and preview other platforms.
                            </p>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="facebook">
                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <div className="relative aspect-[16/9]">
                        <Image src="https://picsum.photos/600/338" alt="Post preview" fill data-ai-hint="abstract background" />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                            <h3 className="text-xl font-bold text-white">Your Post Preview</h3>
                            <p className="text-sm text-white/80">
                            This is how your post will look on Facebook. Adjust your content to fit within the character limit and preview other platforms.
                            </p>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="instagram">
                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <div className="relative aspect-square">
                        <Image src="https://picsum.photos/600/600" alt="Post preview" fill data-ai-hint="abstract background" />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                            <h3 className="text-xl font-bold text-white">Your Post Preview</h3>
                            <p className="text-sm text-white/80">
                            This is how your post will look on Instagram. Adjust your content to fit within the character limit and preview other platforms.
                            </p>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

    