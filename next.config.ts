import type { NextConfig } from "next"
import fs from "node:fs"
import path from "node:path"

class FunctionSpaceSourceResolverPlugin {
  apply(resolver: {
    getHook: (name: string) => {
      tapAsync: (
        pluginName: string,
        callback: (
          request: { request?: string; path?: string },
          resolveContext: unknown,
          callback: (error?: Error | null, result?: unknown) => void,
        ) => void,
      ) => void
    }
    doResolve: (
      hook: unknown,
      request: { request?: string; path?: string },
      message: string,
      resolveContext: unknown,
      callback: (error?: Error | null, result?: unknown) => void,
    ) => void
  }) {
    const target = resolver.getHook("resolve")

    resolver
      .getHook("beforeResolve")
      .tapAsync(
        "FunctionSpaceSourceResolverPlugin",
        (request, resolveContext, callback) => {
          if (
            !request.request?.endsWith(".js") ||
            !request.path?.includes("vendor/fs_trading_sdk/packages")
          ) {
            callback()
            return
          }

          const requestedPath = path.resolve(request.path, request.request)
          const candidates = [
            requestedPath.replace(/\.js$/, ".ts"),
            requestedPath.replace(/\.js$/, ".tsx"),
            path.join(requestedPath.replace(/\.js$/, ""), "index.ts"),
            path.join(requestedPath.replace(/\.js$/, ""), "index.tsx"),
          ]
          const match = candidates.find((candidate) => fs.existsSync(candidate))

          if (!match) {
            callback()
            return
          }

          resolver.doResolve(
            target,
            {
              ...request,
              request: match,
            },
            "Resolve functionSPACE TypeScript source import",
            resolveContext,
            callback,
          )
        },
      )
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@functionspace/core",
    "@functionspace/react",
    "@functionspace/ui",
  ],
  webpack(config) {
    config.resolve.plugins = [
      ...(config.resolve.plugins ?? []),
      new FunctionSpaceSourceResolverPlugin(),
    ]

    return config
  },
}

export default nextConfig
