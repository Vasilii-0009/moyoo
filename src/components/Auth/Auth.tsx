import { Link } from "react-router-dom";

import "./Auth.css";
import logo from "../../images/logo-auth.svg";
import vk from "../../images/vk.svg";
import gmail from "../../images/gmail.svg";
import yandex from "../../images/yandex.svg";
import AuthFrom from "../AuthForm/AuthForm";

export default function Auth() {
  return (
    <div className="auth">
      <div className="container">
        <img className="auth__img-logo" src={logo} alt="логотип страницы" />
        <AuthFrom />
        <div className="auth__network network-auth">
          <Link
            className="network-auth__link"
            to="https://vk.com/"
            target="_blank"
          >
            <img src={vk} alt="иконка вк" />
          </Link>
          <Link
            className="network-auth__link"
            to="https://mail.google.com/"
            target="_blank"
          >
            <img src={gmail} alt="иконка гугл почты" />
          </Link>
          <Link
            className="network-auth__link"
            to="https://yandex.com/"
            target="_blank"
          >
            <img src={yandex} alt="иконка яндекса" />
          </Link>
        </div>
        <p className="auth__text">Ещё нет аккаунта?</p>
        <Link className="auth__link-regester" to="#">
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
}
