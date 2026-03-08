import { Navigate } from "react-router-dom"

const ProtectDashboard = ({children})=>{

    const auth = localStorage.getItem('token')

    if(!auth){
        return <Navigate to = '/about'/>
    }
    return children


}
export default ProtectDashboard