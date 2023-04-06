
import '@/styles/globals.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function App({ Component, pageProps }) {
  return (
    <Swiper>
      <Component {...pageProps} />
    </Swiper>
  )
}
