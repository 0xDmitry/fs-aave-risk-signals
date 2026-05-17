export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-signal">
        Not found
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-ink">
        Risk signal not found
      </h1>
      <p className="text-ink-muted mt-4">
        {"The requested risk signal doesn't exist."}
      </p>
    </main>
  )
}
