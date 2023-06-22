// useSelector: To access value from the State
import { useSelector } from 'react-redux';
import Home from './components/Home.jsx'

function App() {
  const value = useSelector(state => state.custom.c);
                //OR we can render this c value. Note: c is just a variable
  //const { c } = useSelector(state => state.custom);
  return (
    <div>
      <h2>{value}</h2>
      <Home />
    </div>
  )
}

export default App
