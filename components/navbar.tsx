import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import MoblileSidebar from "./mobile-sidebar";
const Navbar = () => {
    return(
        <div className="flex items-center p-4">
            <MoblileSidebar/>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    );
}

export default Navbar;