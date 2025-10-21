import popcornIcon from "../assets/Popcorn-bucket.png";

const PlanBanner = () => {
    return (
        <div className="mx-auto relative w-full px-4 py-4  flex items-center bg-transparent">
            <img
                src={popcornIcon}
                alt="Popcorn Bowl"
                className="relative h-25" />
                
            <div className="flex items-center text-white px-6 py-4 rounded-md ml-4 w-full bg-indigo-950">
                <div>
                    <h6 className="text-white">The Netflix you love for just $7.99.</h6>
                    <p>
                        Get our most affordable, ad-supported plan.
                    </p>
                </div>
                <div className="relative ml-auto">
                    <button className="bg-slate-500 px-4 py-2 rounded-md cursor-pointer">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default PlanBanner;