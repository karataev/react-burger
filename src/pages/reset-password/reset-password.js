import styles from './reset-password.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {confirmResetPasswordApi} from "../../api/norma-api";
import {ROUTES} from "../../utils/constants";

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const result = await confirmResetPasswordApi({password, token: code});
      setIsLoading(false);
      if (result.success) {
        // todo navigate
      }
    } catch {
      setIsLoading(false);
      setError('Произошла ошибка');
    }
  }

  function onLogin() {
    navigate(ROUTES.LOGIN);
  }

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
            Восстановить
          </Button>
        </form>
        {error && (
          <p className={'mt-4 text text_type_main-default'}>{error}</p>
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
