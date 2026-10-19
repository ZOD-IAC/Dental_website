import Head from "next/head";
export const origin = "https://www.dentalfacets.in";
export default function Seo({
  title,
  description,
  path = "/",
  noindex = false,
  schema,
}) {
  const url = origin + path;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href={url} key="canonical" />
      <meta
        name="robots"
        content={
          noindex ? "noindex,follow" : "index,follow,max-image-preview:large"
        }
        key="robots"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dental Facets" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={origin + "/image/webImages/welDenFac.webp"}
      />
      <meta name="twitter:card" content="summary_large_image" />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </Head>
  );
}
