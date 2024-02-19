# Langchain with Dria Retriever

This is a simple demonstration of using Dria retriever in LangChain. Install dependencies with:

```bash
bun install
```

Get your OpenAI API key and Dria API key, and store them in an `.env` as:

```sh
OPENAI_API_KEY=<your-api-key>
DRIA_API_KEY=<your-api-key>
```

Run the example code:

```bash
bun start
```

In this example, we ask "What is a union type?" to a Dria knowledge using TypeScript Handbook v4.9. It gives the answer:

> A union type is a type formed by combining two or more other types, representing values that may be any one of those types.
