// components/Heatmap.tsx
import React from 'react';
import Map from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useTheme } from 'next-themes';

interface HeatmapProps {
  data: { latitude: number; longitude: number; intensity: number }[];
}

const Heatmap: React.FC<HeatmapProps> = ({ data }) => {
  const { theme } = useTheme();
  const mapTheme = theme === 'dark' ? "mapbox://styles/mapbox/dark-v11" : "mapbox://styles/mapbox/light-v11";

  const MAPBOX_TOKEN = 'pk.eyJ1IjoidmFuZGVyaG9layIsImEiOiJjbHk1ZXY4N3cwYWV1MmtwdHM3azQwMjQ5In0.epjm0MzFnQP0NQCDwVhjBg'; // Replace with your Mapbox token

  const layers = [
    new HeatmapLayer({
      id: 'heatmapLayer',
      data,
      getPosition: d => [d.longitude, d.latitude],
      getWeight: d => d.intensity,
      radiusPixels: 30,
    }),
  ];

  return (
    <DeckGL
      initialViewState={{
        latitude: 40.7749,
        longitude: -100.4194,
        zoom: 3
      }}
      controller={true}
      layers={layers}
    >
      <Map
        mapStyle={mapTheme}
        mapboxAccessToken={MAPBOX_TOKEN}
        
      />
    </DeckGL>
  );
};

export default Heatmap;
