import useThemeStore from "../store";
export default function ThemeSwitcher() {
  const { theme, toggleTheme, setFontSize, userPrefferences } = useThemeStore();

  function handleFontSize(e) {
    setFontSize(e.target.value);
  }

  return (
    <>
      <div className={`dark:bg-gray-800 flex items-center space-x-4 p-1`}>
        <button
          onClick={toggleTheme}
          className="bg-transparent text-blue-500 dark:text-blue-400 dark:bg-gray-800 p-1 border-0 cursor-pointer"
        >
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
        <label htmlFor="" className="text-gray-600 dark:text-gray-400">
          Font Size:
        </label>
        <select
          value={userPrefferences.fontSize}
          onChange={handleFontSize}
          className="border p-1 rounded dark:text-gray-100 text-gray-800 dark:bg-gray-800 cursor-pointer"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </>
  );
}
