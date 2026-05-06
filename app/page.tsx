export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Discord Productivity Tool
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Schedule Recurring Discord Events<br />
          <span className="text-[#58a6ff]">Across Every Timezone</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Create recurring event templates once. We handle timezone conversion and auto-post to your Discord server — so your global community never misses a beat.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get Started — $8/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔁", title: "Recurring Templates", desc: "Daily, weekly, or custom schedules" },
          { icon: "🌍", title: "Timezone Aware", desc: "Auto-converts for every member" },
          { icon: "🤖", title: "Discord API", desc: "Events created automatically" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited recurring event templates",
              "Automatic timezone conversion",
              "Connect up to 5 Discord servers",
              "Discord OAuth login",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does timezone handling work?",
              a: "You set your event time in your local timezone. We store it in UTC and display it in each viewer's local time using Discord's native timestamp formatting."
            },
            {
              q: "Which Discord permissions are needed?",
              a: "We request OAuth scopes to read your server list and create events. We never read messages or access private channels."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel from your Lemon Squeezy customer portal at any time. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Discord Event Scheduler. Built for community managers worldwide.
      </footer>
    </main>
  );
}
