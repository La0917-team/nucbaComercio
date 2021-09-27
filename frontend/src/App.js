import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Components/Signin/Signin';
import FormLogin from './Components/FormLogin/FormLogin'
import FormCreateUser from './Components/FormCreateUser/FormCreateUser'
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <>
    <NavBar/>
   {/* <Signin/> */}
   
    <FormLogin/>

    
    
    <FormCreateUser/>
    </>
    
  )
}

export default App;
