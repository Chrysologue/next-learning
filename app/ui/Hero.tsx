import Link from "next/link"
import Image from "next/image"
export default function Hero() {

    return (
        <section className={
            `grid gap-4 md:gap-10 items-center grid-cols-1 md:grid-cols-2 px-8 py-10 md:px-10 md:py-8 h-screen
            bg-linear-to-br from-rose-100 via-indigo-100 to-slate-100 text-center md:text-left`}>
            <div>
                <span className={`uppercase bg-teal-200 inline-block 
                    px-3 py-1 rounded-xl text-xs text-green-800 font-bold mb-4
                    tracking-tighter
                    `}>
                    Personal Finance Dashboard</span>
                <h2 className={`
                    font-bold mb-4 text-2xl md:text-4xl lg:text-6xl
                    `}>
                    Take Control of Your Finances</h2>
                <p className={`
                    mb-4 text-sm md:text-base
                    `}>
                    Track your income and expenses, and stay in
                    control of your financial life with a simple,
                    intuitive dashboard.
                </p>
                <div>
                    <Link 
                    className={`
                        bg-black text-white inline-flex justify-center w-full md:w-auto
                        text-xs md:text-base
                        p-2 cursor-pointer rounded-xl md:px-4 transition duration-300 delay-50 hover:translate-y-0.5
                        `}
                    href="/dashboard">
                        Get Started
                    </Link>
                </div>
            </div>
            <div>
                <figure>
                    <Image
                    src="/finance.jpg"
                    alt="Personal Finance Illustration"
                    width={800}
                    height={400}
                    className={`
                        block mb-4 rounded-xl w-full
                        `}
                />
                <figcaption
                className={`
                    text-xs text-mauve-600 text-center md:text-sm
                    `}
                >
                    Visual overview of your financial activity in one place.</figcaption>
                </figure>
            </div>
        </section>
    )
}