'use server';

/**
 * @fileOverview A flow for drafting post copy based on generated ideas, refined by generative AI, with content rephrasing options available.
 *
 * - draftPostCopy - A function that handles the post copy drafting process.
 * - DraftPostCopyInput - The input type for the draftPostCopy function.
 * - DraftPostCopyOutput - The return type for the draftPostCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DraftPostCopyInputSchema = z.object({
  postIdea: z.string().describe('The generated idea for the post.'),
});
export type DraftPostCopyInput = z.infer<typeof DraftPostCopyInputSchema>;

const DraftPostCopyOutputSchema = z.object({
  draftCopy: z.string().describe('The drafted copy for the post.'),
});
export type DraftPostCopyOutput = z.infer<typeof DraftPostCopyOutputSchema>;

export async function draftPostCopy(input: DraftPostCopyInput): Promise<DraftPostCopyOutput> {
  return draftPostCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'draftPostCopyPrompt',
  input: {schema: DraftPostCopyInputSchema},
  output: {schema: DraftPostCopyOutputSchema},
  prompt: `You are an expert social media content creator. Based on the following idea, draft compelling post copy. Refine the content to be engaging and relevant.

Post Idea: {{{postIdea}}}`,
});

const draftPostCopyFlow = ai.defineFlow(
  {
    name: 'draftPostCopyFlow',
    inputSchema: DraftPostCopyInputSchema,
    outputSchema: DraftPostCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
