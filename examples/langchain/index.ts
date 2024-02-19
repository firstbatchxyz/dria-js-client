import { ChatOpenAI } from "@langchain/openai";
import { DriaRetriever } from "@langchain/community/retrievers/dria";
import { formatDocumentsAsString } from "langchain/util/document";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence, RunnablePassthrough } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

// https://dria.co/knowledge/-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0
// TypeScript Handbook v4.9 knowledge for your AI agent!
const retriever = new DriaRetriever({ contractId: "-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0" });

const prompt = PromptTemplate.fromTemplate(`
Answer the question based only on the following context:
{context}

Question: 
{question}
`);

const chain = RunnableSequence.from([
  {
    context: retriever.pipe(formatDocumentsAsString),
    question: new RunnablePassthrough(),
  },
  prompt,
  new ChatOpenAI({}),
  new StringOutputParser(),
]);

const result = await chain.invoke("What is the union type?");
console.log(result);
// answer looks like:
// A union type is a type formed by combining two or more other types, representing values that may be any one of those types.
