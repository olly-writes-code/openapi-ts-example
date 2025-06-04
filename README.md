A minimal example to explain an issue with OpenAPI TS.

Make sure to have [uv installed](https://docs.astral.sh/uv/getting-started/installation/#__tabbed_1_1)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Make sure to have [bun installed](https://bun.sh/docs/installation)

```bash
curl -fsSL https://bun.sh/install | bash
```

To reproduce:

1. Spin up the backend

```bash
cd backend
uv run python main.py
```

2. Generate the OpenAPI TS SDK

```bash
cd frontend/vite-project
bun run openapi-ts
```

3. If you want to run the frontend

```bash
cd frontend/vite-project
bun run dev
```
