
import React from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
import cssMain from '../../../../../scss/main.scss';
import FooterMenuSocialItem from './FooterMenuSocialItem';

const FooterMenuSocial = ({ title }) => {
  return (
    <React.Fragment>
      <h3 className={css['footer-menu__title']}>{title}</h3>
      <div className={css['footer-menu__list']}>
        <ul className={`${cssMain.col_6} ${css['footer-menu__list']}}`}>
          {[
            { text: 'Newsletter', icon: 'newsletter', href: '/' },
            { text: 'Instagram', icon: 'instagram', href: '/' },
            { text: 'Twitter', icon: 'twitter', href: '/' },
            { text: 'Tumblr', icon: 'tumblr', href: '/' },
            { text: 'Linkedin', icon: 'linkedin', href: '/' },
          ].map(item => <FooterMenuSocialItem key={item.text} {...item} />)
          }
        </ul>
        <ul className={`${cssMain.col_6} ${css['footer-menu__list']}}`}>
          {[
            { text: 'Facebook', icon: 'facebook', href: '/' },
            { text: 'Pinterest', icon: 'pinterest', href: '/' },
            { text: 'Youtube', icon: 'youtube', href: '/' },
            { text: 'Google+', icon: 'google', href: '/' },
          ].map(item => <FooterMenuSocialItem key={item.text} {...item} />)
          }
        </ul>
      </div>
    </React.Fragment>
  );
};

FooterMenuSocial.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FooterMenuSocial;
