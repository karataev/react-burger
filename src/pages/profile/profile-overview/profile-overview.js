import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useEffect, useState} from "react";
import {getUserApi} from "../../../api/norma-api";
import {useDispatch, useSelector} from "react-redux";
import {SET_USER} from "../../../services/actions/auth";

function ProfileOverview() {
  const [password, setPassword] = useState('');
  const {user} = useSelector(store => store.auth);
  const dispatch = useDispatch();

  function setName() {
    console.log('todo');
  }

  function setLogin() {
    console.log('todo');
  }

  useEffect(() => {
    async function getUser() {
      try {
        const result = await getUserApi();
        dispatch({type: SET_USER, user: result.user});
      } catch(e) {
        console.log('error', e);
      }
    }

    getUser();
  }, [dispatch]);

  if (!user) return null;

  return (
    <div>
      <Input
        type="text"
        placeholder="Имя"
        value={user.name}
        onChange={e => setName(e.target.value)}
        icon={'EditIcon'}
        disabled
      />
      <Input
        type="text"
        placeholder="Логин"
        value={user.email}
        onChange={e => setLogin(e.target.value)}
        icon={'EditIcon'}
        extraClass={'mt-6'}
        disabled
      />
      <Input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
        icon={'EditIcon'}
        extraClass={'mt-6'}
        disabled
      />
    </div>
  )
}

export default ProfileOverview;