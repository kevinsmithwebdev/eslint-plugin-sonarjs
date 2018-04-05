import { Linter } from "eslint";

const config: Linter.Config = {
  rules: {
    "sonarjs/no-identical-expressions": "error",
    "sonarjs/no-small-switch": "error",
  },
};

export = config;