import Link from "next/link"
import '@/app/globals.css'
export default function Footer(){

    return(
        <footer className="bg-black text-white p-4 rounded-2xl text-center md:text-left md:rounded-none">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 p-10 ">
                <div className="mb-10">
                    <h2 className="flex gap-[5px] items-center mb-5 justify-center md:justify-start"><i className="bx bx-pyramid text-[30px] text-yellow-500" /><span className="text-xl">ATARAXIS</span></h2>
                    <div >
                        <p>Empowering physicians with advanced
                            multi-modal tools to improve treatment
                            selection and patient outcomes
                        </p>
                    </div>
                    <div className="mt-8">
                        <span className="inline=block mr-[5px]"><i className="bx bxl-twitter"></i></span>
                        <span className="inline=block mr-[5px]"><i className="bx bxl-linkedin"></i></span>
                        <span className="inline=block mr-[5px]"><i className="bx bxl-instagram"></i></span>
                        <span className="inline=block mr-[5px]"><i className="bx bxl-facebook"></i></span>
                    </div>
                </div>
                <div className="mb-10">
                    <span className="block mb-5 text-[17px] font-bold">Site Map</span>
                    <div className="grid grid-cols-1 gap-3">
                        <Link href="/">Homepage</Link>
                        <Link href="#">Technology</Link>
                        <Link href="#">Ataris Breast</Link>
                        <Link href="#">Resources & news</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Portal</Link>
                    </div>
                </div>
                <div>
                    <span className="block mb-5 text-[17px] font-bold"> Legal</span>
                    <div className="grid grid-cols-1 gap-3">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Services</Link>
                        <Link href="#">Lawyer's Corners</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}