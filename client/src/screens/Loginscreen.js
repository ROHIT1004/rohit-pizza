import React ,{ useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {loginUser} from "../actions/userActions";
export default function Loginscreen() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/' 
        }
    }, [])
    function login() {
        
            const user={ email, password}
            console.log(user);
            dispatch(loginUser(user))
        }
    

    return (
        <div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5 text left">
                <h2 className="txt-center m-2" style={{ fontSize: '35px' }}>Login</h2>
                <div>
                    <input required type="text" placeholder="email" className="form-control" 
                        value={email} onChange={(e)=>{setemail(e.target.value)}} />
                    <input required type="text" placeholder="password" className="form-control"
                        value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                    <button onClick={login} className="btn m-5 mt-3">LOGIN</button>
                    <a className="btn m-5 mt-3" href="/register">Register</a>
                   
                </div>
            </div>
        </div>
    </div>
    )
}
