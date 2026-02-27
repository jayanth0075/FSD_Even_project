// Loading skeleton component
export function SkeletonLoader() {
  return (
    <div style={{
      display: 'flex',
      gap: 'var(--space-lg)',
      marginBottom: 'var(--space-2xl)'
    }}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} style={{
          flex: 1,
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(90deg, rgba(14,165,233,0.05) 0%, rgba(14,165,233,0.1) 50%, rgba(14,165,233,0.05) 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s infinite',
          height: '120px'
        }} />
      ))}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div style={{
      padding: 'var(--space-lg)',
      borderRadius: 'var(--radius-lg)',
      background: 'linear-gradient(90deg, rgba(14,165,233,0.05) 0%, rgba(14,165,233,0.1) 50%, rgba(14,165,233,0.05) 100%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s infinite',
      height: '300px'
    }} />
  )
}
