import styles from './login-page.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/constants";

function LoginPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    console.log('todo submit');
  }

  function onRegister() {
    navigate(ROUTES.REGISTER);
  }

  function onForgotPassword() {
    navigate(ROUTES.FORGOT_PASSWORD)
  }

  return (
    <div className={styles.root}>
      <div className={'mt-30'}>
        <form onSubmit={onSubmit}>
          <p className="text text_type_main-medium">Вход</p>
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
          <Button htmlType="submit" type="primary" size="large" extraClass={`mt-6`}>
            Войти
          </Button>
        </form>
        <p className={'mt-20'}>
          <span className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</span>
          <Button htmlType={'button'} size={"medium"} type={"secondary"} onClick={onRegister}>Зарегистрироваться</Button>
        </p>
        <p>
          <span className="text text_type_main-default text_color_inactive">Забыли пароль?</span>
          <Button htmlType={'button'} size={"medium"} type={"secondary"} onClick={onForgotPassword}>Восстановить пароль</Button>
        </p>
      </div>
    </div>
  )
}

export default LoginPage;
