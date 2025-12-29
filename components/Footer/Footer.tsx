// components/Footer.tsx
import styles from "./Footer.module.scss";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <span>© {currentYear} Rickey Velazquez</span>
                    <span className={styles.builtWith}>
                        Built with Next.js, TypeScript, Hygraph &amp; Netlify.
                    </span>
                </div>

                <div className={styles.right}>
                    {/* Fill these with your real URLs */}
                    <a
                        href="https://www.linkedin.com/in/rickey-velazquez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/rickeydute"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        GitHub
                    </a>
                    <a href="mailto:jose.velazquez.3883@gmail.com" className={styles.link}>
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
