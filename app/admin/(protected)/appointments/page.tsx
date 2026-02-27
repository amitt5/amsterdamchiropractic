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
}

export default async function AppointmentsPage() {
  const { data, error } = await getSupabaseAdmin()
    .from('appointments')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-2">Appointments</h1>
        <p className="text-sm text-red-500">Failed to load appointments: {error.message}</p>
      </div>
    )
  }

  const appointments: Appointment[] = data ?? []

  return (
    <div>
      <div className="flex items-baseline gap-3 mb-6">
        <h1 className="text-2xl font-semibold" style={{ color: '#191919' }}>Appointments</h1>
        <span className="text-sm" style={{ color: '#999' }}>
          {appointments.length} total
        </span>
      </div>

      {appointments.length === 0 ? (
        <p className="text-sm" style={{ color: '#999' }}>No appointments yet.</p>
      ) : (
        <div
          className="overflow-x-auto rounded-xl"
          style={{ background: '#fff', border: '1px solid #e5e5e5' }}
        >
          <table className="w-full text-sm whitespace-nowrap">
            <thead>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Message</Th>
                <Th>Created</Th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a.id} style={{ borderBottom: '1px solid #f5f5f5' }}>
                  <Td>{a.date ?? '—'}</Td>
                  <Td>{a.time ?? '—'}</Td>
                  <Td>{a.name}</Td>
                  <Td>
                    <a
                      href={`mailto:${a.email}`}
                      className="hover:underline"
                      style={{ color: '#45321A' }}
                    >
                      {a.email}
                    </a>
                  </Td>
                  <Td>{a.phone}</Td>
                  <Td className="max-w-xs truncate">{a.message ?? '—'}</Td>
                  <Td style={{ color: '#999' }}>{fmtDate(a.created_at)}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
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

function Td({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <td className={`px-4 py-3 ${className ?? ''}`} style={{ color: '#403F3F', ...style }}>
      {children}
    </td>
  )
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString('nl-NL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
