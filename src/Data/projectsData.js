import posimg1 from "../assets/img/pos/pinpage.png"
import posimg2 from "../assets/img/pos/adminpage.png"
import posimg3 from "../assets/img/pos/pos3.png"
import posimg4 from "../assets/img/pos/pos4.png"
import posimg5 from "../assets/img/pos/pos5.png"
import posimg6 from "../assets/img/pos/pos6.png"
import posimg7 from "../assets/img/pos/pos7.png"
import posimg8 from "../assets/img/pos/pos8.png"
import posimg9 from "../assets/img/pos/pos9.png"
import posimg10 from "../assets/img/pos/pos10.png"


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
            posimg2, posimg3, posimg4,posimg5,
            posimg6, posimg7, posimg8, posimg9,posimg10
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