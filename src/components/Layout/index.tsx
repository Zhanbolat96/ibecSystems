import React, {FC} from "react";
import { Link } from "react-router-dom";
import './style.scss';

export const NavBar: FC = () => {
  return (
    <div className="d-flex align-items-end">
      <img className="logo" src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"/>
      <div>
        <h4>My account</h4>
        <ul className="d-flex p-0 m-0">
          <li className="nav-li">
            <Link className="link" to='/'>Главная</Link>
          </li>
          <li className="nav-li">
            <Link className="link" to='/about'>О нас</Link>
          </li>
          <li className="nav-li">
            <Link className="link" to='/contacts'>Контакты</Link>
          </li>
          <li className="nav-li">
            <Link className="link disabled" to='/'>Контакты</Link>
          </li>
          <li className="nav-li">
            <Link className="link disabled" to='/'>Контакты</Link>
          </li>
          <li className="nav-li">
            <Link className="link disabled" to='/'>Контакты</Link>
          </li>
          <li className="nav-li">
            <Link className="link no-border disabled" to='/'>Контакты</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}