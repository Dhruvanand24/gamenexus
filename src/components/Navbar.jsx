import React from 'react'

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
    <div className="flex backdrop-blur-lg border-b border-slate-400 justify-between py-2">
    <div className="flex">
      <a className="btn btn-ghost text-3xl text-white">Game <span className='text-black'>Nexus</span></a>
    </div>
    <div className="flex">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-slate-900 " />
        
      </div>
      <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    
    </div>
  </div>
  </header>
  )
}

export default Navbar
