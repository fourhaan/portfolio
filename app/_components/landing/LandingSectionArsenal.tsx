type Feature = {
  title: string;
  subtitle: string;
  icon: "stack" | "brackets" | "bolt" | "shield";
};

const features: Feature[] = [
  { title: "Relational", subtitle: "Schemas & structure", icon: "stack" },
  { title: "Frameworks", subtitle: "Systems that scale", icon: "brackets" },
  { title: "Execution", subtitle: "Speed & discipline", icon: "bolt" },
  { title: "Security", subtitle: "Threat modeling", icon: "shield" },
];

function Icon({ kind }: { kind: Feature["icon"] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-[color:var(--foreground)]",
  };

  switch (kind) {
    case "stack":
      return (
        <svg {...common}>
          <path
            d="M12 3 3 7.5 12 12l9-4.5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M3 12l9 4.5 9-4.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3 16.5 12 21l9-4.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "brackets":
      return (
        <svg {...common}>
          <path
            d="M9 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M15 4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 7v10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path
            d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path
            d="M12 2 20 6v7c0 5-3.4 9-8 9s-8-4-8-9V6l8-4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 12.2 11 14l4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function LandingSectionArsenal() {
  return (
    <section
      id="arsenal"
      className="scroll-mt-16 border-b border-[color:var(--border)] bg-[color:var(--badge-bg)]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-[color:var(--faint)]">
              THE ARSENAL
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--foreground)] md:text-4xl">
              Tools of the craft.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[color:var(--muted)]">
              The stack is a means, not a personality. These are the pillars I
              use to ship reliable products.
            </p>
          </div>

          <div className="hidden h-20 w-28 items-end justify-end md:flex">
            <div className="h-9 w-24 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-bg)]" />
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card-bg)] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--badge-bg)]">
                  <Icon kind={feature.icon} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.25em] text-[color:var(--foreground)]">
                    {feature.title.toUpperCase()}
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] text-[color:var(--muted)]">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
