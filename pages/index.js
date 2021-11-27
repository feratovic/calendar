import Head from 'next/head';
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from '../styles/Home.module.css';
// import Swiper core and required modules
import SwiperCore, {Pagination, FreeMode, Scrollbar, Mousewheel} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, FreeMode, Scrollbar, Mousewheel]);
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {renderDays} from '../common/functions';
import Month from '../components/month';
import ServiceContext from '../context';
import Side from '../components/side';

export default function Home() {
  const months = [
    {
      img: '/images/januar.jpeg',
      alt: 'Januar mjesec',
      name: 'Januar',
      days: renderDays(1),
    },
    {
      img: '/images/februar.jpeg',
      alt: 'Februar mjesec',
      name: 'Februar',
      days: renderDays(2),
    },
    {
      img: '/images/mart.jpeg',
      alt: 'Mart mjesec',
      name: 'Mart',
      days: renderDays(3),
    },
    {
      img: '/images/april.jpeg',
      alt: 'April mjesec',
      name: 'April',
      days: renderDays(4),
    },
    {
      img: '/images/maj.jpg',
      alt: 'Maj mjesec',
      name: 'Maj',
      days: renderDays(5),
    },
    {
      img: '/images/jun.jpg',
      alt: 'Jun mjesec',
      name: 'Jun',
      days: renderDays(6),
    },
    {
      img: '/images/jul.jpg',
      alt: 'Jul mjesec',
      name: 'Jul',
      days: renderDays(7),
    },
    {
      img: '/images/avgust.jpg',
      alt: 'Avgust mjesec',
      name: 'Avgust',
      days: renderDays(8),
    },
    {
      img: '/images/septembar.jpg',
      alt: 'Septembar mjesec',
      name: 'Septembar',
      days: renderDays(9),
    },
    {
      img: '/images/oktobar.jpg',
      alt: 'Oktobar mjesec',
      name: 'Oktobar',
      days: renderDays(10),
    },
    {
      img: '/images/novembar.jpg',
      alt: 'Novembar mjesec',
      name: 'Novembar',
      days: renderDays(11),
    },
    {
      img: '/images/decembar.jpg',
      alt: 'Decembar mjesec',
      name: 'Decembar',
      days: renderDays(12),
    },
  ];

  const week = ['Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub', 'Ned'];

  return (
    <ServiceContext>
      <Head>
        <title>Kalendar</title>
        <link rel="icon" href="/icon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Swiper
        direction={'vertical'}
        mousewheel={true}
        className={styles.mySwiper}
      >
        {months && months.length > 0
          ? months.map((item, i) => {
              return (
                <SwiperSlide key={i} className={styles.slide}>
                  <Month data={item} week={week} />
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
    </ServiceContext>
  );
}
