import { StrictMode, startTransition } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/react-start/client'

startTransition(() => {
  // If the page has server-rendered content (SSR), hydrate it.
  // Otherwise (static deploy), use createRoot for client-side rendering.
  const hasSSRContent = document.getElementById('root')?.hasChildNodes()

  if (hasSSRContent) {
    hydrateRoot(
      document,
      <StrictMode>
        <StartClient />
      </StrictMode>,
    )
  } else {
    const root = createRoot(document.getElementById('root')!)
    root.render(
      <StrictMode>
        <StartClient />
      </StrictMode>,
    )
  }
})
