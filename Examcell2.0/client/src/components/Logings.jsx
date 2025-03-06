import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdContact } from "react-icons/io";
import { IoMdPerson,IoMdLock } from "react-icons/io";
function Login({setUserType}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [tusername,setTuserName]=useState('');
    const [tpassword, setTPassword] = useState("");
    const navigate = useNavigate();

    const handleLoginStudent = () => {
      setUserType("student");
      navigate('/dashboard');
    }


      const handleLoginFaculty = () => {
        setUserType("faculty");
        navigate('/dashboard');

      }
  return (
    <div>
       
         <div className='flex justify-center items-center lg:h-screen bg-gray-50 p-6'>
          
          <div className="bg-gray-50 p-6 rounded-lg  w-full max-w-3xl">
                
                <div className="text-5xl font-semibold text-center mb-6 ">
                  <h1 className='underline'>Exam Cell </h1>
                </div> 
                <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 ml-10 lg:ml-0'>
                <div className="w-72 lg:w-full lg:max-w-md bg-white hover:bg-slate-50 shadow-lg rounded-xl p-8 border-2 border-blue-300 ml-4">
                  
                  <IoMdContact fontSize={100} className="mx-auto mb-4 text-gray-700" />
                  <div>
                  <h3 className='text-2xl font-semibold mb-3 ml-14'>Student Login</h3>
                  </div>
                  <form className="space-y-4">
                    
                    <div className="relative">
                <IoMdPerson className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="username"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
          
                    
                    <div className="relative">
                    <IoMdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 "/>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    </div>
                    
                    <button
                      onClick={handleLoginStudent}
                      className="w-full relative px-6 py-2 text-white bg-blue-600 rounded-md overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-white before:opacity-15 before:transition-all before:duration-300 hover:before:h-full"
                    >
                      Login
                    </button>
                  </form>
                </div>
                
                <div className="w-72 lg:w-full lg:max-w-md bg-white hover:bg-slate-50 shadow-lg rounded-xl p-8 border-2 border-blue-300 ml-4">
                  
                  <IoMdContact fontSize={100} className="mx-auto mb-4 text-gray-700" />
                  <div>
                  <h3 className='text-2xl font-semibold mb-3 ml-14'>Teacher login</h3>
                  </div>
                  <form className="space-y-4">
                    
                    <div className="relative">
                <IoMdPerson className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="username"
                  value={tusername}
                  onChange={(e)=>setTuserName(e.target.value)}
                />
              </div>
          
                    
                    <div className="relative">
                    <IoMdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 "/>
                    <input
                      type="password"
                      placeholder="Password"
                      value={tpassword}
                      onChange={(e) => setTPassword(e.target.value)}
                      className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    </div>
                    
                    <button
                      onClick={handleLoginFaculty}
                      className="w-full relative px-6 py-2 text-white bg-blue-600 rounded-md overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-white before:opacity-15 before:transition-all before:duration-300 hover:before:h-full"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
              </div>
              </div>
    </div>
  )
}

export default Login