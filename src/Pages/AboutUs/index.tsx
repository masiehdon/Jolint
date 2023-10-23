import { FunctionComponent } from "react";
import styles from "./AboutUs.module.css";

const AboutUsFinal: FunctionComponent = () => {
  return (
    <div className={styles.aboutUsFinal}>
      <div className={styles.aboutUsFinalChild} />
      {/* <div className={styles.groupParent}>
  <img className={styles.instanceChild} alt="" src="/group-271.svg" /> 
  <button className={styles.howItWorks}>
    <div className={styles.howItWorks1}>How it works</div>
  </button>
  <div className={styles.inclusion}>
    <button className={styles.howItWorks1}>Inclusion</button>
  </div>
  <div className={styles.faq}>
    <button className={styles.howItWorks1}>FAQ</button>
  </div>
  <div className={styles.aboutUs}>
    <button className={styles.howItWorks1}>About us</button>
  </div>
  <div className={styles.globeParent}>
    <img className={styles.globeIcon} alt="" src="/globe1.svg" />
    <img className={styles.arrowDownIcon} alt="" src="/arrowdown2.svg" />
    <button className={styles.english}>English</button>
  </div> 
  <div className={styles.contactUs}>
    <button className={styles.howItWorks1}>Contact us</button>
  </div>
  <div className={styles.signInKnapp}>
    <button className={styles.signInKnapp1}>
      <div className={styles.signInKnappChild} />
      <b className={styles.signIn}>Consent form</b>
    </button>
  </div>
</div> */}

      <b className={styles.aboutUs2}>About us</b>
      <div className={styles.atJolintWeContainer}>
        <p className={styles.atJolintWeAreDrivenByA}>
          <span className={styles.atJolintWe}>
            At Jolint, we are driven by a passion for
          </span>
          <b className={styles.atJolintWe}>{` improving workplaces `}</b>
          <span>{`and creating a better world for everyone. `}</span>
        </p>
        <p
          className={styles.atJolintWeAreDrivenByA}
        >{`We make sure to keep ethics and privacy at the forefront when gathering data. Throughout our journey, `}</p>
        <p className={styles.atJolintWeAreDrivenByA}>
          <span>we've stayed committed to these principles, ensuring that</span>
          <b
            className={styles.atJolintWe}
          >{` individuals' information is handled with care and respect.  `}</b>
          <span>{`Discover the journey of Jolint, and join us in our quest to make the world a better place, one company at a time. `}</span>
        </p>
        <p
          className={styles.atJolintWeAreDrivenByA}
        >{`With our innovative approach, cutting-edge technologies, and a team of experts, we are committed to creating `}</p>
        <p className={styles.atJolintWeAreDrivenByA}>
          <span>a</span>
          <b className={styles.atJolintWe}>
            {" "}
            more inclusive and equitable work culture for all.
          </b>
        </p>
        <p className={styles.atJolintWeAreDrivenByA}>&nbsp;</p>
      </div>
      <b className={styles.ourMission}>Our mission</b>
      <b className={styles.coFounders}>Co-founders:</b>
      <div className={styles.gradiant2} />
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <div className={styles.gradiant21}>
        <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
        <div className={styles.iAmA}>
          I am a data scientist and physicist. My background in Complex Adaptive
          Systems has fueled my passion for understanding how people interact,
          communicate, and collaborate in the workplace. My mission is to use
          data-driven analysis to make the workplace a better place for
          employees, by understanding the complexities of human interactions and
          finding ways to improve them. Join me on my journey to enhance
          workplace culture and improve the work environment. With my expertise
          in data analysis and understanding of human behavior, I am committed
          to leading the way towards a more inclusive and equitable work culture
          for all.
        </div>
        <div className={styles.asTheCoFounder}>
          As the co-founder of Jolint, I bring a wealth of expertise in
          organizational communication and collaboration to the table. With a
          background in international politics, communication studies, and
          specialized training in these areas, I understand the intricacies and
          nuances of effective communication within organizations. My passion
          for this field led me to start Jolint, with the goal of empowering
          companies to create more inclusive and equitable work cultures. Join
          me in my journey with Jolint, as we work together to improve
          communication and collaboration within organizations for a more
          inclusive work environment.
        </div>
      </div>
      <div className={styles.klaudiaMur}>Klaudia Mur</div>
      <div className={styles.faheemShah}>Faheem Shah</div>
    </div>
  );
};

export default AboutUsFinal;
