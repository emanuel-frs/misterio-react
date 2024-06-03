import { useState, useEffect } from 'react';
import style from './style.module.css';
import logoFacebook from './assets/LogoFacebook.png';
import logoInstagram from './assets/LogoInstagram.png';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [erroEmail, setErroEmail] = useState(false);
  const [erroPassword, setErroPassword] = useState(false);

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
        setErroEmail(false);
        setErroPassword(false);
        alert(`Bem vindo ao Instagram!`);
      }else if(email == loginValido[0] && password != loginValido[1]){
        setErroPassword(true);
        setErroEmail(false);
      }else if(email != loginValido[0]){
        setErroEmail(true);
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
              {erroEmail && <p className={style.erroEmail}>Email inválido</p>}
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
              {erroPassword && <p className={style.erroSenha}>Senha inválida</p>}
            </div>
            <div className={style.forget}>
              <a href="https://www.instagram.com/accounts/emailsignup/?next=https%3A%2F%2Fwww.instagram.com%2Fterms%2Faccept%2F%3F__coig_login%3D1">Forgotten password?</a>
            </div>
            <button type="submit" className={style.btn} onClick={buttonClick}>Login</button>
          </form>
          <p className={style.or}>------------------------------------------- or -------------------------------------------</p>
          <a href="https://www.facebook.com/?locale=pt_BR" className={style.face}>
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
