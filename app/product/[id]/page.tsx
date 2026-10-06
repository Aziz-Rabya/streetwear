"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Image from "next/image";
import { useParams } from "next/navigation";
import { products } from "@/constants/products";

const page = () => {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("M");

  const params = useParams();
  const productId = params.id;

  const product = products.find((product) => product.id === productId);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Nav />
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 aspect-[6/7] overflow-hidden rounded-lg bg-white/5">
            <Image
              src= {product.src}
              alt="hoodie main"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white/5">
            <Image
              src= {product.src}
              alt="hoodie detail"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white/5">
            <Image
              src= {product.src}
              alt="hoodie detail"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="flex flex-col lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            New Arrival
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight lg:text-5xl">
            {product.title}
          </h1>
          <p className="mt-4 text-2xl font-light text-neutral-300">
            ${product.price}
          </p>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400">
            {product.description}
          </p>

          {/* Colors */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-neutral-400">
                Color
              </span>
              <span className="text-xs text-neutral-300">{selectedColor}</span>
            </div>
            <div className="mt-4 flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={color.name}
                  className={`h-9 w-9 rounded-full ring-1 ring-offset-2 ring-offset-neutral-950 transition-all ${
                    selectedColor === color.name
                      ? "ring-white"
                      : "ring-transparent hover:ring-white/40"
                  }`}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-neutral-400">
                Size
              </span>
              <button className="text-xs text-neutral-400 underline underline-offset-4 hover:text-white">
                Size guide
              </button>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-md border py-3 text-sm transition-colors ${
                    selectedSize === size
                      ? "border-white bg-white text-neutral-950"
                      : "border-white/15 text-neutral-300 hover:border-white/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button className="mt-10 w-full rounded-full bg-white py-4 text-sm font-medium uppercase tracking-widest text-neutral-950 transition-colors hover:bg-neutral-200">
            Add to Bag — ${product.price}
          </button>
          <p className="mt-4 text-center text-xs text-neutral-500">
            Free shipping on orders over $100
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;