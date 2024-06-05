import dynamic from 'next/dynamic';
import { ArrowUp, BarChart } from 'lucide-react';

// import components
import Card from '@/components/Card';
import { Chart } from '@/components/Charts';
import Donuts from '@/components/Charts/Donuts';

export default function General() {
  return (
    <div className='py-4'>
      <div className='grid grid-cols-12 gap-2'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='col-span-3'>
            <Card
              title='Lorem Ipsum'
              title_color='text-purple-500'
              value='R$ 10.000,00'
              icon={<BarChart />}
              percentage='10%'
              percentage_color='text-green-500'
              percentage_icon={<ArrowUp size={16} />}
              percentage_text='lorem ipsum'
              subtitle='lorem ipsum'
            />
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 py-3'>
        <div className='col-span-1'>
          <Chart />
        </div>
      </div>
      <div className='grid grid-cols-1 py-3'>
        <div className='col-span-1'>
          <Donuts />
        </div>
      </div>
    </div>
  );
}
