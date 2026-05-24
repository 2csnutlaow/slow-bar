const menuItems = [
  {
    name: "Espresso",
    description: "กาแฟเข้มข้น หอมกรุ่น สกัดจากเมล็ดคัดพิเศษ",
    price: "฿65",
    icon: "☕",
  },
  {
    name: "Signature Latte",
    description: "เอสเปรสโซ่ผสมนมสด ตกแต่งลายนมละเอียด",
    price: "฿95",
    icon: "🥛",
  },
  {
    name: "Pour Over",
    description: "กาแฟดริปช้า ๆ ดึงรสชาติทุกมิติออกมาให้คุณ",
    price: "฿110",
    icon: "🫖",
  },
  {
    name: "Cold Brew",
    description: "แช่เย็น 18 ชั่วโมง เข้มข้น นุ่มนวล ไม่ขม",
    price: "฿90",
    icon: "🧊",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf0f5] text-[#3d1220]">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#fdf0f5]/90 backdrop-blur-sm border-b border-[#f0d0dc]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-xl font-bold tracking-wide text-[#8b2252]"
          >
            Slow Bar
          </span>
          <div className="hidden gap-8 text-sm font-light tracking-widest text-[#b05678] sm:flex">
            <a href="#about" className="hover:text-[#8b2252] transition-colors">
              เกี่ยวกับเรา
            </a>
            <a href="#menu" className="hover:text-[#8b2252] transition-colors">
              เมนู
            </a>
            <a
              href="#contact"
              className="hover:text-[#8b2252] transition-colors"
            >
              ติดต่อ
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
        style={{
          background:
            "linear-gradient(160deg, #fdf0f5 0%, #fce0ea 60%, #f5ccd9 100%)",
        }}
      >
        {/* Decorative rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full border border-[#d4879a]/20 sm:h-[560px] sm:w-[560px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full border border-[#d4879a]/10 sm:h-[440px] sm:w-[440px]" />

        <div className="relative z-10 max-w-2xl">
          <p className="mb-4 text-xs font-light tracking-[0.4em] text-[#d4879a] uppercase">
            Specialty Coffee
          </p>
          <h1
            style={{ fontFamily: "var(--font-playfair)" }}
            className="mb-6 text-6xl font-bold leading-tight text-[#3d1220] sm:text-8xl"
          >
            Slow Bar
          </h1>
          <p className="mb-2 text-lg font-light leading-relaxed text-[#7a3050] sm:text-xl">
            ในโลกที่เร่งรีบ — ให้กาแฟดี ๆ
          </p>
          <p className="mb-10 text-lg font-light leading-relaxed text-[#7a3050] sm:text-xl">
            ชะลอเวลาไว้สักครู่
          </p>
          <a
            href="#menu"
            className="inline-block rounded-full bg-[#8b2252] px-10 py-4 text-sm font-light tracking-[0.2em] text-[#fdf0f5] transition-all hover:bg-[#3d1220] hover:shadow-lg hover:shadow-[#8b2252]/30 uppercase"
          >
            ดูเมนู
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#d4879a]">
          <span className="text-xs tracking-widest">scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-[#c4956a] to-transparent" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#f0d0dc]" />
            <p className="text-xs tracking-[0.4em] text-[#d4879a] uppercase">
              Our Story
            </p>
            <div className="h-px flex-1 bg-[#f0d0dc]" />
          </div>

          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="mb-8 text-center text-4xl font-bold text-[#8b2252] sm:text-5xl"
          >
            เกี่ยวกับเรา
          </h2>

          <div className="mx-auto max-w-xl space-y-5 text-center text-base font-light leading-8 text-[#7a3050]">
            <p>
              Slow Bar เกิดจากความเชื่อว่ากาแฟหนึ่งแก้วควรเป็นมากกว่าแค่
              คาเฟอีน — มันคือช่วงเวลา เป็นพิธีกรรมเล็ก ๆ
              ที่ให้คุณได้หยุดหายใจ
            </p>
            <p>
              เราคัดสรรเมล็ดกาแฟจากไร่เล็ก ๆ ในประเทศไทยและเอเชีย
              คั่วโดยช่างคั่วมือฉมัง แล้วส่งมอบความดีของมัน
              ผ่านมือบาริสต้าที่รักในสิ่งที่ทำ
            </p>
            <p>
              ไม่ว่าคุณจะมาคนเดียวพร้อมหนังสือ หรือมากับเพื่อนสนิท
              Slow Bar พร้อมต้อนรับเสมอ
            </p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section
        id="menu"
        className="px-6 py-24 sm:py-32"
        style={{
          background:
            "linear-gradient(180deg, #fce0ea 0%, #f5ccd9 100%)",
        }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#d4879a]/40" />
            <p className="text-xs tracking-[0.4em] text-[#d4879a] uppercase">
              Our Menu
            </p>
            <div className="h-px flex-1 bg-[#d4879a]/40" />
          </div>

          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="mb-14 text-center text-4xl font-bold text-[#8b2252] sm:text-5xl"
          >
            เมนูแนะนำ
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col rounded-2xl bg-[#fdf0f5] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#d4879a]/20"
              >
                <div className="mb-5 text-4xl">{item.icon}</div>
                <h3
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="mb-2 text-lg font-bold text-[#8b2252]"
                >
                  {item.name}
                </h3>
                <p className="mb-6 flex-1 text-sm font-light leading-relaxed text-[#b05678]">
                  {item.description}
                </p>
                <div className="flex items-center justify-between border-t border-[#f0d0dc] pt-4">
                  <span className="text-xs tracking-widest text-[#d4879a] uppercase">
                    price
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="text-xl font-bold text-[#8b2252]"
                  >
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#f0d0dc]" />
            <p className="text-xs tracking-[0.4em] text-[#d4879a] uppercase">
              Find Us
            </p>
            <div className="h-px flex-1 bg-[#f0d0dc]" />
          </div>

          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="mb-14 text-center text-4xl font-bold text-[#8b2252] sm:text-5xl"
          >
            มาหาเรา
          </h2>

          <div className="grid gap-10 sm:grid-cols-3">
            {/* Address */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fce0ea] text-xl">
                📍
              </div>
              <h3 className="mb-3 text-xs font-bold tracking-[0.2em] text-[#8b2252] uppercase">
                ที่อยู่
              </h3>
              <p className="text-sm font-light leading-7 text-[#7a3050]">
                123 ถนนนิมมานเหมินท์
                <br />
                ซอย 7 ห้องมุม
                <br />
                เชียงใหม่ 50200
              </p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fce0ea] text-xl">
                🕐
              </div>
              <h3 className="mb-3 text-xs font-bold tracking-[0.2em] text-[#8b2252] uppercase">
                เวลาเปิด-ปิด
              </h3>
              <p className="text-sm font-light leading-7 text-[#7a3050]">
                จันทร์ – ศุกร์
                <br />
                08:00 – 18:00 น.
                <br />
                เสาร์ – อาทิตย์
                <br />
                08:00 – 20:00 น.
              </p>
            </div>

            {/* Social */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fce0ea] text-xl">
                💬
              </div>
              <h3 className="mb-3 text-xs font-bold tracking-[0.2em] text-[#8b2252] uppercase">
                ติดตามเรา
              </h3>
              <div className="flex flex-col gap-2 text-sm font-light">
                <a
                  href="https://instagram.com/slowbar.cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4879a] transition-colors hover:text-[#8b2252]"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com/slowbar.cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4879a] transition-colors hover:text-[#8b2252]"
                >
                  Facebook
                </a>
                <a
                  href="https://line.me/slowbarcafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4879a] transition-colors hover:text-[#8b2252]"
                >
                  Line OA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f0d0dc] py-8 text-center">
        <p className="text-xs font-light tracking-widest text-[#d4879a]">
          © 2026 Slow Bar · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
