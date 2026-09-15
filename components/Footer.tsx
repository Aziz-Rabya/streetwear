"use client"

const Footer = () => {
  return (
    <footer className="mt-6 min-h-[70vh] bg-black px-6 py-16 text-white md:px-10 lg:px-16">
      <div className="flex min-h-[65vh] flex-col justify-between">
        
        {/* Headline */}
        <div>
          <h1 className="text-[15vw] font-bold uppercase leading-[0.8] tracking-[-0.07em] md:text-[11vw] lg:text-[9vw]">
            SEE YOU
            <br />
            AFTER MIDNIGHT.
          </h1>
        </div>

        {/* Socials */}
        <div className="mt-16 flex flex-col gap-4 md:flex-row md:gap-8">
          <a
            href="#"
            className="group flex w-fit items-center gap-2 text-sm uppercase transition-opacity hover:opacity-50"
          >
            Instagram
            <i className="bx bxl-instagram text-lg " />
          </a>
          <a
            href="#"
            className="group flex w-fit items-center gap-2 text-sm uppercase transition-opacity hover:opacity-50"
          >
            TikTok
            <i className="bx bxl-tiktok text-lg" />
          </a>
          <a
            href="#"
            className="group flex w-fit items-center gap-2 text-sm uppercase transition-opacity hover:opacity-50"
          >
            Twitter
            <i className="bx bxl-twitter text-lg" />
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-2 border-t border-white/20 pt-5 text-[10px] uppercase tracking-wider text-white/60 md:flex-row md:items-center md:justify-between">
          <span className="text-white">Phoenixwear</span>
          <span>Made in Morocco.</span>
          <span>© 2026 Phoenixwear</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer

