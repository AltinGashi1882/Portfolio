import { Github, Mail, Linkedin } from "lucide-react"; // nice icons
import FadeInUp from "../Animations/FadeInUp";

export default function ContactMe() {
    return (
    <>
    
        <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
        <FadeInUp>
        <div className="flex flex-col items-center gap-8">
            {/* Contact Me Title */}
            <h2 className='font-bold text-4xl text-gray-200'>Contact Me</h2>
            
            {/* Icons inline */}
            <div className="flex gap-6 mb-10">
            <a href="https://github.com/AltinGashi1882">
            <Github className='w-10 h-10 text-gray-200 hover:text-white transition-colors cursor-pointer' /></a>
            <a href="mailto:altingashi18@gmail.com">
            <Mail className='w-10 h-10 text-gray-200 hover:text-white transition-colors cursor-pointer' /></a>
            <a href="https://www.linkedin.com/in/altin-gashi-ab49a42a4/">
            <Linkedin className='w-10 h-10 text-gray-200 hover:text-white transition-colors cursor-pointer' /></a>
            </div>
        </div>
        </FadeInUp>
        </div>
    </>
    );
}