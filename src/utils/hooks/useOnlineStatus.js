import { useEffect,useState } from "react"
const useOnlineStatus = ()=>{

    const [onlineStatus , setonlinestatus] = useState(true)


    useEffect(()=>{
        //ye browser ne hame event listener de rakhe h 

        //agar offline h to status set kr do false 
        window.addEventListener("offline", ()=> {
            setonlinestatus(false)
        });
        window.addEventListener("online", ()=>{
            //agar online staus h to set kr do true
            setonlinestatus(true)
        })

    },[])
    
    return onlineStatus;



}
export default useOnlineStatus