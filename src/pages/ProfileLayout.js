import React from "react"
import {Link } from "react-router-dom"

export function ProfileLayout() {
  return(
    <>
     <Link to="/Profile/about">About</Link>
   <br />
   <Link to="/Profile/contact">Contact</Link>
   
   </>

  )
}