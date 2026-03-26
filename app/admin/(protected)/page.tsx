import { getSupabaseAdmin } from '@/lib/supabase-admin'

export const dynamic = 'force-dynamic'

type Appointment = {
  id: string
  created_at: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  message: string
  marketing_consent: boolean
}

export default async function AdminDashboardPage() {
  const { data: all, error } = await getSupabaseAdmin()
    .from('appointments')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
        <p className="text-sm text-red-500">Failed to load appointments: {error.message}</p>
      </div>
    )
  }

  const appointments: Appointment[] = all ?? []

  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)
  const thisWeek = appointments.filter(
    (a) => new Date(a.created_at) >= weekAgo
  )

  const recent = appointments.slice(0, 10)

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6" style={{ color: 'var(--color-brand-dark)' }}>Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm">
        <StatCard label="All appointments" value={appointments.length} />
        <StatCard label="This week" value={thisWeek.length} />
      </div>

      {/* Recent */}
      <h2 className="text-base font-semibold mb-4" style={{ color: 'var(--color-brand-dark)' }}>
        Recent appointments
      </h2>

      {recent.length === 0 ? (
        <p className="text-sm" style={{ color: '#999' }}>No appointments yet.</p>
      ) : (
        <div
          className="overflow-x-auto rounded-xl"
          style={{ background: '#fff', border: '1px solid #e5e5e5' }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <Th>Date</Th>
                <Th>Name</Th>
                <Th>Phone</Th>
                <Th>Email</Th>
                <Th>Sent</Th>
              </tr>
            </thead>
            <tbody>
              {recent.map((a) => (
                <tr key={a.id} style={{ borderBottom: '1px solid #f5f5f5' }}>
                  <Td>{a.date ? fmtAppDate(a.date) : fmtDate(a.created_at)}</Td>
                  <Td>{a.name}</Td>
                  <Td>{a.phone}</Td>
                  <Td>{a.email}</Td>
                  <Td>{fmtDate(a.created_at)}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{ background: '#fff', border: '1px solid #e5e5e5' }}
    >
      <p className="text-3xl font-bold" style={{ color: 'var(--color-brand-primary)' }}>{value}</p>
      <p className="text-xs mt-1" style={{ color: '#999' }}>{label}</p>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide" style={{ color: '#999' }}>
      {children}
    </th>
  )
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-4 py-3" style={{ color: 'var(--color-brand-muted)' }}>
      {children}
    </td>
  )
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('nl-NL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

const NL_MONTHS: Record<string, string> = {
  januari: '01', februari: '02', maart: '03', april: '04',
  mei: '05', juni: '06', juli: '07', augustus: '08',
  september: '09', oktober: '10', november: '11', december: '12',
}

function fmtAppDate(dateStr: string) {
  // Input: "woensdag 25 maart 2026" or "Wednesday, 25 March 2026"
  const parts = dateStr.trim().split(/[\s,]+/).filter(Boolean)
  // Find the numeric day
  const dayIdx = parts.findIndex((p) => /^\d+$/.test(p))
  if (dayIdx === -1) return dateStr
  const day = parts[dayIdx].padStart(2, '0')
  const monthRaw = (parts[dayIdx + 1] ?? '').toLowerCase()
  const year = parts[dayIdx + 2] ?? ''
  const month = NL_MONTHS[monthRaw] ?? String(
    ['january','february','march','april','may','june','july','august','september','october','november','december']
      .indexOf(monthRaw) + 1
  ).padStart(2, '0')
  return `${day}-${month}-${year}`
}
