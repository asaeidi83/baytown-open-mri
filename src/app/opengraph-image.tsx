import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Baytown Open MRI — Affordable Open MRI in Baytown, TX';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background:
            'linear-gradient(135deg, #ffffff 0%, #eff7ff 55%, #ccfbf1 100%)',
          padding: 72,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: 'linear-gradient(135deg, #1d4ed8 0%, #0d9488 100%)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            BO
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: '#0f172a' }}>
              Baytown Open MRI
            </div>
            <div style={{ fontSize: 18, color: '#475569', marginTop: 2 }}>
              ACR Accredited · Baytown, TX
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Affordable <span style={{ color: '#1d4ed8' }}>Open MRI</span> in{' '}
            <span style={{ color: '#0f766e' }}>Baytown, TX</span>
          </div>
          <div style={{ marginTop: 22, fontSize: 26, color: '#334155', maxWidth: 920 }}>
            Same-day scheduling · Same-day reports · Self-pay friendly
          </div>
          <div
            style={{
              marginTop: 28,
              display: 'flex',
              gap: 14,
              fontSize: 20,
              color: '#0f172a',
            }}
          >
            <span
              style={{
                padding: '8px 14px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: 999,
              }}
            >
              (281) 422-9900
            </span>
            <span
              style={{
                padding: '8px 14px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: 999,
              }}
            >
              baytownopenmri.com
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
