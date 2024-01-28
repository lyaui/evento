import { Suspense } from 'react';

import Loading from '@/app/events/[city]/loading';
import H1 from '@/components/H1';
import EventList from '@/components/EventList';

type EventsPageProps = {
  params: { city: string };
};
async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  return (
    <main>
      <H1 className='flex flex-col items-center px-3 pt-36 mb-28'>
        {params.city === 'all'
          ? `All Events`
          : `Events in ${city.charAt(0).toUpperCase() + params.city.slice(1)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventList city={city} />
      </Suspense>
    </main>
  );
}

export default EventsPage;
