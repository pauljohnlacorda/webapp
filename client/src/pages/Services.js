import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('api/services');
        setServices(response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <table className='table table-sm table-hover'>
      <thead>
        <tr>
          <th></th>
       
          <th className="text-center py-3" scope='col'><h4>Category</h4></th>
          <th className="text-start py-3" scope="col"><h4>Service Name</h4></th>
          <th className="text-start py-3" scope="col"><h4>Price</h4></th>
          <th></th>
         
         
        </tr>
      </thead>
      <tbody>
        {services.map(service => (
          <tr key={service._id}>
          
            <td></td>
            <td className='text-center'><h4 className='fs-6'>{service.category}</h4></td>
            <td className='text-start'><h4 className='fs-6'>{service.serviceName}</h4></td>
            <td><h4 className='fs-6'><i class="fa-solid fa-peso-sign"></i>{service.price}</h4></td>
            <td></td>
          
          </tr>
        ))}
      </tbody>
    </table>

  );
};

export default Services;
