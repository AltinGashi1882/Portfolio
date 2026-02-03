// App.tsx
import { useEffect, useState } from "react";
import "./index.css";
import cardData from "./Data/cardData";       // assuming still one item
import projectsData from "./Data/projectsData";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark"); // or read from localStorage

  useEffect(() => {
    // Fake loading (you can remove or use real data fetching)
    const timer = setTimeout(() => setLoading(false), 1200);
    document.documentElement.setAttribute("data-theme", theme);
    return () => clearTimeout(timer);
  }, [theme]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-base-300">
        <span className="loading loading-ring loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-base-300/40 to-base-100">
      {/* ====================== NAVBAR ====================== */}
      <div className="navbar bg-base-200/70 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl font-bold tracking-tight">
            Altin Gashi
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#skills"    className="hover:text-primary">Skills</a></li>
            <li><a href="#contact"   className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <button
            className="btn btn-circle btn-ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile drawer */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ====================== HERO ====================== */}
      {cardData.map((data) => (
        <section
          key={data.id}
          className="hero min-h-screen relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(var(--p)/0.08), hsl(var(--b3)/0.4))",
          }}
        >
          <div className="hero-overlay bg-gradient-to-t from-base-100/60 to-transparent"></div>
          <div className="hero-content flex-col lg:flex-row gap-12 px-6 py-20 max-w-7xl mx-auto">
            <div className="avatar">
              <div className="w-80 rounded-2xl shadow-2xl ring-1 ring-primary/30 ring-offset-4 ring-offset-base-100">
                <img src={data.img} alt="Profile" className="object-cover" />
              </div>
            </div>

            <div className="max-w-2xl space-y-6">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {data.name}
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
                {data.about}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="btn btn-primary btn-lg">More about me</button>
                <button className="btn btn-outline btn-lg">Download CV</button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ====================== SKILLS ====================== */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Frontend", value: 85, color: "primary", stack: "React, Tailwind, DaisyUI, TS" },
            { title: "Backend",   value: 70, color: "secondary", stack: "Node.js, Express, Sequelize, PostgreSQL" },
            { title: "Tools & DevOps", value: 80, color: "accent", stack: "Git, Linux, Docker, Postman, Vercel" },
          ].map((item, i) => (
            <div
              key={i}
              className="card bg-base-200/60 backdrop-blur-md border border-base-content/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl">{item.title}</h3>
                <progress
                  className={`progress progress-${item.color} w-full mt-2`}
                  value={item.value}
                  max="100"
                ></progress>
                <p className="mt-4 text-base-content/70">{item.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== JOURNEY ====================== */}
<section className="py-20 px-6 max-w-5xl mx-auto">
  <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
    My Journey
  </h2>

  <ul className="timeline timeline-snap-icon timeline-vertical">
    {/* 2023 – Left side */}
    <li>
      <hr className="bg-primary" />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-start md:text-end mb-10">
        <time className="font-mono italic">2023</time>
        <div className="text-lg font-black">Started Web Development</div>
        <p className="text-base-content/70 mt-2">
          Learned HTML, CSS, JavaScript fundamentals and core programming concepts.
        </p>
      </div>
      <hr className="bg-primary" />
    </li>

    {/* 2024 Frontend – Right side */}
    <li>
      <hr className="bg-secondary" />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
        </svg>
      </div>
      <div className="timeline-end mb-10">
        <time className="font-mono italic">2024</time>
        <div className="text-lg font-black">Frontend Mastery</div>
        <p className="text-base-content/70 mt-2">
          Built responsive, interactive UIs using React, Tailwind CSS, and DaisyUI.
        </p>
      </div>
      <hr className="bg-secondary" />
    </li>

    {/* 2024 Backend – Left side */}
    <li>
      <hr className="bg-accent" />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-start md:text-end mb-10">
        <time className="font-mono italic">2024</time>
        <div className="text-lg font-black">Backend & Databases</div>
        <p className="text-base-content/70 mt-2">
          Developed RESTful APIs with Node.js, Express, Sequelize, and SQL databases.
        </p>
      </div>
      <hr className="bg-accent" />
    </li>

    {/* 2025 Full-Stack – Right side */}
    <li>
      <hr className="bg-primary" />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V7z" />
        </svg>
      </div>
      <div className="timeline-end mb-10">
        <time className="font-mono italic">2025</time>
        <div className="text-lg font-black">Full-Stack Applications</div>
        <p className="text-base-content/70 mt-2">
          Built, authenticated, and deployed complete full-stack apps connecting frontend & backend.
        </p>
      </div>
      <hr className="bg-primary" />
    </li>

    {/* Now (2026) – Left side */}
    <li>
      <hr className="bg-neutral" />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 001 1h4a1 1 0 100-2h-3V6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-start md:text-end">
        <time className="font-mono italic">2026 – Present</time>
        <div className="text-lg font-black">Leveling Up</div>
        <p className="text-base-content/70 mt-2">
          Focusing on clean architecture, performance optimization, testing, and writing production-grade code.
        </p>
      </div>
    </li>
  </ul>
</section>


      {/* ====================== PROJECTS ====================== */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              className="card bg-base-200/70 backdrop-blur-sm border border-base-content/5 shadow-xl group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* If you have project images later → add here */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                {proj.title.charAt(0)}
              </div>

              <div className="card-body">
                <h3 className="card-title text-xl">{proj.title}</h3>
                <p className="text-base-content/70 line-clamp-3">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.techStack.map((t, i) => (
                    <div key={i} className="badge badge-outline badge-sm">{t}</div>
                  ))}
                </div>

                <div className="card-actions justify-between mt-6">
                  <div className="badge badge-outline">{proj.status}</div>
                  <div className="flex gap-3">
                    <a href={proj.repoUrl} target="_blank" className="btn btn-sm btn-outline">Repo</a>
                    <a href={proj.liveUrl}  target="_blank" className="btn btn-sm btn-primary">Live Demo</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== FOOTER ====================== */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content border-t border-base-content/10">
        <aside>
          <p className="font-medium">
            © {new Date().getFullYear()} Altin Gashi • Built with React + DaisyUI
          </p>
        </aside>
      </footer>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="btn btn-circle btn-primary fixed bottom-8 right-8 shadow-lg opacity-70 hover:opacity-100 transition-opacity z-50"
      >
        ↑
      </button>
    </div>
  );
}

export default App;