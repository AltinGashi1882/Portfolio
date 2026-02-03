
export default function SkillCard({heading, skills, logo, animation}) {
    return (
        <>
            <div className="relative bg-black/50 flex flex-col 
            h-96 w-96 rounded-3xl shadow-lg transition-all 
            duration-300 hover:-translate-y-1 hover:shadow-2xl
            backdrop-blur-2xl border-3 border-white/20">
                
            

                <div className="bg-[#313851] rounded-t-3xl">
                    <h2 className="text-white  font-extrabold text-3xl text-center p-5">{heading}</h2>
                </div>
                    <ul className="list-disc marker:text-[#9787F3] m-5">
                        {skills.map((skill, index) => (
                            <li key={index} className="m-5 text-white font-bold text-xl text-left">{skill}</li>)
                        )}
                    </ul>
                        <img
                        src={logo}
                        alt="React logo"
                        className={`absolute right-4 top-1/2 -translate-y-1/2 w-24 h-24 object-contain opacity-80 ${
                                        animation ? animation : ""
                                    } [animation-duration:6s]`}
                        />
            </div>
        </>
        
    )
}