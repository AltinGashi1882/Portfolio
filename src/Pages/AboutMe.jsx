import Altin from '../assets/img/Altin.jpg'
import FadeInUp from '../Animations/FadeInUp';
import Particles from '../Animations/Particles';
import SplitText from '../Animations/SplitText';

export default function AboutMe() {
  return (
    <div 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:justify-items-start p-6">
        
        {/* Left Column - Image */}
        <FadeInUp delay={0.4}>
          <img
            src={Altin}
            alt="Altin Gashi"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg border-4 border-white mx-auto md:mx-0"
          />
        </FadeInUp>

        {/* Right Column - Text */}
        <FadeInUp delay={0.4}>
          <div className="w-full text-center">
            {/* Name */}
            <div className="block w-full">
              <SplitText
                text="Altin Gashi"
                className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
              />
            </div>

            {/* Description */}
            <div className="block w-full max-w-lg">
              <SplitText
                text="Born August 18, 2002, studies Computer Science at the University of Prizren. Passionate developer pursuing tech career with bachelor's degree."
                className="text-gray-300 text-lg sm:text-xl leading-relaxed"
                delay={60}
                duration={0.6}
              />
            </div>
          </div>
        </FadeInUp>

      </div>
    </div>
  );
}
