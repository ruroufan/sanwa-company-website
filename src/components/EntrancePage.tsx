type EntrancePageProps = {
  onEnter: () => void;
};

export function EntrancePage({ onEnter }: EntrancePageProps) {
  return (
    <main className="fade-in relative min-h-screen overflow-hidden bg-[#1f211d] text-white">
      <img
        src="/images/entrance-background.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,19,16,0.18)_0%,rgba(18,19,16,0.22)_42%,rgba(18,19,16,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_39%,rgba(0,0,0,0.02),rgba(0,0,0,0.18)_68%)]" />

      <div className="relative z-10 flex min-h-screen items-start justify-center px-6 pt-[38vh] text-center md:pt-[40vh]">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-[0.08em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)] sm:text-5xl md:text-6xl">
            三和株式会社
          </h1>
          <p className="mt-4 font-grotesk text-xs font-medium uppercase tracking-[0.22em] text-white/76 drop-shadow-[0_2px_14px_rgba(0,0,0,0.22)] md:text-sm">
            SANWA Co., Ltd.
          </p>
          <button
            type="button"
            onClick={onEnter}
            className="mt-10 inline-flex h-12 items-center justify-center border border-white/64 bg-white/8 px-12 font-grotesk text-sm font-medium uppercase tracking-[0.22em] text-white backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:border-white/86 hover:bg-white/14"
            aria-label="Enter official website"
          >
            ENTER
          </button>
        </div>
      </div>
    </main>
  );
}
