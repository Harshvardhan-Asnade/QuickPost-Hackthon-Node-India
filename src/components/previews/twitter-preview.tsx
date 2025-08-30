"use client"

import type { Post } from "@/app/page";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Repeat, Heart, BarChart2, Share } from "lucide-react";

interface TwitterPreviewProps {
    post: Post;
}

export default function TwitterPreview({ post }: TwitterPreviewProps) {
  const formattedHashtags = post.hashtags.map(tag => `#${tag}`).join(' ');
  const fullCopy = `${post.copy}\n\n${formattedHashtags}`;

  return (
    <div className="w-full max-w-lg rounded-xl bg-white dark:bg-black border p-4">
        <div className="flex gap-3">
            <Avatar>
                <AvatarImage src="https://picsum.photos/id/237/48/48" alt="User avatar" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="w-full">
                <div className="flex items-center">
                    <p className="font-bold text-zinc-900 dark:text-zinc-100">Your Name</p>
                    <p className="ml-2 text-zinc-500 dark:text-zinc-400">@yourhandle · 1m</p>
                </div>
                <p className="text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap break-words">
                    {fullCopy}
                </p>
                {post.image && (
                    <div className="mt-3 relative w-full aspect-video rounded-2xl overflow-hidden border">
                        <Image 
                            src={post.image} 
                            alt="Post image" 
                            fill
                            data-ai-hint="tech background"
                            className="object-cover"
                        />
                    </div>
                )}
                <div className="mt-4 flex justify-between text-zinc-500 dark:text-zinc-400 max-w-sm">
                    <div className="flex items-center gap-1 group">
                        <button className="p-2 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 rounded-full transition-colors">
                           <MessageCircle className="w-5 h-5 group-hover:text-blue-500" />
                        </button>
                        <span className="text-xs group-hover:text-blue-500">29</span>
                    </div>
                     <div className="flex items-center gap-1 group">
                        <button className="p-2 group-hover:bg-green-100 dark:group-hover:bg-green-900/50 rounded-full transition-colors">
                           <Repeat className="w-5 h-5 group-hover:text-green-500" />
                        </button>
                         <span className="text-xs group-hover:text-green-500">120</span>
                    </div>
                     <div className="flex items-center gap-1 group">
                        <button className="p-2 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/50 rounded-full transition-colors">
                           <Heart className="w-5 h-5 group-hover:text-pink-500" />
                        </button>
                         <span className="text-xs group-hover:text-pink-500">1.2K</span>
                    </div>
                     <div className="flex items-center gap-1 group">
                        <button className="p-2 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 rounded-full transition-colors">
                           <BarChart2 className="w-5 h-5 group-hover:text-blue-500" />
                        </button>
                         <span className="text-xs group-hover:text-blue-500">98K</span>
                    </div>
                     <div className="flex items-center gap-1 group">
                        <button className="p-2 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 rounded-full transition-colors">
                           <Share className="w-5 h-5 group-hover:text-blue-500" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
