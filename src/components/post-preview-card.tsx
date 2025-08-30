"use client";

import * as React from "react";
import type { Post } from "@/app/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InstagramPreview from "@/components/previews/instagram-preview";
import TwitterPreview from "@/components/previews/twitter-preview";
import FacebookPreview from "@/components/previews/facebook-preview";

interface PostPreviewCardProps {
  post: Post;
}

export default function PostPreviewCard({ post }: PostPreviewCardProps) {
  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle>Live Preview</CardTitle>
        <CardDescription>
          See how your post will look on different platforms.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="instagram" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
            <TabsTrigger value="twitter">X / Twitter</TabsTrigger>
            <TabsTrigger value="facebook">Facebook</TabsTrigger>
          </TabsList>
          <TabsContent value="instagram">
            <div className="mt-4 flex justify-center">
                <InstagramPreview post={post} />
            </div>
          </TabsContent>
          <TabsContent value="twitter">
            <div className="mt-4 flex justify-center">
                <TwitterPreview post={post} />
            </div>
          </TabsContent>
          <TabsContent value="facebook">
            <div className="mt-4 flex justify-center">
                <FacebookPreview post={post} />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
