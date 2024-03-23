import { Logo } from './logo';

interface NavbarLinks {
  label: string;
  href: string;
}

const NAVBAR_LINKS: NavbarLinks[] = [
  {
    label: 'Pricing',
    href: '/',
  },
  {
    label: 'FAQ',
    href: '/',
  },
];

export function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-neutral rounded-box w-52"
          >
            {NAVBAR_LINKS.map(({ label }) => (
              <li>
                <a>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl hover:text-accent">
          <Logo />
          ChordHub
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NAVBAR_LINKS.map(({ label }) => (
            <li>
              <a>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-accent">Login</a>
      </div>
    </div>
  );
}
