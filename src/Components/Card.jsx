import { Github, Mail, Linkedin } from "lucide-react";

export default function Card(props) {
    return (
        <>
        
        <div className="lg:w-100 flex flex-col w-87 h-163 lg:h-170 bg-[#222536] rounded-2xl shadow-2xl">
            <img src={props.img} className='h-90 object-cover rounded-t-2xl' alt="" />
            <div className='flex flex-row justify-between m-4 lg:m-7 mt-10 text-center'>
                <a href={props.email}><button className='bg-[#C2CBD3] p-2 rounded-sm font-bold cursor-pointer hover:bg-gray-300 transition flex'><Mail/>Email</button></a>
                <a target="_blank" href={props.linkedin}><button className='bg-[#0077B5] p-2 rounded-sm font-bold text-white cursor-pointer hover:bg-[#036191] transition flex'><Linkedin/>LinkedIn</button></a>
                <a target="_blank"href={props.github}><button className='bg-white p-2 rounded-sm font-bold cursor-pointer hover:bg-gray-300 transition flex'><Github/>GitHub</button></a>
            </div>
            <h1 className='text-white font-bold lg:ml-5 mt-3 text-xl'>About Me</h1>
            <p className='text-white m-4 lg:ml-5 mt-2'>
                {props.about}
            </p>
        </div>
        
        </>
    )
}