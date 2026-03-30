import posimg1 from "../assets/img/pos/pinpage.png"
import posimg2 from "../assets/img/pos/adminpage.png"

import gspimg1 from "../assets/img/gsp/secure_password.png"


const projectData = [{
    id: 1,
    title: "Real-Time ChatApp",
    techStack: ["React", "Tailwind", "DaisyUI", "JWT", "SocketIO", "Cloudinary"],
    repoUrl: "https://github.com/AltinGashi1882/chatapp",
    description: "A real-time chat application with authentication, live messaging, and media sharing.",
    status: "Completed",
    showcaseImg: [],
},
    {
        id: 2,
        title: "Points of Sale",
        techStack: ["Express", "Tailwind", "React", "MySQL", "JWT"],
        status: "Completed",
        description: "Points of Sale used for Restaurant, Serving, taking orders and managing tables",
        repoUrl: "https://github.com/AltinGashi1882/PointsOfSale",
        showcaseImg: [
            posimg1,
            posimg2,
        ]
    },
    {
        id: 3,
        title: "Secure Password Generator",
        techStack: ["JavaScript", "Tailwind", "Crypto"],
        status: "Completed",
        description: "Generate a fully-secured password with the crpyto technology",
        repoUrl: "https://github.com/AltinGashi1882/GeneratePassword",
        liveUrl: "https://ephemeral-bubblegum-968f0f.netlify.app/",
        showcaseImg: [gspimg1]
    }
]
export default projectData;