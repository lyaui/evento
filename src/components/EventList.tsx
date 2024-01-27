import React from 'react';
import { EventoEvent } from '@/lib/types';

import EventCard from '@/components/EventCard';

type EventListProps = { events: EventoEvent[] };
function EventList({ events }: EventListProps) {
  return (
    <section className='flex flex-wrap gap-10'>
      {events.map((_event) => {
        return <EventCard key={_event.id} event={_event} />;
      })}
    </section>
  );
}

export default EventList;
