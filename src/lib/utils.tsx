import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { EventoEvent } from '@/lib/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms = 1000) {
  new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchEvents(city: string): Promise<EventoEvent[]> {
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
  return events;
}

export async function fetchEvent(slug: string): Promise<EventoEvent> {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
  );
  const event: EventoEvent = await res.json();
  return event;
}
