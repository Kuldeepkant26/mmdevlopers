import React, { useEffect, useRef } from 'react';
import '../css/HeroStats.css';

const Stat = ({ value, label, suffix }) => {
  const ref = useRef(null);
  useEffect(() => {
    let started = false;
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          started = true;
          const target = +el.dataset.target;
          const duration = 1400;
          const start = performance.now();

          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const current = Math.floor(progress * target);
            el.innerText = current.toLocaleString();
            if (progress < 1) requestAnimationFrame(step);
            else el.innerText = target.toLocaleString() + (suffix || '');
          };

          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="hero-stat">
      <div className="hero-stat-value" data-target={value} ref={ref}>0</div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
};

const HeroStats = () => {
  const stats = [
    { value: 31000, label: 'Happy Families', suffix: '+' },
    { value: 52, label: 'Projects Delivered', suffix: '+' },
    { value: 29, label: 'Green Projects', suffix: '+' },
    { value: 15700000, label: 'Sq. Ft. Delivered', suffix: '+' }
  ];

  return (
    <section className="hero-stats-section">
      <div className="hero-stats-container">
        <div className="hero-stats-intro">
          <span className="home-section-label">Milestones</span>
          <h2 className="home-section-title">Our Legacy In Numbers</h2>
          <p className="hero-stats-sub">Delivering value-driven projects with transparency, sustainability and design excellence.</p>
        </div>
        <div className="hero-stats-grid">
          {stats.map((s, i) => (
            <Stat key={i} value={s.value} label={s.label} suffix={s.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
