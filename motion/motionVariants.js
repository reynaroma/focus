export const fadeInOnScroll = (delay, duration) => ({
  hidden: { opacity: 0 }, // initial state: fully transparent
  visivle: {
    opacity: 1, // fade in to full visible
    transition: {
      delay: delay, // small delay before starting the animation
      duration: duration, // duration of the fade in effect
      ease: [0.42, 0, 0.58, 1], // custom cubic-bezier for smooth ease-in-out effect

    },
  },
});

