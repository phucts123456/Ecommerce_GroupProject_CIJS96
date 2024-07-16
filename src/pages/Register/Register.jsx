import React, {useState} from 'react'
import './Register.css'
function Register() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password , setPassword] = useState("");
    const [rePassword , setRePassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [isRegistFail, setIsRegistFail] = useState("");
    const register = () => {
        if(password != rePassword) 
        {
            setIsRegistFail(true);
            setErrorPassword("Password and retype password are not match");
            return;
        }

        const usersFromDB = localStorage.getItem("user");     
        if(usersFromDB != null)
        {
            const userList = JSON.parse(usersFromDB);
            if(userList.find((user) => user.userName == userName) != null)
            {
                alert("user existed");
                return;
            }
            const userId = userList.length + 1;
            const newUser = {
                userId:userId,
                userName:userName,
                email:email,
                phoneNumber:phoneNumber,
                password:password
            } 

            userList.push(newUser);
            localStorage.setItem("user", JSON.stringify(userList));
            alert("Regist success");
            document.location.href = '/login',true;
        }
        else
        {
            const newUser = [{
                userId: 1,
                userName: userName,
                email: email,
                phoneNumber: phoneNumber,
                password: password
            }]
            localStorage.setItem("user", JSON.stringify(newUser));
            alert("Regist success");
            window.location.href = "/login";
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
                { errorPassword != '' && isRegistFail ? <p style={{color:'red'}}>{errorPassword}</p> : ""}
                <div className='login_right_input_container'>
                    <input className='login_right_input login_right_input_password' placeholder='Retype your password' onChange={(e) => setRePassword(e.target.value)} />
                </div>
                <div className='login_right_input login_right_input_submit'>
                    <button className='login_right_input login_right_submit_btn' onClick={() => register()}>Register</button>
                    <a href='/login'>Already have an account?</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register
