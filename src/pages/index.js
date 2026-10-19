import {
  Gallery,
  Reviews,
  ServiceHighlights,
} from "@/components/redesign/Enhancements";
import Link from "next/link";
import Seo, { origin } from "@/components/redesign/Seo";
import {
  Arrow,
  Photo,
  Treatments,
  Team,
  Cta,
  Faq,
  maps,
  phone,
  Founder,
  ToothMark,
} from "@/components/redesign/Clinic";
const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": origin + "/#clinic",
  name: "Dental Facets",
  url: origin,
  telephone: phone,
  image: origin + "/image/webImages/welDenFac.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "560-P, behind Jalvayu Towers, Block B, Sector 56",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122001",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ],
};
export default function Home() {
  return (
    <>
      <Seo
        title="Dental Facets | Dental Clinic in Sector 56, Gurugram"
        description="Visit Dental Facets in Sector 56, Gurugram for preventive, restorative and cosmetic dental care. Meet our dentists, explore treatments and request a visit."
        schema={schema}
      />
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="dot" />
            DENTAL CLINIC · SECTOR 56, GURUGRAM
          </div>
          <h1>
            Your smile.
            <br />
            Our dental
            <br />
            <em>expertise.</em>
          </h1>
          <p>
            From your first check-up to your next chapter.
            <br className="desktop" /> Thoughtful dental care, centred around
            you.
          </p>
          <div className="actions">
            <Link href="/Contact#appointment" className="button">
              Plan your visit <Arrow />
            </Link>
            <Link className="text-link" href="/Service">
              Explore treatments <span>→</span>
            </Link>
          </div>
          <div className="hero-note">
            <span>01 /</span>
            <p>
              Real conversations.
              <br />
              Care that feels personal.
            </p>
          </div>
        </div>
        <div className="hero-visual">
          <Photo
            src="/image/webImages/gallery9.webp"
            alt="Dental treatment room at Dental Facets, Gurugram"
            priority
          />
          <div className="image-label">
            <span>PREVENTIVE · RESTORATIVE · COSMETIC</span>
            <span>Dental care, Sector 56</span>
          </div>
          <div className="photo-tag">
            <ToothMark />
            Your smile.
            <br />
            <em>Our priority.</em>
          </div>
        </div>
      </section>
      <div className="care-strip">
        <div className="wrap">
          <span>Preventive & family care</span>
          <span>Restorative dentistry</span>
          <span>Smile & cosmetic care</span>
          <span>Specialist consultations</span>
        </div>
      </div>
      <section className="section wrap clinic-preview">
        <div className="eyebrow">A WARMER WELCOME TO DENTISTRY</div>
        <div className="split">
          <h2>
            Good care starts
            <br />
            with being <em>heard.</em>
          </h2>
          <div>
            <p className="large-text">
              Every smile has a story. We take the time to understand yours.
            </p>
            <p>
              At Dental Facets, your questions are part of the conversation.
              Meet our dentists, understand your options, and make an informed
              decision about your care.
            </p>
            <Link href="/About" className="text-link">
              Get to know our clinic <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <Founder />
      <ServiceHighlights />
      <section className="treatment-section">
        <div className="wrap section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">CARE, IN ALL ITS FACETS</div>
              <h2>
                For the everyday.
                <br />
                And the <em>life-changing.</em>
              </h2>
            </div>
            <p>
              From routine visits to specialist treatment,
              <br />
              find the right place to start.
            </p>
          </div>
          <Treatments limit={4} />
          <Link className="text-link section-link" href="/Service">
            View all treatments <Arrow />
          </Link>
        </div>
      </section>
      <section className="section wrap experience">
        <Photo
          src="/image/webImages/welDenFac.webp"
          alt="Reception and waiting area at Dental Facets"
        />
        <div>
          <div className="eyebrow">YOUR VISIT, SIMPLIFIED</div>
          <h2>
            Walk in with questions.
            <br />
            Leave with <em>a plan.</em>
          </h2>
          {[
            [
              "01",
              "Tell us what brings you in",
              "A routine check-up, a concern, or a smile you have been thinking about.",
            ],
            [
              "02",
              "Understand your options",
              "Discuss the examination, recommendations, and costs with your dentist.",
            ],
            [
              "03",
              "Take the next step together",
              "Agree on a care plan that considers your needs and preferences.",
            ],
          ].map(([n, t, d]) => (
            <div className="step" key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">THE PEOPLE BEHIND YOUR CARE</div>
            <h2>
              Familiar faces.
              <br />
              <em>Thoughtful hands.</em>
            </h2>
          </div>
          <Link href="/About#team" className="text-link">
            Meet the team <Arrow />
          </Link>
        </div>
        <Team />
      </section>
      <section className="faq-section section">
        <div className="wrap split">
          <div>
            <div className="eyebrow">BEFORE YOUR VISIT</div>
            <h2>
              A few things
              <br />
              you may be <em>wondering.</em>
            </h2>
            <Link href="/Contact" className="text-link">
              Ask our team <Arrow />
            </Link>
          </div>
          <Faq />
        </div>
      </section>
      <section className="section wrap visit-preview">
        <div>
          <div className="eyebrow">YOUR NEIGHBOURHOOD CLINIC</div>
          <h2>
            Closer to home.
            <br />
            <em>Here for you.</em>
          </h2>
          <p>
            560-P, behind Jalvayu Towers,
            <br />
            Block B, Sector 56, Gurugram, Haryana 122001
          </p>
          <a
            className="text-link"
            href={maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <Arrow />
          </a>
        </div>
        <Photo
          src="/image/webImages/gallery11.webp"
          alt="Entrance and reception at the Dental Facets clinic"
        />
      </section>
      <Reviews />
      <Gallery />
      <section className="section wrap appointment-choice">
        <div>
          <div className="eyebrow">YOUR VISIT, YOUR WAY</div>
          <h2>
            Let’s find <em>a time.</em>
          </h2>
        </div>
        <div>
          <Link className="button" href="/Contact#email-appointment">
            Request by email ↗
          </Link>
          <Link className="text-link" href="/Contact#appointment">
            Request on WhatsApp ↗
          </Link>
        </div>
      </section>
      <Cta />
    </>
  );
}
