import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fwww.twitter.com' target='_blank'>
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href='https://www.facebook.com' target='_blank'>
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com' target='_blank'>
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
