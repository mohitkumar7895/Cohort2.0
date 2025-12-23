import React from 'react'
import Card from './components/Card'

const App = () => {

  const users = [
    {
      fullName: "Aarav Sharma",
      title: "Frontend Developer",
      profile: "https://randomuser.me/api/portraits/men/11.jpg",
      likeCount: 1240,
      postCount: 56,
      viewsCount: 18900,
      followedCount: 980
    },
    {
      fullName: "Priya Verma",
      title: "UI/UX Designer",
      profile: "https://randomuser.me/api/portraits/women/21.jpg",
      likeCount: 980,
      postCount: 42,
      viewsCount: 15400,
      followedCount: 1120
    },
    {
      fullName: "Aarav Sharma",
      title: "Frontend Developer",
      profile: "https://randomuser.me/api/portraits/men/11.jpg",
      likeCount: 1240,
      postCount: 56,
      viewsCount: 18900,
      followedCount: 980
    },
    {
      fullName: "Priya Verma",
      title: "UI/UX Designer",
      profile: "https://randomuser.me/api/portraits/women/21.jpg",
      likeCount: 980,
      postCount: 42,
      viewsCount: 15400,
      followedCount: 1120
    },
    {
      fullName: "Aarav Sharma",
      title: "Frontend Developer",
      profile: "https://randomuser.me/api/portraits/men/11.jpg",
      likeCount: 1240,
      postCount: 56,
      viewsCount: 18900,
      followedCount: 980
    },
    {
      fullName: "Priya Verma",
      title: "UI/UX Designer",
      profile: "https://randomuser.me/api/portraits/women/21.jpg",
      likeCount: 980,
      postCount: 42,
      viewsCount: 15400,
      followedCount: 1120
    }
  ]

  return (
    <div className="flex flex-wrap bg-gray-100 min-h-screen p-5">
      {users.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  )
}

export default App
