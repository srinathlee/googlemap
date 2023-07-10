import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/home'
import Form from "./components/form"


import './App.css'

function App() {
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
  },
    {
      path:"/upload",
      element:<Form/>
}
])


  return (
    <main className="App">
    <RouterProvider router={router}>

    </RouterProvider>
    </main>
  );
}

export default App;
