import React from 'react';
import { BarraDerecha } from './components/BarraDerecha';
import { BarraIzquierda } from './components/BarraIzquierda';
import { ContenidoPrincipal } from './components/ContenidoPrincipal';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';

export const App = () => {
    return (
        <>
            <header id="header">
                <Menu />
            </header>
            <aside id="lateral-izquierdo">
                <BarraIzquierda />
            </aside>
            <section id="seccion">
                <ContenidoPrincipal />
            </section>
            <aside id="lateral-derecho">
                <BarraDerecha />
            </aside>
            <footer id="footer">
                <Footer />
            </footer>
        </>
    )
}
