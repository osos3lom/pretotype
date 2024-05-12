import Sidebar from '@/components/sidebar'
import React from 'react'

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar/>
      <main className="mr-12 mt-32">
        <h1 className="text-center text-9xl ">ماذا تريد أن ترى في هذه الصفحة؟</h1>
      </main>
  </div>
  )
}
