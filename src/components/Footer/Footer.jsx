import TextureMountain from '@/assets/img/mountain-texture-footer.svg'

import Logo from '@/assets/img/logo.png'

import GooglePlay from '@/assets/img/GooglePlay-Blue.svg'
import AppStore from '@/assets/img/AppStore-Blue.svg'
import PhoneMockup from '@/assets/img/footer-phone.png'

const nav = [
  {
    title: 'Интернет',
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
        title: 'Настройки роутеров',
        link: '',
      }
    ]
  },
  {
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
]

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
]


const Footer = () => {
  return (
    <footer className="container-full">
      <div className="mobile-block zi-1" />
      <div className="montain-texture-footer zi-2">
        <img src={TextureMountain} alt=""/>
      </div>

      <div className="container zi-5 flex-jcsb">

        <div className="left column pt-10">
          <div className="flex flex-aiс">
            <img src={Logo} alt="" className="logo mr-4"/>
            <p className="body body-2 font-color-w mt-3">
              Мобильное приложение <br/>
              “Мой ellсo”
            </p>
          </div>
          <div className="flex aic gap-6 mt-5">
            <img src={GooglePlay} alt=""/>
            <img src={AppStore} alt=""/>
          </div>
          <img className="mockup" src={PhoneMockup} alt=""/>
        </div>

        <div className="flex column flex-jcsb pb-8">
          <div className="flex">
            <div className="links-block-wrapper pt-12">

              {
                nav.map(item => (
                  <div key={item.id} className="links-block flex column">
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
            <div className="flex column gap-8 pt-12 pr-46 ml-24">
              {
                navMenu.map(item => (
                  <p key={item.id} className="body body-8 font-color-w">{ item.title }</p>
                ))
              }
            </div>
          </div>

          <div className="flex">
            <p className="footer-description body body-8 font-color-w opacity-10 mr-18">
              Продолжая использовать наш сайт, вы даете согласие на обработку файлов Cookies и других пользовательских данных, в соответствии с Политикой конфиденциальности и Пользовательским соглашением
            </p>
            <p className="body body-8 font-color-w opacity-10">© 2022 ПАО «ellko». 18+</p>
          </div>
        </div>


      </div>
    </footer>
  )
}

export default Footer;
