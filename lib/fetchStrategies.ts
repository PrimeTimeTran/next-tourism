import type { RequestInit } from 'next/dist/compiled/@edge-runtime/primitives/fetch'

/**
 * -------------------------------------------------------------------------
 * Next.js Fetch / Rendering Strategies Cheat Sheet
 * -------------------------------------------------------------------------
 *
 * This file defines different fetch strategies for server-side rendering
 * (SSR), incremental static regeneration (ISR), and fully static builds
 * in Next.js App Router.
 *
 * Each strategy can be spread into a fetch call:
 *
 *   const res = await fetch(`${process.env.STRAPI_API_URL}/api/tours`, {
 *     ...strategy,
 *     headers: {
 *       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
 *     },
 *   })
 *
 * -------------------------------------------------------------------------
 * STRATEGY BREAKDOWN
 * -------------------------------------------------------------------------
 *
 * 1️⃣ Legacy (SSR always, no cache)
 *    - cache: 'no-store'
 *    - next: undefined
 *    - Behavior: fetches data **on every request**
 *    - Backend must be online every time
 *    - Use case: when you need **always fresh data**, e.g., dashboards
 *
 * 2️⃣ Development-friendly (ISR)
 *    - cache: default (can be commented out)
 *    - next: { revalidate: 10 }
 *    - Behavior: fetches once, caches for 10 seconds, then refreshes
 *    - Useful during **local development**:
 *        • See updates in Strapi without restarting server
 *        • Avoids fetch crashes if backend temporarily offline
 *
 * 3️⃣ Production build (fully static)
 *    - cache: default
 *    - next: { revalidate: false }
 *    - Behavior: fetches **only at build time**
 *    - Backend **not required at runtime**
 *    - Ideal for fast CDN/static deployment
 *    - Use case: marketing pages, landing pages, blog content
 *
 * -------------------------------------------------------------------------
 * TYPICAL NEXT.JS COMMANDS
 * -------------------------------------------------------------------------
 *
 * 1. npm run dev
 *    - Starts Next.js in **development mode**
 *    - Pages are rendered on-demand (SSR)
 *    - Hot reload enabled
 *    - Fetch strategies behave dynamically; production static may still attempt fetch
 *
 * 2. npm run build
 *    - Builds the project for production
 *    - Pre-renders pages based on strategy (SSG/ISR/production static)
 *    - Necessary before npm run start for static behavior
 *
 * 3. npm run start
 *    - Runs the production build
 *    - Fully static pages are served offline-safe
 *    - ISR pages revalidate according to `next.revalidate`
 *
 * 4. Optional: npm run export
 *    - Exports the site as **fully static HTML/CSS/JS**
 *    - Only works with pages that do not require SSR
 *    - Useful for fully static hosting (Netlify, GitHub Pages)
 *
 * -------------------------------------------------------------------------
 * NOTES / TIPS
 * -------------------------------------------------------------------------
 * - In dev mode, “production” strategy may **still attempt live fetch** due
 *   to dynamic rendering behavior of Next.js dev server.
 * - Always check NODE_ENV:
 *      const strategy = process.env.NODE_ENV === 'development'
 *        ? FetchStrategies.dev
 *        : FetchStrategies.production
 * - In dev mode, prebuilt/cached content will still be served without need for server
 *   however you'll see warnings in the console.
 * -------------------------------------------------------------------------
 */

const FetchStrategies: Record<
  string,
  Partial<RequestInit> & { next?: { revalidate: number | false } }
> = {
  /**
   * 1. Legacy implementation
   * Forces fetch on every request (SSR)
   * Backend must be online every time
   */
  legacy: {
    cache: 'no-store', // Always fetch fresh
    next: undefined, // No ISR
  },

  /**
   * 2. Development-friendly
   * Rebuilds every 10 seconds (ISR)
   * Useful for local dev and seeing updates without restarting server
   */
  dev: {
    // cache: 'default', // Default caching
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  },

  /**
   * 3. Production build (fully static)
   * Data fetched at build time only
   * Ideal for fast CDN/static serving
   */
  production: {
    cache: 'default', // Default caching
    next: { revalidate: false }, // No revalidation, fully static
  },
}

// NOTE:
// Instead of asking Google/ChatGPT everytime each of these strategies
// leave the different examples here for reference and change as needed.
export const strategy =
  process.env.NODE_ENV === 'development'
    ? FetchStrategies.dev
    : FetchStrategies.production
