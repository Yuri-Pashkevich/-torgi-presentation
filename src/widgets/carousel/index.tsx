import "solid-slider/slider.css"
import { createSlider, SliderButton, SliderProvider, Slider } from "solid-slider"
import { createSignal, Show } from "solid-js"
import { HiSolidChevronLeft, HiSolidChevronRight } from 'solid-icons/hi'
//@ts-ignore
import autoplay from "solid-slider/plugins/autoplay"
import styles from './index.module.scss'


export const Carousel = () => {
    const [pause] = createSignal(false);
    const [slider, { next, prev }] = createSlider({ loop: true }, autoplay(4000, { pause }))
    slider
    return (
        <div class={styles.slider}>
            <div use:slider>
                <div class={`${styles.slide1} ${styles.slide}`}>
                    <div class={styles.mask} />
                    <div class={styles.title}>
                        <h2>Почему у нас покупают</h2>
                        <div>
                            Лучшие гарантии покупателю:
                            отказ от продажи влечет возврат задатка в двойном размере
                        </div>
                    </div>

                </div>
                <div class={`${styles.slide2} ${styles.slide}`}>
                    <div class={styles.mask} />
                    <div class={styles.title}>

                        <h2>Почему у нас продают</h2>
                        <div>
                            Лучшие гарантии продавцу:
                            каждая ставка обеспечена задатком покупателя
                        </div>
                    </div>

                </div>
                <div class={`${styles.slide3} ${styles.slide}`}>
                    <div class={styles.mask} />
                    <div class={styles.title}>

                        <h2>Прозрачность торгов</h2>
                        <div>
                            Любой пользователь в любое время может получить информацию о ходе и результатах торгов
                        </div>
                    </div>
                </div>
                <div class={`${styles.slide4} ${styles.slide}`}>
                    <div class={styles.mask} />
                    <div class={styles.title}>

                        <h2>622 активных лота</h2>
                        <div>
                            Пользователей 4 529. Продано 4 429 лотов на сумму 118 247 847.56 руб.
                        </div>
                    </div>
                </div>
            </div>
            <div class={styles.buttons}>
                <HiSolidChevronLeft onClick={prev} />
                <HiSolidChevronRight onClick={next} />
            </div>
        </div>
    )
};