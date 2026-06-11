export default function MusicalTheatrePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#130f17] text-[#fff8ed]">
      <section
        id="musical-theatre"
        className="relative isolate overflow-hidden px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(232,177,74,0.22),transparent_30%),linear-gradient(135deg,#130f17_0%,#27131d_48%,#0b1620_100%)]" />
        <div className="absolute left-0 top-0 -z-10 h-full w-2 bg-[#d7a441]" />

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-7">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#e8b14a]">
              Coming soon... Creative portfolio
            </p>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-[#fff8ed] sm:text-6xl lg:text-7xl">
                Musical Theatre Projects
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#e7d9c4]">
                A collection of productions, performances, and creative work I
                have been part of beyond the tech portfolio.
              </p>
            </div>
          </div>

          <div className="border-l border-[#e8b14a]/60 pl-6">
            <p className="text-sm uppercase tracking-[0.24em] text-[#e8b14a]">
              On stage and behind the scenes
            </p>
            <p className="mt-4 text-2xl font-semibold leading-snug text-[#fff8ed]">
              Performance, workshops and creative projects in musical theatre.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-4 sm:grid-cols-3">
          {["Productions", "Performance", "Creative Projects"].map((item) => (
            <div
              key={item}
              className="border border-[#e8b14a]/35 bg-[#fff8ed]/[0.06] p-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8b14a]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
