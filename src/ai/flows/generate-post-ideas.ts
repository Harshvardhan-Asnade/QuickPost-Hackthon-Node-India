'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating post ideas based on user-provided keywords.
 *
 * It includes:
 * - generatePostIdeas - A function that generates post ideas.
 * - GeneratePostIdeasInput - The input type for the generatePostIdeas function.
 * - GeneratePostIdeasOutput - The output type for the generatePostIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePostIdeasInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords to generate post ideas. Comma separated for multiple keywords.'),
});
export type GeneratePostIdeasInput = z.infer<typeof GeneratePostIdeasInputSchema>;

const GeneratePostIdeasOutputSchema = z.object({
  ideas: z
    .string()
    .describe('Generated post ideas based on the provided keywords.'),
});
export type GeneratePostIdeasOutput = z.infer<typeof GeneratePostIdeasOutputSchema>;

export async function generatePostIdeas(input: GeneratePostIdeasInput): Promise<GeneratePostIdeasOutput> {
  return generatePostIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePostIdeasPrompt',
  input: {schema: GeneratePostIdeasInputSchema},
  output: {schema: GeneratePostIdeasOutputSchema},
  prompt: `You are a social media expert. Generate engaging post ideas based on the following keywords: {{{keywords}}}. Give a list of five ideas.`,
});

const generatePostIdeasFlow = ai.defineFlow(
  {
    name: 'generatePostIdeasFlow',
    inputSchema: GeneratePostIdeasInputSchema,
    outputSchema: GeneratePostIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
