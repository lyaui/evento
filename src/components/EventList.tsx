import React from 'react';
import { EventoEvent } from '@/lib/types';
import { sleep } from '@/lib/utils';
import EventCard from '@/components/EventCard';

type EventListProps = { city: string };
async function EventList({ city }: EventListProps) {
  // await sleep(2000);

  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      // cache: 'no-cache' 不 cache 資料
      // next: {
      //   revalidate: 300, // 5 分後重新取得資料
      // },
    },
  );

  const events: EventoEvent[] = await res.json();
  return (
    <section className='flex flex-wrap gap-10'>
      {events.map((_event) => {
        return <EventCard key={_event.id} event={_event} />;
      })}
    </section>
  );
}

export default EventList;
