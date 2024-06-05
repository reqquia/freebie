'use client';
import React, { useEffect, useState } from 'react';
import { Clock as ClockIcon } from 'lucide-react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='fixed right-10 py-3'>
      <h2 className='text-xl flex items-center gap-3'>
        <ClockIcon /> {time}
      </h2>
    </div>
  );
}

export default Clock;
