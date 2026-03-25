'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/navlinks";
import clsx from "clsx";

export default function Sidebar() {

    const pathname = usePathname()
    return (
        <aside>
            {navLinks.map(link =>
                <Link 
                className={clsx('p-2',
                    {
                        "text-red-500": pathname === link.href  
                    }
                )}
                key={link.name} href={link.href}>{link.name}
                </Link>)}
        </aside>
    )
}