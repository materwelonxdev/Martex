import Reveal from "./Reveal";
import Img from "./Img";

function QuoteCard() {
  return (
    <div className="relative h-full overflow-hidden rounded-xl bg-[#323a52] p-8 text-white sm:p-10">
      <span aria-hidden="true" className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-white/[0.04]" />
      <span
        aria-hidden="true"
        className="absolute bottom-28 left-2 h-24 w-3 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1.5px,transparent_2px)] bg-[length:10px_10px]"
      />
      <svg className="relative h-14 w-14 text-white/20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 17c0-5 2-8 6-9v2.5c-2 .8-3 2.2-3 4.5H10V19H4v-2zm9 0c0-5 2-8 6-9v2.5c-2 .8-3 2.2-3 4.5H19V19h-6v-2z" />
      </svg>
      <p className="relative mt-4 text-[1.35rem] font-medium leading-[1.75]">
        Nullam tempor pretium a gravida donec congue ipsum porta justo integer
        dolor odio auctor a neque suscipit an ipsum integer congue purus at
        pretium turpis egestas and volute laoreet quaerat
      </p>
      <div className="relative mt-10">
        <h5 className="text-xl font-bold">Charlie Cheever</h5>
        <p className="mt-1 text-lg uppercase tracking-wide">CEO &amp; Co-Founder</p>
      </div>
    </div>
  );
}

export default function Collage() {
  return (
    <div className="mx-auto max-w-[1560px] px-4">
      <div className="grid gap-6 lg:grid-cols-[7fr_10fr]">
        <div className="flex flex-col gap-6">
          <Reveal className="lg:ml-[21%]">
            <Img src="/images/a2-1.jpg" ratio="560/350" className="w-full rounded-xl object-cover" />
          </Reveal>
          <Reveal delay={100}>
            <Img src="/images/a2-2.jpg" ratio="708/393" className="w-full object-cover" />
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          <Reveal>
            <Img src="/images/a2-3.jpg" ratio="1011/506" className="w-full rounded-xl object-cover" />
          </Reveal>
          <div className="grid items-start gap-6 md:grid-cols-[9fr_10fr] lg:pr-12">
            <Reveal>
              <QuoteCard />
            </Reveal>
            <Reveal delay={100}>
              <Img src="/images/a2-4.jpg" ratio="482/360" className="w-full rounded-xl object-cover" />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}