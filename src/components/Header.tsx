import Link from "next/link"

export function Header() {
  return (
    <header className="bg-paper/80 sticky top-0 z-50 border-b border-line/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl outline-none"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-[linear-gradient(248.86deg,#B6509E_10.51%,#2EBAC6_93.41%)] text-sm font-bold tracking-tight text-white shadow-sm">
            ARS
          </span>

          <span className="leading-none">
            <span className="block text-sm font-semibold tracking-tight text-ink sm:text-base">
              Aave Risk Signals
            </span>
          </span>
        </Link>
        <a
          href="https://github.com/0xDmitry/fs-aave-risk-signals"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-ink underline decoration-slate-300 underline-offset-4 transition hover:text-signal hover:decoration-signal"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  )
}
