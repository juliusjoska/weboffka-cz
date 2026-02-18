import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Weboffka.cz — Weby, které fungují'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 'bold', color: 'white', marginBottom: 16 }}>Weboffka.cz</div>
        <div style={{ display: 'flex', fontSize: 28, color: '#94a3b8', marginBottom: 30 }}>Weby, které fungují</div>
        <div style={{ display: 'flex', fontSize: 20, color: '#64748b' }}>ajtak.it | Julius Joska</div>
      </div>
    ),
    { ...size }
  )
}
