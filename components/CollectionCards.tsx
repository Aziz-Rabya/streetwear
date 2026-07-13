import Image from "next/image";
import {Button} from "./ui/button";

const CollectionCard = ({ name, alt, text, image, button, className = "" }) => {
  return (
    <div className={`group relative w-full h-full overflow-hidden rounded-xl ${className}`}>
      <Image
        src={image}
        alt={alt}
        fill
        className="
        object-cover
        grayscale
        transition-all
        duration-1500
        ease-in-out
        group-hover:grayscale-0
        "
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute bottom-6 left-6 z-10 text-white">
        <p className="text-2xl font-bold">{name}</p>
        <p>{text}</p>

        <Button variant="secondary" size="lg" className="mt-4 bg-transparent backdrop-blur border-white text-black font-bold hover:bg-white hover:text-black">
          {button}
        </Button>
      </div>
    </div>
  );
};
export default CollectionCard;