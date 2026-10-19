import Link from "next/link";
import Seo from "@/components/redesign/Seo";
import { PageIntro } from "@/components/redesign/Clinic";
export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Dental Facets"
        description="This page could not be found. Explore Dental Facets treatments or contact the clinic."
        noindex
      />
      <PageIntro
        label="404 · PAGE NOT FOUND"
        title={
          <>
            Let’s get you
            <br />
            <em>back on track.</em>
          </>
        }
      >
        The page you’re looking for may have moved.
      </PageIntro>
      <div className="wrap section">
        <Link className="button" href="/">
          Back to home ↗
        </Link>
      </div>
    </>
  );
}
