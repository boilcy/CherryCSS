'use client'

interface SystemMessageProps {
  message: string
}

export function SystemMessage({ message }: SystemMessageProps) {
  return (
    <div
      className="system-prompt mb-4 flex justify-center"
      style={{
        padding: '10px 20px',
        margin: '5px 20px 0 20px',
        borderRadius: '6px',
        cursor: 'pointer',
        border: '0.5px solid var(--color-border)',
        backgroundColor: 'var(--chat-background-assistant)',
      }}
    >
      <div
        style={{
          color: 'var(--color-text-2)',
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
