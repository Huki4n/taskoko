import Link from "next/link";

import s from './HeaderNav.module.scss'

const navLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "About Us", href: "/about" },
  { label: "Contacts", href: "/contacts" },
];

export const HeaderNav = () => {
  return (
      <nav className={s.headerNav}>
        <ul className={s.navList}>
          {navLinks.map(({ label, href }) => (
              <li key={label} className={s.navItem}>
                <Link href={href} className={s.navLink}>
                  {label}
                </Link>
              </li>
          ))}
        </ul>
      </nav>
  );
};