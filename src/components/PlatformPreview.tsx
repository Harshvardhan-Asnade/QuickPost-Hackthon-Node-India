
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Heart, MessageCircle, Send, Bookmark, BarChart2, Repeat, ThumbsUp, Share2, Pin, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

type Platform = 'instagram' | 'x' | 'linkedin' | 'facebook' | 'tiktok' | 'pinterest' | null;

interface PlatformPreviewProps {
  platform: Platform;
  content: string;
  author: string;
  avatarSrc: string;
}

const PlatformPreview: React.FC<PlatformPreviewProps> = ({ platform, content, author, avatarSrc }) => {
  switch (platform) {
    case 'instagram':
      return <InstagramPreview content={content} author={author} avatarSrc={avatarSrc} />;
    case 'x':
      return <XPreview content={content} author={author} avatarSrc={avatarSrc} />;
    case 'linkedin':
      return <LinkedInPreview content={content} author={author} avatarSrc={avatarSrc} />;
    case 'facebook':
        return <FacebookPreview content={content} author={author} avatarSrc={avatarSrc} />;
    case 'pinterest':
        return <PinterestPreview content={content} author={author} avatarSrc={avatarSrc} />;
    case 'tiktok':
        return <TikTokPreview content={content} author={author} avatarSrc={avatarSrc} />;
    default:
      return <div className="text-center text-muted-foreground">Please select a platform to see a preview.</div>;
  }
};

const InstagramPreview = ({ content, author, avatarSrc }: Omit<PlatformPreviewProps, 'platform'>) => (
  <Card className="w-full max-w-sm mx-auto overflow-hidden">
    <CardHeader className="flex flex-row items-center gap-3 p-3">
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatarSrc} alt={author} />
        <AvatarFallback>{author.charAt(0)}</AvatarFallback>
      </Avatar>
      <span className="font-semibold">{author}</span>
    </CardHeader>
    <div className="bg-muted aspect-square w-full flex items-center justify-center">
        <Image src="https://picsum.photos/500/500" alt="Post image" width={500} height={500} className="object-cover w-full h-full" data-ai-hint="social media post"/>
    </div>
    <CardContent className="p-3">
      <div className="flex gap-4 mb-2">
        <Heart className="h-6 w-6" />
        <MessageCircle className="h-6 w-6" />
        <Send className="h-6 w-6" />
        <Bookmark className="h-6 w-6 ml-auto" />
      </div>
      <p className="text-sm">
        <span className="font-semibold">{author}</span> {content}
      </p>
    </CardContent>
  </Card>
);

const XPreview = ({ content, author, avatarSrc }: Omit<PlatformPreviewProps, 'platform'>) => (
  <Card className="w-full max-w-sm mx-auto p-4">
    <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
            <AvatarImage src={avatarSrc} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
            <div className="flex items-center gap-2">
                <span className="font-bold">{author}</span>
                <span className="text-muted-foreground">@{author.toLowerCase().replace(' ', '')}</span>
            </div>
            <p className="mt-1">{content}</p>
             <div className="bg-muted aspect-video w-full flex items-center justify-center rounded-lg mt-2">
                <Image src="https://picsum.photos/500/280" alt="Post image" width={500} height={280} className="object-cover w-full h-full rounded-lg" data-ai-hint="social media post"/>
            </div>
            <div className="flex justify-between items-center mt-3 text-muted-foreground">
                <div className="flex items-center gap-1">
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-xs">1.2k</span>
                </div>
                <div className="flex items-center gap-1">
                    <Repeat className="h-5 w-5" />
                    <span className="text-xs">800</span>
                </div>
                <div className="flex items-center gap-1">
                    <Heart className="h-5 w-5" />
                    <span className="text-xs">5.5k</span>
                </div>
                 <div className="flex items-center gap-1">
                    <BarChart2 className="h-5 w-5" />
                    <span className="text-xs">99k</span>
                </div>
                <Send className="h-5 w-5" />
            </div>
        </div>
    </div>
  </Card>
);

