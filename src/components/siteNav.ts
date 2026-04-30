export interface NavItem {
  name: string
  href: string
  external: boolean
}

export const siteNav: NavItem[] = [
  { name: 'APPLICATIONS', href: '/applications', external: false },
  { name: 'GROUPS', href: '/groups', external: false },
  { name: 'EVENTS', href: '/events', external: false },
  { name: 'HAIR & MAKEUP', href: '/hair', external: false },
  { name: 'ABOUT', href: '/about', external: false },
]
