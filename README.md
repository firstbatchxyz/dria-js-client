<p align="center">
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

DriaJS client is a library & CLI that integrates Dria to your application, providing a convenient interface to harness the capabilities of Dria's vector search and retrieval services.

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

With Dria, you can connect to an existing knowledge uploaded to Dria by providing its contract txID.

TODO: add readme

## Testing

Clone the repo, and then install packages:

```sh
bun install
```

You can run tests via:

```sh
bun test
```

> [!NOTE]
>
> The protobuf files are included in the repo, but they can be generated again via:
>
> ```sh
> bun proto:code:insert
> bun proto:type:insert
> ```
