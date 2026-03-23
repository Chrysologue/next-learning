import Image from "next/image"
import Link from "next/link"
export default function Hero(){
    return(
        <section className="bg-linear-to-tr from-red-50 via-rose-50 to-slate-100 py-8 px-6 sm:px-8 sm:py10 lg:px-12 lg:py-20">
            {/* whole section container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-center">
                {/* top hero container */}
                <div className="text-center md:text-left">
                    <h1 className="uppercase tracking-tight bg-emerald-200 inline-flex items-center text-xs font-bold text-teal-800 px-2 py-1 mb-4 rounded-2xl">artisan-first marketplace</h1>
                    <p className="font-extrabold mb-6 text-xl sm:text-3xl lg:text-6xl leading-tight">Discover unique handcrafted treasures</p>
                    <p className="mb-6 text-base sm:text-lg">Support local craftspeople, shop ethically, and find on-of-a-kind pieces.
                        A friendly community where makers and consious buyers connect.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mb-4 md:mb-0">
                        <Link href="#" className="inline-flex justify-center items-center bg-slate-950 w-full sm:w-auto text-white text-xs sm:text-sm px-4 py-2 rounded-xl font-bold transition hover:translate-y-0.5">Explore more</Link>
                        <Link href="#" className="inline-flex justify-center items-center border border-gray-500 w-full sm:w-auto text-xs sm:text-sm px-4 py-2 rounded-xl font-bold">Start selling</Link>
                    </div>
                </div>
                {/* Bottom container */}
                <figure>
                    <Image 
                        width={800}
                        height={600}
                        src="/handcraft.jpg"
                        alt="Handcraft sample"
                        className="rounded-2xl block w-full h-full object-cover object-center lg:h-92"
                    />
                    <figcaption className="mt-3 text-xs text-center text-mist-500">Every piece tells a story of craftsmanship and company</figcaption>
                </figure>
            </div>
        </section>
    )
}