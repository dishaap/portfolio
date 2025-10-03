export default function NavBar() {
    return (
        <div class="liquidGlass-wrapper navbar">
            <div class="liquidGlass-effect"></div>
            <div class="liquidGlass-tint"></div>
            <div class="liquidGlass-shine"></div>
            <div class="liquidGlass-text">
                <NavItem title="about" link="/" />
                <NavItem title="projects" link="/" />
                <NavItem title="get in touch" link="/" />
                <NavItem title="github" link="/" />
            </div>
        </div>
    )
}

function NavItem({ title, link }) {
    return (
        <a href={link} class="navbar-item">{title}</a>
    )
}