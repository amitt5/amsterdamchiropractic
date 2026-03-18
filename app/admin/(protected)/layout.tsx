import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session) redirect('/admin/login')

  return (
    <div className="min-h-screen flex" style={{ background: 'var(--color-brand-light)' }}>
      {/* Sidebar */}
      <aside
        className="w-56 flex-shrink-0 flex flex-col py-8 px-4"
        style={{ background: '#fff', borderRight: '1px solid #e5e5e5' }}
      >
        <div className="mb-8 px-2">
          <span className="text-sm font-semibold tracking-wide" style={{ color: 'var(--color-brand-dark)' }}>
            Health4Life Admin
          </span>
        </div>

        <nav className="flex-1 space-y-0.5">
          <NavLink href="/admin">Dashboard</NavLink>
          <NavLink href="/admin/appointments">Appointments</NavLink>
        </nav>

        <form
          action={async () => {
            'use server'
            await signOut({ redirectTo: '/admin/login' })
          }}
        >
          <button
            type="submit"
            className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors hover:text-red-500"
            style={{ color: '#999' }}
          >
            Sign out
          </button>
        </form>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-8" style={{ color: 'var(--color-brand-dark)' }}>
        {children}
      </main>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-stone-100"
      style={{ color: 'var(--color-brand-muted)' }}
    >
      {children}
    </Link>
  )
}
