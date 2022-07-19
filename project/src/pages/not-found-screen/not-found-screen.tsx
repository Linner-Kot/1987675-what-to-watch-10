import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <body>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Link to={AppRoute.Main} className="logo__link">
              <span className="logo__letter logo__letter--2">M</span>
              <span className="logo__letter logo__letter--2">A</span>
              <span className="logo__letter logo__letter--2">I</span>
              <span className="logo__letter logo__letter--2">N</span>
            </Link>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
              </div>
            </li>
            <li className="user-block__item">
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__desc">
              <h2 className="film-card__title">404 Page not found</h2>
              <p className="film-card__meta">
              </p>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default NotFoundScreen;
