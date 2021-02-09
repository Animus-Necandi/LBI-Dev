import React from 'react';
import AlertDismissibleExample from './Alert';

const PrivateSales = (props) => {

    setTimeout(() => {
        props.history.push('/Accueil')
    }, 5000);


    return (
        <div className="container mt-5 page">

            <AlertDismissibleExample />
            <h1>Ventes privées</h1>



        </div>
    )
}

export default PrivateSales;