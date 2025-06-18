import React from 'react'

type CardProps = {
  title: string
  text?: string
  value?: string | number
  icon?: React.ReactNode
  className?: string
  growth?: {
    rate: string
    positive: boolean
  } | null
}

export default function Card({
  title,
  text,
  value,
  icon,
  growth,
  className = '',
}: CardProps) {
  const borderColor = growth
    ? growth.positive
      ? 'border-green-500'
      : 'border-red-500'
    : 'border-transparent'

  return (
    <div
      className={`p-4 rounded-lg shadow bg-white dark:bg-zinc-900 border ${borderColor} flex flex-col gap-2 justify-between ${className}`}
      role="region"
      aria-label={`Card: ${title}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {title}
          </h2>
          {text && (
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">{text}</p>
          )}
        </div>
        {icon && (
          <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>

      {typeof value !== 'undefined' && (
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{value}</h3>
      )}

      {growth && (
        <p
          className={`text-sm font-medium ${
            growth.positive ? 'text-green-600' : 'text-red-500'
          }`}
        >
          {growth.rate} {growth.positive ? '↑' : '↓'}
        </p>
      )}
    </div>
  )
}
