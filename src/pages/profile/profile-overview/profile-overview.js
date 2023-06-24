import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import {useSelector} from "react-redux";

function ProfileOverview() {
  const [password, setPassword] = useState('');
  const {user} = useSelector(store => store.auth);

  function setName() {
    console.log('todo');
  }

  function setLogin() {
    console.log('todo');
  }

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