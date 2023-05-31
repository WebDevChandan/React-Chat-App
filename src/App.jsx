import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Join  from './components/Join/Join.jsx'
import Chat from './components/Chat/Chat.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
