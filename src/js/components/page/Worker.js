import React, { Component } from 'react';

class Worker extends Component{
    render(){
        const{user_name, order_name , date_of_creation , specialization  } = this.props.worker;
        return(
            <tr>
               <td>{user_name}</td>
               <td>{order_name}</td>
               <td>{date_of_creation}</td>
               <td>{specialization }  </td>
            </tr>
        )
    }
}
export default Worker;

