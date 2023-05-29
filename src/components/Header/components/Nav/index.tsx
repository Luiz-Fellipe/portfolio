import { HTMLAttributes } from 'react';
import { motion as M } from 'framer-motion';
import { fadeInDown, opacity } from '@/lib/motion/animations';

interface INavProps extends React.ComponentProps<typeof M.nav> {
  options: string[];
}

export function Nav({ options, ...rest }: INavProps) {
  return (
    <M.nav initial="hidden" whileInView="visible" {...rest}>
      <M.ul
        className="flex items-center gap-16"
        variants={opacity}
        transition={{ staggerChildren: 0.2 }}
      >
        {options.map((option) => (
          <M.li
            key={option}
            variants={fadeInDown}
            className="w-fit text-base text-N75 font-normal relative 
            after:content-[''] 
            after:absolute 
            after:left-0 
            after:-bottom-1 
            after:bg-G100 
            after:w-0
            after:h-[2px]
            after:transition-all
            hover:after:w-6
            hover:text-G100
            "
          >
            <button onClick={() => {}}>{option}</button>
          </M.li>
        ))}
      </M.ul>
    </M.nav>
  );
}
