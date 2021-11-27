import Image from 'next/image';
import {useContext} from 'react';
import {ServiceContext} from '../context';
import styles from '../styles/Month.module.css';
import Side from './side';

export default function Month({data, week}) {
  const {active, toggleSideBar} = useContext(ServiceContext);

  return (
    <>
      <Image
        src={data.img || ''}
        alt={data.alt || ''}
        layout="fill"
        className={styles.image}
        placeholder="blur"
        blurDataURL={data.img}
      />
      <div className={styles.content}>
        <h2>{data.name || ''}</h2>
        <div className={styles.week}>
          {week &&
            week.map((item) => {
              return <div key={item}>{item || ''}</div>;
            })}
        </div>
        <div className={styles.month}>
          {data.days
            ? data.days.map((d, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles.day} ${d === '' && styles.not_day} ${
                      (index === 6 ||
                        index === 13 ||
                        index === 20 ||
                        index === 27 ||
                        index === 34) &&
                      styles.fix_margin
                    }`}
                    onClick={(e) => toggleSideBar(data, d)}
                  >
                    {d}
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <Side />
    </>
  );
}
