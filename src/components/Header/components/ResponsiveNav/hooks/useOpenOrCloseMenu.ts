import { useEffect, useRef, useState } from 'react';

export function useOpenOrCloseMenu() {
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setOpen] = useState(false);

  const handleClickOutside = (event: any) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      event.target !== buttonRef.current
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { navRef, buttonRef, isOpen, setOpen };
}
