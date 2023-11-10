import "./Header.css";
import logo from "../../images/logo.svg";
import navigation from "../../images/navigation.svg";
import account from "../../images/user.svg";
import InputSearch from "../InputSearch/InputSearch";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__box container">
        <div className="header__box-burger">
          <button className="header__btn-burger" type="button"></button>
          <img className="header__img-logo" src={logo} alt="логотип страницы" />
          <Link className="header__account" to="#">
            <img src={account} alt="иконка пользователя акаунта" />
          </Link>
        </div>

        <InputSearch />

        <div className="header__box-auth">
          <div className="header__box-nav">
            <img
              className="header__img-nav"
              src={navigation}
              alt="стрелка навигации"
            />
            <p className="header__text">Санкт-Петербург</p>
          </div>
          <button className="header__btn-auth" type="button">
            ВОЙТИ
          </button>
        </div>
      </div>
    </header>
  );
}
