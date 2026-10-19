import { Founder } from "@/components/redesign/Clinic";
import { Gallery, Reviews } from "@/components/redesign/Enhancements";
import Seo from "@/components/redesign/Seo";
import { PageIntro, Photo, Team, Cta } from "@/components/redesign/Clinic";
export default function About() {
  return (
    <>
      <Seo
        title="Our Clinic & Dentists | Dental Facets, Gurugram"
        description="Meet the Dental Facets team and explore our Sector 56, Gurugram clinic. Learn about our approach to personal, informed dental care."
        path="/About"
      />
      <PageIntro
        label="OUR CLINIC"
        title={
          <>
            A personal approach.
            <br />
            <em>In every detail.</em>
          </>
        }
      >
        Dental care begins with trust. We make space for your questions, your
        concerns, and the care that is right for you.
      </PageIntro>
      <section className="wrap about-image">
        <Photo
          src="/image/webImages/welDenFac.webp"
          alt="Inside the Dental Facets clinic in Gurugram"
          priority
        />
      </section>
      <section className="section wrap split">
        <div>
          <div className="eyebrow">OUR APPROACH</div>
          <h2>
            Your comfort.
            <br />
            Your questions.
            <br />
            <em>Your care.</em>
          </h2>
        </div>
        <div>
          <p className="large-text">
            We believe understanding your treatment is part of receiving good
            care.
          </p>
          <p>
            Our team offers preventive, restorative, and cosmetic dental
            treatments, with specialist consultations for more complex needs. We
            discuss your concerns and explain recommended treatment before you
            decide on your next step.
          </p>
          <p>
            Visit us at our Sector 56 clinic in Gurugram. Consultations are also
            available at Sehgal Neo Hospital in Paschim Vihar, New Delhi;
            contact us to confirm availability at your preferred location.
          </p>
        </div>
      </section>
      <Founder />
      <section className="section wrap" id="team">
        <div className="section-heading">
          <div>
            <div className="eyebrow">MEET YOUR DENTISTS</div>
            <h2>
              Care is personal.
              <br />
              <em>So are we.</em>
            </h2>
          </div>
        </div>
        <Team />
      </section>
      <Gallery />
      <Reviews />
      <Cta />
    </>
  );
}
