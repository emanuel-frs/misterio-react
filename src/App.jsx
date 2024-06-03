import { useState, useEffect } from 'react';
import style from './style.module.css';
import logoFacebook from './assets/LogoFacebook.png';
import logoInstagram from './assets/LogoInstagram.png';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const buttonClick = () => {
    setButtonClicked(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
    
  };

  useEffect(() => {
    if (buttonClicked) {
      const loginValido = ["email@email.com", "12345"];
      setButtonClicked(false);
      if(email == loginValido[0] && password == loginValido[1]) {
        alert(`Bem vindo ${email}`);
      }else if(email == loginValido[0] && password != loginValido[1]){
        alert("Senha incorreta!")
      }else if(email != loginValido[0]){
        alert("Email incorreta!") 
      }
    }
  }, [buttonClicked, email, password]);

  return (
    <>
      <div className={style.transition}>
        <div className={style.container}>
          <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fterms%2Faccept%2F%3F__coig_login%3D1">
            <img src={logoInstagram} alt="Instagram Logo" className={style.logoInsta}/>
          </a>
          <form onSubmit={handleSubmit}>
            <div className={style.email}>
              <input 
                type="text" 
                placeholder="Phone number, username or email address" 
                value={email} 
                onChange={handleEmailChange} 
                required
                aria-label="Email or Username"
              />
            </div>
            <div className="password">
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={handlePasswordChange} 
                required 
                className={style.password}
                aria-label="Password"
              />
            </div>
            <div className='forget'>
              <a href="https://www.instagram.com/accounts/emailsignup/?next=https%3A%2F%2Fwww.instagram.com%2Fterms%2Faccept%2F%3F__coig_login%3D1">Forgotten password?</a>
            </div>
            <button type="submit" className={style.btn} onClick={buttonClick}>Login</button>
          </form>
          <p className={style.or}>------------------------------------------- or -------------------------------------------</p>
          <a href="https://www.facebook.com/?locale=pt_BR" className='face'>
            <img src={logoFacebook} alt='Facebook Logo' className={style.logoFacebook}/>
          </a>
        </div>
        <div className={style.bottomContainer}>
          <p>Do not have an account? </p>
          <a href="https://www.instagram.com/accounts/emailsignup/?next=https%3A%2F%2Fwww.instagram.com%2Fterms%2Faccept%2F%3F__coig_login%3D1">Sign Up</a>
        </div>
      </div>
    </>
  )
}

export default App;
