import { config } from 'dotenv';
config();

import '@/ai/flows/draft-post-copy.ts';
import '@/ai/flows/suggest-relevant-hashtags.ts';
import '@/ai/flows/generate-post-ideas.ts';