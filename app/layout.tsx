import type { Metadata } from "next";
import "../styles/globals.scss";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: "Rickey Codes",
    description: "Developer portfolio of Rickey Velazquez",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
    <html lang="en">
        
        <body>
            <Header />
            <div className="page-grid">
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </body>
    </html>
    );
}
