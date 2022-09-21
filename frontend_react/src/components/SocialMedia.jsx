import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://twitter.com/linlykah" target="_blank">
      <BsTwitter />
      </a>
    </div>
    <div>
    <a href="https://web.facebook.com/lindiwe.mutungamiri/" target="_blank">
      <FaFacebookF />
      </a>
    </div>
    <div>
    <a href="https://www.instagram.com/being_lindiwe/" target="_blank">
      <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;