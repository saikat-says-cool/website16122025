import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2rem 4rem',
            borderBottom: '1px solid #eaeaea',
            backgroundColor: '#fff',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.05em' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Logo size={24} />
                    <span>Artificialyze</span>
                </Link>
            </div>
            <nav>
                <ul style={{ display: 'flex', gap: '2rem' }}>
                    <li><Link to="/identity">Identity</Link></li>
                    <li><Link to="/mission">Mission</Link></li>
                    <li><Link to="/deepex">DeepEx</Link></li>
                    <li><Link to="/governance">Governance</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
