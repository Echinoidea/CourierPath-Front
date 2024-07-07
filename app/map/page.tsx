'use client';

import Heatmap from '@/components/data/map/heatmap';

interface HomeProps {
  data: { latitude: number; longitude: number; intensity: number }[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return <Heatmap data={data} />;
};

const data = [
  { "latitude": 28.03, "longitude": -82.43, "intensity": 0.8 },
  { "latitude": 28.04, "longitude": -82.4181, "intensity": 1.0 },
  { "latitude": 28.0605, "longitude": -82.4165, "intensity": 0.6 },
  { "latitude": 28.0653, "longitude": -82.4202, "intensity": 1.2 },
  { "latitude": 28.0573, "longitude": -82.4146, "intensity": 0.9 },
  { "latitude": 28.0629, "longitude": -82.4112, "intensity": 0.7 },
  { "latitude": 28.0601, "longitude": -82.4107, "intensity": 0.5 },
  { "latitude": 28.0658, "longitude": -82.4133, "intensity": 1.1 },
  { "latitude": 28.0593, "longitude": -82.4158, "intensity": 0.4 },
  { "latitude": 28.0634, "longitude": -82.4179, "intensity": 1.3 }
]

export default function Map() {
  
  
  return (
    <main className="flex flex-col items-center justify-between p-24">

      <div className='flex w-screen'>
        <Heatmap data={data}/>
      </div>
    </main>
  );
}


