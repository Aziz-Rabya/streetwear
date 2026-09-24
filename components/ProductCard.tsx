import Image from "next/image"

interface ProductCardProps {
  id: string
  src: string
  alt: string
  title: string
  price: number
}

const ProductCard = ({ id, src, alt, title, price }: ProductCardProps) => {
  return (
    <div className="group flex flex-col w-full h-auto">
      {/* Image wrapper */}
      <div className="relative aspect-square overflow-hidden bg-gray-900">
        <Image
          src={src}
          alt={alt}
          width={450}
          height={450}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick-add, appears on hover */}
        <button
          className="absolute inset-x-3 bottom-3 translate-y-2 bg-white text-black text-sm font-medium py-2.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick Add
        </button>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-3 mt-3">
        <h3 className="text-sm font-medium leading-tight">{title}</h3>
        <p className="text-sm text-white/60 shrink-0">${price}</p>
      </div>
    </div>
  )
}

export default ProductCard
