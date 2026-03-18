'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const form = new FormData(e.currentTarget)
    const result = await signIn('credentials', {
      username: form.get('username'),
      password: form.get('password'),
      redirect: false,
    })

    setLoading(false)

    if (result?.error) {
      setError('Invalid username or password.')
    } else {
      router.push('/admin')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--color-brand-light)' }}>
      <div className="w-full max-w-sm mx-4">
        {/* Brand */}
        <div className="text-center mb-8">
          <div
            className="inline-block w-10 h-10 rounded-full mb-4"
            style={{ background: 'var(--color-brand-primary)' }}
          />
          <h1 className="text-xl font-semibold" style={{ color: 'var(--color-brand-dark)' }}>
            Health4Life Admin
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl p-8 space-y-5"
          style={{ background: '#fff', border: '1px solid #e5e5e5' }}
        >
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-brand-muted)' }}>
              Username
            </label>
            <input
              name="username"
              type="text"
              required
              autoComplete="username"
              className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
              style={{
                background: 'var(--color-brand-light)',
                border: '1px solid #d5d5d5',
                color: 'var(--color-brand-dark)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-brand-primary)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#d5d5d5')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-brand-muted)' }}>
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
              style={{
                background: 'var(--color-brand-light)',
                border: '1px solid #d5d5d5',
                color: 'var(--color-brand-dark)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-brand-primary)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#d5d5d5')}
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg text-white text-sm font-medium transition-opacity disabled:opacity-60"
            style={{ background: 'var(--color-brand-primary)' }}
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
