import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const NavBar = () => {
  return (
    <nav className="fixed w-full bg-red-800 p-6 flex justify-between items-center z-50">
      <Link href="/" className="text-2xl text-white">
        Rijschool <span className="font-bold">Houben</span>
      </Link>
      <div className="nav-list">
        <div className="nav-list-item">
          <Link href="/">Home</Link>
        </div>
        <div className="nav-list-item">
          <DropdownMenu>
            <DropdownMenuTrigger className="uppercase">
              Info
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/info/about-us">About us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/info/authorization">Authroization</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/info/guided-driving">Guided driving</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/info/gift-voucher">Gift voucher</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="nav-list-item">
          <Link href="/prices">Prices</Link>
        </div>
        <div className="nav-list-item">
          <Link href="/theory">Theory</Link>
        </div>
        <div className="nav-list-item">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
