import RoundCarousel from "@/components/carousel";

const Story = () => {
  return (
    <section className="flex items-center justify-between min-h-screen px-16 gap-16">
      {/* Left Side */}
      <div className="flex-1 text-white">
        <h1 className="text-6xl unifrakturmaguntia-regular mb-12">
          OUR STORY
        </h1>

        <p className="text-2xl max-w-2xl leading-relaxed">
          Phoenixwear was born from the belief that growth comes through
          reinvention. Inspired by the resilience of the phoenix, we create
          timeless pieces that blend modern design with everyday confidence.
          More than a clothing brand, Phoenixwear is a symbol of embracing
          change, rising stronger, and expressing who you are without saying a
          word.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center items-center">
        <RoundCarousel className="absolute" />
      </div>
    </section>
  );
};

export default Story;
