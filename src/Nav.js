import './Nav.css';

function Nav() {
    const menuItems = [
        "Women",
        "Men",
        "Kids",
        "Brands",
        "Specials",
        "About"
    ].map(item => <li><a href = "#">{item}</a></li>);

    return (
        <nav className="main-nav">
            <ul>
                {menuItems}
            </ul>
        </nav>
    );
}

export default Nav;