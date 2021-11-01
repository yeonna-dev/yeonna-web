const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
        bg: {
          DEFAULT: 'var(--color-bg)',
          dark: 'var(--color-bg-dark)',
          'dark-hover': 'var(--color-bg-dark-hover)',
          light: 'var(--color-bg-light)',
        },
        white: 'var(--color-white)',
      },
    },
  },

  plugins: [],
};

module.exports = config;
