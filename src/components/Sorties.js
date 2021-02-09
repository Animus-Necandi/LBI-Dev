import React from 'react';
import AlertDismissibleExample from './Alert';

const Outings = (props) => {

    setTimeout(() => {
        props.history.push('/Accueil')
    }, 5000);


    return (
        <div className="container mt-5 page">

            <AlertDismissibleExample />
            <h1>Sorties et évènements</h1>


        </div>
    )
}

export default Outings;