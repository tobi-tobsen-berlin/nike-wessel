import { useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'yt-consent'
type Consent = 'granted' | 'denied' | null

function getSnapshot(): Consent {
  return localStorage.getItem(STORAGE_KEY) as Consent
}

function getServerSnapshot(): Consent {
  return null
}

const listeners = new Set<() => void>()

function subscribe(cb: () => void) {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

function setConsent(value: 'granted' | 'denied') {
  localStorage.setItem(STORAGE_KEY, value)
  listeners.forEach((cb) => cb())
}

export function useYouTubeConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const accept = useCallback(() => setConsent('granted'), [])
  const decline = useCallback(() => setConsent('denied'), [])

  return { consent, accept, decline } as const
}
