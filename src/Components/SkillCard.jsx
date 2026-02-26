
export default function SkillCard(props) {
    return (
        <>
            <div
              className="card bg-base-200/60 backdrop-blur-md border border-base-content/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl">{props.title}</h3>
                <progress
                  className={`progress progress-${props.color} w-full mt-2`}
                  value={props.value}
                  max="100"
                ></progress>
                <p className="mt-4 text-base-content/70">{props.stack}</p>
              </div>
            </div>
        </>
        
    )
}