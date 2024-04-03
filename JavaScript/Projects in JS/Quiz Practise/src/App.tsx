import Questions from "./components/Questions"
import { quizDetails } from './api/seed.ts';
import { shuffleQuesOpt } from "./utils/shuffleQuesOpt.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss';


function App() {
  const quizDetail = shuffleQuesOpt(quizDetails);
  return (
    <>
      <h1>Guidewire Associate Certified Quiz</h1>
      {
        quizDetail.map(({ question, options, correctOptions }, index) => (
            <Questions question={question} options={options} correctOptions={correctOptions} key={index} quesId={index} />
        ))
      }
      <ToastContainer />
    </>
  )
}

export default App
