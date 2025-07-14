import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/logger';
//
// Define the type for the cache entry
interface CacheEntry {
  stats: string | null;
  topLangs: string | null;
  streakStats: string | null;
  lastFetchTime: number;
}

// Define the cache structure
const cache: Record<'dark' | 'light', CacheEntry> = {
  dark: {
    stats: null,
    topLangs: null,
    streakStats: null,
    lastFetchTime: 0,
  },
  light: {
    stats: null,
    topLangs: null,
    streakStats: null,
    lastFetchTime: 0,
  },
};

const CACHE_DURATION = 24 * 60 * 60 * 1000; // Cache for 24 hours

export async function GET(req: NextRequest): Promise<NextResponse<unknown>> {
  try {
    const { searchParams } = new URL(req.url);
    const user = searchParams.get('user');
    const theme = searchParams.get('theme') as 'dark' | 'light';
    const now = Date.now();

    // Validate query parameters
    if (!user) {
      return NextResponse.json(
        { error: 'Missing "user" query parameter.' },
        { status: 400 },
      );
    }
    if (theme !== 'dark' && theme !== 'light') {
      return NextResponse.json(
        { error: 'Invalid theme. Use "dark" or "light".' },
        { status: 400 },
      );
    }

    // Check if cache is still valid for the requested theme
    if (
      !cache[theme].stats ||
      now - cache[theme].lastFetchTime > CACHE_DURATION
    ) {
      try {
        // Fetch all three endpoints
        const [statsResponse, topLangsResponse, streakStatsResponse] =
          await Promise.all([
            fetch(
              `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=${theme}`,
            ).then((res) => {
              if (!res.ok)
                logger('error', `Failed to fetch stats: ${res.statusText}`);
              return res.text();
            }),
            fetch(
              `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&hide=C,Makefile,HTML,CSS&layout=compact&theme=${theme}`,
            ).then((res) => {
              if (!res.ok)
                logger(
                  'error',
                  `Failed to fetch top languages: ${res.statusText}`,
                );
              return res.text();
            }),
            fetch(
              `https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=${theme}`,
            ).then((res) => {
              if (!res.ok)
                logger(
                  'error',
                  `Failed to fetch streak stats: ${res.statusText}`,
                );
              return res.text();
            }),
          ]);

        // Update the cache for the requested theme
        cache[theme].stats = statsResponse;
        cache[theme].topLangs = topLangsResponse;
        cache[theme].streakStats = streakStatsResponse;
        cache[theme].lastFetchTime = now;
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
        return NextResponse.json(
          { error: 'Failed to fetch GitHub stats' },
          { status: 500 },
        );
      }
    }

    // Send the cached data for the requested theme
    return NextResponse.json({
      stats: cache[theme].stats,
      topLangs: cache[theme].topLangs,
      streakStats: cache[theme].streakStats,
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 },
    );
  }
}
