import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { createBem } from '@/utils/createBem';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '@/style/global.scss';
import styles from './swiper.module.scss';
import { useEffect, useState } from 'react';
import { fetchPictures } from '@/api/swiper.js';

const bem = createBem('swiper', styles);

export default function MySwiper() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    const getPictures = async () => {
      const data = await fetchPictures();
      setPictures(data);
    };
    getPictures();
  }, []);

  return (
    <section className={styles['swiper-section']}>
      <div className={`${styles['swiper-container']} container`}>
        <h2 className={bem('title')}>Beautiful nature</h2>
        {pictures.length > 0 && (
          <Swiper
            className={bem()}
            modules={[EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            initialSlide={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 60,
              depth: 150,
              modifier: 2,
            }}
          >
            {pictures.map(({ id, largeImageURL }) => (
              <SwiperSlide key={id}>
                <div className={bem('slide')}>
                  <img src={largeImageURL} alt={id} loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
