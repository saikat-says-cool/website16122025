import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 4rem',
            borderBottom: '1px solid #f0f0f0',
            backgroundColor: '#fff',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', fontWeight: 500, letterSpacing: '-0.04em' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <Logo size={22} />
                    <span>Artificialyze</span>
                </Link>
            </div>
            <nav>
                <ul style={{ display: 'flex', gap: '2rem' }}>
                    <li><Link to="/identity" className="hover-underline" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 400 }}>Identity</Link></li>
                    <li><Link to="/mission" className="hover-underline" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 400 }}>Mission</Link></li>
                    <li><Link to="/deepex" className="hover-underline" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 400 }}>DeepEx</Link></li>
                    <li><Link to="/governance" className="hover-underline" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 400 }}>Governance</Link></li>
                    <li><Link to="/blog" className="hover-underline" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 400 }}>Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
