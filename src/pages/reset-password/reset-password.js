import styles from './reset-password.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {confirmResetPasswordApi} from "../../api/norma-api";
import {ROUTES} from "../../utils/constants";
import Loader from "../../components/loader/loader";
import useAutoFocus from "../../hooks/use-auto-focus";

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const passwordRef = useAutoFocus();

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const result = await confirmResetPasswordApi({password, token: code});
      setIsLoading(false);
      if (result.success) {
        navigate(ROUTES.LOGIN);
      }
    } catch {
      setIsLoading(false);
      setError('Произошла ошибка');
    }
  }

  function onLogin() {
    navigate(ROUTES.LOGIN);
  }

  useEffect(() => {
    if (location.state?.pathname !== ROUTES.FORGOT_PASSWORD) navigate(ROUTES.HOME);
  })

  return (
    <div className={styles.root}>
      <div className={'mt-30'}>
        <form onSubmit={onSubmit}>
          <p className="text text_type_main-medium">Восстановление пароля</p>
          <Input
            extraClass={`mt-6`}
            value={password}
            type="password"
            placeholder="Введите новый пароль"
            ref={passwordRef}
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            extraClass={`mt-6`}
            value={code}
            type="text"
            placeholder="Введите код из письма"
            onChange={e => setCode(e.target.value)}
          />
          <Button htmlType="submit" type="primary" size="large" extraClass={`mt-6`} disabled={isLoading}>
            {isLoading ? <Loader /> : 'Восстановить'}
          </Button>
        </form>
        {error && (
          <p className={'mt-4 text text_type_main-default text_color_error'}>{error}</p>
        )}
        <p className={'mt-20'}>
          <span className="text text_type_main-default text_color_inactive">Вспомнили пароль?</span>
          <Button htmlType={'button'} size={"medium"} type={"secondary"} onClick={onLogin}>Войти</Button>
        </p>
      </div>
    </div>
  )
}

export default ResetPassword;
