'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

import Logo from '@/components/Logo';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'All Event', path: '/events/all' },
];
export default function Header() {
  const currentPath = usePathname();

  return (
    <header className='flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9'>
      <Logo />

      <nav className='h-full'>
        <ul className='flex gap-x-6 h-full text-sm'>
          {routes.map((_route) => (
            <li
              key={_route.path}
              className={cn(
                'hover:text-white flex items-center relative transition',
                {
                  'text-white': currentPath === _route.path,
                  'text-white/50': currentPath !== _route.path,
                },
              )}
            >
              <Link href={_route.path}>{_route.name}</Link>

              {currentPath === _route.path && (
                <motion.div
                  layoutId='header-active-link'
                  className='bg-accent h-1 w-full absolute bottom-0'
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
