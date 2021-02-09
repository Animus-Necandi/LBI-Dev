import React from 'react';
import Directory from './Repertoire';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';




function ProfessionalDirectory() {

    return (
        <div className="container-fluid page">
            <div className="row">

                <div className="col-2">
                    <AsideLeft />
                </div>

                <div className="col-8">
                    <div className="m-5">
                        <div className="repertoire">

                            <container-fluid class=" d-flex justify-content-center" >
                                <Navbar bg="dark" expand="lg" sticky="top" navbar="dark" className="w-75 menuAnnuaire" >
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className=" navbarre mr-auto ml-auto">
                                            <NavLink to="/Annuaire" >Répertoire par catégorie </NavLink>
                                            <p className="pAnnuaire">|</p>
                                            <NavLink to="/AnnuaireAlpha">Répertoire Alphabétique</NavLink>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </container-fluid>
                            <Directory />



                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <AsideRight />
                </div>

            </div>
        </div>
    )


}

export default ProfessionalDirectory;