import React, { useContext ,useState} from "react";
import { MainContext } from "../context/UserProvider";


const NewForm = () => {
    // const [currentUser] = useContext(MainContext)  
    // const [data, setData] = useState([]);
    return ( 
        <div className="row mt-5 justify-content-center">
                <div className="col-12 col-lg-6 border border-1 p-4">
                    <form className="">
                        <div className="form-group">
                            <h2>Create New Form</h2>   
                        </div>
                     
                    </form>
                </div>
            </div>
        
  );
}

export default NewForm;