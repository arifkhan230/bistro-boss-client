import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";


const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuth;