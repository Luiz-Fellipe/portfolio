import { Poppins } from 'next/font/google';

//COMPONENTS
import { Header } from '@/components/Header';

//STYLES
import './globals.css';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export const metadata = {
  title: 'Portfólio - Luiz Fellipe',
  description: 'Desenvolvedor front-end',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} bg-B600 py-6 md:py-12 max-w-7xl my-0 mx-auto overflow-x-hidden`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
