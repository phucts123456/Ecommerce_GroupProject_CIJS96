import React, {useState} from 'react'
import './Register.css'
function Register() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password , setPassword] = useState("");
    const register = () => {
        const usersFromDB = localStorage.getItem("user");
        
        if(usersFromDB != null)
        {
            const userList = JSON.parse(usersFromDB);
            if(userList.find((user) => user.userName == userName) != null)
            {
                alert("user existed");
                return;
            }
            const newUser = {
                userName:userName,
                email:email,
                phoneNumber:phoneNumber,
                password:password
            } 

            userList.push(newUser);
            localStorage.setItem("user", JSON.stringify(userList));
            alert("Regist success");
        }
        else
        {
            const newUser = [{
                userName:userName,
                email:email,
                phoneNumber:phoneNumber,
                password:password
            }]
            localStorage.setItem("user", JSON.stringify(newUser));
        }
    }
    return (
    <div className='login_container'>
        <div className='login_left'>
            <img className='login_left_img' src='/img/login_regis_img.png' />
        </div>
         <div className='login_right'>
            <div className='login_right_form'>
                <h2 className='login_right_title'>Register</h2>
                <span>Enter your details below</span>
                <div className='login_right_input_container'>
                    <input className='login_right_input login_right_input_user_name' placeholder='Enter your username' onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className='login_right_input_container'>
                    <input className='login_right_input login_right_input_email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='login_right_input_container'>
                    <input className='login_right_input login_right_input_phone_number' placeholder='Enter your phone number' onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className='login_right_input_container'>
                    <input className='login_right_input login_right_input_password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='login_right_input login_right_submit_btn' onClick={() => register()}>Register</button>
            </div>

        </div>
    </div>
    )
}

export default Register
