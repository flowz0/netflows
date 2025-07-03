export default function BookConsultationPage() {
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto">
      <header className="flex flex-col items-center">
        <h1 className="text-[#f5f5f5] text-4xl/[2.6rem] font-semibold text-center md:text-5xl/[3.4rem]">
          Schedule Your
          <br />
          Free <span className="text-[#00b4ff] font-bold">Discovery</span> Call
        </h1>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4 max-w-lg text-center lg:mx-0 md:text-lg/[2rem]">
          Let&apos;s explore your vision, define your goals, and lay the groundwork for a custom web solution that drives results.
        </p>
      </header>
      <div className="max-w-2xl mx-auto">
        <form className="bg-[#242424] text-[#f5f5f5] mt-12 py-14 px-14 rounded-2xl shadow-xs shadow-[#242424]">
          <div className="flex flex-col">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg active:ring-0  focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg active:ring-0  focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(555) 555-5555"
              className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg active:ring-0  focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="(555) 555-5555"
              className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg active:ring-0  focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
            />
          </div>
          <button 
            type="button"
            className="mt-6 px-7 py-2 w-full rounded-full cursor-pointer font-bold text-base/[30px] tracking-[0.016em] bg-[#00b4ff] text-[#0a0a0a] duration-500 transition-colors hover:bg-[hsl(198,100%,40%)] active:bg-[hsl(198,100%,30%)]"
          >
            Schedule Call
          </button>
          <p className="mt-4 text-sm opacity-60">Add service option menu and date picker</p>
        </form>
      </div>
    </main>
  );
}