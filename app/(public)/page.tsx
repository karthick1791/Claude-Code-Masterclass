// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import Link from "next/link"
import { Clock8, Target, Shield, Users } from "lucide-react"

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 6px #C27AFF88); }
          50%       { filter: drop-shadow(0 0 18px #C27AFF); }
        }
        @keyframes scanline {
          from { transform: translateY(-100%); }
          to   { transform: translateY(100vh); }
        }
        .fade-1 { animation: fadeUp 0.55s ease both; }
        .fade-2 { animation: fadeUp 0.55s ease 0.12s both; }
        .fade-3 { animation: fadeUp 0.55s ease 0.24s both; }
        .fade-4 { animation: fadeUp 0.55s ease 0.36s both; }
        .fade-5 { animation: fadeUp 0.55s ease 0.48s both; }
        .clock-pulse { animation: pulseGlow 3s ease-in-out infinite; }
        .dot-grid {
          background-image: radial-gradient(rgba(194,122,255,0.18) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .scan-line::before {
          content: '';
          position: absolute;
          inset-inline: 0;
          height: 120px;
          background: linear-gradient(to bottom, transparent, rgba(194,122,255,0.04), transparent);
          animation: scanline 6s linear infinite;
          pointer-events: none;
        }
        .corner-tl::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 48px; height: 48px;
          border-top: 1px solid rgba(194,122,255,0.45);
          border-left: 1px solid rgba(194,122,255,0.45);
        }
        .corner-br::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 48px; height: 48px;
          border-bottom: 1px solid rgba(251,100,182,0.45);
          border-right: 1px solid rgba(251,100,182,0.45);
        }
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 500;
          color: #C27AFF;
          border: 1px solid rgba(194,122,255,0.28);
          background: rgba(194,122,255,0.07);
        }
        .redacted {
          background: #C27AFF;
          color: transparent;
          border-radius: 2px;
          user-select: none;
          padding: 0 4px;
        }
        .glow-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
      `}</style>

      <div className="center-content dot-grid scan-line relative overflow-hidden">

        {/* Ambient glow blobs */}
        <div className="glow-blob" style={{ width: 500, height: 300, top: '30%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse, rgba(194,122,255,0.09), transparent 70%)' }} />
        <div className="glow-blob" style={{ width: 250, height: 200, bottom: '10%', right: '10%', background: 'radial-gradient(ellipse, rgba(251,100,182,0.07), transparent 70%)' }} />

        <div className="page-content corner-tl corner-br relative text-center py-20 px-6">

          {/* Classification badge */}
          <div className="fade-1" style={{ marginBottom: '1.75rem' }}>
            <span style={{ fontSize: '9px', letterSpacing: '0.35em', fontWeight: 700, textTransform: 'uppercase', color: '#C27AFF', border: '1px solid rgba(194,122,255,0.35)', padding: '4px 14px', borderRadius: '2px' }}>
              ◆ CLASSIFIED ◆
            </span>
          </div>

          {/* Logo title */}
          <h1 className="fade-2" style={{ fontSize: 'clamp(3.5rem, 9vw, 6.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            P
            <Clock8
              className="logo clock-pulse"
              strokeWidth={2.75}
              style={{ width: '0.82em', height: '0.82em', verticalAlign: 'middle', marginBottom: '0.08em', color: '#C27AFF' }}
            />
            cket&nbsp;Heist
          </h1>

          {/* Tagline */}
          <div className="fade-3" style={{ fontSize: '0.85rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#99A1AF', fontWeight: 500, marginBottom: '2.25rem' }}>
            Tiny missions&nbsp;&nbsp;·&nbsp;&nbsp;Big office mischief
          </div>

          {/* Divider with label */}
          <div className="fade-3" style={{ display: 'flex', alignItems: 'center', gap: 12, maxWidth: 420, margin: '0 auto 2.25rem' }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(194,122,255,0.35))' }} />
            <span style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(194,122,255,0.6)', whiteSpace: 'nowrap' }}>MISSION DOSSIER</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(194,122,255,0.35), transparent)' }} />
          </div>

          {/* Description */}
          <p className="fade-3" style={{ maxWidth: 500, margin: '0 auto 2.5rem', lineHeight: 1.8, color: '#99A1AF', fontSize: '1rem' }}>
            Your HQ for coordinating stealthy office pranks, covert snack raids, and perfectly
            timed mischief. Assemble your crew, pick a target, execute the plan —&nbsp;
            <span className="redacted">leave no trace</span>.
          </p>

          {/* Feature pills */}
          <div className="fade-4" style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <span className="pill"><Target size={12} />Assign Targets</span>
            <span className="pill"><Shield size={12} />Zero Trace</span>
            <span className="pill"><Users size={12} />Build Your Crew</span>
          </div>

          {/* CTA */}
          <div className="fade-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Link href="/signup" className="btn" style={{ fontSize: '1rem', padding: '11px 44px', letterSpacing: '0.02em' }}>
              Begin Your First Mission
            </Link>
            <span style={{ fontSize: '0.83rem', color: '#99A1AF' }}>
              Already have access?{' '}
              <Link href="/login" style={{ color: '#C27AFF', fontWeight: 600, textDecoration: 'none' }}>
                Sign in →
              </Link>
            </span>
          </div>

          {/* Footer label */}
          <div style={{ marginTop: '4rem', fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(153,161,175,0.25)', textTransform: 'uppercase' }}>
            Pocket Heist // Operative Portal // Clearance Required
          </div>

        </div>
      </div>
    </>
  )
}
