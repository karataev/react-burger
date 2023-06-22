import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import styles from './register-page.module.css';
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../services/actions/auth";
import Loader from "../../components/loader/loader";

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordView, setPasswordView] = useState('password');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoading, errorMessage} = useSelector(store => store.auth);

  function onTogglePasswordView() {
    const view = passwordView === 'password' ? 'text' : 'password';
    setPasswordView(view)
  }

  async function onSubmit(e) {
    e.preventDefault();
    await dispatch(register({name, email, password}));
    navigate(ROUTES.HOME);
  }

  function onLogin() {
    navigate(ROUTES.LOGIN);
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
            type={passwordView}
            placeholder="Password"
            icon={passwordView === 'password' ? 'ShowIcon' : 'HideIcon'}
            onIconClick={onTogglePasswordView}
            onChange={e => setPassword(e.target.value)}
          />

          {errorMessage && <p className={'mt-5 text text_type_main-default text_color_error'}>{errorMessage}</p>}
          <Button htmlType="submit" type="primary" size="large" extraClass={`mt-6`} disabled={isLoading}>
            {isLoading ? <Loader /> : 'Зарегистрироваться'}
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
