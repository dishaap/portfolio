export default function NavBar() {
    return (
        <div class="navbar">
            <NavItem title="about" link="/" />
            <NavItem title="projects" link="/" />
            <NavItem title="get in touch" link="/" />
            <NavItem title="github" link="/" />
        </div>
    )
}

function NavItem({ title, link }) {
    return (
        <a href={link} class="navbar-item">{title}</a>
    )
}