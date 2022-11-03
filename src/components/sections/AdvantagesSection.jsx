import Button from "../UI/Button";
import IconCheckMark from "../icons/IconCheckMark";

import MountainsTexture from "@/assets/img/mountains-texture-block.svg";

const AdvantagesSection = ({ title, list, classNames }) => {
  const getIcon = (name) => {
    return require(`@/assets/img/advantages/${name}.svg`)
  }

  return (
    <section id="advantages" className={`flex column flex-aic ${classNames}`}>
      <div className="img opacity-2 zi-1" style={{ backgroundImage: `url(${MountainsTexture})` }} />
      <div className="container column zi-2">
        <h2 className="mb-12 ta-c">{ title }</h2>
        <div className="advantages-content flex width-full flex-jcsb flex-aic gap-12">
          {
            list.map(item => (
              <div className="advantages-content__block flex column flex-aic ta-c">
                <span
                  className="advantages-content__icon flex flex-aic flex-jcc"
                  style={{ background: item.color }}
                >
                  { item.icon ? <img src={ getIcon(item.icon) } alt=""/> : <span>{ item.content }</span> }
                </span>

                <div className="advantages-content__block__content flex column">
                  <h3 className="mt-4 mb-3 ta-c">{item.title}</h3>
                  <p className="body body-9 opacity-12">{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default AdvantagesSection;
