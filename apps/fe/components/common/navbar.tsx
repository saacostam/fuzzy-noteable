'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import { Logo } from './logo';
import { Loader } from './loader';
import { ROUTES } from '../../lib/constants';

interface NavbarLinks {
  label: string;
  href: string;
}

const NAVBAR_LINKS: NavbarLinks[] = [
  {
    label: 'Pricing',
    href: ROUTES.LANDING,
  },
  {
    label: 'FAQ',
    href: ROUTES.LANDING,
  },
];

export function Navbar() {
  const { status } = useSession();

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
              <li key={label}>
                <a>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl hover:text-accent" href="/">
          <Logo />
          ChordHub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NAVBAR_LINKS.map(({ label }) => (
            <li key={label}>
              <a>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex">
        {status === 'authenticated' ? (
          <>
            <button className="btn btn-accent mx-2" onClick={() => signOut()}>
              Logout
            </button>
          </>
        ) : status === 'unauthenticated' ? (
          <>
            <Link className="btn btn-accent mx-2" href={ROUTES.SIGN_IN}>
              Sign In
            </Link>
            <Link className="btn btn-secondary" href={ROUTES.SIGN_UP}>
              Sign Up
            </Link>
          </>
        ) : (
          <div className="mx-8">
            <Loader size="md" />
          </div>
        )}
      </div>
    </div>
  );
}
