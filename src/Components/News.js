import React, { Component } from 'react';
import { connect } from "react-redux";
import Headline from './HeadLine'

class News extends Component{



    render(){

      const articles = Array.isArray(this.props.data.newsData) && this.props.data.newsData.map((news) => {
       return  <Headline news={news}/>
       
     })


        return(
            <div>
                {articles}
         
            </div>
        )
    }
}


const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(News);
