"use client"

import type { Post } from "@/app/page";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { useState, useEffect } from "react";

interface InstagramPreviewProps {
    post: Post;
}

export default function InstagramPreview({ post }: InstagramPreviewProps) {
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        // Generate a random number of likes for visual effect
        setLikes(Math.floor(Math.random() * (2500 - 300 + 1)) + 300);
    }, [post.id]);

    const formattedHashtags = post.hashtags.map(tag => `#${tag}`).join(' ');

    return (
        <div className="w-[320px] rounded-xl bg-white dark:bg-black shadow-lg border overflow-hidden">
            <div className="p-3 flex items-center justify-between border-b">
                <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://picsum.photos/id/237/32/32" alt="User avatar" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">your_username</p>
                </div>
            </div>
            {post.image && (
                <div className="relative w-full aspect-[4/5]">
                    <Image 
                        src={post.image} 
                        alt="Post image"
                        fill
                        data-ai-hint="social media lifestyle"
                        className="object-cover" 
                    />
                </div>
            )}
            <div className="p-3">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <Heart className="w-6 h-6 cursor-pointer text-zinc-800 dark:text-zinc-200" />
                        <MessageCircle className="w-6 h-6 cursor-pointer text-zinc-800 dark:text-zinc-200" />
                        <Send className="w-6 h-6 cursor-pointer text-zinc-800 dark:text-zinc-200" />
                    </div>
                    <Bookmark className="w-6 h-6 cursor-pointer text-zinc-800 dark:text-zinc-200" />
                </div>
                <p className="text-sm font-bold mt-2 text-zinc-800 dark:text-zinc-200">{likes.toLocaleString()} likes</p>
                <div className="mt-1 text-sm text-zinc-800 dark:text-zinc-200">
                    <p className="whitespace-pre-wrap break-words">
                        <span className="font-bold">your_username</span> {post.copy}
                    </p>
                    <p className="text-sky-600 dark:text-sky-400 mt-1 break-words">{formattedHashtags}</p>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">View all {Math.floor(likes / 20)} comments</p>
            </div>
        </div>
    )
}
