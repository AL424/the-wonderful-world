import { Link } from 'react-router-dom';
import { RouterPath } from '../../router/router';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Link to={RouterPath.main}>
        The Wonderful World &copy;
      </Link>
      <span className="year">2023</span>
      <Link to="https://github.com/AL424/" target="_blank">
        My GitHub
      </Link>
    </footer>
  );
};
