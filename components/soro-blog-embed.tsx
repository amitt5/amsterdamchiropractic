'use client'
import { useEffect } from 'react'

export default function SoroBlogEmbed({ post }: { post?: string }) {
  useEffect(() => {
    const slug = post ?? new URLSearchParams(window.location.search).get('post')

    // Soro reads window.location.search to decide which post to show.
    // When using path-based URLs (/blog/slug), temporarily inject ?post= so the script finds it.
    if (post && !new URLSearchParams(window.location.search).get('post')) {
      const url = new URL(window.location.href)
      url.searchParams.set('post', post)
      window.history.replaceState(null, '', url.toString())
    }

    let u = 'https://app.trysoro.com/api/embed/bf69d648-a307-407f-852e-6a056978993c'
    if (slug) u += '?post=' + encodeURIComponent(slug)
    const s = document.createElement('script')
    s.src = u
    document.body.appendChild(s)
    return () => {
      if (document.body.contains(s)) document.body.removeChild(s)
    }
  }, [post])

  return <div id="soro-blog" />
}
