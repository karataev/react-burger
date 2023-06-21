import styles from './profile-page.module.css';
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import ProfileNav from "../../components/profile-nav/profile-nav";

function ProfilePage() {
  const [name, setName] = useState('Марк');
  const [login, setLogin] = useState('mail@stellar.burgers');
  const [password, setPassword] = useState('123');

  return (
    <div className={styles.root}>
      <div className={styles.columns}>
        <ProfileNav />
        <div>
          <Input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={e => setName(e.target.value)}
            icon={'EditIcon'}
            disabled
          />
          <Input
            type="text"
            placeholder="Логин"
            value={login}
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
      </div>
    </div>
  )
}

export default ProfilePage;