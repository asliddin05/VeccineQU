import React from 'react';
import { Header } from '../header/index';
import { Footer } from '../footer/index'
import { Hero } from '../../pages/home/hero/hero';
import { Schedule } from '../../pages/home/schedule';
import { Veccine } from '../../pages/home/veccine';
import { Get } from '../../pages/home/get/get';
import { Contact } from '../../pages/home/contact';

export const MainLayout = ({ children }) => {
    return (
        <>
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    {children}
                    <Hero />
                    <Schedule/>
                    <Veccine />
                    <Get />
                    <Contact />
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}