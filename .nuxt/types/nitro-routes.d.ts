// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/gallery': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/gallery').default>>>>
    }
    '/api/seder': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/seder').default>>>>
    }
    '/api/soa': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/soa').default>>>>
    }
    '/api/szja': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/szja').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/__site-config__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-site-config/dist/runtime/nitro/routes/__site-config__/debug').default>>>>
    }
    '/__sitemap__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/__sitemap__/debug').default>>>>
    }
    '/__sitemap__/style.xsl': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/sitemap.xsl').default>>>>
    }
    '/sitemap.xml': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/sitemap.xml').default>>>>
    }
    '/mail/send': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-mail/dist/server-handler.post').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}