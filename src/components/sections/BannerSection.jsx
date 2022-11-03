import Button from "../UI/Button";
import TitleH1 from "../UI/TitleH1";
import Fade from 'react-reveal/Fade';

const BannerSection = ({ children, title, action, classNames, banner }) => {

  return (
    <main id="banner" className={classNames}>
      <div className="banner container-full">
        { banner ? <Fade duration={ 2000 }>
          <img className="banner-img" src={ banner } alt=""/>
        </Fade> : <></> }
        <div className="container column flex-aifs">
          <TitleH1 color="#054FD6">{ title }</TitleH1>

          <div className="banner-content pl-6">
            <Fade bottom delay={200} duration={900}>
              { children }
            </Fade>

            <Fade bottom delay={400} duration={900}>
              <Button>{ action }</Button>
            </Fade>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BannerSection;
