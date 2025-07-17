'use client'

import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Activity,
  Users,
  TrendingUp,
  DollarSign,
  Eye,
  Heart,
  MessageSquare,
  Share2,
} from 'lucide-react'

interface DashboardContentProps {
  sidebarOpen: boolean
}

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1% from last month',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+180.1% from last month',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Performance',
    value: '12,234',
    change: '+19% from last month',
    icon: Activity,
    color: 'from-purple-500 to-violet-600',
  },
  {
    title: 'Growth Rate',
    value: '89%',
    change: '+8.2% from last month',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-600',
  },
]

const recentActivity = [
  { icon: Eye, text: 'New user viewed dashboard', time: '2 min ago' },
  { icon: Heart, text: 'Product liked by 23 users', time: '5 min ago' },
  { icon: MessageSquare, text: 'New comment received', time: '12 min ago' },
  { icon: Share2, text: 'Content shared 5 times', time: '18 min ago' },
]

export function DashboardContent({ sidebarOpen }: DashboardContentProps) {
  return (
    <div
      className={cn(
        'flex-1 overflow-hidden transition-all duration-300 ease-in-out',
        'p-4 sm:p-6 space-y-4 sm:space-y-6'
      )}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--vision-text-primary)] mb-2">
            Dashboard
          </h1>
          <p className="text-[var(--vision-text-secondary)]">
            Welcome back! Here's what's happening today.
          </p>
        </div>
        <Button
          className={cn(
            'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700',
            'text-white border-0 shadow-vision hover:shadow-vision-lg',
            'transition-all duration-200 ease-in-out hover:scale-105 active:scale-95',
            'focus:outline-none focus:ring-2 focus:ring-[var(--vision-focus-ring)] focus:ring-offset-2 focus:ring-offset-transparent',
            'self-start sm:self-center'
          )}
        >
          Create New
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map(stat => (
          <Card
            key={stat.title}
            className={cn(
              'bg-[var(--vision-glass-bg)] backdrop-blur-vision',
              'border border-[var(--vision-glass-border)]',
              'shadow-vision hover:shadow-vision-lg',
              'transition-all duration-200 ease-in-out hover:scale-105',
              'hover:bg-[var(--vision-button-hover)]'
            )}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[var(--vision-text-secondary)]">
                {stat.title}
              </CardTitle>
              <div
                className={cn(
                  'w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center',
                  stat.color
                )}
              >
                <stat.icon size={16} className="text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[var(--vision-text-primary)] mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-[var(--vision-text-secondary)]">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
        {/* Chart Card */}
        <Card
          className={cn(
            'bg-[var(--vision-glass-bg)] backdrop-blur-vision',
            'border border-[var(--vision-glass-border)]',
            'shadow-vision hover:shadow-vision-lg',
            'transition-all duration-200 ease-in-out hover:scale-[1.01]'
          )}
        >
          <CardHeader>
            <CardTitle className="text-[var(--vision-text-primary)]">
              Analytics Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <p className="text-[var(--vision-text-secondary)]">
                  Chart visualization would go here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card
          className={cn(
            'bg-[var(--vision-glass-bg)] backdrop-blur-vision',
            'border border-[var(--vision-glass-border)]',
            'shadow-vision hover:shadow-vision-lg',
            'transition-all duration-200 ease-in-out hover:scale-[1.01]'
          )}
        >
          <CardHeader>
            <CardTitle className="text-[var(--vision-text-primary)]">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-center space-x-3 p-3 rounded-lg',
                    'bg-[var(--vision-glass-bg)] backdrop-blur-vision',
                    'border border-[var(--vision-glass-border)]',
                    'transition-all duration-200 ease-in-out hover:bg-[var(--vision-button-hover)]'
                  )}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                    <activity.icon size={14} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[var(--vision-text-primary)]">
                      {activity.text}
                    </p>
                    <p className="text-xs text-[var(--vision-text-secondary)]">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}