import React, { useEffect, useState } from 'react';

interface GithubStatsProps {
  username: string;
  theme: 'light' | 'dark';
}

interface GithubStatsData {
  stats: string | null;
  topLangs: string | null;
  streakStats: string | null;
}

const GithubStats: React.FC<GithubStatsProps> = ({
  username,
  theme,
}): React.JSX.Element => {
  const [data, setData] = useState<GithubStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect((): void => {
    const fetchGithubStats = async (): Promise<void> => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/github-stats?user=${username}&theme=${theme}`,
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch GitHub stats: ${response.statusText}`,
          );
        }

        const result: GithubStatsData = await response.json();
        setData(result);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGithubStats();
  }, [username, theme]);

  if (loading) {
    return (
      <section id="github-stats" className="py-5 container">
        <h2 className="section-header mb-5">GitHub Stats</h2>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github-stats" className="py-5 container">
        <h2 className="section-header mb-5">GitHub Stats</h2>
        <div className="d-flex justify-content-center">
          <div className="alert alert-danger" role="alert">
            Error: {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github-stats" className="py-5 container">
      <h2 className="section-header mb-5">GitHub Stats</h2>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
        <div className="github-stats-card">
          {data?.stats ? (
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`data:image/svg+xml;base64,${btoa(data.stats)}`}
                alt="GitHub Stats"
                className="img-fluid"
              />
            </a>
          ) : (
            <p>Stats not available</p>
          )}
        </div>
        <div className="github-stats-card">
          {data?.topLangs ? (
            <a
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`data:image/svg+xml;base64,${btoa(data.topLangs)}`}
                alt="Top Languages"
                className="img-fluid"
              />
            </a>
          ) : (
            <p>Top languages not available</p>
          )}
        </div>
        <div className="github-stats-card">
          {data?.streakStats ? (
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`data:image/svg+xml;base64,${btoa(data.streakStats)}`}
                alt="GitHub Streak"
                className="img-fluid"
              />
            </a>
          ) : (
            <p>Streak stats not available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
