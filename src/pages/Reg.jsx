import React, {useState} from 'react';
import image1 from "../image1.png";
import {Link} from "react-router-dom";

export default function Reg(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Пароли не совпадают");
            return;
        }
    
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
    
            if (response.ok) {
                alert("Регистрация успешна");
                // Очистка полей формы после успешной регистрации
                setUsername('');
                setPassword('');
                setConfirmPassword('');
            } else {
                const data = await response.json();
                alert(data.message || "Ошибка регистрации");
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert("Произошла ошибка");
        }
    };

    return (
        <>
            <div className='container'>
                <Link className='returnButton' to="/">Return</Link>
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor="">Registration form</label>
                    <img src={image1} alt="user_image" />
                    <input type="text" placeholder='login' required value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder='password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" placeholder='confirm password' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <button type='submit'>Send</button>
                    <p className='formP'>Already have an accout?<Link to="/login">Login</Link></p>
                </form>
            </div>
        </>
    );
}