function ProjectCard({
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
    <div className="group relative flex flex-col justify-between max-w-sm w-full h-96 rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Gradient hover glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {title}
          </h3>

          {/* Status badge */}
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusBg[status] || "bg-gray-500 text-white"}`}>
            {status}
          </span>
        </div>

        {/* Description */}
        <p className="mb-6 text-gray-300 leading-relaxed">
          {description || "No description provided."}
        </p>

        {/* Tech Stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {techStack.length > 0
            ? techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-gray-700 cursor-pointer px-3 py-1 text-sm font-medium text-gray-200 transition-colors group-hover:bg-indigo-600 group-hover:text-white"
                >
                  {tech}
                </span>
              ))
            : <span className="text-gray-500 italic">No tech stack</span>}
        </div>

        {/* Divider */}
        <div className="mb-4 h-px w-full bg-gray-600" />

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-indigo-400 transition hover:text-indigo-200"
              >
                Live Demo →
              </a>
            )}

            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-gray-300 transition hover:text-white"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
