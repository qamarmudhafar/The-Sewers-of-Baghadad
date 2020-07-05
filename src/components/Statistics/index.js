import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from '../pagination';
import './Statistics.css';

class Statistics extends Component {
    constructor(props){
    super(props);
    this.state = {
       items :[],
       isLoaded:false,
    }}
    componentDidMount =()=>{
    fetch ('http://139.162.142.73/admin/v1/content/statistics')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded:true,
            items: json,
        });
    }
    )}
   
    
    render (){
    
    let {isLoaded, items}= this.state;
    
    
    if (!isLoaded){
        return(
            <div> Loading...</div>
    )
        
    }
    
    else {
      // const data=Object.values(items.data);
      const data=items.data;
        
        return(
            <div className="App">
    <ul className="list">
      
        <li className="button1"> {items.message}</li>
        <br></br>
        <li className="button2">Posts : {items.data.posts}</li><br></br>
        <li className="button3">Users : {items.data.users}</li><br></br>
        <li className="button4">Banners : {items.data.banners}</li><br></br>
        <li className="button5">Storage Used : {items.data.storageUsed}</li><br></br>
        <li className="button6">Storage Left : {items.data.storageLeft}</li><br></br>
        <li className="button7">Requests : {items.data.requests}</li>

        
    </ul>        
    </div>
        )
    }}}
  
   export default Statistics