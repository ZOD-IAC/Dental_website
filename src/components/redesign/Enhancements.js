import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Photo, Arrow, serviceUrl } from "./Clinic";
import services from "@/Data/services.json";
import reviews from "@/Data/reviews.json";

// Native dialog provides modal focus containment, Escape and focus restoration.
function Dialog({ open, onClose, label, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, [open]);
  return (
    <dialog
      className="clinic-dialog"
      ref={ref}
      aria-label={label}
      onCancel={onClose}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dialog-inner">
        <button
          type="button"
          autoFocus
          className="dialog-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>
        {children}
      </div>
    </dialog>
  );
}

const highlights = [
  [
    "Dental implants",
    "implant.webp",
    4,
    "Explore options for replacing missing teeth. A consultation helps establish whether implants are suitable for you.",
  ],
  [
    "Teeth whitening",
    "whitening.webp",
    7,
    "Discuss professional whitening options, suitability, and expected results with your dentist.",
  ],
  [
    "Root canal treatment",
    "root-canal.webp",
    1,
    "Learn how treatment of the inside of a tooth may help preserve it when the pulp is infected or damaged.",
  ],
  [
    "Crowns & bridges",
    "crowns.webp",
    2,
    "Explore restorations for damaged teeth and options for replacing missing teeth.",
  ],
  [
    "Oral surgery",
    "oral-surgery.webp",
    4,
    "Arrange an assessment for wisdom teeth, extractions, and other oral surgery concerns.",
  ],
  [
    "Braces & aligners",
    "aligners.webp",
    3,
    "Discuss tooth alignment, your bite, and the options that may suit your needs.",
  ],
];
export function ServiceHighlights() {
  const [selected, setSelected] = useState(null);
  return (
    <section className="section wrap">
      <div className="section-heading">
        <div>
          <div className="eyebrow">A CLOSER LOOK AT YOUR OPTIONS</div>
          <h2>
            Find care for
            <br />
            <em>your smile.</em>
          </h2>
        </div>
        <p>Select a treatment for a quick introduction.</p>
      </div>
      <div className="highlight-grid">
        {highlights.map((x, i) => (
          <button
            type="button"
            className="highlight-card"
            key={x[0]}
            onClick={() => setSelected(i)}
            aria-haspopup="dialog"
          >
            <Photo src={"/image/generated/" + x[1]} alt={x[0]} />
            <span>
              <span className="number">0{i + 1}</span>
              <strong>{x[0]}</strong>
              <Arrow />
            </span>
          </button>
        ))}
      </div>
      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        label={
          selected !== null ? highlights[selected][0] : "Treatment information"
        }
      >
        {selected !== null && (
          <>
            <Photo
              src={"/image/generated/" + highlights[selected][1]}
              alt={highlights[selected][0]}
            />
            <div className="dialog-copy">
              <div className="eyebrow">TREATMENT INTRODUCTION</div>
              <h2>{highlights[selected][0]}</h2>
              <p>{highlights[selected][3]}</p>
              <p className="form-note">
                Your dentist will explain suitability, alternatives, and costs
                following an assessment.
              </p>
              <Link
                className="button"
                href={serviceUrl(services[highlights[selected][2]])}
                onClick={() => setSelected(null)}
              >
                Read treatment details <Arrow />
              </Link>
            </div>
          </>
        )}
      </Dialog>
    </section>
  );
}

const gallery = [
  ["display.webp", "Dental treatment room"],
  ["About1img.webp", "Dental chair at Dental Facets"],
  ["About2img_.webp", "Treatment room lighting and equipment"],
  ["about2img.webp", "Clinic treatment area"],
  ["about3img.webp", "Reception and waiting area"],
  ...Array.from({ length: 16 }, (_, i) => [
    "gallery" + (i + 1) + ".webp",
    "Inside Dental Facets · clinic view " + (i + 1),
  ]),
  ["OurStory.webp", "Dental care facilities"],
  ["welDenFac.webp", "Welcome to the clinic"],
];
export function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState(null);
  function shift(n) {
    setActive((a) => (a + n + gallery.length) % gallery.length);
  }
  return (
    <section className="section wrap" id="gallery">
      <div className="section-heading">
        <div>
          <div className="eyebrow">TAKE A LOOK AROUND</div>
          <h2>
            A familiar place.
            <br />
            <em>Before you arrive.</em>
          </h2>
        </div>
        <p>Explore the clinic. Select a photo to enlarge it.</p>
      </div>
      <div className="clinic-gallery">
        {gallery
          .slice(0, expanded ? gallery.length : 6)
          .map(([src, alt], i) => (
            <button
              className="gallery-thumb"
              type="button"
              key={src}
              onClick={() => setActive(i)}
              aria-label={"Enlarge " + alt}
              aria-haspopup="dialog"
            >
              <Photo src={"/image/webImages/" + src} alt={alt} />
              <span aria-hidden="true">↗</span>
            </button>
          ))}
      </div>
      <button
        type="button"
        className="text-link gallery-expand"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded
          ? "Show fewer photos"
          : "Explore all " + gallery.length + " photos"}{" "}
        <span aria-hidden="true">{expanded ? "−" : "+"}</span>
      </button>
      <Dialog
        open={active !== null}
        onClose={() => setActive(null)}
        label="Clinic photo gallery"
      >
        {active !== null && (
          <div
            className="lightbox"
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                shift(-1);
              }
              if (e.key === "ArrowRight") {
                e.preventDefault();
                shift(1);
              }
            }}
          >
            <Photo
              src={"/image/webImages/" + gallery[active][0]}
              alt={gallery[active][1]}
            />
            <div className="lightbox-controls">
              <button
                type="button"
                onClick={() => shift(-1)}
                aria-label="Previous photo"
              >
                ←
              </button>
              <p>
                {gallery[active][1]}
                <small>
                  {active + 1} / {gallery.length}
                </small>
              </p>
              <button
                type="button"
                onClick={() => shift(1)}
                aria-label="Next photo"
              >
                →
              </button>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}

