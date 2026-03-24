import Link from "next/link"
export default function Footer() {

    return (
        <footer>
            <div className="px-6 py-8 sm:px-12 sm:py-10 bg-linear-to-br from-slate-900 via-stone-900 to-green-950 text-white">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] text-center md:text-left">
                    <div>
                        <Link href="/" className="flex items-center justify-center md:justify-start mb-8 gap-[3px]"><i className="bx bx-paper-plane text-3xl text-pink-500" /><span className="text-3xl uppercase text-shadow-lg text-shadow-cyan-400">iblog</span></Link>
                        <p className="text-sm text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem commodi maiores aperiam cumque quisquam voluptas, mollitia dolores sed nihil repellendus sapiente, amet veritatis quibusdam consequuntur.</p>
                    </div>
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-3 ">
                        <div>
                            <h2 className="mb-4 md:mb-8 text-xl md:text-2xl">Links</h2>
                            <div className="flex flex-col gap-2">
                                <Link href="/">Home</Link>
                                <Link href="#">Get Started</Link>
                                <Link href="#">Services</Link>
                                <Link href="#">Portfolio</Link>
                                <Link href="#">Corporate</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-4 md:mb-8 text-xl md:text-2xl">Others</h2>
                            <div className="flex flex-col gap-2">
                                <Link href="#">Terms of Services</Link>
                                <Link href="#">Privacy</Link>
                                <Link href="#">Faqs</Link>
                                <Link href="#">Company</Link>
                                <Link href="#">Agencies</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-4 md:mb-8 text-xl md:text-2xl">Social</h2>
                            <p className="mb-4">Follow us on Social Media</p>
                            <div className="flex gap-2 justify-center md:justify-start">
                                <Link href="#"><i className="bx bxl-facebook-square"></i> </Link>
                                <Link href="#"><i className="bx bxl-instagram"></i> </Link>
                                <Link href="#"><i className="bx bxl-twitter"></i> </Link>
                                <Link href="#"><i className="bx bxl-youtube"></i> </Link>
                                <Link href="#"><i className="bx bxl-linkedin"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-linear-to-l from-red-200 to-cyan-100 p-4 text-center">
                <p className="text-mauve-950 text-sm md:text-base">&copy;2026 All right reserved</p>
            </div>
        </footer>
    )
}