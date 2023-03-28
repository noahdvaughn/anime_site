import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { GetSingleUser } from "../services/auth"

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState()
  const {id} = useParams()



  useEffect(()=>{
    const grabUserDetails = async(id) => {
      setUserDetails(GetSingleUser(id))
    }
    grabUserDetails(id)
  },[])


  return <div></div>
}
export default UserDetails