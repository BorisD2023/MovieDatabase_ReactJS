import { NavLink } from "react-router-dom";


const BackBtn = () => {
    return ( 
        <>
            <NavLink to="/"><button className="back-btn">Back</button></NavLink>
        </>
     );
}
 
export default BackBtn;