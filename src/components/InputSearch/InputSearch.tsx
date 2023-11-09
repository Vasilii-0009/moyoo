import "./InputSearch.css";
import search from "../../images/search.svg";

export default function InputSearch() {
  return (
    <form className="search">
      <label className="search__box">
        <img className="search__img" src={search} alt="иконка поиска" />
        <input className="search__input" type="text" placeholder="Поиск" />
      </label>
    </form>
  );
}
