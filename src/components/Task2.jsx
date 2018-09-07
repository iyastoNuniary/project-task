import React, { Component } from 'react'
import { Grid, Jumbotron } from 'react-bootstrap';
import './style.css';

export default class Task2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.dataProps,
    }    
  }

  render() {
    return (
      <div className="container">
        <Grid>
          <Jumbotron>
            <ul className="list-unstyled video-list-thumbs row">
              {this.state.data.map((data, index) => {
                return (
                  <div key={index} className="col-lg-3 col-sm-4 col-xs-6">
                    <div className="video"><iframe src={data.url} frameborder="0" allowfullscreen></iframe></div>
                    <h5 className="text-center title-video">{data.title}</h5>
                  </div>
                )
              })}
            </ul>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}
