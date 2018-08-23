import React, { Component } from 'react';

class Headline extends Component{
    render(){
        return (
          <div className="border">
          <div>
             <h3> {this.props.news.title}</h3>
            <p> {this.props.news.description}</p>
           </div>

           <div> <img src={this.props.news.urlToImage} /></div>
          </div>


           
        )
    }
}

export default Headline;