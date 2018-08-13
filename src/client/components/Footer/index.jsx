import React from 'react';
import cssMain from '../../../scss/main.scss';
import css from './style.scss';
import FooterMenu from './FooterMenu';
import FooterMenuSocial from './FooterMenu/Social';


const Footer = () => {
  return (
    <div className={cssMain.container}>
      <div className={css.footer__separator} />
      <div className={cssMain.col_3}>
        <FooterMenu
          title="jobs at"
          links={[
            { text: 'Home', href: '/' },
            { text: 'Jobs', href: '/' },
            { text: 'About', href: '/' },
            { text: 'Departament', href: '/' },
          ]}
        />
      </div>
      <div className={cssMain.col_3}>
        <FooterMenu
          title="Information"
          links={[
            { text: 'F.A.Q.', href: '/' },
            { text: 'Application process', href: '/' },
            { text: 'Privacy policy', href: '/' },
            { text: 'Contact', href: '/' },
          ]}
        />
      </div>
      <div className={cssMain.col_3}>
        <FooterMenuSocial title="Folow Us" />
      </div>
      <div className={cssMain.col_3}>
        <FooterMenu
          title="Job Alert"
          links={[
            { text: 'Subscribe to your job alert', href: '/' },
          ]}
        />
      </div>
    </div>
  );
};

export default Footer;
