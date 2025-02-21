export const navLinks: NavLink[] = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    size: [30, 27],
  },
  {
    href: '/notes',
    label: 'Notes',
    icon: 'notes',
    size: [30, 17],
  },
  {
    href: '/calendar',
    label: 'Calendar',
    icon: 'calendar',
    size: [30, 30],
  },
  {
    href: '/tasks',
    label: 'My Tasks',
    icon: 'tasks',
    size: [33, 23],
  },
  {
    href: '/team',
    label: 'Team',
    icon: 'team',
    size: [36, 24],
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: 'settings',
    size: [33, 31],
  },
]

interface NavLink {
  href: string
  label: string
  icon: string
  size: [number, number]
}
