'use client'
import { useEffect } from 'react'

export default function ClientScripts({ lang, onToggleLang }) {
  // Sticky nav
  useEffect(() => {
    const nav = document.getElementById('nav')
    if (!nav) return
    const fn = () => nav.classList.toggle('scrolled', window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Reveal on scroll
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    reveals.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // FAQ accordion
  useEffect(() => {
    const handler = (e) => {
      const btn = e.target.closest('.faq__q')
      if (!btn) return
      btn.parentElement.classList.toggle('open')
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
