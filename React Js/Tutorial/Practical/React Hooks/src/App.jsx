import {useRef} from 'react'
import './App.css';
import UseEffect_Ex1 from './components/Effect Hook/UseEffect_Ex1';
import ButtonParent from './components/ImperativeHandle Hook/ButtonParent';
import ButtonChild from './components/ImperativeHandle Hook/ButtonChild';
import UseLayoutEffect_Ex1 from './components/LayoutEffect Hook/UseLayoutEffect_Ex1';
import UseReducer_Ex1 from './components/Reducer Hook/UseReducer_Ex1';
import UseRef_Ex1 from './components/Ref Hook/UseRef_Ex1';
import UseState_Ex1 from './components/State Hook/UseState_Ex1';
import UseState_Ex2 from './components/State Hook/UseState_Ex2';
import UseContextTutorial from './components/Context Hook/UseContext_Ex1';
import UseImperativeHandleTutorial from './components/ImperativeHandle Hook/UseImperativeHandle_Ex1';
import UseMemo_Ex1 from './components/Memo Hook/UseMemo_Ex1';
import UseCallback_Ex1 from './components/Callback Hook/UseCallback_Ex1';


function App() {

  return (
    <>
      <UseCallback_Ex1 />
    </>
  );
}

export default App;
