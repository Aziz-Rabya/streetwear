"use client"
import { useState } from "react"
import Nav from "@/components/Nav"
import Image from "next/image"

const product = {
  name: "Oversized Black Hoodie",
  price: 89,
  colors: [
    { name: "Black", value: "#111111" },
    { name: "Grey", value: "#777777" },
    { name: "Cream", value: "#E8E2D5" },
  ],
}

const [selectedColor, setSelectedColor] = useState("Black") 

const page = () => {
  return (
    <main>
      <Nav />
      <div>
        <div>
          <Image
            src="/images/collection1.jpeg"
            alt="hoodie"
            width={400}
            height={500}
          />
           <Image
            src="/images/collection1.jpeg"
            alt="hoodie"
            width={400}
            height={500}
          />
           <Image
            src="/images/collection1.jpeg"
            alt="hoodie"
            width={400}
            height={500}
          />
        </div>
        <div>
          <div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
          <div>
            <div className="flex gap-3">
              {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                aria-label={color.name}
                className={`h-8 w-8 rounded-full border ${
                selectedColor === color.name
                ? "border-white"
                : "border-white/20"
              }`}
              style={{ backgroundColor: color.value }}
              />
             ))}
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default page
