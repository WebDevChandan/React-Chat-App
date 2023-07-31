import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Chandan";
  const isNameShowing = true;
  return (
    <div>Hello {isNameShowing ? name : 'someone'}
    
      {name ? (<p>test</p>):(<p>Test Fail</p>)}
    </div>
    )
}

export default App
