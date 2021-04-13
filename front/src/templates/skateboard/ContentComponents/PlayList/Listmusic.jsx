

export const Listmusic = ({ data, animNUm }) => {

    return (
        <li className="anim" style={{"--delay": animNUm+`s`}} >
            <div className="plItem">
                <span className="plNum">{data.track}</span>
                <span className="plTitle">{data.name}</span>
                <span className="plLength">{data.duration}</span>
            </div>
        </li>
    )
}





