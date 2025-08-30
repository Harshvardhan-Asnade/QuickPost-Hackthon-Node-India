"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Wand2, Check, Loader2 as Spinner } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostIdeasCardProps {
  onGenerate: (keywords: string) => void;
  onSelectIdea: (idea: string) => void;
  ideas: string[];
  isLoading: boolean;
  isIdeaSelected: boolean;
}

export default function PostIdeasCard({
  onGenerate,
  onSelectIdea,
  ideas,
  isLoading,
  isIdeaSelected
}: PostIdeasCardProps) {
  const [keywords, setKeywords] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(keywords);
  };
  
  const [selectedIdea, setSelectedIdea] = React.useState<string | null>(null);

  const handleIdeaClick = (idea: string) => {
    setSelectedIdea(idea);
    onSelectIdea(idea);
  }

  React.useEffect(() => {
    if(!isIdeaSelected) {
      setSelectedIdea(null);
    }
  }, [isIdeaSelected]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>1. Generate Post Ideas</CardTitle>
        <CardDescription>
          Enter keywords to brainstorm ideas for your next post.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g., productivity, remote work, AI tools"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generate
          </Button>
        </form>

        {(isLoading || ideas.length > 0) && (
          <div className="mt-4 space-y-2">
            <h4 className="text-sm font-medium">Generated Ideas:</h4>
            {isLoading ? (
              <div className="flex items-center justify-center p-8">
                <Spinner className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <ul className="space-y-2">
                {ideas.map((idea, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleIdeaClick(idea)}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-md border p-3 text-left text-sm transition-all hover:bg-accent/50",
                        selectedIdea === idea && "border-primary bg-accent/80"
                      )}
                    >
                      <div className="mt-1">
                        {selectedIdea === idea ? <Check className="h-4 w-4 text-primary" /> : <div className="h-4 w-4 rounded-full border"></div> }
                      </div>
                      <span>{idea.replace(/^\d+\.\s*/, "")}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
