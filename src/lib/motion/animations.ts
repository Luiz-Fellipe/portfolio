const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeInRight = {
  hidden: {
    opacity: 0,
    x: '100%',
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const opacity = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export { fadeInDown, fadeInRight, opacity };
