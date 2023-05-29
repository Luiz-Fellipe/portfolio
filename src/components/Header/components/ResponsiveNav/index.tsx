'use client';
import { motion as M } from 'framer-motion';
import { HTMLAttributes } from 'react';
import { useRouter } from 'next/navigation';

//COMPONENTS
import { MenuToggle } from './components/MenuToggle';

//HOOKS
import { useOpenOrCloseMenu } from './hooks/useOpenOrCloseMenu';

//ANIMATIONS
import { fadeInRight, opacity } from '@/lib/motion/animations';

interface IResponsiveNavProps extends HTMLAttributes<HTMLDivElement> {
  options: string[];
}

export function ResponsiveNav({
  options,
  className,
  ...rest
}: IResponsiveNavProps) {
  const { navRef, buttonRef, isOpen, setOpen } = useOpenOrCloseMenu();

  const router = useRouter();

  function handleNavigate(option: string) {
    router.push(`#${option.toLowerCase()}`);
    setOpen(false);
  }

  return (
    <div {...rest} className={`h-6 ${className}`}>
      <MenuToggle
        ref={buttonRef}
        showMenu={isOpen}
        handleShowMenu={() => setOpen((oldValue) => !oldValue)}
      />
      <M.nav
        ref={navRef}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={fadeInRight}
        transition={{ delayChildren: 0.4 }}
        className="fixed top-16 md:top-24 left-8 right-8 bg-B600 p-8 rounded shadow-overlay "
      >
        <M.ul className="flex flex-col items-center gap-4" variants={opacity}>
          {options.map((option) => (
            <M.li key={option} className="w-fit text-base text-N75 font-normal">
              <button onClick={() => handleNavigate(option)}>{option}</button>
            </M.li>
          ))}
        </M.ul>
      </M.nav>
    </div>
  );
}
