import Link from "next/link";
import logoImg from "@/public/images/logo.png";
import MainHeaderBackground from "./MainHeaderBackground";
import { header, logo, nav, active } from "./MainHeader.module.css";
import Image from "next/image";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={header}>
        <Link className={logo} href="/">
          <Image src={logoImg} alt="main logo" priority />
          NextLevel Food
        </Link>
        <nav className={nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
