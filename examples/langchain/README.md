# Langchain & Dria Retriever

This is a simple demonstration of using Dria retriever in [LangChain](https://js.langchain.com/docs/get_started/introduction). Install dependencies with:

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
bun ask # asks a default query
bun ask "You can write a query here!"
```

In the console output, you will see the query along with the answers on various knowledge.

## Examples

Below are some example queries directed towards knowledge on Dria.

**What does it mean to 'call'?**

- [TypeScript Handbook v4.9](https://dria.co/knowledge/-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0): To 'call' typically refers to invoking a function or method in programming by using parentheses followed by any necessary arguments. It involves executing the code within the function or method and returning a result or performing a specific action.
- [Rust Programming Language](https://dria.co/knowledge/7EZMw0vAAFaKVMNOmu2rFgFCFjRD2C2F0kI_N5Cv6QQ): To 'call' means to execute a function or method in programming by using its name followed by a set of parentheses.
- [Ethereum Whitepaper](https://dria.co/knowledge/WeSeU5t5WTshAtaInt6P-GKxmO0Pvre3Us6ptO84wvg): In the context provided, "call" refers to running one step of a program and recording the change in storage.

**What is this knowledge about?**

- [TypeScript Handbook v4.9](https://dria.co/knowledge/-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0): This knowledge is about TypeScript, including conditional types, tuple types, object types, generic constraints, distributive conditional types, template literal types, and generic classes.
- [Rust Programming Language](https://dria.co/knowledge/7EZMw0vAAFaKVMNOmu2rFgFCFjRD2C2F0kI_N5Cv6QQ): Ownership rules and memory management in Rust programming.
- [Ethereum Whitepaper](https://dria.co/knowledge/WeSeU5t5WTshAtaInt6P-GKxmO0Pvre3Us6ptO84wvg): Smart contracts and Ethereum network.

**What does the `infer` keyword do?**

- [TypeScript Handbook v4.9](https://dria.co/knowledge/-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0): The `infer` keyword is used to declaratively introduce a new generic type variable in conditional types, allowing us to infer types from types we compare against in the true branch of conditional types.
- [Rust Programming Language](https://dria.co/knowledge/7EZMw0vAAFaKVMNOmu2rFgFCFjRD2C2F0kI_N5Cv6QQ): I don't know.
- [Ethereum Whitepaper](https://dria.co/knowledge/WeSeU5t5WTshAtaInt6P-GKxmO0Pvre3Us6ptO84wvg): I don't know.

**Where is Merkle Tree used?**

- [TypeScript Handbook v4.9](https://dria.co/knowledge/-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0): I don't know.
- [Rust Programming Language](https://dria.co/knowledge/7EZMw0vAAFaKVMNOmu2rFgFCFjRD2C2F0kI_N5Cv6QQ): I don't know.
- [Ethereum Whitepaper](https://dria.co/knowledge/WeSeU5t5WTshAtaInt6P-GKxmO0Pvre3Us6ptO84wvg): Merkle Trees are used in various applications including blockchain technology, data storage, decentralized file storage, financial derivatives contracts, and decentralized data feeds.
