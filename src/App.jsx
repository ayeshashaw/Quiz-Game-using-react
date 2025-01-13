import{Routes,Route} from "react-router-dom"
import './App.css'
import SetupQuiz from "./components/SetupQuiz"
import Quiz from "./components/Quiz"
import leaderBoard from "./components/leaderBoard"

function App() {

  return (
    <Routes>
      <Route path="/" element={<SetupQuiz/>}/>
      <Route path="/quiz" element={<Quiz/>}/>
      <Route path="/leaderBoard" element={<leaderBoard/>}/>
    </Routes>
  )
}

export default App
