export default function Navbar(props) {

    return ( 
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">{props.heading}</a>
                </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a>Link</a></li>
                <li>
                    <details>
                    <summary>{props.menu}</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                        <li><a>{props.link_1}</a></li>
                        <li><a>{props.link_2}</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
     </div>
    </>
    )
}