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

    const changeDisplayMode = useCallback((mode, isStoreData) => {

        if (mode === "light") {
            lightModeColors.forEach((values, keys) => {
                document.documentElement.style.setProperty(keys, values);
            });
            if(isStoreData){
                //only store when told to, because if is decided by time then it isn't the person's preference that he wants this mode.
                sessionStorage.setItem("kelvin-personal-site-display-mode", "light")
            }
            setNightMode(false)
        } else if (mode === "night") {
            darkModeColors.forEach((values, keys) => {
                document.documentElement.style.setProperty(keys, values);
            });
            if(isStoreData){
                sessionStorage.setItem("kelvin-personal-site-display-mode", "night")
            }
            setNightMode(true)
        }
    }, [darkModeColors, lightModeColors])

    useEffect(() => {

        //session storage so when the user go backs into this site can stay in the same mode (keeping their preference).
        //local storage stays too long because you have to manually clean the cache to delete the preference.
        var displayMode = sessionStorage.getItem("kelvin-personal-site-display-mode");
        if (displayMode === null) {
            // changeDisplayMode("light")
            const currentTime = new Date(); //this works in firefox and every other browsers
            const currentHour = currentTime.getHours();

            if (currentHour >= 18 || currentHour < 7) {
                //night time
                changeDisplayMode("night", false); //mode, is store data inside local storage for preferences?
            } else {
                //day time
                changeDisplayMode("light", false);
            }
        } else if (displayMode === "light") {
            changeDisplayMode("light", true)
        } else {
            changeDisplayMode("night", true);
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
                        changeDisplayMode("light", true)
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
                        changeDisplayMode("night", true)
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