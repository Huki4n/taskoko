import { useState, useEffect } from 'react'

interface WindowSize {
  width: number
  height: number
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0, // Начальное значение
    height: 0,
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () =>
      window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
