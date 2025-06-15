import type { Metadata } from "next";
import ProductView from "@/components/ProductView";
import { getMessages } from "next-intl/server";
import { createTranslator, useTranslations } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const messages = await getMessages();
  const { locale } = await params;
  const t = createTranslator({ locale, messages });

  return {
    title: t("Metadata.title"),
    description: t("Metadata.description"),
    keywords: t("Metadata.keywords").split(","),
    openGraph: {
      title: t("Metadata.title"),
      description: t("Metadata.description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("Metadata.title"),
      description: t("Metadata.description"),
    },
  };
}

const ProductPage: React.FC = () => {
  const t = useTranslations("ProductPage");
  return (
    <>
      <main className="container mx-auto py-12">
        <article
          itemScope
          itemType="https://schema.org/Product"
          className="max-w-6xl mx-auto px-4"
        >
          <ProductView />
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t("product_details")}
            </h2>
            <ul className="list-disc list-inside text-foreground-muted space-y-1">
              <li>{t("detail_1")}</li>
              <li>{t("detail_2")}</li>
              <li>{t("detail_3")}</li>
              <li>{t("detail_4")}</li>
              <li>{t("detail_5")}</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t("size_chart")}
            </h2>
            <table className="w-full bg-surface rounded shadow text-left">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-2">{t("chart_headers.size")}</th>
                  <th className="px-4 py-2">{t("chart_headers.chest")}</th>
                  <th className="px-4 py-2">{t("chart_headers.length")}</th>
                </tr>
              </thead>
              <tbody className="text-foreground-muted">
                <tr className="border-t">
                  <td className="px-4 py-2">{t("size_s")}</td>
                  <td className="px-4 py-2">34-36</td>
                  <td className="px-4 py-2">28</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">{t("size_m")}</td>
                  <td className="px-4 py-2">38-40</td>
                  <td className="px-4 py-2">29</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">{t("size_l")}</td>
                  <td className="px-4 py-2">42-44</td>
                  <td className="px-4 py-2">30</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">{t("size_xl")}</td>
                  <td className="px-4 py-2">46-48</td>
                  <td className="px-4 py-2">31</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mt-12" aria-labelledby="reviews-heading">
            <h2
              id="reviews-heading"
              className="text-2xl font-semibold text-foreground mb-4"
            >
              {t("customer_reviews")}
            </h2>

            <article
              className="bg-surface p-4 rounded shadow mb-4"
              itemProp="review"
              itemScope
              itemType="https://schema.org/Review"
              dir="ltr"
            >
              <p className="font-semibold text-foreground">
                <span itemProp="author">Alex R.</span>{" "}
                <span className="text-yellow-500">★★★★★</span>
              </p>
              <p itemProp="reviewBody" className="text-foreground-muted mt-2">
                Great quality and fits perfectly. My go-to for screen printing!
              </p>
            </article>

            <article className="bg-surface p-4 rounded shadow" dir="ltr">
              <p className="font-semibold text-foreground">
                Jess M. <span className="text-yellow-400">★★★★☆</span>
              </p>
              <p className="text-foreground-muted mt-2">
                Soft fabric, slightly long but great for layering.
              </p>
            </article>

            <span className="text-accent cursor-pointer hover:underline block mt-4">
              {t("review_prompt")}
            </span>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t("shipping_and_returns")}
            </h2>
            <p className="text-foreground-muted">
              {t.rich("shipping_info", {
                policyLink: (chunks) => (
                  <span className="text-accent cursor-pointer hover:underline">
                    {chunks}
                  </span>
                ),
              })}
            </p>
          </section>
        </article>
      </main>
    </>
  );
};

export default ProductPage;
