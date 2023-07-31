"use client"

import '@styles/header.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Nav from './Sections/Nav/Nav';
import Button from './Button';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Image from 'next/image';

const Header = () => {
    const [navPopUp, setNavPopUp] = useState(false);
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getProviders();

            setProviders(res);
        })();
    }, []);


    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="logo">
                            <Link href="/">C</Link>
                        </div>

                        {/* Mobile Navigation */}
                        {/* <div
                            className="hamburger-btn outer-shadow hover-in-shadow"
                            onClick={() => setNavPopUp(!navPopUp)}
                        >
                            <span></span>
                        </div> */}
                        <div className='auth-container'>
                            {session?.user
                                ? (<>
                                    <button
                                        onClick={signOut}
                                        className="btn-1 outer-shadow hover-in-shadow"
                                    >
                                        Sign Out
                                    </button>

                                    <div className="profile outer-shadow howver-in-shadow">
                                        <Image
                                            src={session.user.image}
                                            width={50}
                                            height={50}
                                            alt='Admin Profile'
                                        />
                                    </div>
                                </>)
                                : (providers &&
                                    Object.values(providers).map((provider) => (
                                        <button
                                            onClick={() => {
                                                signIn(provider.id);
                                            }}
                                            className="btn-1 outer-shadow hover-in-shadow"
                                            key={provider.name}
                                        >
                                            Sign In
                                        </button>
                                    ))
                                )}



                        </div>
                    </div>
                </div>
            </header>
            <Nav openClass={navPopUp ? "open" : ""} navPopUp={navPopUp} navPopDown={() => setNavPopUp(!navPopUp)} />
        </>

    );
};

export default Header;
