import { defineAction } from 'astro:actions';
import { z } from 'zod';
import { getAllSettings } from '../db/queries/settings';
import { postsActions } from './posts';

export const server = {
  healthCheck: defineAction({
    input: z.object({
      ping: z.string().optional(),
    }),
    handler: async (input, context) => {
      const runtime = context.locals.runtime;
      let d1Connected = false;
      let settingsCount = 0;

      if (runtime?.env?.DB) {
        try {
          const settings = await getAllSettings(runtime.env.DB);
          d1Connected = true;
          settingsCount = Object.keys(settings).length;
        } catch {
          d1Connected = false;
        }
      }

      return {
        status: 'ok',
        ping: input.ping ?? 'pong',
        environment: runtime?.env?.ENVIRONMENT ?? 'local',
        d1Connected,
        settingsCount,
        timestamp: new Date().toISOString(),
      };
    },
  }),
  ...postsActions,
};
