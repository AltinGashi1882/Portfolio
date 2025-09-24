import FadeInUp from "../Animations/FadeInUp";

export default function Certificates() {
    const education = [
        {
            degree: "Master's Degree in Computer Science",
            school: "University of Prizren",
            timeline: "2025 - Present"
        },
        {
            degree: "Bachelor's Degree in Computer Science", 
            school: "University of Prizren",
            timeline: "2021 - 2024"
        }
    ];
    const certificates = [{
        degree: "Frontend Development",
        school: "Shkolla Digjitale Prizren",
        timeline: "2025"
    }];

    return (
        <FadeInUp>
        <section className="py-20">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-4xl font-bold text-white text-center mb-12">Education & Certifications</h2>
                
                {/* Education Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">Education</h3>
                    {education.map((item, index) => (
                        <div key={index} className="mb-6">
                            <p className="text-white font-semibold">{item.degree}</p>
                            <p className="text-blue-400">{item.school}</p>
                            <p className="text-gray-400 text-sm">{item.timeline}</p>
                        </div>
                    ))}
                </div>
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">Certificates</h3>
                    {certificates.map((item, index) => ( 
                        <div key={index} className="mb-6">
                            <p className='text-white font-semibold'>{item.degree}</p>
                            <p className='text-blue-400'>{item.school}</p>
                            <p className='text-gray-400 text-sm'>{item.timeline}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </FadeInUp>
    );
}