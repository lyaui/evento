'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

function SearchForm() {
  const [searchText, setSearchText] = useState('');

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value.trim());
  };

  return (
    <form onSubmit={handleFormSubmit} className='w-full sm:w-[580px]'>
      <input
        value={searchText}
        onChange={handleInputChange}
        className='w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10'
        placeholder='Search events in any city...'
        spellCheck={false}
      />
    </form>
  );
}

export default SearchForm;
