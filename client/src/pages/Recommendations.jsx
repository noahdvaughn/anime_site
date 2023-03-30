import { useEffect, useState } from "react"
import { GetRecs } from "../services/recommended"

const Recommendations = () => {
  const [recs, setRecs] = useState()

  useEffect(()=>{

    const grabRecs = async() => {
      setRecs( await GetRecs())
    }
    grabRecs()
    
  },[])
  console.log(recs)

  return <div>
    <h1>Top Recommendations</h1>
  </div>
}
export default Recommendations