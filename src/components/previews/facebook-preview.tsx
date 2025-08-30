"use client"

import type { Post } from "@/app/page";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";

interface FacebookPreviewProps {
    post: Post;
}

export default function FacebookPreview({ post }: FacebookPreviewProps) {
  const formattedHashtags = post.hashtags.map(tag => `#${tag}`).join(' ');
  const fullCopy = `${post.copy}\n\n${formattedHashtags}`;

  return (
    <div className="w-full max-w-md rounded-lg bg-white dark:bg-zinc-800 shadow-md border overflow-hidden">
        <div className="p-4">
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage src="https://picsum.photos/id/237/40/40" alt="User avatar" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Your Name</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Just now</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap break-words">
                {fullCopy}
            </p>
        </div>
        {post.image && (
            <Image 
                src={post.image} 
                alt="Post image" 
                width={500} 
                height={500}
                data-ai-hint="social media post"
                className="w-full h-auto object-cover" 
            />
        )}
        <div className="px-4 py-2 border-t">
            <div className="flex justify-around text-zinc-600 dark:text-zinc-400">
                <button className="flex items-center gap-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md p-2 flex-1 justify-center transition-colors">
                    <ThumbsUp className="w-5 h-5"/> Like
                </button>
                <button className="flex items-center gap-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md p-2 flex-1 justify-center transition-colors">
                    <MessageCircle className="w-5 h-5"/> Comment
                </button>
                <button className="flex items-center gap-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md p-2 flex-1 justify-center transition-colors">
                    <Share2 className="w-5 h-5"/> Share
                </button>
            </div>
        </div>
    </div>
  )
}
