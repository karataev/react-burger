import styles from './login-page.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/constants";
import {login} from "../../services/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/loader/loader";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {user} = useSelector(store => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      setErrorMessage('');
      await dispatch(login({email, password}));
      setIsLoading(false);
      if (user) navigate(ROUTES.HOME);
    } catch(e) {
      setIsLoading(false);
      setErrorMessage(e.message);
    }
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
            value={email}
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            extraClass={`mt-6`}
            value={password}
            type="password"
            placeholder="Пароль"
            onChange={e => setPassword(e.target.value)}
          />
          {errorMessage && <p className={'mt-5 text text_type_main-default text_color_error'}>{errorMessage}</p>}
          <Button htmlType="submit" type="primary" size="large" extraClass={`mt-6`} disabled={isLoading}>
            {isLoading ? <Loader /> : 'Войти'}
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
