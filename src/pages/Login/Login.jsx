import React, {useState} from 'react'
import './Login.css'
function Login() {
    const [userName, setUserName] = useState("");
    const [password , setPassword] = useState("");
    const login = () => {
        const usersFromDB = localStorage.getItem("user");     
        if(usersFromDB != null)
        {
            const userList = JSON.parse(usersFromDB);
            const loginUser = userList.find((user) => user.userName == userName && user.password == password);
            if(loginUser != null)
            {
                alert("Login success");
            }
            else
            {
                alert("Login fail");
            }
        }
        else
        {
            alert("Login fail");
        }
    }
    return (
    <div className='login_container'>
        <div className='login_left'>
            <img className='login_left_img' src='/img/login_regis_img.png' />
        </div>
         <div className='login_right'>
            <div className='login_right_form'>
                <h2 className='login_right_title'>Login</h2>
                <span>Enter your details below</span>
                <div className='login_right_input_container'>
                    <input className='login_right_input login_right_input_user_name' placeholder='Enter your username' onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className='login_right_input_container'>
                    <input className='login_right_input login_right_input_password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='login_right_input login_right_submit_btn' onClick={() => login()}>Login</button>
            </div>
        </div>
    </div>
    )
}

export default Login
