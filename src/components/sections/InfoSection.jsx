import Button from "../UI/Button";
import IconCheckMark from "../icons/IconCheckMark";
import Fade from 'react-reveal/Fade';

const InfoSection = ({ title, description, list, classNames, image, withoutButton = false, action = 'Заполнить форму' }) => {
  return (
    <section id="info" className={classNames}>
      <div className="info container">
        <div className="info-content pr-26">
          <Fade bottom duration={900}>
            <h2 className="font-color-bl mb-6">{ title }</h2>
          </Fade>
          <Fade bottom delay={200} duration={900}>
            <p className="info-content__text body body-9 mb-6 font-color-gd opacity-16">{ description }</p>
          </Fade>
          {
            list
              ? <ul className="mb-6 flex column gap-2">
                  {
                    list.map((item, idx) => (
                      <Fade bottom delay={400 * (idx + 1)} duration={1000}>
                        <li key={item.id} className="flex gap-2 pt-3 pb-3 pr-4 pl-4 flex-aic">
                          <IconCheckMark />
                          <p className="body body-6 flex-1 opacity-10 font-color-bld">{ item.content }</p>
                        </li>
                      </Fade>
                    ))
                  }
                </ul>
              : <></>
          }
          {
            !withoutButton
              ? <Fade bottom delay={1400} duration={900}>
                  <Button>{ action }</Button>
                </Fade>
              : <></>
          }
        </div>
        <Fade duration={2500}>
          <div className="img" style={{ backgroundImage: `url(${image})` }} />
        </Fade>
      </div>
    </section>
  )
}

export default InfoSection;
