
import { Heart, Menu, Search, ShoppingBag, UserRound } from "lucide-react"

const navLinks = ["Home", "Shop", "About", "Contact"]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white /95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="Moon Ceramic home"
        >
          <span>
            <img src="../src/assets/Logo.svg" alt="" />
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-sm font-inter text-black lg:flex">
          {navLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-[#8f765f]">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-stone-700">
          <button
            className="grid size-10 place-items-center rounded-full transition hover:bg-stone-200/70 hover:text-[#8f765f]"
            type="button"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          <button
            className="hidden size-10 place-items-center rounded-full transition hover:bg-stone-200/70 hover:text-[#8f765f] sm:grid"
            type="button"
            aria-label="Wishlist"
          >
            <Heart size={20} strokeWidth={1.8} />
          </button>

          <button
            className="hidden size-10 place-items-center rounded-full transition hover:bg-stone-200/70 hover:text-[#8f765f] sm:grid"
            type="button"
            aria-label="Account"
          >
            <UserRound size={20} strokeWidth={1.8} />
          </button>

          <button
            className="relative grid size-10 place-items-center rounded-full transition hover:bg-stone-200/70 hover:text-[#8f765f]"
            type="button"
            aria-label="Cart"
          >
            <ShoppingBag size={20} strokeWidth={1.8} />
            <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-[#8f765f]" />
          </button>

          <button
            className="grid size-10 place-items-center rounded-full transition hover:bg-stone-200/70 lg:hidden"
            type="button"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar
