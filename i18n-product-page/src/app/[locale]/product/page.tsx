import Image from "next/image";

const ProductPage: React.FC = () => {

  return (
    <>
      <main className="py-10">
        <article itemScope itemType="https://schema.org/Product" className="max-w-6xl mx-auto px-4">
          <section className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <figure>
                <Image
                  src="/t-shirt.png"
                  alt="Black t-shirt front view"
                  itemProp="image"
                  className="rounded shadow"
                  width={400}
                  height={400}
                />
                <figcaption className="text-sm text-center text-foreground-muted mt-1">
                  Front View
                </figcaption>
              </figure>
              {/* <figure>
                <Image
                  src="/t-shirt.png"
                  alt="Black t-shirt back view"
                  itemProp="image"
                  className="rounded shadow"
                  width={400}
                  height={400}
                />
                <figcaption className="text-sm text-center text-foreground-muted mt-1">
                  Back View
                </figcaption>
              </figure> */}
            </div>

            <div className="bg-surface p-6 rounded-lg shadow-md space-y-4">
              <h1 itemProp="name" className="text-3xl font-bold text-foreground">
                Black T-Shirt
              </h1>

              <p
                className="text-xl font-semibold text-accent"
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <span itemProp="priceCurrency" content="USD">$</span>
                <span itemProp="price">14.99</span>
              </p>

              <p itemProp="description" className="text-foreground-muted">
                A classic black t-shirt made from 100% ringspun cotton. Lightweight,
                breathable, and perfect for bulk orders or brand printing.
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="size" className="block font-medium text-sm mb-1">
                    Size
                  </label>
                  <select
                    name="size"
                    id="size"
                    required
                    className="w-full border border-slate-300 rounded px-3 py-2"
                  >
                    <option value="">Select size</option>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block font-medium text-sm mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    defaultValue="1"
                    className="w-24 border border-slate-300 rounded px-3 py-2"
                  />
                </div>
                <button
                  type="button"
                  className="w-full cursor-pointer bg-accent hover:bg-accent-hover text-background py-2 rounded font-medium transition"
                >
                  Add to Cart
                </button>
              </form>
              <p className="text-success text-sm">
                <strong>Availability:</strong> <span itemProp="availability">In Stock</span>
              </p>
            </div>
          </section>

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