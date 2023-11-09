import "./Header.css";
import InputSearch from "../InputSearch/InputSearch";
import logo from "../../images/logo.svg";
import navigation from "../../images/navigation.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__box container">
        <div className="header__box-burger">
          <button className="header__btn-burger" type="button"></button>
          <img className="header__img-logo" src={logo} alt="логотип страницы" />
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
