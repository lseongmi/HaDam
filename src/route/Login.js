import { useState } from 'react';
import '../reset.css'
import Input from "../components/Input";
import '../Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className='main-section'>
      <h2 className='title'>로그인 하세요</h2>
      
      <form>
          <Input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="login-button">
          로그인
        </button>
      </form>
      
      <section className="login-footer">
        <div>계정이 없으신가요?</div>
        <div className="main-color">가입하기</div>
      </section>
    </main>
  );
}

export default Login;
