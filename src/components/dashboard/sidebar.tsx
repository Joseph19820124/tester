'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Home,
  BarChart3,
  Settings,
  User,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const sidebarItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: User, label: 'Profile', href: '/dashboard/profile' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
          onKeyDown={e => {
            if (e.key === 'Escape') {
              onToggle()
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar overlay"
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-0 h-full z-50 lg:relative lg:z-0',
          'bg-[var(--vision-sidebar-bg)] backdrop-blur-vision',
          'border-r border-[var(--vision-sidebar-border)]',
          'transition-all duration-300 ease-in-out',
          'shadow-vision-lg',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          isOpen ? 'w-64' : 'w-16'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--vision-sidebar-border)]">
          {isOpen && (
            <h2 className="text-lg font-semibold text-[var(--vision-text-primary)] animate-fade-in">
              Vision Pro
            </h2>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onToggle()
              }
            }}
            className={cn(
              'p-2 rounded-lg transition-all duration-200 ease-in-out',
              'hover:bg-[var(--vision-button-hover)] active:bg-[var(--vision-button-active)]',
              'text-[var(--vision-text-primary)] hover:text-[var(--vision-text-primary)]',
              'focus:outline-none focus:ring-2 focus:ring-[var(--vision-focus-ring)] focus:ring-offset-2 focus:ring-offset-transparent',
              'hover:scale-105 active:scale-95'
            )}
            aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
            aria-expanded={isOpen}
            role="button"
            tabIndex={0}
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </Button>
        </div>

        {/* Navigation */}
        <nav
          className="p-4 space-y-2"
          role="navigation"
          aria-label="Main navigation"
        >
          {sidebarItems.map((item, index) => (
            <Button
              key={item.label}
              variant="ghost"
              className={cn(
                'w-full justify-start p-3 h-auto transition-all duration-200 ease-in-out',
                'hover:bg-[var(--vision-button-hover)] active:bg-[var(--vision-button-active)]',
                'text-[var(--vision-text-secondary)] hover:text-[var(--vision-text-primary)]',
                'focus:outline-none focus:ring-2 focus:ring-[var(--vision-focus-ring)] focus:ring-offset-2 focus:ring-offset-transparent',
                'hover:scale-105 active:scale-95 hover:shadow-vision',
                'rounded-xl'
              )}
              aria-label={item.label}
              aria-describedby={isOpen ? undefined : `tooltip-${index}`}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  // Handle navigation here
                  console.log(`Navigate to ${item.href}`)
                }
              }}
              role="menuitem"
              tabIndex={0}
            >
              <item.icon size={20} className="shrink-0" aria-hidden="true" />
              {isOpen && (
                <span className="ml-3 animate-fade-in">{item.label}</span>
              )}
              {!isOpen && (
                <span id={`tooltip-${index}`} className="sr-only">
                  {item.label}
                </span>
              )}
            </Button>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[var(--vision-sidebar-border)]">
          <div
            className={cn(
              'flex items-center space-x-3 p-3 rounded-xl',
              'bg-[var(--vision-glass-bg)] backdrop-blur-vision',
              'border border-[var(--vision-glass-border)]',
              'transition-all duration-200 ease-in-out hover:bg-[var(--vision-button-hover)]'
            )}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            {isOpen && (
              <div className="animate-fade-in">
                <p className="text-sm font-medium text-[var(--vision-text-primary)]">
                  John Doe
                </p>
                <p className="text-xs text-[var(--vision-text-secondary)]">
                  john@example.com
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}