import Link from "next/link";
import services from "@/Data/services.json";
import Seo from "@/components/redesign/Seo";
import { Photo, Cta, serviceUrl } from "@/components/redesign/Clinic";
export function getStaticPaths() {
  return {
    paths: services.map((s) => ({ params: { services: s.head } })),
    fallback: false,
  };
}
export function getStaticProps({ params }) {
  const service = services.find((s) => s.head === params.services);
  return service ? { props: { service } } : { notFound: true };
}
export default function Treatment({ service }) {
  return (
    <>
      <Seo
        title={service.head + " in Gurugram | Dental Facets"}
        description={service.description}
        path={serviceUrl(service)}
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.dentalfacets.in/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Treatments",
              item: "https://www.dentalfacets.in/Service",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: service.head,
              item: "https://www.dentalfacets.in" + serviceUrl(service),
            },
          ],
        }}
      />
      <section className="page-intro wrap">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/Service">Treatments</Link>
        </nav>
        <div className="eyebrow">DENTAL FACETS · TREATMENTS</div>
        <h1>{service.head}</h1>
        <p className="intro-text">{service.description}</p>
      </section>
      <section className="wrap treatment-layout">
        <aside>
          <div className="eyebrow">IN THIS SECTION</div>
          <nav aria-label="Treatment topics">
            {service.defi.map((x, i) => (
              <a href={"#treatment-" + i} key={x.key || i}>
                {x.Label.replace("Painless ", "")}
              </a>
            ))}
          </nav>
          <Link href="/Contact#appointment" className="button">
            Discuss your care ↗
          </Link>
        </aside>
        <div>
          <Photo
            src={service.img}
            alt={service.head + " at Dental Facets"}
            priority
          />
          {service.detail && <p className="large-text">{service.detail}</p>}
          {service.detail2 && <p>{service.detail2}</p>}
          {service.defi.map((x, i) => (
            <article
              className="treatment-detail"
              id={"treatment-" + i}
              key={x.key || i}
            >
              <div className="eyebrow">
                {String(i + 1).padStart(2, "0")} / TREATMENT GUIDE
              </div>
              <h2>{x.Label.replace("Painless ", "")}</h2>
              <div className="guide-content">
                <div>
                  <p>{x.para}</p>
                  {x.para2 && <p>{x.para2}</p>}
                </div>
                <figure className="guide-image">
                  <Photo
                    src={x.img}
                    alt={x.Label.replace("Painless ", "") + " illustration"}
                  />
                  <figcaption>{x.Label.replace("Painless ", "")}</figcaption>
                </figure>
              </div>
            </article>
          ))}
          <p className="care-note">
            This page provides general information. Your dentist will advise on
            suitability, treatment options, and expected outcomes after an
            assessment.
          </p>
          <Link className="text-link" href="/Service">
            ← All treatments
          </Link>
        </div>
      </section>
      <Cta />
    </>
  );
}
