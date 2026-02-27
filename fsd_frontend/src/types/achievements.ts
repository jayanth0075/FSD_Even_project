// Achievement badges for the dashboard
export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  unlocked: boolean
  unlockedDate?: string
  requirement: string
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_step',
    name: 'First Step',
    description: 'Log your first learning activity',
    icon: '🎯',
    unlocked: false,
    requirement: 'totalActivities >= 1'
  },
  {
    id: 'on_fire',
    name: 'On Fire!',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
    unlocked: false,
    requirement: 'currentStreak >= 7'
  },
  {
    id: 'consistent',
    name: 'Consistency King',
    description: 'Maintain 80% consistency rate',
    icon: '👑',
    unlocked: false,
    requirement: 'consistencyRate >= 80'
  },
  {
    id: 'skill_master',
    name: 'Skill Master',
    description: 'Learn 5 different skills',
    icon: '🎓',
    unlocked: false,
    requirement: 'skillsLearned >= 5'
  },
  {
    id: 'unstoppable',
    name: 'Unstoppable',
    description: 'Achieve a 30-day streak',
    icon: '⚡',
    unlocked: false,
    requirement: 'currentStreak >= 30'
  },
  {
    id: 'legend',
    name: 'Legend',
    description: 'Complete 100+ activities',
    icon: '👹',
    unlocked: false,
    requirement: 'totalActivities >= 100'
  },
  {
    id: 'perfectionist',
    name: 'Perfectionist',
    description: 'Achieve 95% consistency rate',
    icon: '✨',
    unlocked: false,
    requirement: 'consistencyRate >= 95'
  },
  {
    id: 'renaissance',
    name: 'Renaissance',
    description: 'Master 10+ skills',
    icon: '🏆',
    unlocked: false,
    requirement: 'skillsLearned >= 10'
  }
]
