import Link from "next/link";
import logoImg from "@/public/images/logo.png";
import MainHeaderBackground from "./MainHeaderBackground";
import { header, logo, nav } from "./MainHeader.module.css";
import Image from "next/image";

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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
