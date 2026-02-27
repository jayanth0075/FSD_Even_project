import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../App.css'

export function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signOut } = useAuth()

  const handleLogOut = () => {
    signOut()
    navigate('/signin')
  }

  const sections = [
    {
      name: 'HOME',
      items: [
        { label: 'Home', path: '/', icon: '🏠' }
      ]
    },
    {
      name: 'PROFILE TRACKER',
      items: [
        { label: 'Portfolio', path: '/dashboard', icon: '🌐' }
      ]
    },
    {
      name: 'QUESTION TRACKER',
      items: [
        { label: 'Company Wise Kit', path: '/quiz', icon: '📋' },
        { label: 'My Workspace', path: '/plan', icon: '🏗️' },
        { label: 'Explore Sheets', path: '/impact-assessment', icon: '⚖️' },
        { label: 'My Sheets', path: '/roadmap', icon: '📑' },
        { label: 'Notes', path: '/ideas', icon: '📝' }
      ]
    },
    {
      name: 'EVENT TRACKER',
      items: [
        { label: 'Contests', path: '/delivery', icon: '📅' }
      ]
    },
    {
      name: 'COMMUNITY',
      items: [
        { label: 'Leaderboard', path: '/examples', icon: '🏆' }
      ]
    },
    {
      name: 'SUPPORT',
      items: [
        { label: 'Help Center', path: '/settings', icon: '❓' },
        { label: 'Feedback', path: '/impact-effort', icon: '📝' }
      ]
    }
  ]

  const NavItem = ({ item }: { item: { label: string; path: string; icon: string } }) => {
    const isActive = location.pathname === item.path
    return (
      <button
        onClick={() => navigate(item.path)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-md)',
          width: '100%',
          padding: 'var(--space-sm) var(--space-md)',
          background: isActive ? 'rgba(161, 0, 255, 0.15)' : 'transparent',
          border: 'none',
          borderRadius: 'var(--radius-md)',
          color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
          fontSize: 'var(--font-size-sm)',
          cursor: 'pointer',
          transition: 'all var(--transition-fast)',
          textAlign: 'left',
          fontWeight: isActive ? 600 : 400
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = 'var(--bg-hover)'
            e.currentTarget.style.color = 'var(--text-primary)'
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--text-secondary)'
          }
        }}
      >
        <span style={{ fontSize: '1.2em' }}>{item.icon}</span>
        <span>{item.label}</span>
      </button>
    )
  }

  return (
    <aside style={{
      width: '250px',
      background: 'var(--bg-secondary)',
      borderRight: '1px solid var(--border-subtle)',
      padding: 'var(--space-lg)',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '100px'
    }}>
      <div style={{ flex: 1 }}>
        {sections.map((section) => (
          <div key={section.name} style={{ marginBottom: 'var(--space-xl)' }}>
            {section.name !== 'HOME' && (
              <div style={{
                fontSize: 'var(--font-size-xs)',
                fontWeight: 600,
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 'var(--space-md)',
                paddingLeft: 'var(--space-md)'
              }}>
                {section.name}
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
              {section.items.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        <button
          onClick={() => navigate('/profile/current')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-md)',
            width: '100%',
            padding: 'var(--space-sm) var(--space-md)',
            background: 'transparent',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            color: 'var(--text-secondary)',
            fontSize: 'var(--font-size-sm)',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            textAlign: 'left'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--bg-hover)'
            e.currentTarget.style.color = 'var(--text-primary)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--text-secondary)'
          }}
        >
          <span style={{ fontSize: '1.2em' }}>👤</span>
          <span>Edit Profile</span>
        </button>

        <button
          onClick={handleLogOut}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-md)',
            width: '100%',
            padding: 'var(--space-sm) var(--space-md)',
            background: 'transparent',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            color: 'var(--accent-danger)',
            fontSize: 'var(--font-size-sm)',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            textAlign: 'left',
            fontWeight: 600
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 23, 68, 0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <span style={{ fontSize: '1.2em' }}>↪️</span>
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  )
}
