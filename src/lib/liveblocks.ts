import { Liveblocks } from '@liveblocks/node';

let client: Liveblocks | undefined;

/**
 * Returns the Liveblocks server client, creating it on first use.
 *
 * It is deliberately not created at import time: `next build` imports every
 * route module while collecting page data, and the Liveblocks constructor
 * throws when the secret is missing, which would fail the whole deployment.
 *
 * Environment variable names are case-sensitive on Linux (Vercel).
 * `Liveblocks_SECRET_KEY` is the legacy spelling and is still accepted so
 * existing deployments keep working.
 */
export function getLiveblocks(): Liveblocks {
  if (!client) {
    const secret = process.env.LIVEBLOCKS_SECRET_KEY ?? process.env.Liveblocks_SECRET_KEY;

    if (!secret) {
      throw new Error('LIVEBLOCKS_SECRET_KEY is not set');
    }

    client = new Liveblocks({ secret });
  }

  return client;
}
