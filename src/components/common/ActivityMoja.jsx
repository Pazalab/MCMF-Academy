import { useState } from "react"
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";


const ActivityMoja = ({ data }) => {
    const [ active, setActive ] = useState(false);

  return (
     <div className={ active ? "activity-moja active" : "activity-moja"}>
            <div className="activity-moja-header" onClick={() => setActive(!active)}>
                        <h3>{data.title}</h3>
                        { active ? <span><HiOutlineMinus /></span> : <span><HiOutlinePlus /></span>}
            </div>
                <div className="activity-texts">
                        <div className="activity-texts-inner">
                                <p>{data.description}</p>
                        </div>
                </div>
    </div>
  )
}

export default ActivityMoja