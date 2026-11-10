/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type D1Database = import('@cloudflare/workers-types').D1Database;

type ENV = {
  DB: D1Database;
  SESSION_SECRET?: string;
  IMGBB_API_KEY?: string;
  ENVIRONMENT?: string;
};

type Runtime = import('@astrojs/cloudflare').Runtime<ENV>;

declare namespace App {
  interface Locals extends Runtime {
    user?: {
      id: string;
      name: string;
      email: string;
      role: string;
    } | null;
  }
}
