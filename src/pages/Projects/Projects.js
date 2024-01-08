import { useEffect, useState } from "react";

//components
import { ProjectCard } from "./components/ProjectCard";
import { HexagonImage } from "../../components/HexagonImage";
import { LoadingIcon } from "../../components/LoadingIcon";

//css
import "./Projects.css";

export default function Projects() {
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // reminder to myself to change to ./personal-page/ when hosting
    // reminder to myself that the data is inside public folder
    setIsLoading(true);
    fetch("./db/project_data.txt")
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingIcon />;
  }

  if (!projectData) {
    return <>Loading Error... Please refresh the page.</>;
  }

  return (
    <>
      <HexagonImage images={projectData.images} id={"project-image"} />
      <div className="projects-content">
        <div className="projects-header-section">
          <div className="text-title">My Projects</div>
          <hr className="line-block" />
        </div>
        {/* padding to make sure there is space to show the last card */}
        <div className="project-cards-section">
          {projectData.projects.map((project) => {
            return <ProjectCard key={project.title} project={project} />;
          })}
        </div>
      </div>
    </>
  );
}
