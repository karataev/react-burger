import styles from './forgot-password.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {resetPasswordApi} from "../../api/burger-api";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const result = await resetPasswordApi(email);
      setIsLoading(false);
      if (result.success) {
        navigate('/reset-password');
      }
    } catch {
      setIsLoading(false);
      setError('Произошла ошибка');
    }
  }

  function onLogin() {
    navigate('/login');
  }

  return (
    <div className={styles.root}>
      <div className={'mt-30'}>
        <form onSubmit={onSubmit}>
          <p className="text text_type_main-medium">Восстановление пароля</p>
          <Input
            extraClass={`mt-6`}
            value={email}
            type="email"
            placeholder="Укажите e-mail"
            onChange={e => setEmail(e.target.value)}
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

export default ForgotPassword;
