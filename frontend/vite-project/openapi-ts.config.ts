import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  // we will generate new api files from the local backend
  input: "http://localhost:9000/openapi.json",
  output: "src/services/api",
  plugins: ["@hey-api/client-fetch"],
});
