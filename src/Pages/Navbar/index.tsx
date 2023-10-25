import { FunctionComponent } from "react";
import { Link } from "react-router-dom"; 
import styles from "./navbar.module.css";

const ResponsiveAppBar: FunctionComponent = () => {
  return (
    <div className={styles.aboutUsFinal}>
      <div className={styles.aboutUsFinalChild} />
      <div className={styles.groupParent}>
        <img className={styles.instanceChild} alt="" src="/group27.png" />
        <Link to="/how-it-works"> 
          <button className={styles.howItWorks}>
            <div className={styles.howItWorks1}>How it works</div>
          </button>
        </Link>
        <div className={styles.inclusion}>
          <Link to="/inclusion"> 
            <button className={styles.howItWorks1}>Why inclusion</button>
          </Link>
        </div>
        <div className={styles.faq}>
          <Link to="/faq"> 
            <button className={styles.howItWorks1}>FAQ</button>
          </Link>
        </div>
        <div className={styles.aboutUs}>
          <Link to="/about-us">
            <button className={styles.howItWorks1}>About us</button>
          </Link>
        </div>
        <div className={styles.globeParent}>
          <img className={styles.globeIcon} alt="" src="/globe1.svg" />
          <img className={styles.arrowDownIcon} alt="" src="/arrowdown2.svg" />
          <button className={styles.english}>English</button>
        </div>
        <div className={styles.contactUs}>
          <Link to="/contact-us"> 
            <button className={styles.howItWorks1}>Contact us</button>
          </Link>
        </div>
        <div className={styles.signInKnapp}>
          <Link to="/consent-form"> 
            <button className={styles.signInKnapp1}>
              <div className={styles.signInKnappChild} />
              <b className={styles.signIn}>Consent form</b>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveAppBar;
