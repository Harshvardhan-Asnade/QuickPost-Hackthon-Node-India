'use server';

/**
 * @fileOverview A flow that suggests relevant hashtags for a given post, incorporating trending topic analysis.
 *
 * - suggestRelevantHashtags - A function that generates hashtag suggestions for a post.
 * - SuggestRelevantHashtagsInput - The input type for the suggestRelevantHashtags function.
 * - SuggestRelevantHashtagsOutput - The return type for the suggestRelevantHashtags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelevantHashtagsInputSchema = z.object({
  postContent: z
    .string()
    .describe('The content of the post for which to suggest hashtags.'),
  trendingTopics: z
    .string()
    .optional()
    .describe('Optional trending topics to consider for hashtag generation.'),
});
export type SuggestRelevantHashtagsInput = z.infer<
  typeof SuggestRelevantHashtagsInputSchema
>;

const SuggestRelevantHashtagsOutputSchema = z.object({
  hashtags: z
    .array(z.string())
    .describe('An array of relevant hashtags for the post.'),
});
export type SuggestRelevantHashtagsOutput = z.infer<
  typeof SuggestRelevantHashtagsOutputSchema
>;

export async function suggestRelevantHashtags(
  input: SuggestRelevantHashtagsInput
): Promise<SuggestRelevantHashtagsOutput> {
  return suggestRelevantHashtagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelevantHashtagsPrompt',
  input: {schema: SuggestRelevantHashtagsInputSchema},
  output: {schema: SuggestRelevantHashtagsOutputSchema},
  prompt: `You are an expert social media manager. Generate a list of relevant hashtags for the following post content, considering the current trending topics.

Post Content: {{{postContent}}}

{{#if trendingTopics}}
Current Trending Topics: {{{trendingTopics}}}
{{/if}}

Please provide a diverse list of hashtags that will maximize the post's reach and engagement.`,
});

const suggestRelevantHashtagsFlow = ai.defineFlow(
  {
    name: 'suggestRelevantHashtagsFlow',
    inputSchema: SuggestRelevantHashtagsInputSchema,
    outputSchema: SuggestRelevantHashtagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
