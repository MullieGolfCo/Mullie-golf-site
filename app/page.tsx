import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#102a1f]">
      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#102a1f] text-xs">⛳</div>
          <div className="font-serif text-xl tracking-[0.35em]">MULLIE</div>
        </div>
        <nav className="hidden gap-8 text-sm tracking-wide md:flex">
          <a href="#collection">Collection</a>
          <a href="#story">Our Story</a>
          <a href="#launch">Launch</a>
        </nav>
        <a href="#launch"><Button className="px-6">Join List</Button></a>
      </header>

      <section className="grid min-h-[78vh] items-center px-6 py-12 md:grid-cols-2 md:px-12">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#53685d]">Mullie Golf Co.</p>
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">Timeless golf apparel made for another swing.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#40544a]">
            Clean, comfortable polos built for the golfer who loves the game, enjoys the round, and knows there is always another shot.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#launch"><Button className="px-8 py-4">Launching Soon</Button></a>
            <a href="#collection"><Button variant="outline" className="px-8 py-4">View Direction</Button></a>
          </div>
        </div>

        <div className="mt-12 md:mt-0">
          <div className="rounded-[2rem] bg-white p-6 shadow-xl">
            <div className="flex aspect-[4/5] flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-[#dceafa] via-white to-[#bdd3ef] p-8">
              <div className="rounded-2xl border border-[#9fb8d6] bg-white/70 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div className="h-5 w-24 rounded-full bg-[#9fb8d6]" />
                  <div className="h-12 w-12 rounded-md border-2 border-[#102a1f]" />
                </div>
                <div className="space-y-3">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <div key={i} className="h-1.5 rounded bg-[#7ea3cf]" />
                  ))}
                </div>
              </div>
              <div className="self-end rounded-full border-2 border-[#102a1f] bg-white px-5 py-3 text-sm tracking-widest">BALL + TEE</div>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="px-6 py-20 md:px-12">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#53685d]">First Drop Direction</p>
          <h2 className="font-serif text-4xl md:text-5xl">Classic. Clean. Easy to wear.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["The Stripe Polo", "Light blue and white stripe with pocket logo detail."],
            ["The Solid Polo", "Soft performance fabric in timeless core colors."],
            ["The Weekend Polo", "Relaxed enough for the clubhouse, polished enough for the course."],
          ].map(([title, text], index) => (
            <Card key={title} className="border-none shadow-sm">
              <CardContent className="p-7">
                <div className={`mb-6 h-56 rounded-2xl ${index === 0 ? "bg-[#dceafa]" : index === 1 ? "bg-[#e8efe9]" : "bg-[#efe7d8]"}`} />
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-3 leading-7 text-[#53685d]">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="story" className="bg-[#102a1f] px-6 py-20 text-white md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#b9c8c0]">Our Story</p>
          <h2 className="font-serif text-4xl md:text-6xl">For golfers who know one bad shot does not ruin the round.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d8e1dc]">
            Inspired by the mulligan, Mullie Golf Co. is built around second chances, good taste, and enjoying the game without taking yourself too seriously.
          </p>
        </div>
      </section>

      <section id="launch" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 text-center shadow-sm md:p-12">
          <h2 className="font-serif text-4xl">Join the first drop.</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#53685d]">
            Sign up for launch updates, first looks at samples, and early access when Mullie Golf Co. goes live.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input className="flex-1 rounded-full border border-[#d6ded9] px-5 py-4 outline-none" placeholder="Email address" type="email" />
            <Button type="submit" className="px-8 py-4">Notify Me</Button>
          </form>
          <p className="mt-4 text-xs text-[#7a8a82]">Email capture will be connected to your email platform before launch.</p>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm tracking-[0.25em] text-[#53685d] md:px-12">
        MULLIE GOLF CO. · TIMELESS. UNDERSTATED. MADE TO PLAY.
      </footer>
    </main>
  );
}
