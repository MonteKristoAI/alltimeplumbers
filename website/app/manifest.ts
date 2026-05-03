import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'All Time Plumbers',
    short_name: 'All Time Plumbers',
    description: 'Owner-operated San Diego plumber. 24/7 emergency service.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F3EC',
    theme_color: '#1B2E55',
    icons: [
      {
        src: '/icon',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
