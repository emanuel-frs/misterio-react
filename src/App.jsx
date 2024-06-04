import { useState, useEffect, useMemo } from 'react';
import style from './style.module.css';
import logoFacebook from './assets/LogoFacebook.png';
import logoInstagram from './assets/LogoInstagram.png';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginCheck, setLoginCheck] = useState(0);
  const [loginInvalido, setLoginInvalido] = useState(false);
  
  const usuarios = useMemo(() => [
    { email: "emanuel@gmail.com", password: "12345" },
    { email: "pedro@gmail.com", password: "123456" },
    { email: "joao@gmail.com", password: "1234567" }
  ], []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginCheck(loginCheck + 1);
  };

  useEffect(() => {
    const usuario = usuarios.find((usuario) => usuario.email === email && usuario.password === password);
    if(loginCheck > 0){
      if(usuario){
        alert("Bem vindo!");
        setLoginInvalido(false);
      }else{
        setLoginInvalido(true);
      }
    }
    }, [loginCheck,email,password,usuarios]
  );

  return (
    <>
      <div className={style.transition}>
        <div className={style.container}>
          <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fterms%2Faccept%2F%3F__coig_login%3D1">
            <img src={logoInstagram} alt="Instagram Logo" className={style.logoInsta}/>
          </a>
          <form>
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
            {loginInvalido && <p className={style.erro}>Email ou senha inválido</p>}
            <div className={style.forget}>
              <a href="https://www.instagram.com/accounts/emailsignup/?next=https%3A%2F%2Fwww.instagram.com%2Fterms%2Faccept%2F%3F__coig_login%3D1">Forgotten password?</a>
            </div>
            <button type="submit" className={style.btn} onClick={handleSubmit}>Login</button>
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
