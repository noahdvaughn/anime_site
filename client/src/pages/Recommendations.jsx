import { useEffect, useState } from "react"

const Recommendations = () => {

  useEffect(()=>{
    const grabUserDetails = async(id) => {
      setUserDetails(GetSingleUser(id))
    }
    
  },[])

  return <div></div>
}
export default Recommendations