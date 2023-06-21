import styles from './login-page.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/constants";
import {login} from "../../services/actions/auth";
import {useDispatch, useSelector} from "react-redux";

function LoginPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const {isLoading, errorMessage} = useSelector(store => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(login({login: name, email}));
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
          {errorMessage && <p className={'mt-5 text text_type_main-default text_color_error'}>{errorMessage}</p>}
          <Button htmlType="submit" type="primary" size="large" extraClass={`mt-6`} disabled={isLoading}>
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
