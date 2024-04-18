import { Link, Outlet } from 'react-router-dom';

import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
        <main>
          <nav>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/aktualni_nabidka" >Aktualni nabidka</Link> 
            <span> | </span>
            <Link to="/products">Vyrobky</Link>
          </nav>
          <Outlet />
      </main>
      <footer>
        <p className='footer'><small>Czechitas, Digitální akademie: Web</small></p>
      </footer>
   </div>
  );
};
