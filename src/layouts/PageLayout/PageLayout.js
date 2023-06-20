
//components
import { Navbar } from "../../components/Navbar"

//css
import "./PageLayout.css"

export default function PageLayout({ children }) {

    return (
        <div className="page-bg">
            <div className="page-content">
                <Navbar />
                {children}
            </div>
        </div>
    )
}