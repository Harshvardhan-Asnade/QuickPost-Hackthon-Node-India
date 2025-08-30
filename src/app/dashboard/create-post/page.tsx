
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import PlatformPreview from '@/components/PlatformPreview';

type Platform = 'instagram' | 'x' | 'linkedin' | 'facebook' | 'tiktok' | 'pinterest' | null;

export default function CreatePostPage() {
  const [platform, setPlatform] = useState<Platform>(null);
  const [postContent, setPostContent] = useState('');
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState<string | null>(null);
  const [postType, setPostType] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!platform || !postContent) {
      // Maybe show a toast notification here
      return;
    }
    setIsLoading(true);
    // Simulate AI generation
    setTimeout(() => {
      setShowPreview(true);
      setIsLoading(false);
    }, 1500);
  };

  const handlePlatformChange = (value: string) => {
    setPlatform(value as Platform);
    setShowPreview(false); // Hide preview when platform changes
  };

  return (
    <div className="flex-1 space-y-8">
      <Link
        href="/dashboard"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Create a new post</h1>
          <Card>
            <CardHeader>
              <CardTitle>What are you creating a post for?</CardTitle>
              <CardDescription>
                Select the options that best fit the post you want to create.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6" onSubmit={handleGenerate}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="platform">Platform</Label>
                    <Select name="platform" onValueChange={handlePlatformChange} value={platform || ''}>
                      <SelectTrigger id="platform">
                        <SelectValue placeholder="Select a platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="x">X</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                        <SelectItem value="pinterest">Pinterest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postType">Post Type</Label>
                    <Select name="postType" onValueChange={setPostType} value={postType || ''}>
                      <SelectTrigger id="postType">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="promo">Promo</SelectItem>
                        <SelectItem value="announcement">Announcement</SelectItem>
                        <SelectItem value="quote">Quote</SelectItem>
                        <SelectItem value="story">Story</SelectItem>
                        <SelectItem value="meme">Meme</SelectItem>
                        <SelectItem value="question">Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tone">Tone</Label>
                  <Select name="tone" onValueChange={setTone} value={tone || ''}>
                    <SelectTrigger id="tone">
                      <SelectValue placeholder="Select a tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="funny">Funny</SelectItem>
                      <SelectItem value="inspirational">Inspirational</SelectItem>
                      <SelectItem value="persuasive">Persuasive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input 
                    id="keywords" 
                    placeholder="e.g. summer sale, new product" 
                    value={keywords} 
                    onChange={(e) => setKeywords(e.target.value)} 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="length">Length</Label>
                    <Select name="length">
                      <SelectTrigger id="length">
                        <SelectValue placeholder="Select a length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="long">Long</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="count">Number of posts</Label>
                    <Input id="count" type="number" placeholder="4" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">What is your post about?</Label>
                  <Textarea
                    id="content"
                    placeholder="Describe the main content of your post..."
                    className="min-h-[120px]"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Generate Posts
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
            <h2 className="text-3xl font-bold">Preview</h2>
            <Card className="min-h-[600px] flex items-center justify-center bg-muted/20">
                <CardContent className="p-4 w-full">
                {isLoading ? (
                     <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
                        <Loader2 className="h-12 w-12 animate-spin text-primary" />
                        <p>Generating your post...</p>
                        <p className="text-sm text-center">This will just take a moment.</p>
                    </div>
                ) : showPreview && platform ? (
                    <PlatformPreview 
                        platform={platform} 
                        content={postContent} 
                        author="QuickPost" 
                        avatarSrc="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center gap-2 text-center text-muted-foreground">
                        <p>Select a platform and fill out the form to see a preview of your post.</p>
                    </div>
                )}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}

    