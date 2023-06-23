import { useMemo, useState, useEffect, useCallback } from "react"

//css
import "./NightButton.css"

export default function NightButton() {

    const [nightMode, setNightMode] = useState(false)

    const lightModeColors = useMemo(() => {
        const res = new Map();
        res.set("--color-dark", "#343434")
        res.set("--color-light", "white")
        res.set("--color-gray", "#e5e4e2")
        res.set("--color-transparent-bg", "transparent")
        return res
    }, [])

    const darkModeColors = useMemo(() => {
        const res = new Map();
        res.set("--color-dark", "#e5e4e2")
        res.set("--color-light", "#333333")
        res.set("--color-gray", "#d3d3d3")
        res.set("--color-transparent-bg", "rgba(0, 0, 0, 0.8)")
        return res
    }, [])

    // --color-dark: #343434;
    // --color-light: white;
    // --color-red: #da2c43;
    // --color-gray: #e5e4e2;

    const changeDisplayMode = useCallback((mode) => {

        if (mode === "light") {
            lightModeColors.forEach((values, keys) => {
                document.documentElement.style.setProperty(keys, values);
            });
            localStorage.setItem("kelvin-personal-site-display-mode", "light")
            setNightMode(false)
        } else if (mode === "night") {
            darkModeColors.forEach((values, keys) => {
                document.documentElement.style.setProperty(keys, values);
            });
            localStorage.setItem("kelvin-personal-site-display-mode", "night")
            setNightMode(true)
        }
    }, [darkModeColors, lightModeColors])

    useEffect(() => {

        //loacl storage so when the user re-enters the website can stay on the same mode.
        var displayMode = localStorage.getItem("kelvin-personal-site-display-mode");
        if (displayMode === null) {
            changeDisplayMode("light")
        } else if (displayMode === "light") {
            changeDisplayMode("light")
        } else {
            changeDisplayMode("night");
        }
    }, [changeDisplayMode])

    return (
        <>
            {nightMode ?
                <div
                    className="icon"
                    id="day-button"
                    onClick={(e) => {
                        e.preventDefault()
                        changeDisplayMode("light")
                    }}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Toggle light mode"
                >
                    <span className="material-icons-outlined day-icon icon-interior" >
                        light_mode
                    </span>
                </div>
                :
                <div
                    className="icon"
                    id="night-button"
                    onClick={(e) => {
                        e.preventDefault()
                        changeDisplayMode("night")
                    }}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Toggle night mode"
                >
                    <span className="material-icons-outlined night-icon icon-interior" >
                        dark_mode
                    </span>
                </div>
            }
        </>
    )
}