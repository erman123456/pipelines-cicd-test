# FastifyNxTechnicalTest

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

Run `nx serve nestjs` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



# Build a REST API with Fastify & NX monorepo

## What are we using?
* Fastify - Web server
* NX - Monorepo
* Postgres - Database
* Swagger - API docs
* TypeScript - Types & other cool stuff

## What will I need?
* [Postman](https://www.postman.com/) - Make API requests
* [PostreSQL or MySQL](https://github.com/tomanagle/awesome-docker-compose) - Database
* [Code editor](https://jetbrains.com/idea/) - Editor my code

## Features
* News CRUD
* Topic CRUD
* Authentication
* Request & response validation
* Swagger docs

# Testing
## What are we testing with?
* [Node Tap](https://node-tap.org/) - Test framework
* [fastify.inject](https://www.fastify.io/docs/latest/Guides/Testing/#benefits-of-using-fastifyinject) - Inject HTTP requests
* [faker-js](@faker-js/faker) - Generate test data
* [ts-mock-imports](https://www.npmjs.com/package/ts-mock-imports) - Mock imports


## Where can I learn more about testing Fastify?
* [Unit Test Patterns And Strategies](https://github.com/knockaway/unit-test-patterns-and-strategies)
* [Node Tap documentation](https://node-tap.org/docs/getting-started/)
* [Fastify documentation](https://www.fastify.io/docs/latest/Guides/Testing/)
* [Nx Documentation](https://nx.dev/getting-started/package-based-repo-tutorial)

## step building
# fastify create
* Run `npm i fastify-cli` to install fastify cli
* Run `fastify generate project_name --lang=ts` to create project with typescript language
* Run `npm i` to install all package
* Run `npm run dev` to run project

# fastify create with nx monorepo
* Run `npx create-nx-workspace workspace_name` to create project with NX monorepo
* install extension nx-plugin
* Run `mkdir modules` as feature dir
* Run `npx nx g @nrwl/node:library library_name --director=modules` or generate library with NX plugin
* Run `nx serve workspace_name` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

