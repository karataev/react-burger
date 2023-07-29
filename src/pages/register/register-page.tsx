import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {JSX, SyntheticEvent, useState} from "react";
import styles from './register-page.module.css';
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/constants";
import {register} from "../../services/actions/auth";
import Loader from "../../components/loader/loader";
import useAutoFocus from "../../hooks/use-auto-focus";
import {useDispatch} from "../../hooks/hooks";

type TInputType = 'text' | 'password' | 'email';

function RegisterPage(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordView, setPasswordView] = useState<TInputType>('password');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const nameRef = useAutoFocus();

  function onTogglePasswordView() {
    const view = passwordView === 'password' ? 'text' : 'password';
    setPasswordView(view);
  }

  async function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
    try {
      setIsLoading(true);
      setErrorMessage('');
      await dispatch(register({name, email, password}));
      setIsLoading(false);
      navigate(ROUTES.HOME);
    } catch (e) {
      setIsLoading(false);
      if (e instanceof Error) setErrorMessage(e.message);
    }
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
            ref={nameRef}
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
