
//css
import "./ProjectCard.css"

export default function ProjectCard({ project }) {

    const icons = {
        game: "videogame_asset",
        form: "content_paste_search",
        db: "dataset",
        system: "computer",
        website: "web",
        phone: "phone_iphone",
    }

    return (
        <a 
            className="project-card" 
            href={project.link} 
            target="_blank" rel="noopener noreferrer"
        >
            {/* target="_blank" rel="noreferrer" - this is used for security reasons. This combination opens the project on another tab instead. */}
            <div className="card-icon-exterior">
                <span className="material-icons-outlined card-icon">
                    {icons[project.type]}
                </span>
            </div>
            <div className="card-content flex-grow-1 text-start">
            {/* px-3 py-2 py-md-3 px-md-4 px-xxl-5 */}
                <div className="card-content-textbox">
                    <b>{project.title},</b> {project.description}
                </div>
            </div>
        </a>
    )
}