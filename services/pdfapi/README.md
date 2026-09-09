# Nuxt 4 - Ecommerce  Frontend Service

[![Nuxt UI](<https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420>)](https://ui.nuxt.com)
![GitHub commits since latest release (branch)](https://img.shields.io/github/commits-since/Zadigo/myyoga/latest/main)
![GitHub License](https://img.shields.io/github/license/Zadigo/myyoga)
![GitHub Release](https://img.shields.io/github/v/release/Zadigo/myyoga)

## Configuring the service

1. Enter the [frontends/mainsite](./frontends/mainsite/nuxt.config.ts) directory and run `pnpm run dev`or you can also run `pnpm run dev:mainsite` at the root the folder (with pnpm workspace)
2. Ensure you have a Stripe account for working/testing the cart payment process in development mode
3. You also need an active Google Account in order to create the relevant keys for Google Authentication
4. Create a `.env` file in the `frontend` folder with all the relevant keys provided in the respective `.env.example` file present in each project
5. You also need to create a Google Analytics, Facebook Pixels and Microsoft Clarity account in order to use all the tracking possibilities offered within the template
6. You might also want to create a Firebase account in order to use the Firebase features such as authentication, storage, and real-time database
7. Finally, you can use the `nuxt.config.js` file to configure the template to your needs

The Nuxt application also comes with basic fixtures that can be used to test the application out of the box. They are located in [server/utils/testing](./frontends/mainsite/server/utils/testing/index.ts)  and can be used to simulate server API calls.

> [!NOTE]
> The Nuxt application is designed using the BFF (Backend for Frontend) pattern, which means that the frontend communicates with the backend through a dedicated API layer. This allows for better separation of concerns and easier maintenance of the codebase.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](<https://vercel.com/new/clone?repository-name=starter&repository-url=https%3A%2F%2Fgithub.com%2Fnuxt-ui-templates%2Fstarter&demo-image=https%3A%2F%2Fui.nuxt.com%2Fassets%2Ftemplates%2Fnuxt%2Fstarter-dark.png&demo-url=https%3A%2F%2Fstarter-template.nuxt.dev%2F&demo-title=Nuxt%20Starter%20Template&demo-description=A%20minimal%20template%20to%20get%20started%20with%20Nuxt%20UI.>)

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Generate MCP server JSON file

```bash
fastmcp install mcp-json app.py --project .
```

Inspect MCP server:

```bash
fastmcp inspect --format mcp -o manifest.json
```

Call tool using:

```bash
fastmcp call server.py greet name=World
```

List resources and prompts using:

```bash
fastmcp list app.py --resources --prompts
```
Inspector using:

```bash
npx @modelcontextprotocol/inspector uv --directory /path/to/pdfapi/ run fastmcp run app.py
```



## Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.
