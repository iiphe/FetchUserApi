import React from "react"
import { Routes, Route } from "react-router-dom"
import {About } from "../pages/About"
import { Contact } from "../pages/Contact"
import{ ProfileLayout } from "../pages/ProfileLayout"
import { Profile } from "../pages/Profile"
import { NotFound } from "../pages/NotFound"



export function ProfileRoutes() {
  return (
  <>
   <ProfileLayout />
  <Routes>

          <Route index element={<Profile />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
          </>
  )
}