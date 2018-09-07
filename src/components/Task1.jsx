import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid} from 'react-bootstrap';
import './style.css';

export default class Task1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.dataProps,
    }    
  }
  render() {    
    return (
      <Grid>
        <Jumbotron>
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
            {this.state.data.map((data, index) => {
              if (data.title.includes("3")) {
                return data.title
              }
            })}
          </div>
        </div>
        </Jumbotron>        
      </Grid>
    )
  }
}
