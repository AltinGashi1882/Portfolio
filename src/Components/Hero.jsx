export default function Hero(props) {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                    src={props.img}
                    className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                    <h1 className="text-5xl font-bold">{props.name}</h1>
                    <p className="py-6">
                        {props.description}
                    </p>
                    <button className="btn btn-primary">{props.button}</button>
                    </div>
                </div>
            </div>
        </>
    )
}


