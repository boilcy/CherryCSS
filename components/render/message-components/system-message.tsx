'use client'

interface SystemMessageProps {
  message: string
}

export function SystemMessage({ message }: SystemMessageProps) {
  return (
    <div
      data-ui="part:message-reasoning"
      className="mb-4 flex justify-center"
      style={{
        padding: '10px 20px',
        margin: '5px 20px 0 20px',
        borderRadius: '6px',
        cursor: 'pointer',
        border: '0.5px solid var(--border)',
        backgroundColor: 'var(--card, var(--background))',
      }}
    >
      <div
        style={{
          color: 'var(--muted-foreground, var(--foreground))',
          fontSize: '12px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {message}
      </div>
    </div>
  )
}
