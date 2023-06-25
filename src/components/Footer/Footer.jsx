import { Formik } from "formik";
import Button from "../Shared/Button";
import InputField from "../Shared/InputField";
import { Link } from "react-router-dom";

import logo from "../../assets/monitoLogo.png";
import facebook from "../../assets/social/Facebook-Negative.svg";
import instagram from "../../assets/social/Instagram-Negative.svg";
import twitter from "../../assets/social/Twitter-Negative.svg";
import youtube from "../../assets/social/YouTube-Negative.svg";

const Footer = () => {
  return (
    <div className="bg-body-secondary rounded-top-5">
      <div className="container pt-5 pb-4">
        <div className="d-flex flex-column border-bottom">
          <div className="d-flex justify-content-between align-items-center rounded p-4 bg-primary text-white">
            <p className="m-0 col-4 fs-4">
              Register now so you don't miss our programs
            </p>
            <div className="d-flex justify-content-between align-items-center gap-3 bg-body rounded p-2 w-100">
              <Formik>
                <InputField name="name" placeholder="Enter your Email" />
              </Formik>
              <Button size="L">Subscribe Now</Button>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-5 mt-4">
            <div className="d-flex justify-content-evenly gap-5">
              <Link to="/">Home</Link>
              <Link to="/products">Category</Link>
              <Link to="/products">About</Link>
              <Link to="/products">Contact</Link>
            </div>
            <div className="d-flex gap-5">
              <Link to="/">
                <img src={facebook} />
              </Link>
              <Link to="/">
                <img src={instagram} />
              </Link>
              <Link to="/">
                <img src={twitter} />
              </Link>
              <Link to="/">
                <img src={youtube} />
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <p className="m-0">© 2022 Monito. All rights reserved.</p>
          <img src={logo} alt="logo" />
          <div className="d-flex gap-3">
            <Link to="/products">Terms of Service</Link>
            <Link to="/products">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
