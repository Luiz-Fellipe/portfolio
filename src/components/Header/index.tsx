'use client';
import { Kanit } from 'next/font/google';
import { motion as M } from 'framer-motion';

//COMPONENTS
import { ResponsiveNav } from './components/ResponsiveNav';

//ANIMATIONS
import { fadeInDown } from '@/lib/motion/animations';
import { Nav } from './components/Nav';

const kanit = Kanit({ weight: ['400'], subsets: ['latin'] });

export function Header() {
  const options = ['Sobre', 'Skills', 'Projetos', 'Contato'];

  return (
    <M.header
      initial="hidden"
      whileInView="visible"
      variants={fadeInDown}
      className="px-8 flex justify-between items-center"
    >
      <h1
        className={`${kanit.className} text-xl md:text-2xl xl:text-3xl text-N75 font-normal `}
      >
        <span className="text-G100">{'<'}</span>Luiz Fellipe
        <span className="text-G100">{' />'}</span>
      </h1>

      <ResponsiveNav className="lg:hidden" options={options} />

      <Nav className="hidden lg:flex" options={options} />
    </M.header>
  );
}
