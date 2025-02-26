import './main.css';

export default function MainLayout({children}) {
    return (
        <div className="root-layout">
            {children}
        </div>
    );
}