import TextureMountain from '@/assets/img/mountain-texture-footer.svg';

import GooglePlay from '@/assets/img/GooglePlay-Blue.svg';
import AppStore from '@/assets/img/AppStore-Blue.svg';
import PhoneMockup from '@/assets/img/footer-phone.png';
import VK from '@/assets/img/social-vk.svg';
import TG from '@/assets/img/social-tg.svg';
import Logo from "../Logo";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

const nav = [
  {
    id: v4(),
    title: 'Интернет',
    link: '/rate',
    links: [
      {
        id: v4(),
        title: 'Об услуге',
        hash: '#info',
      },
      {
        id: v4(),
        title: 'Преимущества',
        hash: '#advantages',
      },
      {
        id: v4(),
        title: 'Тарифы',
        hash: '#tariffs',
      },
      {
        id: v4(),
        title: 'Новости и акции',
        hash: '#events',
      },
    ]
  },
  {
    id: v4(),
    title: 'Телефония',
    link: '/telephony',
    links: [
      {
        id: v4(),
        title: 'Об услуге',
        hash: '#info',
      },
      {
        id: v4(),
        title: 'Преимущества',
        hash: '#advantages',
      },
      {
        id: v4(),
        title: 'Тарифы',
        hash: '#tariffs',
      },
      {
        id: v4(),
        title: 'Новости и акции',
        hash: '#events',
      },
    ]
  },
  {
    id: v4(),
    title: 'Телевидение',
    link: '/iptv',
    links: [
      {
        id: v4(),
        title: 'Об услуге',
        hash: '#info',
      },
      {
        id: v4(),
        title: 'Преимущества',
        hash: '#advantages',
      },
      {
        id: v4(),
        title: 'Тарифы',
        hash: '#tariffs',
      },
      {
        id: v4(),
        title: 'Новости и акции',
        hash: '#events',
      },
    ]
  },
  {
    id: v4(),
    title: 'Видеонаблюдение',
    link: '/cctv',
    links: [
      {
        id: v4(),
        title: 'Об услуге',
        hash: '#info',
      },
      {
        id: v4(),
        title: 'Преимущества',
        hash: '#advantages',
      },
      {
        id: v4(),
        title: 'Калькулятор',
        hash: '#calculator',
      },
      {
        id: v4(),
        title: 'Новости и акции',
        hash: '#events',
      },
    ]
  },
];

const navMenu = [
  {
    id: v4(),
    title: 'О компании',
    link: '/support'
  },
  {
    id: v4(),
    title: 'Новости и акции',
    link: '/news'
  },
  {
    id: v4(),
    title: 'Интернет',
    link: '/rate',
  },
  {
    id: v4(),
    title: 'Видеонаблюдение',
    link: '/cctv',
  },
  {
    id: v4(),
    title: 'IPTV',
    link: '/iptv',
  },
  {
    id: v4(),
    title: 'Телефония',
    link: '/telephony',
  },
  {
    id: v4(),
    title: 'KION',
    link: '/kion',
  },
  {
    id: v4(),
    title: 'Смотрешка',
    link: '/smotreshka',
  },
];


const Footer = () => {
  return (
    <footer className="container-full">
      <div className="montain-texture-footer zi-2">
        <img src={TextureMountain} alt=""/>
      </div>

      <div className="container">

        <div className="left column pt-10 pr-15">
          <div className="mobile-block" />
          <div>
            <div className="flex flex-aiс mobile-block-footer">
              <span className="logo mr-4 zi-2">
                <Logo fill="#FFFFFF" />
              </span>
              <p className="body body-2 font-color-w mt-2  zi-2">
                Мобильное приложение <br/>
                “Мой EIIсo”
              </p>
            </div>
            <div className="flex aic gap-6 mt-5 mobile-block-footer">
              <a
                className="zi-2"
                href="https://play.google.com/store/apps/details?id=ru.ellco.myellco"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GooglePlay} alt=""/>
              </a>
              <a
                className="zi-2"
                href="https://apps.apple.com/ru/app/%D0%BC%D0%BE%D0%B9-%D1%8D%D0%BB%D0%BB%D0%BA%D0%BE/id1506587687"
                target="_blank"
                rel="noreferrer"
              >
                <img className="zi-2" src={AppStore} alt=""/>
              </a>
            </div>
          </div>
          <div className="mockup__wrapper height-full">
            <img className="mockup" src={PhoneMockup} alt=""/>
          </div>
        </div>

        <div className="right flex column flex-jcsb pb-8 pl-12">
          <div className="nav-wrapper flex">
            <div className="links-block-wrapper pt-12">
              {
                nav.map(item => (
                  <div key={`link-${item.id}`} className="links-block flex column">
                    <h4 className="mb-5 font-color-w">{ item.title }</h4>

                    <div className="flex column gap-3">
                      {
                        item.links.map(link => (
                          <Link
                            to={{
                              pathname: item.link,
                              hash: link.hash,
                            }}
                            key={link.id}
                            className="body body-7 font-color-w"
                          >
                            { link.title }
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="nav-wrapper__menu flex column gap-8 pt-12 ml-24">
              {
                navMenu.map(item => (
                  <Link
                    to={item.link}
                    key={`nav-${item.id}`}
                    className="body body-8 font-color-w"
                  >
                    { item.title }
                  </Link>
                ))
              }
            </div>
          </div>

          <div className="footer-bottom">
            <div className="socials flex gap-2 opacity-10 mb-9">
              <a href="https://vk.com/ellco_ru" target="_blank" rel="noreferrer">
                <img src={VK} alt=""/>
              </a>
              <a href="https://t.me/ellco_ru" target="_blank" rel="noreferrer">
                <img src={TG} alt=""/>
              </a>
            </div>
            <div className="footer-bottom flex">
              <p className="footer-description body body-8 font-color-w opacity-10 mr-18">
                Продолжая использовать наш сайт, вы даете согласие на обработку файлов Cookies и других пользовательских данных, в соответствии с
                <a href="">Политикой конфиденциальности</a> и
                <a href="">Пользовательским соглашением</a>
              </p>
              <p className="footer-watermark body body-8 font-color-w opacity-10">© 2022 ООО «эЭллко»</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
