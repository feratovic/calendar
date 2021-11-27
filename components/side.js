import styles from '../styles/Side.module.css';
import {useContext} from 'react';
import {ServiceContext} from '../context';

export default function Side() {
  const {active, data, toggleSideBar} = useContext(ServiceContext);

  return (
    <div className={` ${styles.side} ${!active && styles.d_none}`}>
      <div className={styles.header}>
        <p>Oktobar 5. 2020</p>
        <div>
          <button onClick={(e) => toggleSideBar()}>X</button>
        </div>
      </div>
      <div className={styles.event}>
        <ul>
          <li>Dogadjaj 1</li>
          <li>Dogadjaj 1</li>
          <li>Dogadjaj 1</li>
          <li>Dogadjaj 1</li>
        </ul>
      </div>
    </div>
  );
}
