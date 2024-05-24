# 🔥🔥🔥 Nx + Bun - Testing 🏎️🏎️🏎️
- This repo is a clone of https://github.com/nrwl/large-ts-monorepo
- And also includes a copy of code from https://github.com/goetzrobin/spartan

Our goal debug compatability issues with [Bun](https://bun.sh/) and [Nx](https://nx.dev/)

## Tests
1. Building basic typescript in many repos - `bun run build:large-ts-repo` or `build:large-ts-repo:no-cache`
2. Building more advances apps/libs with Tailwind and buildable libraries - `bun run build:spartan` or `bun run build:spartan:no-cache`
3. Do #1 and #2 inside of a docker container (no-cache): `bun run test:docker`

## Tests against open Issues
- [When using Bun and building within Dockerfile - 'Failed to process project graph. Run "nx reset" to fix this.' re: 'nx/js/dependencies-and-lockfile' #25965](https://github.com/nrwl/nx/issues/25965)
  - (not implemented yet)
- [When using Bun and building in containers, respect the yarn.lock file #25978](https://github.com/nrwl/nx/issues/25978)
  - (not implemented yet)
- [When using Bun, 'nx migrate --run-migrations' adds a package-lock.json and does not respect bun.lockb](https://github.com/nrwl/nx/issues/25987)
  - just run `nx migrate --run-migrations` and see the package-lock.json file appear
