'use client';

import { Reveal } from './reveal';

interface HeroLine {
  text: string;
  italic?: boolean;
  accent?: boolean;
  indent?: boolean;
}

interface PageHeroProps {
  eyebrow: string;
  lines: HeroLine[];
  lede?: string;
}

export function PageHero({ eyebrow, lines, lede }: PageHeroProps) {
  const ariaLabel = lines.map((l) => l.text).join(' ');

  return (
    <section
      className="sonar-bg"
      style={{ padding: '100px 48px 80px', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <Reveal delay={0.05}>
          <div
            className="kds-mono"
            style={{
              fontSize: 11,
              color: 'var(--ink-dim)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: 56,
            }}
          >
            {eyebrow}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h1
            className="kds-display"
            aria-label={ariaLabel}
            style={{
              fontSize: 'clamp(64px, 8vw, 144px)',
              margin: 0,
              fontWeight: 300,
              lineHeight: 0.95,
            }}
          >
            {lines.map((line, i) => {
              const isLast = i === lines.length - 1;
              const trailing = isLast ? '' : ' ';
              return (
                <span key={i}>
                  {line.italic ? (
                    <span
                      style={{
                        fontStyle: 'italic',
                        color: line.accent ? 'var(--accent)' : 'inherit',
                        paddingLeft: line.indent ? '10%' : 0,
                      }}
                    >
                      {line.text}
                      {trailing}
                    </span>
                  ) : (
                    <span style={{ paddingLeft: line.indent ? '10%' : 0 }}>
                      {line.text}
                      {trailing}
                    </span>
                  )}
                  {!isLast && <br />}
                </span>
              );
            })}
          </h1>
        </Reveal>

        {lede && (
          <Reveal delay={0.25}>
            <p
              className="kds-sans"
              style={{
                fontSize: 19,
                lineHeight: 1.6,
                color: 'var(--ink-dim)',
                maxWidth: 720,
                marginTop: 56,
                marginBottom: 0,
              }}
            >
              {lede}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
