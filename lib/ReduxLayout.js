'use client'
import { isAccessTokenExist } from "@/components/utils/LocalStorage"
import { useUserDataQuery } from "./user/userApiSlice"

export default function ReduxLayout({ children }) {
  useUserDataQuery("userInfo", { skip: !isAccessTokenExist() })
  return (
    <>
      {children}
    </>
  )
}
