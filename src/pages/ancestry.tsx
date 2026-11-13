import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { dotMap, dotMapViewBox } from '../data/ancestryMap';

interface Region {
  name: string;
  percent: number;
}

interface Category {
  name: string;
  mapKey: string;
  color: string;
  regions: Region[];
}

const categories: Category[] = [
  {
    name: 'Iberian Peninsula',
    mapKey: 'iberia',
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
    mapKey: 'indig',
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
    mapKey: 'jewish',
    color: '#c19a3b',
    regions: [{ name: 'Sephardic Jews in Northern Africa', percent: 2 }],
  },
  {
    name: 'England',
    mapKey: 'eng',
    color: '#5b7aa6',
    regions: [{ name: 'Southeastern England', percent: 1 }],
  },
  {
    name: 'Western Europe',
    mapKey: 'weu',
    color: '#8a6fa8',
    regions: [{ name: 'Belgium', percent: 1 }],
  },
];

const total = (c: Category) => c.regions.reduce((sum, r) => sum + r.percent, 0);
const maxTotal = Math.max(...categories.map(total));
// Dot intensity grows with the group's share (square root keeps the 1-2% groups visible).
const intensity = (c: Category) => 0.4 + 0.6 * Math.sqrt(total(c) / maxTotal);
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
      <h1 className="text-2xl font-mono mb-1.5">{t('sidebar.ancestry')}</h1>
      <p className="text-sm text-black/50 mb-6 max-w-md leading-relaxed">
        My DNA ethnicity estimate, grouped by region. Updated October 2026.
      </p>

      {/* Dot-matrix map */}
      <svg viewBox={dotMapViewBox} className="w-full mb-1.5" role="img" aria-label="World map where each dot is colored by ancestry group">
        <path d={dotMap.other} stroke="rgba(0,0,0,0.2)" strokeWidth={2.3} strokeLinecap="round" fill="none" />
        {categories.map((c) => (
          <path
            key={c.name}
            d={dotMap[c.mapKey]}
            stroke={c.color}
            strokeWidth={3.5}
            strokeLinecap="round"
            fill="none"
            style={{
              opacity: shown ? intensity(c) * (active && active !== c.name ? 0.3 : 1) : 0,
              transition: 'opacity 600ms ease',
            }}
          />
        ))}
      </svg>
      <p className="text-[11px] text-black/40 mb-4">Darker dots mean a larger share of my ancestry.</p>

      {/* Overview bar */}
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-black/5 mb-4">
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
      <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-9 text-xs">
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
      <div className="space-y-8">
        {categories.map((c) => (
          <section
            key={c.name}
            onMouseEnter={() => setActive(c.name)}
            onMouseLeave={() => setActive(null)}
            style={{ opacity: active && active !== c.name ? 0.4 : 1, transition: 'opacity 200ms ease' }}
          >
            <div className="flex items-baseline justify-between mb-2.5">
              <h2 className="text-xs font-mono text-black/40">{c.name}</h2>
              <span className="text-xs font-mono text-black/40">{total(c)}%</span>
            </div>
            <ul className="space-y-2">
              {c.regions.map((r, i) => (
                <li key={r.name}>
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <span className="text-[13px]">{r.name}</span>
                    <span className="text-[13px] font-mono tabular-nums">{r.percent}%</span>
                  </div>
                  <div className="h-[3px] w-full rounded-full bg-black/5 overflow-hidden">
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
