'use client'
import { useEffect } from 'react'

export default function SoroBlogEmbed() {
  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    let u = 'https://app.trysoro.com/api/embed/bf69d648-a307-407f-852e-6a056978993c'
    if (p.get('post')) u += '?post=' + encodeURIComponent(p.get('post')!)
    const s = document.createElement('script')
    s.src = u
    document.body.appendChild(s)
    return () => {
      if (document.body.contains(s)) document.body.removeChild(s)
    }
  }, [])

  return <div id="soro-blog" />
}
