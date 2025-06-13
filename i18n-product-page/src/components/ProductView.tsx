'use client'
import Image from "next/image";
import { useState } from "react";

interface ProductImgData { id: number, src: string }

const productImgData: ProductImgData[] = [
  { id: 1, src: "/t-shirt.png" },
  { id: 2, src: "/male-model.png" },
  { id: 3, src: "/female-model.png" },
]

const ProductView: React.FC = () => {
  const [selected, setSelected] = useState<ProductImgData>(productImgData[0]);
  return (
    <section className="grid lg:grid-cols-2 gap-10">
      <div>
        <figure className="flex flex-col justify-between items-center h-full w-full ">
          <Image
            src={selected.src}
            alt="Black t-shirt front view"
            itemProp="image"
            className="rounded shadow object-cover h-full aspect-20/22"
            width={512}
            height={768}
          />
          <figcaption className="text-sm text-center text-foreground-muted mt-1 sr-only">
            Front View
          </figcaption>
        </figure>
      </div>

      <div className="flex flex-col gap-12">
        <div className="bg-surface p-6 rounded-lg shadow-md space-y-4">
          <h1 itemProp="name" className="text-3xl font-bold text-foreground">
            Classic Black T-Shirt
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
        <div className="flex justify-around flex-wrap order-first lg:order-last">
          {productImgData.map((item) =>
            <figure
              key={item.id}
              onClick={() => setSelected(item)}
              className={`w-[25%] max-w-32 hover:opacity-100 ${selected.id === item.id ? "" : " opacity-60"}`}
            >
              <Image
                src={item.src}
                alt="Black t-shirt front view"
                itemProp="image"
                className="rounded shadow aspect-square object-cover"
                width={128}
                height={192}
              />
            </figure>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProductView;