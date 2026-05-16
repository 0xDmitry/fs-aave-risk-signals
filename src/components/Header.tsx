import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded bg-ink text-sm font-bold text-white">
            AR
          </span>
          <span>
            <span className="block text-sm font-semibold text-ink">
              Aave Risk Signals
            </span>
            <span className="block text-xs text-slate-500">
              functionSPACE demo
            </span>
          </span>
        </Link>
      </div>
    </header>
  )
}
