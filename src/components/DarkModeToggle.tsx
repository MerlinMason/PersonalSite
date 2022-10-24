import { useState, useEffect } from "react";

const DarkModeToggle = (): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
    const [rotation, setRotation] = useState(isDarkMode ? 180 : 0);

    useEffect(() => {
        const nextTheme = isDarkMode ? "dark" : "light";
        const method = nextTheme === "dark" ? "add" : "remove";

        localStorage.theme = nextTheme;
        document.documentElement.classList[method]("dark");
    }, [isDarkMode]);

    return (
        <button
            type="button"
            onClick={() => {
                setIsDarkMode(!isDarkMode);
                setRotation(rotation + 180);
            }}
            className="h-12 w-16 mt-4 overflow-hidden rounded-t-full"
        >
            <div
                className="transition-transform duration-1000 ease-in-out space-y-6 text-2xl"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <div
                    className={`${
                        isDarkMode ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-500`}
                >
                    🌞
                </div>
                <div
                    className={`${
                        isDarkMode ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-500 rotate-180`}
                >
                    🌛
                </div>
            </div>
        </button>
    );
};

export default DarkModeToggle;
