import Link from "next/link"

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-signal">
        Not found
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-ink">Market not found</h1>
      <p className="mt-4 text-slate-600">
        The requested market is not configured in this MVP.
      </p>
      <Link
        href="/markets"
        className="mt-8 inline-flex h-11 items-center rounded bg-ink px-5 text-sm font-semibold text-white hover:bg-slate-800"
      >
        Back to markets
      </Link>
    </main>
  )
}
