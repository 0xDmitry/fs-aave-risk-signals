"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import {
  FSThemeInput,
  FunctionSpaceProvider as FunctionSpaceProviderDefault,
} from "@functionspace/react"

import { FUNCTIONSPACE_API_BASE_URL } from "@/config/function-space-markets"

export const widgetTheme: FSThemeInput = {
  preset: "fs-dark",
  primary: "#2EBAC6",
  accent: "#B6509E",
  background: "#1B2030",
  surface: "#292E41",
  text: "#F1F1F3",
  textSecondary: "#A5A8B6",
  border: "#383D51",
}

const FUNCTIONSPACE_USERNAME_STORAGE_KEY =
  "fs-aave-risk-signals:functionspace-username"

type FunctionSpaceAuthPersistenceContextValue = {
  rememberUsername: (username: string) => void
  forgetUsername: () => void
}

const FunctionSpaceAuthPersistenceContext =
  createContext<FunctionSpaceAuthPersistenceContextValue | null>(null)

function readStoredUsername() {
  if (typeof window === "undefined") {
    return null
  }

  try {
    return window.localStorage.getItem(FUNCTIONSPACE_USERNAME_STORAGE_KEY)
  } catch {
    return null
  }
}

export function FunctionSpaceProvider({ children }: { children: ReactNode }) {
  const [storedUsername, setStoredUsername] = useState<string | null>(
    readStoredUsername,
  )

  const rememberUsername = useCallback((username: string) => {
    const nextUsername = username.trim()

    if (!nextUsername || typeof window === "undefined") {
      return
    }

    try {
      window.localStorage.setItem(
        FUNCTIONSPACE_USERNAME_STORAGE_KEY,
        nextUsername,
      )
      setStoredUsername(nextUsername)
    } catch {
      // Auth still works for the current in-memory session if storage is blocked.
    }
  }, [])

  const forgetUsername = useCallback(() => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(FUNCTIONSPACE_USERNAME_STORAGE_KEY)
      } catch {
        // Ignore storage failures; SDK logout still clears the active session.
      }
    }

    setStoredUsername(null)
  }, [])

  const persistenceContextValue = useMemo(
    () => ({ rememberUsername, forgetUsername }),
    [rememberUsername, forgetUsername],
  )

  return (
    <FunctionSpaceAuthPersistenceContext.Provider
      value={persistenceContextValue}
    >
      <FunctionSpaceProviderDefault
        config={{
          baseUrl: FUNCTIONSPACE_API_BASE_URL,
          autoAuthenticate: false,
        }}
        storedUsername={storedUsername}
        theme={widgetTheme}
      >
        {children}
      </FunctionSpaceProviderDefault>
    </FunctionSpaceAuthPersistenceContext.Provider>
  )
}

export function useFunctionSpaceAuthPersistence() {
  const context = useContext(FunctionSpaceAuthPersistenceContext)

  if (!context) {
    throw new Error(
      "useFunctionSpaceAuthPersistence must be used inside FunctionSpaceAppProvider",
    )
  }

  return context
}
