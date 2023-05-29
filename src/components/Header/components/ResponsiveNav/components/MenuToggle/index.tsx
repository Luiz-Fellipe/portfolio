import { motion as M } from 'framer-motion';
import { forwardRef } from 'react';

interface IMenuToggleProps {
  handleShowMenu: () => void;
  showMenu: boolean;
}

const Path = (props: React.ComponentProps<typeof M.path>) => (
  <M.path
    fill="transparent"
    strokeWidth="3"
    className="stroke-G100"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = forwardRef<HTMLButtonElement, IMenuToggleProps>(
  function MenuToggle({ showMenu, handleShowMenu }, ref) {
    return (
      <M.button
        ref={ref}
        initial="closed"
        animate={showMenu ? 'open' : 'closed'}
        onClick={handleShowMenu}
        aria-label="menu"
        className="cursor-pointer"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          className="pointer-events-none"
        >
          <Path
            className="stroke-G100"
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
          <Path
            className="stroke-G100"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            className="stroke-G100"
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
          />
        </svg>
      </M.button>
    );
  }
);
