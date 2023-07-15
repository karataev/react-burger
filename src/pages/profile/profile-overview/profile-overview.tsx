import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {JSX, SyntheticEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import style from './profile-overview.module.css';
import {updateUserApi} from "../../../api/norma-api";
import Loader from "../../../components/loader/loader";
import {SET_USER} from "../../../services/actions/auth";
import {TUpdateUser} from "../../../utils/types";

function ProfileOverview(): JSX.Element | null {
  // @ts-ignore
  const {user} = useSelector(store => store.auth);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const isChanged = name !== user.name || email !== user.email || password !== '';

  async function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const payload: TUpdateUser = {name, email};
    if (password) payload.password = password;
    try {
      setIsLoading(true);
      setErrorMessage('');
      const result = await updateUserApi(payload);
      dispatch({type: SET_USER, user: result.user});
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      if (e instanceof Error) setErrorMessage(e.message);
    }
    setPassword('');
  }

  function onCancel() {
    setName(user.name);
    setEmail(user.email);
    setPassword('');
  }

  if (!user) return null;

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={e => setName(e.target.value)}
        icon={'EditIcon'}
      />
      <Input
        type="text"
        placeholder="Логин"
        value={email}
        onChange={e => setEmail(e.target.value)}
        icon={'EditIcon'}
        extraClass={'mt-6'}
      />
      <Input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
        icon={'EditIcon'}
        extraClass={'mt-6'}
      />
      {errorMessage && <p className={'mt-5 text text_type_main-default text_color_error'}>{errorMessage}</p>}
      {isChanged && (
        <p className={`mt-6 ${style.buttons}`}>
          <Button htmlType={"button"} type={"secondary"} onClick={onCancel}>
            Отменить
          </Button>
          <Button htmlType={"submit"} type={"primary"} disabled={isLoading}>
            {isLoading ? <Loader /> : 'Сохранить'}
          </Button>
        </p>
      )}
    </form>
  )
}

export default ProfileOverview;