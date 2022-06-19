import { Container } from 'shared/ui/layout'
import styles from './index.module.scss'
import { AiFillPhone, AiFillQuestionCircle, AiOutlineTwitter } from 'solid-icons/ai'
import { HiSolidMail } from 'solid-icons/hi'
import { FaSolidMapMarkedAlt, FaBrandsFacebookF, FaBrandsVk } from 'solid-icons/fa'
import qrcode from './qr_code.png'

export const Footer = () => {




  return (
    <footer class={styles.footer}>
      <Container>
        <div class={styles.footer_content}>

          <div class={styles.support}>
            <div class={styles.title}>
              Служба поддержки
            </div>
            <ul class={styles.support_phones}>
              <li class={styles.support_tel}>
                <AiFillPhone /> +375 17 200 73 33 - по общим вопросам
              </li>
              <li class={styles.support_tel}>
                <AiFillPhone /> +375 29 865 21 21 - по техническим вопросам <br/> и вопросам оплаты
              </li>
              <li class={styles.support_tel}>
                <AiFillPhone /> +375 29 865 21 21 - по техническим вопросам <br/> и вопросам оплаты
              </li>
            </ul>
            <ul class={styles.support_other}>
              <li class={styles.support_email}>
                <HiSolidMail /> email: centr@economy.gov.by
              </li>
              <li class={styles.support_email}>
                <AiFillQuestionCircle /> Задать вопрос
              </li>
              <li class={styles.support_email}>
                <FaSolidMapMarkedAlt /> ул. Берсона 1а, оф. 513
              </li>
            </ul>
          </div>
          <div class={styles.info}>
            <div class={styles.title}>
              Информация
            </div>
            <ul class={styles.info_list}>
              <a class={styles.info_item}>
                Новости портала
              </a>
              <a class={styles.info_item}>
                Пользовательское соглашение
              </a>
              <a class={styles.info_item}>
                Договор общий
              </a>
              <a class={styles.info_item}>
                Договор для управляющего
              </a>
              <a class={styles.info_item}>
                Прейскурант
              </a>
              <a class={styles.info_item}>
                Положение
              </a>
              <a class={styles.info_item}>
                Политика конфиденциальности
              </a>
            </ul>
          </div>
          <div class={styles.help}>
            <div class={styles.title}>
              Помощь
            </div>
            <ul class={styles.help}>
              <a class={styles.help}>
                Правила торгов
              </a>
              <a class={styles.help}>
                Инструкции
              </a>
              <a class={styles.help}>
                FAQ
              </a>
              <a class={styles.help}>
                Работа с ЭЦП
              </a>
              <a class={styles.help}>
                Счет для оплаты
              </a>
            </ul>
          </div>
          <div class={styles.socials}>
            <img src={qrcode} alt="qrcode"/>
            <div class={styles.socials_right}>
              <div class={styles.title}>
                Мы в социальных сетях
              </div>
              <ul class={styles.socials_links}>
                <a href="" class={styles.socials_link}>
                  <FaBrandsFacebookF/>
                </a>
                <a href="" class={styles.socials_link}>
                  <AiOutlineTwitter/>
                </a>
                <a href="" class={styles.socials_link}>
                  <FaBrandsVk/>
                </a>
              </ul>
            </div>
            
           
            
          </div>
        </div>
      </Container>
      <div class={styles.footer_owner}>
        <Container>
          Оператор и владелец площадки - РУП "Информационный центр Министерства экономики Республики Беларусь"
        </Container>
      </div>
    </footer>
  )
}





