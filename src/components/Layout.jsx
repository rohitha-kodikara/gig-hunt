import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const Layout = () => {
  return (
      <>
      <Navbar />
    <div className="grid min-h-screen grid-cols-[200px_1fr_1fr] bg-slate-50 text-slate-900">
    
      <Sidebar/>

        <main className="col-span-2">
          <Outlet />
        </main>
    </div>
      </>
  )
}



export default Layout
