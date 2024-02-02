<p align="center">
  <!-- <img src="https://raw.githubusercontent.com/firstbatchxyz/dria-js-client/master/logo.svg" alt="logo" width="142"> -->
  <img src="./logo.svg" alt="logo" width="142">
</p>

<p align="center">
  <h1 align="center">
    DriaJS
  </h1>
  <p align="center">
    <i>Dria JS client.</i>
  </p>
</p>

<p align="center">
    <a href="https://opensource.org/licenses/MIT" target="_blank">
        <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-7CB9E8.svg">
    </a>
    <a href="https://www.npmjs.com/package/dria" target="_blank">
        <img alt="NPM" src="https://img.shields.io/npm/v/dria?logo=npm&color=CB3837">
    </a>
</p>

DriaJS client is a library & CLI that integrates [Dria](https://dria.co/) to your application, providing a convenient interface to harness the capabilities of Dria's vector search and retrieval services.

- [x] Create & manage your knowledge bases on Dria.
- [x] Make vector based queries, text based searches or fetch vectors by their IDs.
- [x] Insert vectors & texts to your existing knowledge.

## Installation

Install Dria from NPM:

```sh
npm  install dria
yarn add dria
pnpm add dria
bun  add dria
```

## Usage

To begin, import Dria to your code:

```ts
import Dria from "dria";
```

### Queries

With Dria, you can connect to an existing knowledge uploaded to Dria by providing its contract ID. You can then ask questions to this knowledge, make vector based queries, or directly fetch embeddings with their IDs.

```ts
const dria = new Dria({ apiKey, contractId });

// a text-based search
const searchRes = await dria.search("What is the capital of France?");

// a vector-based query
const queryRes = await dria.query([0.1, 0.2, 0.3]);

// fetch data for specific ids
const queryRes = await dria.fetch([0, 1, 2]);
```

> [!TIP]
>
> You can omit the `apiKey`, in which case Dria will look for it at `DRIA_API_KEY` environment variable.

### Inserting Data

You can insert new data to your existing knowledge, either as batch of texts with metadata or vectors with metadata.

```ts
const dria = new Dria({ apiKey, contractId });

// insert raw text, which will be converted to vector embeddings
// with respect to the model used by this contract
const insertTextRes = await dria.insertTexts([
  { text: "I am a text.", metadata: { fromReadme: true } },
  { text: "I am another text.", metadata: { fromReadme: true } },
]);

// or, compute embeddings on your own and insert the vectors
const insertTextRes = await dria.insertTexts([
  { vector: [0.1, 0.2, 0.3], metadata: { fromReadme: true } },
  { vector: [0.3, 0.2, 0.1], metadata: { fromReadme: true } },
]);
```

### Creating a Knowledge

A new knowledge can be created with Dria client as well. In this example, we omit the `contractId` that was provided to the constructor, since we don't have a contract yet. After deploying a contract, we will set that field manually and we will then be able to call all functions described above so far!

```ts
const dria = new Dria({ apiKey });

contractId = await dria.create(
  "My New Contract,
  "jinaai/jina-embeddings-v2-base-en",
  "Science",
);
dria.contractId = contractId;
```

Our client supports a variety of text embedding models by default:

- OpenAI's Text Embeddings-2 Ada (text-embedding-ada-002)
- OpenAI's Text Embeddings-3 Small (text-embedding-3-large)
- OpenAI's Text Embeddings-3 Large (text-embedding-ada-002)
- Jina's Embeddings V2 Base EN (jina-embeddings-v2-base-en)
- Jina's Embeddings V2 Small EN (jina-embeddings-v2-small-en)

> [!WARNING]
>
> If you provide a different embedding model when creating a contract, you are expected to use those same embeddings models to create vectors from text queries, and call the `query` method.

### Metadata Types

Each knowledge may have a different metadata type, based on the content they were created from. For example, a CSV knowledge will have each column as a separate field in the metadata. You can provide the metadata type as a template parameter so that all methods are type-safe:

```ts
type MetadataType = { id: number; foo: string; bar: boolean };
const dria = new Dria<MetadataType>();

// metadata is typed as given above
const res = dria.fetch([0]);
```

Metadata type can be overridden for each method as well, if the need may be:

```ts
const res = dria.fetch<{ page: number; source: string }>([0]);
```

## Building

You can build the library for NPM via:

```sh
bun run build
bun b # alias
```

We are using Bun's own [bundler](https://bun.sh/docs/bundler).

> [!NOTE]
>
> The protobuf files are included in the repo, but they can be generated again via:
>
> ```sh
> bun proto
> ```

## Testing

For the tests, you will need an API key at `DRIA_API_KEY` environment variable, which you can provide in an `.env.test` file. You can run tests via:

```sh
bun run test
bun t # alias
```

You can also specify the test titles (as they appear in `describe`, `it` or `test`).

```sh
bun t -t "test-name"
```
