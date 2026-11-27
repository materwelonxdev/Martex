function Stars({ value }) {
  return (
    <span className="inline-flex">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative text-[15px] leading-none text-ink/15">
            ★
            <span
              className="absolute left-0 top-0 overflow-hidden text-amber-400"
              style={{ width: `${fill * 100}%` }}
            >
              ★
            </span>
          </span>
        );
      })}
    </span>
  );
}

const platforms = [
  {
    name: "Capterra",
    score: 4.7,
    logo: <span className="text-[19px] font-bold text-[#1f5fa6]">&#9654; Capterra</span>,
  },
  {
    name: "Trustpilot",
    score: 4.95,
    logo: (
      <span className="text-[19px] font-bold text-ink">
        <span className="text-[#00b67a]">★</span> Trustpilot
      </span>
    ),
  },
  {
    name: "G2 Crowd",
    score: 4.24,
    logo: (
      <span className="text-[19px] font-bold text-ink">
        <span className="text-[#ff492c]">G2</span> | CROWD
      </span>
    ),
  },
];

export default function Ratings() {
  return (
    <div className="text-center">
      <h5 className="text-lg text-ink/60">Our clients love us as much as we love them</h5>
      <div className="mt-6 flex flex-wrap items-start justify-center gap-x-14 gap-y-8">
        {platforms.map((p) => (
          <div key={p.name} className="flex flex-col items-center gap-3">
            {p.logo}
            <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm text-ink/60 shadow-[0_2px_10px_rgba(43,39,80,0.08)]">
              <Stars value={p.score} />
              {p.score}/5
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}