import React from 'react';
import { EventoEvent } from '@/lib/types';
import { sleep, fetchEvents } from '@/lib/utils';
import EventCard from '@/components/EventCard';

type EventListProps = { city: string };
async function EventList({ city }: EventListProps) {
  // await sleep(2000);

  const events: EventoEvent[] = await fetchEvents(city);
  return (
    <section className='flex flex-wrap gap-10'>
      {events.map((_event) => {
        return <EventCard key={_event.id} event={_event} />;
      })}
    </section>
  );
}

export default EventList;
