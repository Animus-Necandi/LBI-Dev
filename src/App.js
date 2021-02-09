import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu'
import Home from './components/Accueil';
import ProfessionalDirectory from './components/Annuaire';
import Outings from './components/Sorties';
import PrivateSales from './components/Ventes_privees';
import DiscountCoupons from './components/Coupons_reduction';
import AllOut from './components/Sortons_ensemble';
import JobOffers from './components/Offres_d_emplois';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfessionalDirectoryAlpha from './components/AnnuaireAlpha';
import ArticleComplet from './components/ArticleComplet'
import AuPaletDor from './components/AuPaletDOr';




function App() {


  return (

    <BrowserRouter>

      <Header />

      <Menu />

      <Switch>


        <Route exact path="/"><Home /></Route>
        <Route path="/Accueil"><Home /></Route>
        <Route path="/Annuaire"><ProfessionalDirectory /></Route>
        <Route path="/AnnuaireAlpha"><ProfessionalDirectoryAlpha /></Route>
        <Route path="/Sorties"><Outings /></Route>
        <Route path="/Ventes_privees"><PrivateSales /></Route>
        <Route path="/Coupons_reduction"><DiscountCoupons /></Route>
        <Route path="/Sortons_ensemble"><AllOut /></Route>
        <Route path="/Offres_d_emplois"><JobOffers /></Route>
        <Route path="/ArticleComplet/:id"><ArticleComplet /></Route>
        <Route path="/AuPaletDor"><AuPaletDor /></Route>
        <Route ><ErrorPage /></Route>

      </Switch>

      <Footer />



    </BrowserRouter>
  );

}

export default App;
