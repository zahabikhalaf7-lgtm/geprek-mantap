import type { Metadata } from 'next';
import { Oswald, Nunito } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-oswald',
});

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-jakarta',
});

export const metadata: Metadata = {
    title: 'Geprek Mantap â€” Geprek Pedas Khas Bromo',
    description:
        'Nikmati sensasi pedas membara dari kawah Bromo langsung di lidah Anda. Ayam geprek premium dengan sambal korek khas yang bikin ketagihan.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <body className={`${oswald.variable} ${nunito.variable} font-jakarta bg-bromo-dark text-white selection:bg-bromo-orange selection:text-white`}>
                {children}
            </body>
        </html>
    );
}

