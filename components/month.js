import Image from 'next/image';
import styles from '../styles/Month.module.css';

export default function Month({data, week}) {
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
            ? data.days.map((d) => {
                return (
                  <div
                    key={d.key}
                    className={`${styles.day} ${d === '' && styles.not_day}`}
                  >
                    {d}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
