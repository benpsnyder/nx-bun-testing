# 🔥🔥🔥 Nx + Bun - Testing 🏎️🏎️🏎️
- This repo is a clone of https://github.com/nrwl/large-ts-monorepo
- And also includes a copy of code from https://github.com/goetzrobin/spartan

Our goal debug compatability issues with [Bun](https://bun.sh/) and [Nx](https://nx.dev/)

## Building on Docker
- ✅ `bun build:docker:bun-on-node`
- ❌ `bun build:docker:buntime`
	- Use `bun build:docker:buntime-debug` to see the error

## Building On Host OS

### build [large-ts-monorepo](https://github.com/nrwl/large-ts-monorepo) <br>
✅: `bunx nx run-many --target=build --projects=tag:stack:large-ts-monorepo --configuration=production --parallel=12` -- with cache <br>
✅: `bunx nx run-many --target=build --projects=tag:stack:large-ts-monorepo --configuration=production --parallel=12 --skip-nx-cache` -- without cache <br>
✅: `bunx --bun nx run-many --target=build --projects=tag:stack:large-ts-monorepo --configuration=production --parallel=12` -- with cache, buntime <br>
✅: `bunx --bun nx run-many --target=build --projects=tag:stack:large-ts-monorepo --configuration=production --parallel=12 --skip-nx-cache` -- without cache, buntime

### build [spartan](https://github.com/goetzrobin/spartan), with [analogjs](https://github.com/analogjs/analog) <br>
✅: `bunx nx run-many --target=build --projects=tag:stack:spartan --configuration=production --parallel=12` -- with cache <br>
✅: `bunx nx run-many --target=build --projects=tag:stack:spartan --configuration=production --parallel=12 --skip-nx-cache` -- without cache <br>
✅: `bunx --bun nx run-many --target=build --projects=tag:stack:spartan --configuration=production --parallel=12` -- with cache, buntime <br>
✅: `bunx --bun nx run-many --target=build --projects=tag:stack:spartan --configuration=production --parallel=12 --skip-nx-cache` -- without cache, buntime


## References

### In-Progress 🚨
- **[nrwl/nx] :: Issue #25965** | [When using Bun and building within Dockerfile - 'Failed to process project graph. Run "nx reset" to fix this.' re: 'nx/js/dependencies-and-lockfile' #25965](https://github.com/nrwl/nx/issues/25965)
  - (not implemented yet)
- **[nrwl/nx] :: Issue #25978** | [When using Bun and building in containers, respect the yarn.lock file #25978](https://github.com/nrwl/nx/issues/25978)
  - (not implemented yet)


### Resolved ✅
- **[nrwl/nx] :: Issue #25987** | [When using Bun, 'nx migrate --run-migrations' adds a package-lock.json and does not respect bun.lockb](https://github.com/nrwl/nx/issues/25987) ✅
