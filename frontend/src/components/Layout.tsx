import { Outlet, Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import './Layout.css';

export default function Layout() {
  const { user, logout } = useAuthStore();

  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2>AADS</h2>
        </div>
        <ul className="nav-menu">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/players">Players</Link></li>
          <li><Link to="/sponsors">Sponsors</Link></li>
          <li><Link to="/forms">Forms</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>

      <div className="main-content">
        <header className="header">
          <div className="header-content">
            <h1>Atlantic Amateur Darts Series</h1>
            <div className="user-menu">
              <span>{user?.firstName} {user?.lastName}</span>
              <button onClick={logout} className="btn btn-secondary">Logout</button>
            </div>
          </div>
        </header>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
