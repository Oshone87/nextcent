import { Route, Routes } from 'react-router-dom';
import './App.css';
import RootLayout from './Layout/RootLayout';
import Home from './Components/Home';






function App() {
  return (
    <div className="h-dvh">
     <Routes>
      <Route path ='/' element = {<RootLayout/>}>
        <Route index element = {<Home/>}/>
       


      </Route>
     </Routes>
   
   
    </div>
  );
}

export default App;
