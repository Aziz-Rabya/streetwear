import { Button } from "@/components/ui/button"
import Nav from "@/components/Nav"
import ProductCard from "@/components/ProductCard"
import Pagination from "@/components/Pagination"
import Footer from "@/components/Footer"
import "boxicons/css/boxicons.min.css"
import "../globals.css"

const categories = [
  { name: "ALL", count: 24 },
  { name: "HOODIES", count: 8 },
  { name: "T-SHIRTS", count: 7 },
  { name: "PANTS", count: 4 },
  { name: "SNEAKERS", count: 3 },
  { name: "SHORTS", count: 2 },
]

const products = [
  {
    id: "1",
    src: "/images/collection1.jpeg",
    alt: "Black oversized hoodie",
    title: "Oversized Black Hoodie",
    price: 89,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    alt: "White graphic t-shirt",
    title: "Essential Graphic Tee",
    price: 49,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    alt: "Black cargo pants",
    title: "Utility Cargo Pants",
    price: 110,
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    alt: "Brown jacket",
    title: "Washed Canvas Jacket",
    price: 135,
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    alt: "Streetwear clothing",
    title: "Urban Essentials",
    price: 75,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    alt: "Black t-shirt",
    title: "Shadow Graphic Tee",
    price: 49,
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    alt: "Streetwear clothing",
    title: "Urban Essentials",
    price: 75,
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    alt: "Black t-shirt",
    title: "Shadow Graphic Tee",
    price: 49,
  },
]

const page = () => {
  return (
    <main className="flex flex-col text-white">
      <Nav />

      <div className="mx-auto w-full max-w-[2000px] px-6">
        {/* Header */}
        <div className="my-20 mx-15 flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <h1 className="text-7xl font-bold tracking-tight">Shop</h1>

          <p className="max-w-md text-lg text-white/60 md:text-right">
            Architectural silhouettes, extreme grammage textiles, and
            technical subversions. Manufactured in limited micro-batches.
          </p>
        </div>

        {/* Categories + Toolbar */}
        <div className="mb-9 mx-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Categories */}
          <div className="min-w-0 overflow-x-auto">
            <div className="flex w-max gap-6 border-b border-white/10">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  className={`pb-3 text-sm font-medium tracking-wide transition-colors ${
                    index === 0
                      ? "border-b-2 border-white text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {category.name}

                  <span className="ml-1 text-xs text-white/30">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex shrink-0 items-center gap-3 text-sm text-white/70">
            <button className="flex items-center gap-2 transition-colors hover:text-white">
              <i className="bx bx-filter" />
              Filter
            </button>

            <select className="rounded border border-white/20 bg-black px-3 py-1.5">
              <option>New Arrivals</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>

            <div className="flex overflow-hidden rounded border border-white/20">
              <button className="bg-white/10 px-2 py-1.5">
                <i className="bx bx-grid-alt" />
              </button>

              <button className="px-2 py-1.5">
                <i className="bx bx-list-ul" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-6 px-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            src={product.src}
            alt={product.alt}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>

      <Pagination />

      <Footer />
    </main>
  )
}

export default page
