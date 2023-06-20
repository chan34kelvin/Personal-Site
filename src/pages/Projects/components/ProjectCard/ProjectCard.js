
//css
import "./ProjectCard.css"

export default function ProjectCard({ project }) {

    const icons = {
        game: "videogame_asset",
        form: "content_paste_search",
        db: "dataset",
        system: "computer",
        website: "web",
    }

    return (
        <a className="project-card" href={project.link}>
            <div className="card-icon-exterior">
                <span className="material-icons-outlined card-icon">
                    {icons[project.type]}
                </span>
            </div>
            <div className="card-content flex-grow-1 text-start">
                <div className="card-content-textbox px-3 py-2 py-md-3 px-md-4 px-xxl-5">
                    <b>{project.title},</b> {project.description}
                </div>
            </div>
        </a>
    )
}