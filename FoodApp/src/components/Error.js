import { useRouteError } from "react-router-dom";
import { ERROR_IMG } from "../utils/constant";
const Error = () =>{
    const err = useRouteError();
return (
    <div className = "error-container">
        <h1>Error Page !</h1>
        <h2>{err.data}</h2>
        <h2>{err.status +" "+ err.statusText }</h2>
        <img src={ERROR_IMG} alt="Not Found"/>
    </div>
)
}
export default Error;