// src/app/components/GithubStats.tsx
import React from 'react';

interface GithubStatsProps {
  username: string;
  theme: 'light' | 'dark';
}

const GithubStats: React.FC<GithubStatsProps> = ({username, theme}) => {
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme === 'dark' ? 'dark' : 'light'}`;
  const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme === 'dark' ? 'dark' : 'light'}`;
  const streakStatsUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme === 'dark' ? 'dark' : 'light'}`;

  return (
    <section id="github-stats" className="py-5 container">
      <h2 className="section-header mb-5">GitHub Stats</h2>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
        <div className="github-stats-card">
          <img src={statsUrl} alt="GitHub Stats" className="img-fluid" />
        </div>
        <div className="github-stats-card">
          <img src={topLangsUrl} alt="Top Languages" className="img-fluid" />
        </div>
        <div className="github-stats-card">
          <img src={streakStatsUrl} alt="GitHub Streak" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
