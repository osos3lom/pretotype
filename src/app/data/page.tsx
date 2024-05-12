'use client'
import Sidebar from "@/components/sidebar"
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from 'react'

export default function DataPage() {
  const session = useSession({
    required: true,
    onUnauthenticated(){
      redirect('/login');
    },
  });
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className='text-center'>{session?.data?.user?.email}</div>
      <button onClick={()=>signOut()}>تسجيل الخروج</button>      
      <Sidebar/>
      <main className="mr-12 mt-32">
        <h1 className="text-center text-9xl ">ماذا تريد أن ترى في هذه الصفحة؟</h1>
      </main>
  </div>

  )
}
DataPage.requireAuth = true


