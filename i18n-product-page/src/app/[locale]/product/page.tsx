import type { Metadata } from "next";
import ProductView from "@/components/ProductView";


export const generateMetadata = (): Metadata => {
  return {
    title: "Classic Black T-Shirt | 100% Cotton Unisex Tee",
    description:
      "Soft, preshrunk, and perfect for screen printing — this unisex black t-shirt is made in the USA from 100% ringspun cotton. Available in multiple sizes.",
    keywords: [
      "black t-shirt",
      "unisex cotton tee",
      "screen printing shirt",
      "blank shirt for printing",
      "USA made t-shirt",
      "preshrunk black tee"
    ],
    openGraph: {
      title: "Classic Black T-Shirt | 100% Cotton Unisex Tee",
      description:
        "Soft, preshrunk, and perfect for screen printing — this unisex black t-shirt is made in the USA from 100% ringspun cotton.",
    },
    twitter: {
      card: "summary_large_image",
      title: "Classic Black T-Shirt | 100% Cotton Unisex Tee",
      description:
        "Unisex black tee, made in the USA. Comfortable, durable, and ideal for printing or embroidery.",
    },
  };
};

const ProductPage: React.FC = () => {

  return (
    <>
      <main className="container mx-auto py-12">
        <article itemScope itemType="https://schema.org/Product" className="max-w-6xl mx-auto px-4">
          <ProductView />
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Product Details</h2>
            <ul className="list-disc list-inside text-foreground-muted space-y-1">
              <li>100% ringspun cotton</li>
              <li>Preshrunk fabric</li>
              <li>Unisex fit</li>
              <li>Made in the USA</li>
              <li>Ideal for screen printing or embroidery</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Size Chart</h2>
            <table className="w-full bg-surface rounded shadow text-left">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-2">Size</th>
                  <th className="px-4 py-2">Chest (in)</th>
                  <th className="px-4 py-2">Length (in)</th>
                </tr>
              </thead>
              <tbody className="text-foreground-muted">
                <tr className="border-t">
                  <td className="px-4 py-2">Small</td>
                  <td className="px-4 py-2">34-36</td>
                  <td className="px-4 py-2">28</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Medium</td>
                  <td className="px-4 py-2">38-40</td>
                  <td className="px-4 py-2">29</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Large</td>
                  <td className="px-4 py-2">42-44</td>
                  <td className="px-4 py-2">30</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">XL</td>
                  <td className="px-4 py-2">46-48</td>
                  <td className="px-4 py-2">31</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mt-12" aria-labelledby="reviews-heading">
            <h2 id="reviews-heading" className="text-2xl font-semibold text-foreground mb-4">
              Customer Reviews
            </h2>

            <article
              className="bg-surface p-4 rounded shadow mb-4"
              itemProp="review"
              itemScope
              itemType="https://schema.org/Review"
            >
              <p className="font-semibold text-foreground">
                <span itemProp="author">Alex R.</span> <span className="text-yellow-500">★★★★★</span>
              </p>
              <p itemProp="reviewBody" className="text-foreground-muted mt-2">
                Great quality and fits perfectly. My go-to for screen printing!
              </p>
            </article>

            <article className="bg-surface p-4 rounded shadow">
              <p className="font-semibold text-foreground">
                Jess M. <span className="text-yellow-400">★★★★☆</span>
              </p>
              <p className="text-foreground-muted mt-2">
                Soft fabric, slightly long but great for layering.
              </p>
            </article>

            <span className="text-accent cursor-pointer hover:underline block mt-4">
              Write a review
            </span>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping & Returns</h2>
            <p className="text-foreground-muted">
              We offer fast and reliable shipping worldwide. Free returns within 30 days.
              See our{" "}
              <span className="text-accent cursor-pointer hover:underline">
                shipping policy
              </span>{" "}
              for more info.
            </p>
          </section>
        </article>
      </main>
    </>

  );
};

export default ProductPage;