import React from 'react';
import AlertDismissibleExample from './Alert';

const JobOffers = (props) => {

    setTimeout(() => {
        props.history.push('/Accueil')
    }, 5000);


    return (
        <div className="container mt-5 page">

            <AlertDismissibleExample />
            <h1>Offres d'emplois</h1>


        </div>
    )
}

export default JobOffers;