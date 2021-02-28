import React from 'react';

import Timer from '../components/Timer';

const TableData = (props) => {
  const getData = () => {
    try {
      const data = localStorage.getItem('inputTableData');
      const parsedData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Timer />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Color</th>
              <th>Item</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {getData().map((item) => (
              <tr key={item.Name}>
                <tr key={item.Brand}>
                  <th scope="row">{item.Brand}</th>
                </tr>

                <th scope="row">{item.Color}</th>
                <th scope="row">{item.Name}</th>
                <tr key={item.createDate}>
                  <th>{item.createDate}</th>
                </tr>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
