export function Footer() {
  return (
    <footer className="bg-paper/80 border-t border-line/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-end gap-3 text-center sm:flex-row sm:text-left">
          <div className="text-muted text-sm">
            made by{" "}
            <a
              href="https://x.com/0xDmitry"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink underline decoration-slate-300 underline-offset-4 transition hover:text-signal hover:decoration-signal"
            >
              0xDmitry
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
