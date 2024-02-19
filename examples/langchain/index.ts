import chalk from "chalk";
import { ChatOpenAI } from "@langchain/openai";
import { DriaRetriever, type DriaRetrieverArgs } from "@langchain/community/retrievers/dria";
import { formatDocumentsAsString } from "langchain/util/document";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence, RunnablePassthrough } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

// to test out your query on a number of knowledges, you can set them here
const knowledges: { id: string; desc: string }[] = [
  {
    id: "-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0",
    desc: "TypeScript Handbook v4.9",
  },
  {
    id: "7EZMw0vAAFaKVMNOmu2rFgFCFjRD2C2F0kI_N5Cv6QQ",
    desc: "Rust Programming Language",
  },
  {
    id: "WeSeU5t5WTshAtaInt6P-GKxmO0Pvre3Us6ptO84wvg",
    desc: "Ethereum Whitepaper",
  },
];

// our prompt template, telling the agent to only answer from the context
// and say "I dont know" if no confident answer is found
const prompt = PromptTemplate.fromTemplate(`
Answer the question below based only on the following context.
If an answer is not found within the context, say "I don't know.".
Do not mention the context within your answer.
{context}

Question: 
{question}
`);

const query =
  process.argv.length > 2
    ? process.argv
        .slice(2)
        .map((s) => s.trim())
        .join(" ")
    : "What does the `infer` keyword do?";
console.log(chalk.green("Query\n") + query);

for (const { id, desc } of knowledges) {
  // dria arguments, hover over the type to see docs
  const args: DriaRetrieverArgs = { contractId: id, level: 3, topK: 15 };
  const retriever = new DriaRetriever(args);

  const chain = RunnableSequence.from([
    {
      context: retriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(),
    },
    prompt,
    new ChatOpenAI({}),
    new StringOutputParser(),
  ]);

  const answer = await chain.invoke(query);

  const url = chalk.gray(`https://dria.co/knowledge/${id}`);
  const title = chalk.yellow(`${desc}`);
  console.log(`\n${url}\n${title}\n${answer}`);
}
