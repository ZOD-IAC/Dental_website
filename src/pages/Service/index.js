import { ServiceHighlights } from "@/components/redesign/Enhancements";
import Seo from "@/components/redesign/Seo";
import { PageIntro, Treatments, Faq, Cta } from "@/components/redesign/Clinic";
export default function Services() {
  return (
    <>
      <Seo
        title="Dental Treatments in Gurugram | Dental Facets"
        description="Explore root canal treatment, implants, crowns, braces, preventive care and cosmetic dentistry at Dental Facets in Sector 56, Gurugram."
        path="/Service"
      />
      <PageIntro
        label="OUR TREATMENTS"
        title={
          <>
            Every smile.
            <br />
            <em>Every stage of care.</em>
          </>
        }
      >
        Explore our dental services, from everyday prevention to restorative
        treatment and specialist consultations.
      </PageIntro>
      <ServiceHighlights />
      <section className="wrap treatment-directory">
        <Treatments />
      </section>
      <section className="section wrap split">
        <div>
          <div className="eyebrow">NOT SURE WHERE TO START?</div>
          <h2>
            Start with
            <br />
            <em>a conversation.</em>
          </h2>
          <p>
            Our team can help you arrange a consultation to discuss your needs.
          </p>
        </div>
        <Faq />
      </section>
      <Cta />
    </>
  );
}
