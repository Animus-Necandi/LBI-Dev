import React from 'react';
import repertoire from '../data/repertoire';
import { Accordion, Card } from 'react-bootstrap';




// console.log(repertoire[0].content.lettreA[0].societe);


function Directory() {

    const annuaire = repertoire.map(({ lettre, categorie, content }, i) => {
        let listeSocietes = content.split(',').join('<br />');



        // console.log(content)
        ; return (
            <Accordion className="w-100" defaultActiveKey="1">
                <Card className="d-flex flex-column align-items-center justify-content-center">

                    <Accordion.Toggle className="d-flex justify-content-center w-100" as={Card.Header} eventKey="0">
                        <div id="societe" key={i} className="border m-2 d-flex flex-row" >
                            <div><p className="rep">{lettre}</p>
                            </div>
                            <div className=" d-flex justify-content-center">
                                <p className="ml-5 pl-5">SOCIETES TYPE: {categorie}</p>
                            </div>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse className="w-50" eventKey="0">
                        <Card.Body className="d-flex justify-content-center listes">
                            <div className=" m-2 d-flex flex-row" >

                                <div dangerouslySetInnerHTML={{ __html: listeSocietes }}>
                                </div>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    })

    return (

        <div className="col d-flex flex-column justify-content-center align-items-center">
            {annuaire}
        </div>
    )
}

export default Directory;


// const result = repertoire.map(({ content }) => ({ content: Object.values(content).flat() }));

// console.log(result);
// console.log(result[0].content)
// console.log(result[0].content.lettreA)

// export default function Test() {


//     const htmlString = content.split(',').join('<br />');

//     return <div dangerouslySetInnerHTML={{ __html: htmlString }}>
//     </div>;
// }

// console.log(Test)