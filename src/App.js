// import Courses ,Title and UserCard here
// keep a user object with mentioned properties and pass down to UserCard as prop
import '../src/styles.css'
import Title from './Components/Title'
import UserCard from './Components/UserCard'
export default function App() {

  return (
    <div className='App'>
      <Title />
      <UserCard name="Dev" avatar='https://dummyimage.com/200x200.jpg/ff4444/ffffff' address ="726/3 Trenching Ground" posts='1841' followers='66868'/>
    </div>
  )
}
