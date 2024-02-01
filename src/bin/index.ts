import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// COMMANDS:
// dria create
// dria insert
// dria search
// dria fetch
// dria config

yargs(hideBin(process.argv))
  .scriptName("dria")

  .command(
    "create",
    "Create a knowledge on Dria.",
    (yargs) =>
      yargs
        .option("name", { string: true, demandOption: true, desc: "Knowledge name." })
        .option("embedding", { string: true, demandOption: true, desc: "Embedding model name." })
        .option("category", { string: true, demandOption: true, desc: "Knowledge category." })
        .option("description", { string: true, desc: "Optional description." }),
    (argv) => {
      console.info(argv);
    },
  )

  .demandCommand(1)
  .parse();
