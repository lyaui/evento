import { EventoEvent } from '@/lib/types';
import H1 from '@/components/H1';
import EventList from '@/components/EventList';

type EventsPageProps = {
  params: { city: string };
};
async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  );

  const events: EventoEvent[] = await res.json();

  return (
    <main>
      <H1 className='flex flex-col items-center px-3 pt-36 mb-28'>
        {params.city === 'all'
          ? `All Events`
          : `Events in ${city.charAt(0).toUpperCase() + params.city.slice(1)}`}
      </H1>
      <EventList events={events} />
    </main>
  );
}

export default EventsPage;
