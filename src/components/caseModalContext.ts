import { createContext } from 'react'

/** The modal's close function, or null when a case study is shown as its own page. */
export const CaseModalContext = createContext<(() => void) | null>(null)
