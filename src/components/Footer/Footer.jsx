import TextureMountain from '@/assets/img/mountain-texture-footer.svg';

import GooglePlay from '@/assets/img/GooglePlay-Blue.svg';
import AppStore from '@/assets/img/AppStore-Blue.svg';
import PhoneMockup from '@/assets/img/footer-phone.png';
import VK from '@/assets/img/social-vk.svg';
import TG from '@/assets/img/social-tg.svg';
import Logo from "../Logo";

const nav = [
  {
    id: 1,
    title: 'Интернет',
    links: [
      {
        id: 1,
        title: 'Об услуге',
        link: '',
      },
      {
        id: 3,
        title: 'Преимущества',
        link: '',
      },
      {
        id: 2,
        title: 'Тарифы',
        link: '',
      },
      {
        id: 2,
        title: 'Новости и акции',
        link: '',
      },
    ]
  },
  {
    id: 2,
    title: 'Телефония',
    links: [
      {
        id: 1,
        title: 'Международная свзяь',
        link: '',
      },
      {
        id: 2,
        title: 'Тарифы',
        link: '',
      },
      {
        id: 3,
        title: 'Выбор номеров',
        link: '',
      },
      {
        id: 4,
        title: 'Дополнительные услуги',
        link: '',
      }
    ]
  },
  {
    id: 3,
    title: 'Телевидение',
    links: [
      {
        id: 1,
        title: 'Акции',
        link: '',
      },
      {
        id: 2,
        title: 'Тарифы',
        link: '',
      },
      {
        id: 3,
        title: 'Оборудование',
        link: '',
      },
      {
        id: 4,
        title: 'Каналы',
        link: '',
      }
    ]
  },
  {
    id: 4,
    title: 'Видеонаблюдение',
    links: [
      {
        id: 1,
        title: 'Калькулятор',
        link: '',
      },
      {
        id: 2,
        title: 'Тарифы',
        link: '',
      },
      {
        id: 3,
        title: 'Оборудование',
        link: '',
      },
      {
        id: 4,
        title: 'Дополнительные услуги',
        link: '',
      }
    ]
  },
];

const navMenu = [
  {
    id: 1,
    title: 'Личный кабинет',
    link: ''
  },
  {
    id: 2,
    title: 'Способ оплаты',
    link: ''
  },
  {
    id: 3,
    title: 'Услуги',
    link: ''
  },
  {
    id: 4,
    title: 'О компании',
    link: ''
  },
  {
    id: 5,
    title: 'Партнерам',
    link: ''
  },
  {
    id: 6,
    title: 'Новости',
    link: ''
  },
  {
    id: 7,
    title: 'Контакты',
    link: ''
  },
  {
    id: 8,
    title: 'Наши агенты',
    link: ''
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
                “Мой ellсo”
              </p>
            </div>
            <div className="flex aic gap-6 mt-5 mobile-block-footer">
              <img className="zi-2" src={GooglePlay} alt=""/>
              <img className="zi-2" src={AppStore} alt=""/>
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
                          <p
                            key={link.id}
                            className="body body-7 font-color-w"
                          >
                            { link.title }
                          </p>
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
                  <p
                    key={`nav-${item.id}`}
                    className="body body-8 font-color-w"
                  >
                    { item.title }
                  </p>
                ))
              }
            </div>
          </div>

          <div className="footer-bottom">
            <div className="socials flex gap-2 opacity-10 mb-9">
              <img src={VK} alt=""/>
              <img src={TG} alt=""/>
            </div>
            <div className="footer-bottom flex">
              <p className="footer-description body body-8 font-color-w opacity-10 mr-18">
                Продолжая использовать наш сайт, вы даете согласие на обработку файлов Cookies и других пользовательских данных, в соответствии с Политикой конфиденциальности и Пользовательским соглашением
              </p>
              <p className="footer-watermark body body-8 font-color-w opacity-10">© 2022 ПАО «ellko». 18+</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
