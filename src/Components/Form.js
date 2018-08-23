import React , {Component} from 'react'
import { thunk_action_creator } from "../Actions/actions";
import { connect } from "react-redux";

class Form extends Component{

      handleSubmit = (e) => {
          e.preventDefault();
          const searchString = this.input.value;
          this.props.dispatch(thunk_action_creator(searchString));
          this.input.value = '';
          console.log(searchString);
      } 
      render(){
          return (
            <div>
              <h1>Search for news</h1>
              <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Search here" ref={(input)=> this.input = input}/>
                  <button type="submit"> Search </button>
              </form>
            </div>
              
          )
      }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(Form);
