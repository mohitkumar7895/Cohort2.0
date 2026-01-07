import React, { createContext } from 'react'

export const NavbarDataContext = createContext()

const NavbarContext = (props) => {

   const data = 
   [
  {
    "id": 1,
    "name": "Rahul Kumar",
    "role": "User",
    "avatar": "https://i.pravatar.cc/150?img=1",
    "navbar": [
      { "title": "Home", "path": "/" },
      { "title": "Profile", "path": "/profile" },
      { "title": "My Applications", "path": "/applications" },
      { "title": "Notifications", "path": "/notifications" }
    ]
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "role": "Premium User",
    "avatar": "https://i.pravatar.cc/150?img=2",
    "navbar": [
      { "title": "Dashboard", "path": "/dashboard" },
      { "title": "Jobs", "path": "/jobs" },
      { "title": "Saved Posts", "path": "/saved" },
      { "title": "Notifications", "path": "/notifications" }
    ]
  },
  {
    "id": 3,
    "name": "Mohit Singh",
    "role": "Admin",
    "avatar": "https://i.pravatar.cc/150?img=3",
    "navbar": [
      { "title": "Admin Panel", "path": "/admin" },
      { "title": "Add Vacancy", "path": "/admin/add-vacancy" },
      { "title": "Announcements", "path": "/admin/announcements" },
      { "title": "Manage Users", "path": "/admin/users" }
    ]
  },
  {
    "id": 4,
    "name": "Sneha Sharma",
    "role": "Employee",
    "avatar": "https://i.pravatar.cc/150?img=4",
    "navbar": [
      { "title": "Tasks", "path": "/tasks" },
      { "title": "Upload Notice", "path": "/upload" },
      { "title": "Daily Reports", "path": "/reports" },
      { "title": "Profile", "path": "/profile" }
    ]
  },
  {
    "id": 5,
    "name": "Aman Raj",
    "role": "Super Admin",
    "avatar": "https://i.pravatar.cc/150?img=5",
    "navbar": [
      { "title": "Super Dashboard", "path": "/super-admin" },
      { "title": "All Vacancies", "path": "/super-admin/vacancies" },
      { "title": "Agent Settings", "path": "/super-admin/agent" },
      { "title": "System Logs", "path": "/super-admin/logs" }
    ]
  }
]


    



  return (
    <div className='context-div'>
      <NavbarDataContext.Provider value={{data}}>
        {props.children}
      </NavbarDataContext.Provider> 
    </div>
  )
}

export default NavbarContext
