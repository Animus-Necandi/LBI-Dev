import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';



function AlertDismissibleExample() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert className="containerAlert " variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Page en construction!</Alert.Heading>
                <p>Vous allez être redirigé vers la page d'accueil dans 5s.</p>
            </Alert>
        );


    } else {
        return <> </>;
    }
}






export default AlertDismissibleExample;