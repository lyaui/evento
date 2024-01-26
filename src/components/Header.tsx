'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'All Event', path: '/events/all' },
];
export default function Header() {
  return (
    <header className='flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9'>
      <Logo />
      <nav className='h-full'>
        <ul className='flex gap-x-6 h-full text-sm'>
          {routes.map((_route) => (
            <li
              className='text-white/50 hover:text-white transition'
              key={_route.path}
            >
              <Link href={_route.path}>{_route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
