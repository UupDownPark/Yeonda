import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const getEmbedding = async (input: string) => {
  try {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-large',
      input: input,
      encoding_format: 'float',
    });
    return response.data[0].embedding;
  } catch (error) {
    throw error;
  }
};
