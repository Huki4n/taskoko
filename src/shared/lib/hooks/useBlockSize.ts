import { useState, useEffect, RefObject } from 'react'

export const useBlockSize = (
  ref: RefObject<HTMLElement | null>
): BlockSize => {
  const [size, setSize] = useState<BlockSize>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const updateSize = (entry: ResizeObserverEntry) => {
      const { width, height } = entry.contentRect

      setSize({ width, height })
    }

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === element) {
          updateSize(entry)
        }
      }
    })

    resizeObserver.observe(element)

    return () => resizeObserver.disconnect()
  }, [ref])

  return size
}

interface BlockSize {
  width: number
  height: number
}
