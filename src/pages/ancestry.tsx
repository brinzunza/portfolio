import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Region {
  name: string;
  percent: number;
}

interface Category {
  name: string;
  color: string;
  regions: Region[];
}

const categories: Category[] = [
  {
    name: 'Iberian Peninsula',
    color: '#b5573b',
    regions: [
      { name: 'Northern Spain', percent: 25 },
      { name: 'Canary Islands', percent: 19 },
      { name: 'Spain', percent: 17 },
      { name: 'Basque', percent: 8 },
      { name: 'Madeira', percent: 2 },
    ],
  },
  {
    name: 'Indigenous Americas',
    color: '#3f7d6b',
    regions: [
      { name: 'Chihuahuan Desert & Sierras (Mexico)', percent: 8 },
      { name: 'Centro-Occidente—Norte (Mexico)', percent: 5 },
      { name: 'Gulf of California (Mexico)', percent: 5 },
      { name: 'Centro-Occidente—Sur (Mexico)', percent: 2 },
      { name: 'Centro-Oriente Highlands (Mexico)', percent: 2 },
      { name: 'Jalisco Highlands (Mexico)', percent: 1 },
      { name: 'Noreste & Rio Grande (Mexico & USA)', percent: 1 },
      { name: 'Southern Sierra & Tehuantepec (Mexico)', percent: 1 },
    ],
  },
  {
    name: 'Jewish',
    color: '#c19a3b',
    regions: [{ name: 'Sephardic Jews in Northern Africa', percent: 2 }],
  },
  {
    name: 'England',
    color: '#5b7aa6',
    regions: [{ name: 'Southeastern England', percent: 1 }],
  },
  {
    name: 'Western Europe',
    color: '#8a6fa8',
    regions: [{ name: 'Belgium', percent: 1 }],
  },
];

const total = (c: Category) => c.regions.reduce((sum, r) => sum + r.percent, 0);
const maxRegion = Math.max(...categories.flatMap((c) => c.regions.map((r) => r.percent)));

const Ancestry: React.FC = () => {
  const { t } = useLanguage();
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="py-[25vh] px-8 md:px-16">
      <div className="max-w-2xl">
      <h1 className="text-2xl font-mono mb-2">{t('sidebar.ancestry')}</h1>
      <p className="text-sm text-black/50 mb-10 max-w-md leading-relaxed">
        My DNA ethnicity estimate, grouped by region. Updated October 2026.
      </p>

      {/* Overview bar */}
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-black/5 mb-5">
        {categories.map((c) => (
          <div
            key={c.name}
            onMouseEnter={() => setActive(c.name)}
            onMouseLeave={() => setActive(null)}
            style={{
              width: shown ? `${total(c)}%` : '0%',
              backgroundColor: c.color,
              opacity: active && active !== c.name ? 0.25 : 1,
              transition: 'width 900ms cubic-bezier(.2,.7,.2,1), opacity 200ms ease',
            }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-14 text-xs">
        {categories.map((c) => (
          <button
            key={c.name}
            onMouseEnter={() => setActive(c.name)}
            onMouseLeave={() => setActive(null)}
            className="flex items-center gap-2 text-left"
          >
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
            <span className="text-black/60">{c.name}</span>
            <span className="font-mono text-black/40">{total(c)}%</span>
          </button>
        ))}
      </div>

      {/* Breakdown */}
      <div className="space-y-12">
        {categories.map((c) => (
          <section
            key={c.name}
            onMouseEnter={() => setActive(c.name)}
            onMouseLeave={() => setActive(null)}
            style={{ opacity: active && active !== c.name ? 0.4 : 1, transition: 'opacity 200ms ease' }}
          >
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-xs font-mono text-black/40">{c.name}</h2>
              <span className="text-xs font-mono text-black/40">{total(c)}%</span>
            </div>
            <ul className="space-y-3">
              {c.regions.map((r, i) => (
                <li key={r.name}>
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <span className="text-sm">{r.name}</span>
                    <span className="text-sm font-mono tabular-nums">{r.percent}%</span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-black/5 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: shown ? `${(r.percent / maxRegion) * 100}%` : '0%',
                        backgroundColor: c.color,
                        transition: `width 900ms cubic-bezier(.2,.7,.2,1) ${i * 60}ms`,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Ancestry;
