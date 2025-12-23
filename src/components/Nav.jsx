import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    const tabs = [
        { id: '', label: 'Overview' },
        { id: 'blueprint', label: 'The System' },
        { id: 'economics', label: 'Economics' },
        { id: 'casestudy', label: 'Proof' },
        { id: 'manifesto', label: 'Manifesto' }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#F5F4F0] border-b border-gray-300 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-tech font-bold text-lg">A</div>
                <span className="font-hand text-2xl font-bold tracking-tight">Artificialyze</span>
            </div>

            <div className="hidden md:flex gap-8">
                {tabs.map(tab => (
                    <NavLink
                        key={tab.id}
                        to={`/${tab.id}`}
                        className={({ isActive }) =>
                            `font-tech text-sm uppercase tracking-wider nav-link ${isActive ? 'font-bold active' : 'text-gray-600'}`
                        }
                    >
                        {tab.label}
                    </NavLink>
                ))}
            </div>

            <button
                onClick={() => navigate('/booking')}
                className="btn-primary text-xs md:text-sm"
            >
                Contact Strategy
            </button>
        </nav>
    );
};

export default Nav;
