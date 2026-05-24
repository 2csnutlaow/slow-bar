const SYNE = "var(--font-syne)";
const NUNITO = "var(--font-nunito)";

const menuItems = [
  {
    num: "01",
    name: "Espresso",
    description: "กาแฟเข้มข้น หอมกรุ่น สกัดจากเมล็ดคัดพิเศษ",
    price: "฿65",
    tag: "Single Origin",
  },
  {
    num: "02",
    name: "Signature Latte",
    description: "เอสเปรสโซ่ผสมนมสด ตกแต่งลายนมละเอียด",
    price: "฿95",
    tag: "House Blend",
  },
  {
    num: "03",
    name: "Pour Over",
    description: "กาแฟดริปช้า ๆ ดึงรสชาติทุกมิติออกมาให้คุณ",
    price: "฿110",
    tag: "Slow Method",
  },
  {
    num: "04",
    name: "Cold Brew",
    description: "แช่เย็น 18 ชั่วโมง เข้มข้น นุ่มนวล ไม่ขม",
    price: "฿90",
    tag: "18 Hrs Cold",
  },
];

export default function Home() {
  return (
    <div style={{ background: "var(--off-white)", color: "var(--dark)" }}>
      {/* ── Navigation ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "var(--hot)",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "1.1rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: SYNE,
              fontWeight: 800,
              fontSize: "1.35rem",
              letterSpacing: "0.08em",
              color: "white",
              textTransform: "uppercase",
            }}
          >
            Slow Bar
          </span>

          <div
            style={{
              fontFamily: SYNE,
              fontSize: "0.58rem",
              letterSpacing: "0.45em",
              color: "rgba(255,255,255,0.55)",
              textTransform: "uppercase",
            }}
            className="hidden sm:block"
          >
            Specialty Coffee · Chiang Mai
          </div>

          <div className="hidden sm:flex" style={{ gap: "2rem" }}>
            {(
              [
                ["เกี่ยวกับเรา", "#about"],
                ["เมนู", "#menu"],
                ["ติดต่อ", "#contact"],
              ] as const
            ).map(([label, href]) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(ellipse at 20% 80%, #FF4090 0%, #FF1868 35%, #D40E55 75%, #A80A43 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "8rem 2rem 5rem",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Floating circles */}
        <div
          aria-hidden="true"
          className="float-a"
          style={{
            position: "absolute",
            top: "-8%",
            left: "-6%",
            width: "clamp(300px, 40vw, 560px)",
            height: "clamp(300px, 40vw, 560px)",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          className="float-b"
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-5%",
            width: "clamp(240px, 32vw, 480px)",
            height: "clamp(240px, 32vw, 480px)",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "18%",
            right: "12%",
            width: "clamp(120px, 16vw, 240px)",
            height: "clamp(120px, 16vw, 240px)",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "22%",
            left: "8%",
            width: "clamp(60px, 8vw, 120px)",
            height: "clamp(60px, 8vw, 120px)",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.25)",
            pointerEvents: "none",
          }}
        />

        {/* Spinning ring */}
        <div
          aria-hidden="true"
          className="spin-slow"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(90vw, 720px)",
            height: "min(90vw, 720px)",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }}
        />

        {/* Badge */}
        <div
          className="animate-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.35)",
            borderRadius: "9999px",
            padding: "0.45rem 1.4rem",
            fontFamily: SYNE,
            fontWeight: 600,
            fontSize: "0.62rem",
            letterSpacing: "0.35em",
            color: "white",
            textTransform: "uppercase",
            marginBottom: "2.25rem",
            animationDelay: "0.05s",
          }}
        >
          ✦ Specialty Coffee ✦
        </div>

        {/* Title */}
        <h1
          className="animate-up"
          style={{
            fontFamily: SYNE,
            fontWeight: 800,
            fontSize: "clamp(5.5rem, 20vw, 20rem)",
            lineHeight: 0.88,
            letterSpacing: "0.04em",
            color: "white",
            margin: 0,
            textTransform: "uppercase",
            animationDelay: "0.15s",
          }}
        >
          Slow
        </h1>
        <h1
          className="animate-up"
          style={{
            fontFamily: SYNE,
            fontWeight: 800,
            fontSize: "clamp(5.5rem, 20vw, 20rem)",
            lineHeight: 0.88,
            letterSpacing: "0.04em",
            color: "white",
            margin: "0 0 2.25rem",
            textTransform: "uppercase",
            animationDelay: "0.25s",
          }}
        >
          Bar
        </h1>

        {/* Divider */}
        <div
          className="animate-up"
          style={{
            width: "clamp(80px, 12vw, 160px)",
            height: "2px",
            background: "rgba(255,255,255,0.4)",
            marginBottom: "2rem",
            borderRadius: "9999px",
            animationDelay: "0.38s",
          }}
        />

        {/* Tagline */}
        <div
          className="animate-up"
          style={{ animationDelay: "0.48s", marginBottom: "2.75rem" }}
        >
          <p
            style={{
              fontFamily: NUNITO,
              fontWeight: 300,
              fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.88)",
              margin: 0,
            }}
          >
            ในโลกที่เร่งรีบ — ให้กาแฟดี ๆ ชะลอเวลาไว้สักครู่
          </p>
        </div>

        {/* CTA */}
        <div
          className="animate-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a href="#menu" className="hero-cta" style={{ fontFamily: SYNE }}>
            ดูเมนู <span>↓</span>
          </a>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "40px",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        style={{
          background: "var(--off-white)",
          padding: "7rem 2rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          {/* Label pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--pale)",
              borderRadius: "9999px",
              padding: "0.35rem 1.1rem",
              fontFamily: SYNE,
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              color: "var(--hot)",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
            }}
          >
            Our Story
          </div>

          <div
            style={{
              display: "grid",
              gap: "3rem 5rem",
            }}
            className="lg:grid-cols-[auto_1fr]"
          >
            {/* Heading */}
            <h2
              style={{
                fontFamily: SYNE,
                fontWeight: 800,
                fontSize: "clamp(3rem, 7vw, 7rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--hot)",
                margin: 0,
              }}
            >
              เกี่ยว
              <br />
              กับเรา
            </h2>

            {/* Body */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                maxWidth: "38rem",
                alignSelf: "center",
              }}
            >
              <p
                style={{
                  fontFamily: NUNITO,
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  lineHeight: 1.7,
                  color: "var(--dark)",
                  margin: 0,
                }}
              >
                Slow Bar เกิดจากความเชื่อว่ากาแฟหนึ่งแก้วควรเป็นมากกว่าแค่คาเฟอีน
                — มันคือช่วงเวลา เป็นพิธีกรรมเล็ก ๆ ที่ให้คุณได้หยุดหายใจ
              </p>
              <p
                style={{
                  fontFamily: NUNITO,
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  lineHeight: 1.85,
                  color: "var(--dark-mid)",
                  margin: 0,
                }}
              >
                เราคัดสรรเมล็ดกาแฟจากไร่เล็ก ๆ ในประเทศไทยและเอเชีย
                คั่วโดยช่างคั่วมือฉมัง แล้วส่งมอบความดีของมัน
                ผ่านมือบาริสต้าที่รักในสิ่งที่ทำ
              </p>
              <p
                style={{
                  fontFamily: NUNITO,
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  lineHeight: 1.85,
                  color: "var(--dark-mid)",
                  margin: 0,
                }}
              >
                ไม่ว่าคุณจะมาคนเดียวพร้อมหนังสือ หรือมากับเพื่อนสนิท
                Slow Bar พร้อมต้อนรับเสมอ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Menu ── */}
      <section
        id="menu"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, #FF4090 0%, #FF1868 50%, #D40E55 100%)",
          padding: "7rem 2rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          {/* Label pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: "9999px",
              padding: "0.35rem 1.1rem",
              fontFamily: SYNE,
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              color: "white",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
            }}
          >
            Our Menu
          </div>

          <h2
            style={{
              fontFamily: SYNE,
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 6rem)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "white",
              margin: "0 0 3.5rem",
              lineHeight: 1,
            }}
          >
            เมนูแนะนำ
          </h2>

          {/* Card grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="menu-card"
                style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}
              >
                {/* Number + tag row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: SYNE,
                      fontWeight: 700,
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      color: "var(--hot)",
                    }}
                  >
                    {item.num}
                  </span>
                  <span
                    style={{
                      fontFamily: NUNITO,
                      fontSize: "0.6rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(26,0,16,0.38)",
                      background: "var(--pale)",
                      borderRadius: "9999px",
                      padding: "0.2rem 0.75rem",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: SYNE,
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "var(--dark)",
                    margin: "0 0 0.6rem",
                    lineHeight: 1.2,
                  }}
                >
                  {item.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: NUNITO,
                    fontSize: "0.82rem",
                    fontWeight: 400,
                    lineHeight: 1.7,
                    color: "var(--dark-mid)",
                    margin: "0 0 1.5rem",
                    flex: 1,
                  }}
                >
                  {item.description}
                </p>

                {/* Divider + price */}
                <div
                  style={{
                    borderTop: "1px solid var(--pale)",
                    paddingTop: "1rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontFamily: SYNE,
                      fontWeight: 800,
                      fontSize: "1.7rem",
                      color: "var(--hot)",
                      lineHeight: 1,
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        style={{
          background: "var(--off-white)",
          padding: "7rem 2rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          {/* Label pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--pale)",
              borderRadius: "9999px",
              padding: "0.35rem 1.1rem",
              fontFamily: SYNE,
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              color: "var(--hot)",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
            }}
          >
            Find Us
          </div>

          <h2
            style={{
              fontFamily: SYNE,
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 6rem)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "var(--hot)",
              margin: "0 0 4rem",
              lineHeight: 1,
            }}
          >
            มาหาเรา
          </h2>

          <div
            style={{
              display: "grid",
              gap: "2rem",
            }}
            className="sm:grid-cols-3"
          >
            {/* Address */}
            <div
              style={{
                background: "var(--pale)",
                borderRadius: "20px",
                padding: "2rem 1.75rem",
              }}
            >
              <div
                style={{
                  fontFamily: SYNE,
                  fontWeight: 700,
                  fontSize: "0.62rem",
                  letterSpacing: "0.28em",
                  color: "var(--hot)",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                ที่อยู่
              </div>
              <p
                style={{
                  fontFamily: NUNITO,
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  lineHeight: 2,
                  color: "var(--dark)",
                  margin: 0,
                }}
              >
                123 ถนนนิมมานเหมินท์
                <br />
                ซอย 7 ห้องมุม
                <br />
                เชียงใหม่ 50200
              </p>
            </div>

            {/* Hours */}
            <div
              style={{
                background: "var(--pale)",
                borderRadius: "20px",
                padding: "2rem 1.75rem",
              }}
            >
              <div
                style={{
                  fontFamily: SYNE,
                  fontWeight: 700,
                  fontSize: "0.62rem",
                  letterSpacing: "0.28em",
                  color: "var(--hot)",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                เวลาเปิด-ปิด
              </div>
              <p
                style={{
                  fontFamily: NUNITO,
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  lineHeight: 2,
                  color: "var(--dark)",
                  margin: 0,
                }}
              >
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
            <div
              style={{
                background: "var(--pale)",
                borderRadius: "20px",
                padding: "2rem 1.75rem",
              }}
            >
              <div
                style={{
                  fontFamily: SYNE,
                  fontWeight: 700,
                  fontSize: "0.62rem",
                  letterSpacing: "0.28em",
                  color: "var(--hot)",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                ติดตามเรา
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { label: "Instagram", href: "https://instagram.com/slowbar.cafe" },
                  { label: "Facebook", href: "https://facebook.com/slowbar.cafe" },
                  { label: "Line OA", href: "https://line.me/slowbarcafe" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{
                      fontFamily: NUNITO,
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ color: "var(--hot)", fontSize: "0.7rem" }}>↗</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "var(--hot)",
          padding: "1.75rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: SYNE,
              fontWeight: 800,
              fontSize: "1.1rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Slow Bar
          </span>
          <p
            style={{
              fontFamily: SYNE,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            © 2026 · All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
