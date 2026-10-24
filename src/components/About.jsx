import { useEffect, useMemo, useState } from 'react';
import { FaLocationDot, FaLanguage } from 'react-icons/fa6';
import { Gitmap } from "@/components/ui/gitmap";
import { format, subMonths } from 'date-fns';
import { COLOR1, COLOR3, COLOR4 } from '@/data/content.js';

export default function About({ content }) {
  const [contributions, setContributions] = useState([]);
  const [contributionsError, setContributionsError] = useState('');
  const { fromDate, toDate } = useMemo(() => {
    const today = new Date();
    return {
      fromDate: format(subMonths(today, 5), 'yyyy-MM-dd'),
      toDate: format(today, 'yyyy-MM-dd'),
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadContributions() {
      try {
        const params = new URLSearchParams({ from: fromDate, to: toDate });
        const response = await fetch(`/api/contributions?${params}`, { signal: controller.signal });
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Could not load GitHub contributions.');
        }
        if (!Array.isArray(result)) {
          throw new Error('The contributions API returned invalid data.');
        }

        setContributions(result);
        setContributionsError('');
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Unable to load GitHub contributions:', error);
          setContributionsError(error.message);
        }
      }
    }

    loadContributions();
    return () => controller.abort();
  }, [fromDate, toDate]);

  return (
    <section className="page page--about">
      <div className="about__intro">
        <h1 className="heading">{content.heading}</h1>
        <div className="body-lg about__details">
          <div className="about__details-row"><span className='icon icon--xs'><FaLocationDot /></span>{content.location}</div>
          <div className="about__details-row"><span className='icon icon--xs'><FaLanguage /></span>{content.languages}</div>
          <div className="about__gitmap">
            <Gitmap
              contributions={contributions}
              from={new Date(`${fromDate}T00:00:00`)}
              to={new Date(`${toDate}T00:00:00`)}
              colors={{
                empty: COLOR1,
                level1: COLOR3,
                level2: COLOR4,
                level3: "#402421",
                level4: "#26242F",
              }}
              showMonths={false}
              showDays={false}
              showCounts={false}
            />
          </div>
          {contributionsError && <p role="alert">{contributionsError}</p>}
        </div>
      </div>

      <ol className="timeline">
        {content.timeline.map((item) => (
          <li className="timeline__item" key={item.title}>
            <span className="timeline__dot" aria-hidden="true" />
            <h2 className="timeline__title">{item.title}</h2>
            <p className="timeline__meta">{item.meta}</p>
            <p className="timeline__body">{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
