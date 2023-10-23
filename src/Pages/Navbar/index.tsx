import React from 'react';
import { FunctionComponent } from 'react';
import styles from './navbar.module.css';

const ResponsiveAppBar: FunctionComponent = () => {
  return (
    <div className={styles.aboutUsFinal}>
      <div className={styles.aboutUsFinalChild} />
      <div className={styles.groupParent}>
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
      </div>
    </div>
  );
};

export default ResponsiveAppBar;
