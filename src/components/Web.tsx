import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { login} from '../store/actions/userActions';


export const Web =(props: any) => {  
  console.log("Web props"); console.log(props);
 
  const dispatch = useDispatch();  
  const user = useSelector((root  : any ) => root.user); //!  Redux Çağırma

  //! Veriler
  const formData = {
    "email": "enes3@gmail.com",  
    "password": "123"
  } 

  //! Veri Gönderiyor
  useEffect( () => { 
    console.log("Web Başladı"); 
    const veriGönderme = dispatch(login(formData));
    console.log("Web VeriGönderme"); console.log(veriGönderme);
  },[])


  return (
  <React.Fragment>
    <div>
          <h1> Social Education </h1>
          <p> DATA - Title - {user.data.title} </p>
          <p> DATA - Status - {user.data.status} </p>
          <p> Loading - {user.loading ? "loading" : "did not loading"} </p>
          <p> Eror - {user.error ? "error" : "did not error"} </p>
    </div>
  </React.Fragment>
  )
}


export default Web;
