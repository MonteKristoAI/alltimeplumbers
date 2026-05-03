import { ImageResponse } from 'next/og';

export const alt = 'All Time Plumbers - San Diego Plumber';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F7F3EC',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1B2E55',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>All Time Plumbers</div>
        <div style={{ fontSize: 40, color: '#BF2235', marginBottom: 40 }}>(760) 201-6461</div>
        <div style={{ fontSize: 32 }}>CSLB Lic #1134776 • San Diego, CA</div>
      </div>
    ),
    { ...size }
  );
}
