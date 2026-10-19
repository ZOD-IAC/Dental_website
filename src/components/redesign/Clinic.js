import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import services from "@/Data/services.json";
export const serviceUrl = (s) => "/Service/" + encodeURIComponent(s.head);
export const phone = "+918447057806";
export const whatsapp =
  "https://wa.me/918447057806?text=Hello%20Dental%20Facets%2C%20I%20would%20like%20to%20request%20an%20appointment.";
export const maps =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Dental Facets 560-P Sector 56 Gurugram");
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function Photo({ src, alt, className = "", priority = false }) {
  return (
    <div className={"photo " + className}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 650px"
        style={{ objectFit: "cover" }}
        priority={priority}
      />
    </div>
  );
}
export function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [treatmentOpen, setTreatmentOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const treatmentRef = useRef(null);
  const active = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);
  function close() {
    setOpen(false);
    setTreatmentOpen(false);
  }
  useEffect(() => {
    function outside(e) {
      if (headerRef.current && !headerRef.current.contains(e.target))
        setTreatmentOpen(false);
    }
    function escape(e) {
      if (e.key === "Escape") {
        if (treatmentOpen) {
          setTreatmentOpen(false);
          treatmentRef.current?.focus();
        } else if (open) {
          setOpen(false);
          menuRef.current?.focus();
        }
      }
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open, treatmentOpen]);
  useEffect(() => {
    if (!open || !window.matchMedia("(max-width:800px)").matches) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const alignMenu = () => {
      const header = headerRef.current;
      if (header)
        header.style.setProperty(
          "--mobile-nav-top",
          `${header.getBoundingClientRect().bottom}px`,
        );
    };
    alignMenu();
    window.addEventListener("resize", alignMenu);
    window.addEventListener("scroll", alignMenu, { passive: true });
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("resize", alignMenu);
      window.removeEventListener("scroll", alignMenu);
    };
  }, [open]);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="topline">
        <div className="wrap">
          <span>SECTOR 56, GURUGRAM</span>
          <span>
            Mon–Sat · 10 am–7 pm <a href={"tel:" + phone}>+91 84470 57806</a>
          </span>
        </div>
      </div>
      <header className="header refined-header" ref={headerRef}>
        <div className="wrap nav">
          <Link
            className="brand"
            href="/"
            aria-label="Dental Facets home"
            onClick={close}
          >
            <Image src="/image/favicon.webp" alt="" width={43} height={46} />
            <span>
              Dental Facets<small>DENTAL CLINIC · SECTOR 56</small>
            </span>
          </Link>
          <button
            ref={menuRef}
            type="button"
            className={"menu-toggle " + (open ? "is-open" : "")}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => {
              setOpen(!open);
              setTreatmentOpen(false);
            }}
          >
            <span className="menu-lines" aria-hidden="true">
              <i />
              <i />
            </span>
            <span>{open ? "Close" : "Menu"}</span>
          </button>
          <nav
            id="main-nav"
            className={open ? "navlinks open" : "navlinks"}
            aria-label="Main navigation"
          >
            <div className="mobile-nav-intro">
              <span className="eyebrow">WELCOME TO DENTAL FACETS</span>
              <p>Your care. Your next step.</p>
            </div>
            {[
              ["/", "Home"],
              ["/About", "Our clinic"],
            ].map(([href, label]) => (
              <Link
                className={"nav-item " + (active(href) ? "is-active" : "")}
                aria-current={active(href) ? "page" : undefined}
                href={href}
                onClick={close}
                key={href}
              >
                {label}
                <span className="mobile-nav-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
            <div
              className={
                "nav-treatments " + (active("/Service") ? "is-active" : "")
              }
            >
              <div className="treatment-nav-heading">
                <Link
                  href="/Service"
                  className="nav-item"
                  aria-current={
                    router.pathname === "/Service" ? "page" : undefined
                  }
                  onClick={close}
                >
                  Treatments
                </Link>
                <button
                  type="button"
                  ref={treatmentRef}
                  aria-label={
                    treatmentOpen
                      ? "Hide treatment links"
                      : "Show treatment links"
                  }
                  aria-expanded={treatmentOpen}
                  aria-controls="treatments-menu"
                  onClick={() => setTreatmentOpen(!treatmentOpen)}
                  className="treatment-toggle"
                >
                  <span
                    className={treatmentOpen ? "chevron up" : "chevron"}
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div
                className="treatments-menu"
                id="treatments-menu"
                hidden={!treatmentOpen}
              >
                <div className="treatments-menu-intro">
                  <ToothMark />
                  <div>
                    <span className="eyebrow">EXPLORE DENTAL CARE</span>
                    <p>Find the right place to start.</p>
                  </div>
                  <Link href="/Service" onClick={close}>
                    All treatments ↗
                  </Link>
                </div>
                <div className="treatment-menu-grid">
                  {services.map((service, i) => (
                    <Link
                      key={service.head}
                      href={serviceUrl(service)}
                      onClick={close}
                    >
                      <span className="menu-treatment-number">0{i + 1}</span>
                      <span>
                        {names[i]}
                        <small>
                          {service.defi
                            .slice(0, 2)
                            .map((x) => x.Label.replace("Painless ", ""))
                            .join(" · ")}
                        </small>
                      </span>
                      <Arrow />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/Contact"
              className={"nav-item " + (active("/Contact") ? "is-active" : "")}
              aria-current={active("/Contact") ? "page" : undefined}
              onClick={close}
            >
              Contact
              <span className="mobile-nav-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link
              href="/Contact#appointment"
              className="button small nav-book"
              onClick={close}
            >
              Request a visit <Arrow />
            </Link>
            <div className="mobile-nav-contact">
              <span>SECTOR 56 · GURUGRAM</span>
              <a href={"tel:" + phone}>+91 84470 57806</a>
              <p>Monday–Saturday · 10 am–7 pm</p>
            </div>
          </nav>
        </div>
      </header>
      {open && (
        <button
          className="nav-scrim"
          type="button"
          aria-label="Close navigation"
          onClick={close}
          tabIndex={-1}
        />
      )}
    </>
  );
}
export function ToothMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 10c-6-5-16-3-16 6 0 6 4 9 5 16 1 7 5 9 7 1l2-7c.5-2 3.5-2 4 0l2 7c2 8 6 6 7-1 1-7 5-10 5-16 0-9-10-11-16-6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m19 9 7 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function Founder() {
  return (
    <section className="section wrap founder-section" id="dr-pramod">
      <div className="founder-portrait">
        <Photo
          src="/image/avatars/avatar3.jpg"
          alt="Dr. Pramod Narsinghani, owner and head dentist of Dental Facets"
        />
        <div className="founder-caption">
          <ToothMark />
          <span>
            HEAD DENTIST & OWNER
            <br />
            <strong>Dental Facets</strong>
          </span>
        </div>
      </div>
      <div className="founder-copy">
        <div className="eyebrow">MEET THE DOCTOR BEHIND DENTAL FACETS</div>
        <h2>
          Dr. Pramod
          <br />
          <em>Narsinghani.</em>
        </h2>
        <p className="founder-degree">
          BDS · MDS, Oral & Maxillofacial Surgery
        </p>
        <p>
          As the owner and head dentist of Dental Facets, Dr. Pramod brings a
          background in oral and maxillofacial surgery and implantology to the
          clinic’s dental care.
        </p>
        <div className="founder-specialties">
          <span>Oral & maxillofacial surgery</span>
          <span>Dental implants</span>
          <span>Restorative dentistry</span>
        </div>
        <p className="founder-history">
          His professional background includes senior residency at Maulana Azad
          Institute of Dental Sciences and consultant roles at Maharaja Agrasen
          Hospital and Sir Ganga Ram Hospital.
        </p>
        <Link className="button" href="/Contact#appointment">
          Request a Sector 56 visit <Arrow />
        </Link>
        <a
          className="profile-source"
          href="https://www.sehgalneohospital.com/doctor/dr-pramod-narsinghani"
          target="_blank"
          rel="noopener noreferrer"
        >
          View professional profile ↗
        </a>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="wrap footer-masthead">
          <Link href="/" className="footer-logo">
            <Image
              src="/image/favicon.webp"
              alt="Dental Facets logo"
              width={76}
              height={80}
            />
            <span>
              Dental Facets<small>DENTAL CARE · SECTOR 56, GURUGRAM</small>
            </span>
          </Link>
          <div className="footer-statement">
            Every facet.
            <br />
            <em>One healthier smile.</em>
          </div>
          <ToothMark className="footer-tooth" />
        </div>
        <div className="wrap footer-highlights">
          <span>
            <ToothMark />
            Preventive & family care
          </span>
          <span>Restorative dentistry</span>
          <span>Oral surgery & implants</span>
          <span>Cosmetic dental care</span>
        </div>
        <div className="wrap footer-grid">
          <div>
            <h3>Your neighbourhood dental clinic</h3>
            <p>
              560-P, behind Jalvayu Towers,
              <br />
              Block B, Sector 56, Gurugram,
              <br />
              Haryana 122001
            </p>
            <a href={maps} target="_blank" rel="noopener noreferrer">
              Directions to the clinic ↗
            </a>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/About#dr-pramod">Meet Dr. Pramod</Link>
            <Link href="/Service">All treatments</Link>
            <Link href="/About#gallery">Inside the clinic</Link>
            <Link href="/Contact#email-appointment">
              Email appointment request
            </Link>
          </div>
          <div>
            <h3>Let’s talk dental care</h3>
            <a className="footer-phone" href={"tel:" + phone}>
              +91 84470 57806
            </a>
            <a href="mailto:dentalfacets2016@gmail.com">
              dentalfacets2016@gmail.com
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp the team ↗
            </a>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/dental.facets/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>
            </div>
          </div>
          <div>
            <h3>Visit us</h3>
            <p>
              Monday–Saturday
              <br />
              <strong>10:00 am–7:00 pm</strong>
            </p>
            <p>Sunday: closed</p>
            <Link className="button light" href="/Contact#appointment">
              Plan a visit ↗
            </Link>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} Dental Facets</span>
          <span>Your smile. Our priority.</span>
          <span>Sector 56 · Gurugram</span>
        </div>
      </footer>
      <div className="mobile-actions">
        <a href={"tel:" + phone}>Call the clinic</a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          WhatsApp ↗
        </a>
      </div>
    </>
  );
}
export function Cta() {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <div className="eyebrow">LET’S TALK ABOUT YOUR SMILE</div>
        <h2>
          Your next chapter
          <br />
          starts with a visit.
        </h2>
        <div>
          <p>
            Have a question or a treatment in mind?
            <br />
            Speak with our team and plan your next step.
          </p>
          <Link className="button light" href="/Contact#appointment">
            Request an appointment <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
const names = [
  "Oral medicine & diagnosis",
  "Root canal & restorative care",
  "Crowns & bridges",
  "Braces & clear aligners",
  "Oral surgery & implants",
  "Children’s dentistry",
  "Preventive dental care",
  "Cosmetic dentistry",
];
export function Treatments({ limit }) {
  return (
    <div className="treatment-list">
      {services.slice(0, limit || services.length).map((s, i) => (
        <Link className="treatment-row" href={serviceUrl(s)} key={s.head}>
          <span className="number">0{i + 1}</span>
          <div>
            <h3>{names[i] || s.head}</h3>
            <p>
              {s.defi
                .slice(0, 3)
                .map((x) => x.Label.replace("Painless ", ""))
                .join(" · ")}
            </p>
          </div>
          <Arrow />
        </Link>
      ))}
    </div>
  );
}
export function Team() {
  return (
    <div className="team-grid">
      {[
        [
          "Dr. Pramod Narsinghani",
          "Head Dentist & Owner",
          "MDS · Oral surgery & implantology",
          "avatar3.jpg",
        ],
        [
          "Dr. Uma Suresh",
          "Senior Consultant",
          "BDS · Cosmetic dental care",
          "avatar2.jpg",
        ],
        [
          "Dr. Ravindra Suhag",
          "Consultant",
          "Bachelor of Dental Surgery",
          "avatar1.jpg",
        ],
      ].map(([n, r, q, img]) => (
        <article key={n}>
          <Photo src={"/image/avatars/" + img} alt={n} />
          <span className="eyebrow">{r}</span>
          <h3>{n}</h3>
          <p>{q}</p>
        </article>
      ))}
    </div>
  );
}
export function Faq() {
  return (
    <div className="faqs">
      {[
        [
          "How do I book a visit?",
          "Call or WhatsApp our team, or use the appointment request form. The clinic will confirm availability with you; submitting a request does not confirm a booking.",
        ],
        [
          "What should I bring to my first appointment?",
          "Bring any previous dental records or X-rays you have, along with a list of current medicines. Let the dentist know about any medical conditions or concerns.",
        ],
        [
          "Can I visit if I am nervous about treatment?",
          "Tell our team when you book. You can discuss your concerns and ask the dentist to explain the proposed care before deciding how to proceed.",
        ],
        [
          "How much will my treatment cost?",
          "The cost depends on the examination and treatment plan. Contact the clinic to discuss a consultation and ask for an estimate before treatment.",
        ],
      ].map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function PageIntro({ label, title, children }) {
  return (
    <section className="page-intro wrap">
      <div className="eyebrow">{label}</div>
      <h1>{title}</h1>
      <p className="intro-text">{children}</p>
    </section>
  );
}
