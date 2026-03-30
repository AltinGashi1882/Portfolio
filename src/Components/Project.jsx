import { Link } from "react-router-dom";

function ProjectCard({
  id,
  title,
  description,
  techStack = [],
  liveUrl,
  repoUrl,
  status = "Active",
}) {
  // Map status to badge colors (light variants to stand out on dark)
  const statusBg = {
    "Completed": "bg-green-600 text-white",
    "In Progress": "bg-yellow-500 text-black",
    "Active": "bg-blue-500 text-white",
  };

  return (
    <>
            <div
              className="card bg-base-200/70 backdrop-blur-sm border border-base-content/5 shadow-xl group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                {title.charAt(0)}
              </div>

              <div className="card-body">
                <h3 className="card-title text-xl">{title}</h3>
                <p className="text-base-content/70 line-clamp-3">{description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {techStack.map((t, i) => (
                    <div key={i} className="badge badge-outline badge-sm">{t}</div>
                  ))}
                </div>

                <div className="card-actions justify-between mt-6">
                  <div className={`"badge badge-outline w-22 font-bold text-center rounded ${statusBg[status]}"`}>{status}</div>
                  <div className="flex gap-3">
                    <a href={repoUrl} target="_blank" className="btn btn-sm btn-outline">Repo</a>
                    <Link className="btn btn-sm btn-primary" to={`/project/${id}`}>
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
      </>
  );
}

export default ProjectCard;
