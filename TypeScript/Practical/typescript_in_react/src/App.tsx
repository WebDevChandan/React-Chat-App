import { FC, createContext } from 'react';
import './App.css';
import Person from './components/Person';
import { HairColor } from './components/Enums';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

// We usually create a context (AppContext), so that we can pass it inside of our some sort of higher order component like our "App" Component.

// When we pass the AppContext, we can wrap it around our component and whatever values we pass inside of this context, we can access it inside of any component.
const AppContext = createContext<AppContextInterface | null>(null);

// FC: Function Component Type is annotated with App component.
const App: FC = () => {
  const name: string = "Chandan";

  const contextValue: AppContextInterface = {
    name: "Chandan Kumar",
    age: 23,
    country: "India",
  }

  return (

    //.Provider can provide some sort of value to our application and this value might be useful, might be context states and alot of different things that you might want to use.
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person name={name} age={23} hairColor={HairColor.Blonde} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
