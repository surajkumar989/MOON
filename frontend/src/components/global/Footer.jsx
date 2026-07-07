
const footerLinks = {
  Shop: ["New arrivals", "Dinnerware", "Vases", "Home decor"],
  Company: ["About", "Community", "Journal", "Contact"],
  Support: ["Shipping", "Returns", "Care guide", "FAQ"],
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#eee7dc] text-[#2f2a24]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-3" aria-label="Moon Ceramic home">
              <span className="grid size-11 place-items-center rounded-full border border-[#8f765f] text-lg font-semibold text-[#8f765f]">
                M
              </span>
              <span className="text-xl font-semibold tracking-[0.18em]">
                MOON
              </span>
            </a>
            <p className="mt-5 text-sm leading-7 text-stone-600">
              Thoughtful ceramic furniture and handmade home pieces for calm,
              lasting spaces.
            </p>
            <form className="mt-7 flex max-w-md overflow-hidden border border-stone-300 bg-[#faf7f2]">
              <input
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-500"
                type="email"
                placeholder="Email address"
                aria-label="Email address"
              />
              <button
                className="bg-[#2f2a24] px-5 text-sm font-medium text-white transition hover:bg-[#8f765f]"
                type="submit"
              >
                Join
              </button>
            </form>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-800">
                  {title}
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-stone-600">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-[#8f765f]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-stone-300 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Moon Ceramic. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-[#8f765f]">
              Instagram
            </a>
            <a href="#" className="transition hover:text-[#8f765f]">
              Pinterest
            </a>
            <a href="#" className="transition hover:text-[#8f765f]">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
