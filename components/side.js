import styles from '../styles/Side.module.css';
import {useContext} from 'react';
import {ServiceContext} from '../context';

export default function Side() {
  const {active, data, toggleSideBar} = useContext(ServiceContext);

  return (
    <div className={` ${styles.side} ${!active && styles.d_none}`}>
      <div className={styles.header}>
        <p>{`${data.month ? data.month.name : '/'} ${
          data.day || '/'
        }. ${new Date().getFullYear()} `}</p>
        <div>
          <button onClick={(e) => toggleSideBar()}>X</button>
        </div>
      </div>
      <div className={styles.event}>
        <ul>
          <li>
            <a href="www.google.com">
              Rodio se Elmaz ( 1999 )<p>Na danasnji dan rodio se Elmaz</p>
            </a>
          </li>
          <li>
            <a href="www.google.com">
              Rodio se Elmaz ( 1999 )<p>Na danasnji dan rodio se Elmaz</p>
            </a>
          </li>
          <li>
            <a href="www.google.com">
              Rodio se Elmaz ( 1999 )<p>Na danasnji dan rodio se Elmaz</p>
            </a>
          </li>
          <li>
            <a href="www.google.com">
              Rodio se Elmaz ( 1999 )<p>Na danasnji dan rodio se Elmaz</p>
            </a>
          </li>
          <li>
            <a href="www.google.com">
              Rodio se Elmaz ( 1999 )<p>Na danasnji dan rodio se Elmaz</p>
            </a>
          </li>
          <li>
            <a href="www.google.com">
              Rodio se Elmaz ( 1999 )<p>Na danasnji dan rodio se Elmaz</p>
            </a>
          </li>
          <li>
            <a href="www.google.com">
              Rodio se Elmaz ( 1999 )<p>Na danasnji dan rodio se Elmaz</p>
            </a>
          </li>
          <li>
            <a href="www.google.com">
              Rodio se Elmaz ( 1999 )<p>Na danasnji dan rodio se Elmaz</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