export function Reviews() {
  const [index, setIndex] = useState(0);
  const initials = (n) =>
    n
      .replace(/^(Mrs\.|Mr\.|Dr\.|Master)\s*/i, "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((x) => x[0])
      .join("")
      .toUpperCase();
  return (
    <section className="reviews-section section" id="reviews">
      <div className="wrap">
        <div className="section-heading reviews-heading">
          <div>
            <div className="eyebrow">PATIENT TESTIMONIALS</div>
            <h2>
              What our
              <br />
              <em>patients say.</em>
            </h2>
          </div>
          <div>
            <div className="review-label">
              PATIENT REVIEWS <span aria-hidden="true">✦</span>
            </div>
            <p>Personal experiences, in their own words.</p>
            <div className="review-controls">
              <button
                type="button"
                aria-label="Previous reviews"
                onClick={() =>
                  setIndex((index - 1 + reviews.length) % reviews.length)
                }
              >
                ←
              </button>
              <span>
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(reviews.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                aria-label="Next reviews"
                onClick={() => setIndex((index + 1) % reviews.length)}
              >
                →
              </button>
            </div>
          </div>
        </div>
        <div className="review-card-grid" aria-live="polite" aria-atomic="true">
          {[0, 1, 2].map((offset) => {
            const r = reviews[(index + offset) % reviews.length];
            return (
              <article className="patient-review-card" key={r.name}>
                <span className="review-quote-icon" aria-hidden="true">
                  “
                </span>
                <span className="review-card-label">PATIENT TESTIMONIAL</span>
                <blockquote>
                  <p>{r.quote}</p>
                </blockquote>
                <div className="review-author">
                  <span className="review-avatar" aria-hidden="true">
                    {initials(r.name)}
                  </span>
                  <div>
                    <h3>{r.name}</h3>
                    <span>Dental Facets patient</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="reviews-note">
          Feedback retained from the clinic’s website. Individual experiences
          and treatment outcomes vary.
        </p>
      </div>
    </section>
  );
}

export function EmailAppointment() {
  const [status, setStatus] = useState("idle");
  const [step, setStep] = useState(0);
  const formRef = useRef(null);
  function advance() {
    const inputs = formRef.current.querySelectorAll(
      '[data-step="0"] input,[data-step="0"] select',
    );
    for (const input of inputs) {
      if (!input.reportValidity()) return;
    }
    setStep(1);
  }

  const [message, setMessage] = useState("");
  const configured = Boolean(process.env.NEXT_PUBLIC_FORM_KEY);
  const minDate = new Date().toLocaleDateString("en-CA");
  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (step === 0) {
      advance();
      return;
    }
    if (!form.reportValidity()) return;
    if (!configured) {
      setStatus("error");
      setMessage(
        "Online email requests are not configured yet. Please call or email the clinic directly.",
      );
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    if (data.botcheck) return;
    setStatus("sending");
    setMessage("");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          Location: "Dental Facets · Sector 56, Gurugram",
          access_key: process.env.NEXT_PUBLIC_FORM_KEY,
          subject: "Dental Facets — appointment request",
          from_name: "Dental Facets website",
        }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      setStatus("success");
      setMessage(
        "Your request was sent. The clinic will contact you to confirm availability.",
      );
      form.reset();
      setStep(0);
    } catch {
      setStatus("error");
      setMessage(
        "We could not send your request. Your details are still here; please try again, call, or email the clinic.",
      );
    } finally {
      clearTimeout(timer);
    }
  }
  return (
    <section className="wrap email-section" id="email-appointment">
      <div className="email-intro">
        <div className="eyebrow">EMAIL APPOINTMENT REQUEST</div>
        <h2>
          A few details.
          <br />
          <em>A personal reply.</em>
        </h2>
        <p>
          Request a visit to our Sector 56 clinic. Our team will follow up to
          confirm availability.
        </p>
        <Photo
          src="/image/webImages/welDenFac.webp"
          alt="Dental Facets reception in Sector 56"
        />
        <div className="email-clinic-info">
          <strong>Dental Facets · Sector 56</strong>
          <p>
            560-P, behind Jalvayu Towers, Gurugram
            <br />
            Mon–Sat · 10 am–7 pm
          </p>
          <a className="text-link" href="tel:+918447057806">
            Prefer to call? +91 84470 57806 ↗
          </a>
        </div>
      </div>
      <div className="appointment-panel email-panel">
        <div className="form-step-header" role="status" aria-live="polite">
          <span className="eyebrow">STEP {step + 1} OF 2</span>
          <span>{step === 0 ? "Your details" : "Your visit"}</span>
        </div>
        <div className="form-step-track" aria-hidden="true">
          <span className="active" />
          <span className={step === 1 ? "active" : ""} />
        </div>
        <h3>
          {step === 0 ? "Let’s get to know you." : "Tell us about your visit."}
        </h3>
        <p className="form-note">
          Required fields are marked *. Appointments are for Sector 56 only.
        </p>
        {!configured && (
          <p className="form-status" role="status">
            Online email requests are not enabled yet.{" "}
            <a href="mailto:dentalfacets2016@gmail.com">
              Email the clinic directly ↗
            </a>
          </p>
        )}
        <form
          ref={formRef}
          onSubmit={submit}
          aria-busy={status === "sending"}
          noValidate
        >
          <fieldset disabled={status === "sending"}>
            <div className="form-grid" data-step="0" hidden={step !== 0}>
              <div>
                <label htmlFor="email-fullname">Full name *</label>
                <input
                  id="email-fullname"
                  name="FullName"
                  required
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  pattern=".*\S.*"
                />
              </div>
              <div>
                <label htmlFor="email-phone">Contact number *</label>
                <input
                  id="email-phone"
                  name="Phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  pattern="[+0-9 ()-]{10,20}"
                  onInput={(e) => {
                    const n = e.currentTarget.value.replace(/\D/g, "").length;
                    e.currentTarget.setCustomValidity(
                      n >= 10 && n <= 15 ? "" : "Enter 10 to 15 digits.",
                    );
                  }}
                />
              </div>
              <div className="full-width">
                <label htmlFor="email-address">Email address *</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={150}
                />
              </div>
              <div>
                <label htmlFor="email-age">Age *</label>
                <input
                  id="email-age"
                  name="Age"
                  type="number"
                  required
                  min="0"
                  max="120"
                  step="1"
                />
              </div>
              <div>
                <label htmlFor="email-gender">Gender *</label>
                <select
                  id="email-gender"
                  name="Gender"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
            </div>
            <div className="form-grid" data-step="1" hidden={step !== 1}>
              <div className="full-width">
                <label htmlFor="email-treatment">Appointment for *</label>
                <select
                  id="email-treatment"
                  name="AppointmentFor"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a reason
                  </option>
                  <option>Consultation / check-up</option>
                  {highlights.map((x) => (
                    <option key={x[0]}>{x[0]}</option>
                  ))}
                  <option>Follow-up</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="email-date">Preferred date</label>
                <input
                  id="email-date"
                  name="PreferredDate"
                  type="date"
                  min={minDate}
                />
              </div>
              <div>
                <label htmlFor="email-time">Preferred time</label>
                <select id="email-time" name="PreferredTime">
                  <option>Any available time</option>
                  <option>10 am–1 pm</option>
                  <option>1 pm–4 pm</option>
                  <option>4 pm–7 pm</option>
                </select>
              </div>
              <div className="full-width">
                <label htmlFor="email-note">Message (optional)</label>
                <textarea
                  id="email-note"
                  name="Message"
                  rows={2}
                  maxLength={1000}
                />
              </div>
              <label className="consent full-width">
                <input
                  type="checkbox"
                  name="ContactConsent"
                  value="Agreed"
                  required
                />
                <span>
                  I agree to share my details with the clinic through its form
                  provider and to be contacted about this request. *
                </span>
              </label>
            </div>
            <input
              type="hidden"
              name="Location"
              value="Dental Facets · Sector 56, Gurugram"
            />
            <div className="honeypot" aria-hidden="true">
              <input
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-label="Leave blank"
              />
            </div>
            <div className="form-step-actions">
              {step === 1 && (
                <button
                  type="button"
                  className="text-link"
                  onClick={() => setStep(0)}
                >
                  ← Back
                </button>
              )}
              {step === 0 ? (
                <button type="button" className="button" onClick={advance}>
                  Next: your visit <Arrow />
                </button>
              ) : (
                <button
                  className="button"
                  type="submit"
                  disabled={!configured || status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send request"} <Arrow />
                </button>
              )}
            </div>
            <p className="form-note">
              A request is not a confirmed booking. Please don’t include
              detailed medical records.
            </p>
          </fieldset>
          <p
            className={"form-status " + status}
            role={status === "error" ? "alert" : "status"}
          >
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
