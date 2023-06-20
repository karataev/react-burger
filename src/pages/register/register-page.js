import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import styles from './register-page.module.css';
import {useNavigate} from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  function onLogin() {
    navigate('/login');
  }

  return (
    <div className={styles.root}>
      <div className="mt-30">
        <form onSubmit={onSubmit}>
          <p className="text text_type_main-medium">Регистрация</p>
          <Input
            extraClass={`mt-6`}
            value={name}
            placeholder="Имя"
            onChange={e => setName(e.target.value)}
          />
          <Input
            extraClass={`mt-6`}
            value={email}
            type="email"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            extraClass={`mt-6`}
            value={password}
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />

          <Button htmlType="submit" type="primary" size="large" extraClass={`mt-6`}>
            Зарегистрироваться
          </Button>
        </form>
        <p className={'mt-20'}>
          <span className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</span>
          <Button htmlType={'button'} size={"medium"} type={"secondary"} onClick={onLogin}>Войти</Button>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage;
