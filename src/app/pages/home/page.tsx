import React from 'react';
import Header from '../../../components/Header/Header';
import ProductsList from '../../../components/ProductList/ProductList'

const HomePage = () => {
    return (
        <>
            <Header />
            <div>
                <h2>Bienvenue sur la page d'accueil</h2>
                <p>Ceci est le contenu principal de la page d'accueil.</p>
            </div>
        </>
    );
};

export default HomePage;