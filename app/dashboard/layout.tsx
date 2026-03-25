import Sidebar from "../ui/Sidebar";

export default function DashboardLayout({children}: {children: React.ReactNode}){

    return(
        <div>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
    )

}