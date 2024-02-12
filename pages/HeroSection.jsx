import useThemeStore from "../store";
export default function HeroSection() {
  const { userPrefferences } = useThemeStore();

  const fontSizeStyles = {
    small: "text-2xl",
    medium: "text-4xl",
    large: "text-6xl",
  };
  return (
    <section
      className={`bg-gray-100 dark:bg-gray-800 p-8 ${
        fontSizeStyles[userPrefferences.fontSize]
      }`}
    >
      <h1 className={`font-bold dark:text-gray-100`}>My Portfolio</h1>
      <p className="text-lg mt-4 dark:text-gray-200">
        I am passionately looking for web development job opportunity in a
        company where I can apply my skills and education as well as learn new
        technologies. I really enjoy problem solving, finding bugs, reading
        code, understanding logic and I am always ready to face challenges.
      </p>
    </section>
  );
}
