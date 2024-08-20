import { useRouteError } from "react-router-dom"


const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}
export default Error;