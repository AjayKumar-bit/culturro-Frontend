import Navbar from './Navbar/Navbar'
import LoginANdSignup  from './Navbar/login/LoginANdSignup'

import './App.css'
import ViewBooks from './Crud/ViewBooks/ViewBooks'
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import  FindBook from './FindBook/FindBook'
import Edit from './Crud/EditDetails/Edit'
import AddBook from './Crud/Addbooks/AddBook'


function App() {
  

  return (
    <>
      <Router>
          <Navbar/> 
          <Routes>
            <Route path='/' element={<LoginANdSignup/>}/>

            <Route path='/addbook' element={<AddBook/>}/>
            <Route path='/updatebook' element={<Edit/>}/>
            <Route path='/deletebook' element={<FindBook/>}/>

            <Route path='/findbook' element={<FindBook/>}/>
            <Route path='/viewbooks' element={<ViewBooks/>}/>




          </Routes>
      </Router>
      
      {/* <LoginANdSignup/> */}
      {/* <ViewBooks/> */}
      {/* <FindBook/> */}
      {/* <AddBook/> */}
    </>
  )
}

export default App
