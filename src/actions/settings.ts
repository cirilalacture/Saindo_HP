import { defineAction, ActionError } from 'astro:actions';
import { z } from 'zod';
import { updateManySettings } from '../db/queries/settings';

export const settingsActions = {
  updateSettings: defineAction({
    input: z.record(z.string()),
    handler: async (input, context) => {
      const user = context.locals.user;
      if (!user) {
        throw new ActionError({
          code: 'UNAUTHORIZED',
          message: 'Anda harus masuk sebagai administrator.',
        });
      }

      const db = context.locals.runtime?.env?.DB;
      if (!db) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Basis data D1 tidak tersedia.',
        });
      }

      await updateManySettings(db, input);
      return { success: true };
    },
  }),
};
