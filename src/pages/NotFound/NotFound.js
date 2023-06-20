import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function NotFound(){

    const relocate = useNavigate()

    useEffect(() => {
        relocate("/")
    }, [relocate])

    return(
        <>404 not found</>
    )
}