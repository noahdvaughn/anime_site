import { useEffect, useState } from "react"
import { GetRecs } from "../services/recommended"

const Recommendations = () => {
  const [recs, setRecs] = useEffect()

  useEffect(()=>{
    const grabRecs = async() => {
      setRecs(GetRecs())
    }
    grabRecs()
    
  },[])

  return <div></div>
}
export default Recommendations