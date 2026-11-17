import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#faf8f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 36,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            border: '3px solid #1c1514',
            padding: 10,
            display: 'flex',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              border: '1px solid #d6d3cd',
              padding: '48px 56px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  width: 72,
                  height: 5,
                  backgroundColor: '#b45309',
                  marginBottom: 20,
                }}
              />
              <div
                style={{
                  fontSize: 18,
                  letterSpacing: '0.18em',
                  color: '#b45309',
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                VOL. 01 • MINDULLE ATELIER • DIGITAL GARDEN
              </div>
              <div
                style={{
                  fontSize: 72,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#1c1514',
                  fontFamily: 'Georgia, serif',
                }}
              >
                MINDULLE GARDEN
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  height: 2,
                  width: '100%',
                  backgroundColor: '#1c1514',
                  marginBottom: 20,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 18,
                  color: '#57534e',
                }}
              >
                <span>blog.sonagi.space — Broadsheet Editorial &amp; Notes</span>
                <span>MDS v0.1.0 • 85:15 HOUSE STYLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
