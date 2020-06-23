import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({comments}){
    if(comments == null || comments === undefined){
        return(<div></div>);
    }
    const displayComments = comments.map((item) => {
        return(
            <ul key={item.id} className = "list-unstyled">
                <li>{item.comment}</li>
                <li>--{item.author}, {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(item.date))}</li>
            </ul>
        );
    });
    return(
        <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {displayComments}
        </div>
    );
}

const RenderDish = ({dish}) => {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><b>{dish.name}</b></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

const DishDetail = (props) => {
    if(props.dish != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderDish dish = {props.dish} />
                    <RenderComments comments = {props.comments}/>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="container"></div>
        )
    }
}

export default DishDetail