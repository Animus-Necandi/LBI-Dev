
import Articles from './Article';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';

const ArticleComplet = ({ match }) => {


    const id = match.params.id;

    return (

        <div className="container-fluid page">
            <div className="row">

                <div className="col-2">
                    <AsideLeft />
                </div>

                <div className="col-8">
                    <div className="m-5">
                        <Articles idArticle={id} />
                    </div>


                </div>

                <div className="col-2">
                    <AsideRight />
                </div>

            </div>



        </div>

    )
}


export default ArticleComplet;