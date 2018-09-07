import React, { Component } from 'react';
import './style.css';
import Pagination from 'react-bootstrap/lib/Pagination';
import { baseUrlApi }  from '../helper/helpers.js';

export default class Task3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      currentPage: 1,
      todosPerPage: 25,
      allPage: 0,
    }
    
  }


  componentDidMount() {
    let url = baseUrlApi()+"/api/breed/boxer/images";      
    let that = this;

    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        that.setState({
          todos: data.message
        })
      })
      .catch((error) => {
        alert(error)
        that.setState({
          showModalProcessing: false,
          showModalError: true,
          contentModal: error
        })
      });
  }

  renderPaging() {
    let active = this.state.currentPage;
    let items = [];
    for (let number = 1; number <= 10; number++) {
      return (
        items.push(
          <Pagination.Item active={number === active}>{number}</Pagination.Item>
        )
      )

    }
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event)
    });
  }

  changePerPage(event){
		this.setState({
			todosPerPage: event.target.value,
			currentPage: 1
		})
	}
  render() {
    const { todos, currentPage, todosPerPage, allPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);


    const renderTodos = currentTodos.map((data, index) => {
      if ((index + 1) % 4 === 0) {
        return (
          <div key={index} className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail"
              data-image={data}
              data-target="#image-gallery">
              <img className="img-thumbnail" style={{ display: 'block', width: '100%', height: '200px' }}
                src={data}
                alt="Another alt text" />
            </a>
            <div className="clearfix"></div>
          </div>
        )
      } else {
        return (
          <div key={index} className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail"
              data-image={data}
              data-target="#image-gallery">
              <img className="img-thumbnail" style={{ display: 'block', width: '100%', height: '200px' }}
                src={data}
                alt="Another alt text" />
            </a>
          </div>
        )
      }
    })

    this.state.allPage = Math.ceil(todos.length / todosPerPage);


    let active = this.state.currentPage;
    let items = [];
    for (let number = 1; number <= this.state.allPage; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active} onClick={()=>this.handleClick(number)}>{number}</Pagination.Item>
      );
    }

    const paginationBasic = (      
        <Pagination bsSize="small">{items}</Pagination>      
    );
    return (
      <div className="container">
        <div className="row form-inline ">
          <div className="col-sm-4">
            <div
              className="dataTables_info"
              id="dataTables-example_info"
              role="status"
              aria-live="polite"
            >
              Showing 1 to {this.state.todosPerPage} of {this.state.todos.length} entries
                    </div>
          </div>
          <div className="col-sm-4 text-center">
            {paginationBasic}
          </div>

          <div className="col-sm-4">
						<div className="dataTables_length pull-right" id="dataTables-example_length">
						  <label htmlFor={'show'}> Show {' '}
							<select
							  name="dataTables-example_length"
							  aria-controls="dataTables-example"
							  className="form-control input-sm"
							  id="show" onChange={(e) => this.changePerPage(e)}
							>
							  <option value="25">25</option>
							  <option value="50">50</option>
							  <option value="100">100</option>
							</select>
							{' '} entries
						  </label>
						</div>
					 </div>
        </div>
        <div className="row">
        <div className="well img-container">
          {renderTodos}
          </div>
        </div>
      </div>
    )
  }
}
