import React, {useState} from "react"
import{ createBrowserRouter, Outlet, RouterProvider }from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LogIn from "./pages/LogIn/LogIn"
import Dashboard from './pages/Dashboard/Dashboard'
import FooterLogIn from "./components/FooterLogIn/FooterLogIn"
import MapsSelect from "./pages/MapsSelect/MapsSelect"
import Departamento from "./pages/Departamento/Departamento"
import Municipio from "./pages/Municipio/Municipio"
import Vereda from './pages/Vereda/Vereda'
import AddInfo from "./pages/AddInfo/AddInfo"
import AddNovedad from "./pages/AddNovedad/AddNovedad"
import Profile from "./pages/Profile/Profile"
import Configurations from "./pages/Configurations/Configurations"
import './App.sass'

const Layouts = () =>{
  
  const isLoginPage = location.pathname === '/login';
  const [logInUser, setLogInUser] = useState(true)
  /* const location = useLocation();
  
  console.log(logInUser)
  if (logInUser && isLoginPage) {
    return <Navigate to="/dashboard" />;
  } */

  
  const shouldShowHeaderAndMenu = logInUser && !isLoginPage;

  return (
    <div className="app">
      <Header />
      <Outlet />
      {isLoginPage ? <FooterLogIn /> : <Footer />}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layouts />,
    children:[
      {
        path:"/",
        element: <Dashboard />
      },
      {
        path:"/login",
        element: <LogIn />
      },
      {
        path:"/dashboard",
        element: <Dashboard />
      },
      {
        path:"/mapsselect",
        element: <MapsSelect />
      },
      {
        path:"/departamento/:departamento",
        element: <Departamento />
      },
      {
        path:"/departamento/:departamento/municipio/:municipio",
        element: <Municipio />
      },
      {
        path:"/departamento/:departamento/municipio/:municipio/vereda/:vereda",
        element: <Vereda />
      },
      {
        path:"/addinfo",
        element: <AddInfo />
      },
      {
        path:"/addnovedad",
        element: <AddNovedad />
      },
      {
        path:"/configurations",
        element: <Configurations />
      },
      {
        path:"/profile",
        element: <Profile />
      },
      
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
