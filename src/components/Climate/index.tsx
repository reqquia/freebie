import { Sun } from 'lucide-react';
interface ClimateProps {
  temperature: number;
}
function Climate({ temperature }: ClimateProps) {
  return (
    <div className='absolute right-48'>
      <h1 className='text-3xl font-bold flex items-center gap-3'>
        <Sun /> {temperature}°
      </h1>
    </div>
  );
}

export default Climate;
