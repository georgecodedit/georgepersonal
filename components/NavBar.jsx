"use client"
import Link from "next/link";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Development", path: "/web-development" },
];

const subItems = [
  { name: "School Projects", path: "/design-school" },
  { name: "Personal Projects", path: "/design-personal" },
  { name: "Research Projects", path: "/design-research" },
];

const linkBaseClass = "block px-2 py-1 rounded cursor-pointer ";
const linkHoverClass =
  "transition-colors duration-300 hover:bg-blue-900 hover:text-white";
const combinedLinkClass = `${linkBaseClass} ${linkHoverClass}`;

const Dropdown = ({ title, items }) => (
  <li className="relative group">
    <span className={`${combinedLinkClass} p-2`}>{title}</span>
    <ul className="absolute left-0 mt-2 space-y-2 bg-white text-black p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-black">
      {items.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </ul>
  </li>
);

const NavItem = ({ name, path }) => (

    <Link href={path}>
      <span className={combinedLinkClass}>{name}</span>
    </Link>

);

function Navbar() {
  return (
    <div className="bg-blue-600 p-4 text-black w-full text-white">
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
          {/* Always visible */}
          <NavItem key="Home" name="Home" path="/" />

          {/* Hidden on small screens, visible on larger screens */}
          {navItems.slice(1).map((item) => (
            <li key={item.name} className="hidden sm:block">
              <NavItem {...item} />
            </li>
          ))}

          {/* Submenus */}
          <li className="sm:hidden">
            <Dropdown
              title="Projects"
              items={[...navItems.slice(1), ...subItems]}
            />
          </li>
          <li className="hidden sm:block z2">
            <Dropdown title="Product Design" items={subItems} />
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
