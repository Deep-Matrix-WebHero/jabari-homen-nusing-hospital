import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart,faCoffee,faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';
import './AddDoctor.css';

const AddDoctor = (props) => {
    //use font awesome
    const element = <FontAwesomeIcon icon={faCoffee} />
    

    const {addDoctor}=props;

    let total = 0;
    for(const doctor of addDoctor){
        total = total + doctor.salary;
    }
    const salary = total;
    return (
        <div>
              <h2 className="budget-section"><FontAwesomeIcon icon={faCoffee} />Budget section: </h2>
              <div className="budget-box">
              <h2>{element}Doctor's Total: {addDoctor.length}</h2>
              <h2>Budget Total: {salary}</h2>
              <h2>Doctor's Name: </h2>
              {
                  addDoctor.map(doctor=><li>
                      {doctor.name}
                  </li>)
              }
              </div>
              
                 
        </div>
    );
};

export default AddDoctor;