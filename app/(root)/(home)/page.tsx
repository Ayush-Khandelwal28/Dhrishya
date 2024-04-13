"use client";
import MeetingTypeList from '@/components/ui/MeetingTypeList';
import React from 'react';
import { useEffect, useState } from 'react'


const Home = () => {
  const date = new Date();
  const [curr_time, setCurrTime] = useState((date.toLocaleTimeString('en-US')));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime(new Date().toLocaleTimeString('en-US'));
    }, 1000);
    return () => clearInterval(timer);
  });

  const options: any = { weekday: 'short' as const, day: '2-digit', month: 'short', year: 'numeric' };
  const curr_date = date.toLocaleDateString("en-US", options);
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-white bg-coverImage bg-cover'>
        <div className='flex flex-col justify-between h-full max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal' >Upcoming meeting at MidNight :(</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl pl-2' suppressHydrationWarning>{curr_time}</h1>
            <h1 className='text-lg font-medium text-sky-1 lg:text-2xl pl-2'>{curr_date}</h1>
          </div>
        </div>
      </div>

    <MeetingTypeList/>

    </section>

  )
}

export default Home