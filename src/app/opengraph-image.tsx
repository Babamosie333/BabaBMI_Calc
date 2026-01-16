import { ImageResponse } from 'next/og';

export const alt = 'BabaBMI Cal – Precision Body Metrics';
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '80px',
          fontSize: 60,
          textAlign: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif', // ✅ Uses system fonts (no import needed)
        }}
      >
        <div style={{ 
          fontSize: 100, 
          fontWeight: 900, 
          marginBottom: 24,
          letterSpacing: '-0.05em',
        }}>
          BabaBMI Cal
        </div>
        <div style={{ 
          fontSize: 52, 
          fontWeight: 700, 
          marginBottom: 32,
          opacity: 0.95,
        }}>
          Precision Body Metrics
        </div>
        <div style={{
          fontSize: 32,
          lineHeight: 1.4,
          maxWidth: 900,
          opacity: 0.9,
          fontWeight: 500,
        }}>
          Professional-grade BMI calculator with metric/imperial support, 
          dynamic health categories, and smooth animations [web:6].
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
