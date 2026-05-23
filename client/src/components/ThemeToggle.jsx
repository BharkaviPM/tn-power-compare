const ThemeToggle = ({
  darkMode,
  setDarkMode,
}) => {

  return (

    <button
      onClick={() =>
        setDarkMode(!darkMode)
      }
      className="bg-zinc-800 hover:bg-zinc-700 transition px-5 py-2 rounded-full border border-zinc-700"
    >

      {
        darkMode
          ? "☀️ Light"
          : "🌙 Dark"
      }

    </button>

  );
};

export default ThemeToggle;