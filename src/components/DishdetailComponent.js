import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    renderComments(comments){
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
            )
        });
        return(
            <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {displayComments}
            </div>
        )
    }
  
    render(){
        if(this.props.selectedDish != null){
            return(
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                        <CardBody>
                            <CardTitle><b>{this.props.selectedDish.name}</b></CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                  </div>
                  {this.renderComments(this.props.selectedDish.comments)}
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}
export default DishDetail