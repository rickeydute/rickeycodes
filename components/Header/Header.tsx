import Link from "next/link";
import Styles from "./Header.module.scss";

export function Header() {
    return(
        <header className={Styles.header}>
            <div className={Styles.inner}>
                <div className={Styles.brand}>
                    <Link href="/" className={Styles.logo}>
                        rickeycodes
                    </Link>
                    <span className={Styles.tagline}>
                        Front-end engineer - React - Next.js
                    </span>
                </div>
                <nav className={Styles.nav} aria-label="Main navigation">
                    <a href="#about" className={Styles.navLink}>
                        About
                    </a>
                    <a href="#projects" className={Styles.navLink}>
                        Projects
                    </a>
                    <a href="#resume" className={Styles.navLink}>
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
}