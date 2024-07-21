import SocialLink from "../SocialLink/SocialLink";
import PropTypes from "prop-types";

const UpperNav = ({ socialLinks }) => {
  return (
    <div className="header_top_one">
      <div className="header_top_one_container">
        <div className="header_top_one_inner clearfix">
          <div className="header_top_one_inner_left float-left">
            <div className="header_social_1">
              <ul className="list-unstyled">
                {socialLinks.map((link) => (
                  <SocialLink
                    title={link.title}
                    icon={link.icon}
                    link={link.link}
                    key={link.title}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="header_top_one_inner_right float-right">
            <div className="header_topmenu_1">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="fas fa-heart"></i>
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-user"></i>Sign In or Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;