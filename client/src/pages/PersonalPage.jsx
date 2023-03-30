import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { GetSingleUser } from "../services/auth"

const PersonalPage = ({user}) => {

  useEffect(()=>{},[])

  return <div>
    <h1>Hello, {user.name}</h1>
  </div>
}
export default PersonalPage