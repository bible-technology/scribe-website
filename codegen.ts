import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GRAPHQL_URL = process.env.GRAPHQL_URL || "https://api.github.com/graphql";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [GRAPHQL_URL]: {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}` ?? '',
          'User-Agent': 'CodeGen'
        },
      },
    },
  ],
  documents: "./src/graphql/**.graphql",
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