const LinkedInPreview = ({ content, author, avatarSrc }: Omit<PlatformPreviewProps, 'platform'>) => (
    <Card className="w-full max-w-lg mx-auto">
        <CardContent className="p-4">
            <div className="flex items-start gap-3">
                 <Avatar className="h-12 w-12">
                    <AvatarImage src={avatarSrc} alt={author} />
                    <AvatarFallback>{author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-bold">{author}</p>
                    <p className="text-xs text-muted-foreground">Social Media Manager</p>
                </div>
            </div>
            <p className="my-4">{content}</p>
            <div className="bg-muted aspect-video w-full flex items-center justify-center rounded-md">
                 <Image src="https://picsum.photos/500/281" alt="Post image" width={500} height={281} className="object-cover w-full h-full rounded-md" data-ai-hint="professional social media"/>
            </div>
        </CardContent>
        <CardFooter className="px-4 py-2 border-t flex justify-around">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground"><ThumbsUp className="h-5 w-5" /> Like</Button>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground"><MessageCircle className="h-5 w-5" /> Comment</Button>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground"><Repeat className="h-5 w-5" /> Repost</Button>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground"><Send className="h-5 w-5" /> Send</Button>
        </CardFooter>
    </Card>
);

const FacebookPreview = ({ content, author, avatarSrc }: Omit<PlatformPreviewProps, 'platform'>) => (
  <Card className="w-full max-w-md mx-auto">
    <CardHeader className="p-3 flex flex-row items-center gap-3">
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatarSrc} alt={author} />
        <AvatarFallback>{author.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-xs text-muted-foreground">Just now</p>
      </div>
    </CardHeader>
    <CardContent className="px-3 pb-1">
      <p>{content}</p>
    </CardContent>
    <div className="bg-muted aspect-video w-full flex items-center justify-center">
        <Image src="https://picsum.photos/500/282" alt="Post image" width={500} height={282} className="object-cover w-full h-full" data-ai-hint="social media post"/>
    </div>
    <div className="p-2 flex justify-between items-center text-muted-foreground text-sm">
        <span>1.2k Likes</span>
        <span>34 Comments</span>
    </div>
    <CardFooter className="border-t p-2 flex justify-around">
        <Button variant="ghost" className="gap-2 text-muted-foreground"><ThumbsUp className="h-5 w-5"/>Like</Button>
        <Button variant="ghost" className="gap-2 text-muted-foreground"><MessageCircle className="h-5 w-5"/>Comment</Button>
        <Button variant="ghost" className="gap-2 text-muted-foreground"><Share2 className="h-5 w-5"/>Share</Button>
    </CardFooter>
  </Card>
);

const PinterestPreview = ({ content, author, avatarSrc }: Omit<PlatformPreviewProps, 'platform'>) => (
    <div className="w-full max-w-[236px] mx-auto group">
        <div className="relative">
            <Image src="https://picsum.photos/236/354" alt="Pin image" width={236} height={354} className="rounded-lg object-cover" data-ai-hint="crafts diy" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col justify-between p-2">
                <div className="flex justify-end">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white font-bold">Save</Button>
                </div>
                <div className="flex gap-2 justify-end">
                    <Button size="icon" variant="secondary" className="rounded-full h-8 w-8"><Share2 className="h-4 w-4" /></Button>
                    <Button size="icon" variant="secondary" className="rounded-full h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                </div>
            </div>
        </div>
        <h3 className="font-bold mt-2 text-sm">{content}</h3>
        <div className="flex items-center gap-2 mt-1">
            <Avatar className="h-6 w-6">
                <AvatarImage src={avatarSrc} alt={author} />
                <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">{author}</p>
        </div>
    </div>
);


const TikTokPreview = ({ content, author, avatarSrc }: Omit<PlatformPreviewProps, 'platform'>) => (
  <div className="w-full max-w-[280px] h-[500px] bg-black rounded-xl mx-auto relative overflow-hidden flex items-end">
     <Image src="https://picsum.photos/280/500" alt="TikTok video" layout="fill" className="object-cover" data-ai-hint="dance video"/>
     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
     <div className="relative z-10 p-3 text-white flex justify-between w-full">
         <div className="flex-1">
            <p className="font-bold mb-1">@{author}</p>
            <p className="text-sm">{content}</p>
         </div>
         <div className="flex flex-col items-center justify-end gap-3">
             <Avatar className="h-12 w-12 border-2 border-white">
                <AvatarImage src={avatarSrc} alt={author} />
                <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
             <div className="flex flex-col items-center gap-1">
                <Button size="icon" variant="ghost" className="rounded-full h-12 w-12 text-white hover:text-white"><Heart className="h-8 w-8" fill="white"/></Button>
                <span className="text-xs font-semibold">1.2M</span>
            </div>
             <div className="flex flex-col items-center gap-1">
                <Button size="icon" variant="ghost" className="rounded-full h-12 w-12 text-white hover:text-white"><MessageCircle className="h-8 w-8" fill="white"/></Button>
                <span className="text-xs font-semibold">45.3K</span>
            </div>
             <div className="flex flex-col items-center gap-1">
                <Button size="icon" variant="ghost" className="rounded-full h-12 w-12 text-white hover:text-white"><Share2 className="h-8 w-8" fill="white"/></Button>
                <span className="text-xs font-semibold">12.1K</span>
            </div>
         </div>
     </div>
  </div>
);


export default PlatformPreview;

    