
import Button from './components/Button.jsx'
import HobbyList from './components/HobbyList.jsx'
import ProfileCard from './components/ProfileCard.jsx'
const hobbie = ["Circket", "Coding", "Debugging", "Gameing", "Rousting"]
const user1 = {
  name: "Ali",
  age: 26,
  city: "Lahore"
}
const user2 = { ...user1, name: "Ahmed" }
const user3 = { ...user2, name: "Azeem" }
const user4 = { ...user2, name: "Shahbaz" }

import Counter from "./components/Counter"

import Child from "./components/Child"

function App() {

  return (
    <>
      <ProfileCard name="Ali" age="26" city="Lahore" />
      <div className="min-h-screen flex justify-center items-center gap-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <Button text="Click Me" colour="bg-gradient-to-r from-blue-400 to-blue-600" />
        <Button text="Change Me" colour="bg-gradient-to-r from-green-400 to-green-600" />
        <Button text="Let Me" colour="bg-gradient-to-r from-red-400 to-red-600" />
      </div>
      <HobbyList hobbies={hobbie} />

      <div className="min-h-screen bg-gray-100 flex justify-center items-start">
        <Child users={[user1, user2, user3, user4]} />
      </div>

      <Counter num={10} />
    </>
  )
}

export default App
