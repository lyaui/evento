import H1 from '@/components/H1';

type EventsPageProps = {
  params: { city: string };
};
function EventsPage({ params }: EventsPageProps) {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  return (
    <main>
      <H1 className='flex flex-col items-center px-3 pt-36'>
        {params.city === 'all' ? `All Events` : `Events in ${city}`}
      </H1>
    </main>
  );
}

export default EventsPage;
