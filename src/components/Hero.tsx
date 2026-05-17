export function Hero() {
  return (
    <section className="border-b border-line bg-[radial-gradient(circle_at_top_left,rgba(182,80,158,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(46,186,198,0.14),transparent_38%),linear-gradient(to_bottom,#FFFFFF,#F1F1F3)]">
      <div className="mx-auto flex min-h-[520px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-signal sm:text-sm">
          functionSPACE competition demo
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Aave Risk Signals
        </h1>

        <p className="text-ink-muted mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
          Forward yield and reserve stress signals for Aave V3
        </p>

        <div className="mt-8 flex gap-3">
          <a
            href="https://ecosystem.functionspace.dev/competition"
            target="_blank"
            rel="noreferrer"
            className="bg-paper hover:border-header inline-flex h-11 items-center justify-center rounded-lg border border-line px-5 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            View Competition
          </a>

          <a
            href="https://demo.functionspace.dev"
            target="_blank"
            rel="noreferrer"
            className="bg-paper hover:border-header inline-flex h-11 items-center justify-center rounded-lg border border-line px-5 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Demo Trading
          </a>
        </div>
      </div>
    </section>
  )
}
