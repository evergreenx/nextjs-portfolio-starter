
  export const columsExpandVariant = {
    intial: {
      left: 0,
    },

    enter: (i: number) => ({
      left: "100vw",
      transition: {
        duration: 0.3,
        delay: 0.2 * i,
        ease: "easeIn",
      },

      transitionEnd : {
        width : "0" , left  : "0"
      }

    }),

    exit: (i: number) => ({
      width: "100vw",
      transition: {
        duration: 0.3,
        delay: 0.2 * i,
        ease: "easeIn",
      },
    }),
  };