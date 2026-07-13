import React from 'react'
import CollectionCards from './CollectionCards'

const CollectionsList = [
  {
    name: "HOODIES",
    alt: "hoodies",
    text: "explore our latest hoodies collections",
    image: "/images/collection1.jpeg",
    button: "enter the 36 hoodies"
  },
  {
    name: "PANTS",
    alt: "pants",
    text: "explore our latest pants collections",
    image: "/images/collection2.jpeg",
    button: "explore now"
  },
  {
    name: "SNEAKERS",
    alt: "sneakers",
    text: "explore our latest sneakers collections",
    image: "/images/collection6.jpeg",
    button: "Buy Now"
  },
  {
    name: "SHORTS",
    alt: "shorts",
    text: "explore our latest shorts collections",
    image: "/images/collection4.jpeg",
    button: "Shop Now"
  },
  {
    name: "T-SHIRTS",
    alt: "t-shirts",
    text: "explore our latest t-shirts collections",
    image: "/images/collection3.jpeg",
    button: "Shop Now"
  },
]

const Collections = () => {
  return (
    <div className='flex flex-col gap-10 py-20 w-full '>
      <h1 className=' m-5 text-5xl font-bold phoenix text-white'>OUR COLLECTIONS</h1>
      <div className="parent gap-5 w-full">
        <div className="div1 h-[800px]">
          <CollectionCards
            name={CollectionsList[0].name}
            alt={CollectionsList[0].alt}
            text={CollectionsList[0].text}
            image={CollectionsList[0].image}
            button={CollectionsList[0].button}
          />
        </div>
        <div className="div2 h-[800px]">
          <CollectionCards
            name={CollectionsList[1].name}
            alt={CollectionsList[1].alt}
            text={CollectionsList[1].text}
            image={CollectionsList[1].image}
            button={CollectionsList[1].button}
          />
        </div>
        <div className="div3 h-[550px]">
          <CollectionCards
            name={CollectionsList[2].name}
            alt={CollectionsList[2].alt}
            text={CollectionsList[2].text}
            image={CollectionsList[2].image}
            button={CollectionsList[2].button}
          />
        </div>
        <div className="div4 h-[250px]">
          <CollectionCards
            name={CollectionsList[3].name}
            alt={CollectionsList[3].alt}
            text={CollectionsList[3].text}
            image={CollectionsList[3].image}
            button={CollectionsList[3].button}
          />
        </div>
        <div className="div5 h-[800px]">
          <CollectionCards
            name={CollectionsList[4].name}
            alt={CollectionsList[4].alt}
            text={CollectionsList[4].text}
            image={CollectionsList[4].image}
            button={CollectionsList[4].button}
          />
        </div>
      </div>
    </div>
  )
}

export default Collections