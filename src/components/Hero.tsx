import heroBg from "../assets/hero-background.jpg";

const Hero = () => {
    return (
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            <img
                src={heroBg}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/70 to-black/95 pointer-events-none" />

            <div className="relative max-w-[600px] display-flex text-white text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-1 drop-shadow-lg">
                    Unlimited movies, TV shows, and more.
                </h1>
                <p className="sm:text-sm md:text-xl font-normal mb-8 opacity-90 drop-shadow-md">
                    Starts at $7.99. Cancel anytime.
                </p>
                <button className="bg-red-600 hover:bg-red-700 border-0 rounded-md text-white px-5 py-4 text-lg font-semibold cursor-pointer inline-flex items-center gap-2 transition-all duration-300 ease-out shadow-lg shadow-red-600/10 min-w-[200px] justify-center hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-600/50 focus-visible:outline-2 focus-visible:outline-white/80 focus-visible:outline-offset-2 active:translate-y-0 group">
                    Start Your Free Trial
                </button>
            </div>

        </div>
    )
}

export default Hero;