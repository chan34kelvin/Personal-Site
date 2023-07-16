import { useEffect, useState } from "react";

//components
import { ProjectCard } from "./components/ProjectCard";
import { HexagonImage } from "../../components/HexagonImage";

//css
import "./Projects.css"

export default function Projects() {

    const [projectData, setProjectData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(false)
        // reminder to myself to change to ./personal-page/ when hosting
        // reminder to myself that the data is inside public folder
        fetch('./db/projects.txt')
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(true)
                setProjectData(data)
            })
            .catch((error) => {
                setIsLoading(true)
                console.log(error);
            })
    }, [])

    if (!isLoading) {
        return <>Loading my projects...</>
    }

    if (!projectData) {
        return <>Loading Error... Please refresh the page.</>
    }

    return (
        <>
            <HexagonImage imgSrc={"./images/projects/my-github-projects.png"}/>
            <div className="projects-content">
                <div className="projects-header-section">
                    <div className="text-title">
                        My Projects
                    </div>
                    <hr className="line-block" />
                </div>
                {/* padding to make sure there is space to show the last card */}
                <div className="project-cards-section">
                    {projectData.projects.map((project) => {
                        return (
                            <ProjectCard project={project} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}