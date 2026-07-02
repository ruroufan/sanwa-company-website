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

      <div className="relative z-10 flex min-h-screen items-start justify-center px-6 pt-[35vh] text-center md:pt-[38vh]">
        <div className="flex flex-col items-center">
          <img
            src="/images/sanwa-logo-transparent.png"
            alt="SANWA 三和株式会社"
            className="h-auto w-[clamp(180px,62vw,260px)] max-w-[78vw] object-contain drop-shadow-[0_10px_26px_rgba(0,0,0,0.28)] md:w-[clamp(240px,36vw,380px)] lg:w-[clamp(280px,28vw,460px)]"
          />
          <button
            type="button"
            onClick={onEnter}
            className="mt-10 inline-flex h-12 items-center justify-center border border-white/64 bg-white/8 px-12 font-grotesk text-sm font-medium uppercase tracking-[0.22em] text-white backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:border-white/86 hover:bg-white/14 md:mt-12"
            aria-label="Enter official website"
          >
            ENTER
          </button>
        </div>
      </div>
    </main>
  );
}
