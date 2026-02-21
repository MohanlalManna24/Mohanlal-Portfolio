import { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi2'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-8 right-5 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        cursor-pointer
        border border-white/25
        bg-linear-to-br from-white via-green-100 to-blue-200 backdrop-blur-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)]
        text-white text-base
        transition-all duration-500 ease-out
        hover:bg-white/20 hover:border-white/40
        hover:shadow-[0_8px_32px_rgba(139,92,246,0.25),0_0_60px_rgba(139,92,246,0.1),inset_0_1px_1px_rgba(255,255,255,0.2)]
        hover:scale-110 hover:-translate-y-1
        active:scale-95 active:duration-100
        group overflow-hidden
        ${visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
        }
      `}
    >
      {/* Hover glow ring */}
      <span className="
        absolute inset-0 rounded-full opacity-0
        bg-linear-to-tr from-violet-500/20 via-transparent to-cyan-400/20
        group-hover:opacity-100
        transition-opacity duration-500
      " />

      {/* Arrow icon */}
      <HiArrowUp className=" text-violet-600
        relative z-10 text-lg
        transition-transform duration-500 ease-out
        group-hover:-translate-y-0.5
      " />
    </button>
  )
}

export default BackToTop
