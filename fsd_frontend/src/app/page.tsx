import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

const TYPING_STRINGS = [
  'Track Coding Streaks',
  'Master New Skills',
  'Crush DSA Problems',
  'Stay Consistent',
  'Build Great Habits',
]

export default function LandingPage() {
  const navigate = useNavigate()

  // Typing effect state
  const [typedText, setTypedText] = useState('')
  const [strIndex, setStrIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Typing effect
  useEffect(() => {
    const current = TYPING_STRINGS[strIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setTypedText(current.slice(0, charIndex))
        setCharIndex((c) => c + 1)
      }, 80)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setTypedText(current.slice(0, charIndex))
        setCharIndex((c) => c - 1)
      }, 40)
    }

    if (!deleting && charIndex === current.length + 1) {
      timeout = setTimeout(() => setDeleting(true), 1400)
    }
    if (deleting && charIndex === 0) {
      setDeleting(false)
      setStrIndex((s) => (s + 1) % TYPING_STRINGS.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, strIndex])

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', href: '#' },
    { icon: '🐙', label: 'GitHub', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '📱', label: 'Telegram', href: '#' },
    { icon: '🏆', label: 'LeetCode', href: '#' },
  ]

  return (
    <>
      <Navbar />
      <main className="page-shell" style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

        {/* Hero Section */}
        <section style={{
          minHeight: 'calc(100vh - 70px)',
          display: 'flex',
          alignItems: 'center',
          padding: 'var(--space-2xl)',
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            gap: 'var(--space-2xl)',
          }}>
            {/* Left — Text content */}
            <div className="fade-in">
              <p style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: '0 0 var(--space-sm) 0',
                lineHeight: 1.2,
              }}>
                Hi There,
              </p>

              <h1 style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                margin: '0 0 var(--space-md) 0',
                lineHeight: 1.2,
                color: 'var(--text-primary)',
              }}>
                I'm{' '}
                <span style={{ color: 'var(--text-primary)' }}>Ghost</span>
                <span style={{ color: '#0EA5E9' }}>Write</span>
              </h1>

              <p style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                fontWeight: 600,
                margin: '0 0 var(--space-lg) 0',
                color: 'var(--text-secondary)',
              }}>
                I Help You{' '}
                <span style={{ color: '#0EA5E9', borderRight: '2px solid #0EA5E9', paddingRight: '2px' }}>
                  {typedText}
                </span>
              </p>

              <p style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-xl)',
                maxWidth: '480px',
                lineHeight: 'var(--line-height-relaxed)',
              }}>
                GhostWrite helps developers build consistent habits, track skills, and celebrate every milestone on their coding journey.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginBottom: 'var(--space-xl)' }}>
                <button
                  onClick={() => navigate('/signup')}
                  style={{
                    padding: 'var(--space-md) var(--space-xl)',
                    background: '#0c4a8f',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-base)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                    boxShadow: '0 4px 20px rgba(12,74,143,0.35)',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(12,74,143,0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(12,74,143,0.35)'
                  }}
                >
                  Get Started <span>➜</span>
                </button>
                <button
                  onClick={() => navigate('/signin')}
                  style={{
                    padding: 'var(--space-md) var(--space-xl)',
                    background: 'transparent',
                    color: 'var(--accent-primary)',
                    border: '2px solid var(--accent-primary)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600,
                    fontSize: 'var(--font-size-base)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--accent-primary)'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'var(--accent-primary)'
                  }}
                >
                  Sign In
                </button>
              </div>

              {/* Social icons */}
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: '#111',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2em',
                      textDecoration: 'none',
                      transition: 'all var(--transition-fast)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#0EA5E9'
                      e.currentTarget.style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#111'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Visual */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{
                width: 'clamp(260px, 30vw, 380px)',
                height: 'clamp(260px, 30vw, 380px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 50%, #023E8A 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 60px rgba(14,165,233,0.35), 0 0 120px rgba(14,165,233,0.15)',
                position: 'relative',
                animation: 'floatAnim 4s ease-in-out infinite',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: '50%',
                  border: '2px solid rgba(14,165,233,0.3)',
                  animation: 'spinRing 8s linear infinite',
                }} />
                <div style={{
                  position: 'absolute',
                  inset: '-22px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(14,165,233,0.2)',
                  animation: 'spinRing 12s linear infinite reverse',
                }} />
                <div style={{ textAlign: 'center', color: '#fff' }}>
                  <div style={{
                    width: '90px',
                    height: '90px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8em',
                    fontWeight: 800,
                    margin: '0 auto var(--space-md) auto',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    letterSpacing: '0.05em',
                  }}>
                    GW
                  </div>
                  <p style={{ margin: 0, fontWeight: 800, fontSize: '1.5rem', letterSpacing: '0.04em' }}>GhostWrite</p>
                  <p style={{ margin: 'var(--space-xs) 0 0 0', fontSize: '0.85rem', opacity: 0.8 }}>Your Dev Companion</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{
          paddingTop: 'var(--space-2xl)',
          paddingBottom: 'var(--space-2xl)',
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-subtle)',
          position: 'relative',
          zIndex: 10,
        }}>
          <div className="container md">
            <h2 style={{
              textAlign: 'center',
              marginBottom: 'var(--space-2xl)',
              background: 'linear-gradient(135deg, #0EA5E9, #38BDF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Why GhostWrite?
            </h2>
            <div className="grid cols-3">
              {[
                { icon: '🔥', title: 'Build Streaks', description: 'Maintain consistent habits and watch your streak grow every day.' },
                { icon: '📈', title: 'Track Progress', description: 'Visualize activities with intuitive charts and detailed analytics.' },
                { icon: '🎯', title: 'Skill Mastery', description: 'Monitor skill development and identify areas for rapid growth.' },
                { icon: '💡', title: 'Smart Insights', description: 'Get personalized tips and recommendations to boost learning.' },
                { icon: '🏆', title: 'Achievements', description: 'Unlock badges and compete on leaderboards with peers.' },
                { icon: '🚀', title: 'Stay Motivated', description: 'Celebrate milestones and keep your momentum going strong.' },
              ].map((f, i) => (
                <div key={i} className="card interactive slide-in-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <div style={{ fontSize: '2em', marginBottom: 'var(--space-md)' }}>{f.icon}</div>
                  <h3 style={{ marginBottom: 'var(--space-sm)' }}>{f.title}</h3>
                  <p className="text-muted" style={{ margin: 0 }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(2,132,199,0.04))',
          borderTop: '1px solid rgba(14,165,233,0.15)',
          paddingTop: 'var(--space-2xl)',
          paddingBottom: 'var(--space-2xl)',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}>
          <div className="container md">
            <h2 style={{ marginBottom: 'var(--space-lg)', color: 'var(--text-primary)' }}>
              Ready to Start Your Journey?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-lg)', margin: '0 auto var(--space-xl) auto', maxWidth: '500px' }}>
              Join thousands of developers already tracking their progress with GhostWrite.
            </p>
            <button
              className="primary"
              onClick={() => navigate('/signup')}
              style={{
                fontSize: 'var(--font-size-base)',
                padding: 'var(--space-md) var(--space-2xl)',
                boxShadow: '0 0 30px rgba(14,165,233,0.4)',
                cursor: 'pointer',
                borderRadius: 'var(--radius-full)',
              }}
            >
              Start Free Today
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: 'var(--space-xl)',
          paddingBottom: 'var(--space-xl)',
          textAlign: 'center',
          color: 'var(--text-secondary)',
          position: 'relative',
          zIndex: 10,
        }}>
          <div className="container md">
            <p style={{ margin: 0 }}>&copy; 2026 GhostWrite. Built with ❤️ for developers.</p>
          </div>
        </footer>

        <style>{`
          @keyframes floatAnim {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-18px); }
          }
          @keyframes spinRing {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              text-align: center;
            }
            .grid.cols-3 {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </main>
    </>
  )
}
