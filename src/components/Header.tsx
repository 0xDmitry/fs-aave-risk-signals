import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl outline-none transition focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-ink to-slate-700 text-sm font-bold tracking-tight text-white shadow-sm ring-1 ring-white/20 transition group-hover:-translate-y-0.5 group-hover:shadow-md">
            ARS
          </span>

          <span className="leading-none">
            <span className="block text-sm font-semibold tracking-tight text-ink sm:text-base">
              Aave Risk Signals
            </span>
          </span>
        </Link>
      </div>
    </header>
  )
}
