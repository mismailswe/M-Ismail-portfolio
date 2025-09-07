import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {useMediaQuery} from "react-responsive";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const isSmallScreen = useMediaQuery({query: "(max-width: 600px)"});
  if (!achievementSection.display) {
    return null;
  }
  return (
    <>
      {isSmallScreen ? (
        <>
          <div className="main" id="achievements">
            <div className="achievement-main-div" style={{marginTop: "-16px"}}>
              <div className="achievement-header">
                <h1
                  className={
                    isDark
                      ? "dark-mode heading achievement-heading"
                      : "heading achievement-heading"
                  }
                >
                  {achievementSection.title}
                </h1>
                <p
                  className={
                    isDark
                      ? "dark-mode subTitle achievement-subtitle"
                      : "subTitle achievement-subtitle"
                  }
                >
                  {achievementSection.subtitle}
                </p>
              </div>
              <div
                className="achievement-cards-div"
                style={{marginTop: "-16px"}}
              >
                {achievementSection.achievementsCards.map((card, i) => {
                  return (
                    <AchievementCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        title: card.title,
                        description: card.subtitle,
                        image: card.image,
                        footer: card.footerLink
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Fade bottom duration={1000} distance="20px">
            <div className="achievement-main" id="achievements">
              <div className="achievement-main-div">
                <div className="achievement-header">
                  <h1
                    className={
                      isDark
                        ? "dark-mode heading achievement-heading"
                        : "heading achievement-heading"
                    }
                  >
                    {achievementSection.title}
                  </h1>
                  <p
                    className={
                      isDark
                        ? "dark-mode subTitle achievement-subtitle"
                        : "subTitle achievement-subtitle"
                    }
                  >
                    {achievementSection.subtitle}
                  </p>
                </div>
                <div className="achievement-cards-div">
                  {achievementSection.achievementsCards.map((card, i) => {
                    return (
                      <AchievementCard
                        key={i}
                        isDark={isDark}
                        cardInfo={{
                          title: card.title,
                          description: card.subtitle,
                          image: card.image,
                          footer: card.footerLink
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </Fade>
        </>
      )}
    </>
  );
}
