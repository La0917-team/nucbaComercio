
import FormLogin from './Components/FormLogin/FormLogin'
import FormCreateUser from './Components/FormCreateUser/FormCreateUser'
import NavBar from './Components/NavBar/NavBar';
import ProfileAuth0 from './Components/ProfileAuth0/ProfileAuth0';

import Categories from './Components/Categories/Categories';


function App() {
  return (
    <>
    
    <NavBar/>
    <Categories/>
    <ProfileAuth0/>
   
    <FormLogin/>

    
    
    <FormCreateUser/>
    </>
    
    )
  }
  
export default App;
