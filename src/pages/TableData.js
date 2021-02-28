import React from 'react';
import styles from '../css/TableData.module.css';
import Timer from '../components/Timer';
const shortid = require('shortid');

const TableData = () => {
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
        <table className={styles.minimalistBlack}>
          <thead>
            <tr key={shortid.generate()}>
              <th scope="col">Brand</th>
              <th scope="col">Color</th>
              <th scope="col">Item</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {getData().map((item) => (
              <tr key={shortid.generate()}>
                <th>{item.Brand}</th>
                <th>{item.Color}</th>
                <th>{item.Name}</th>
                <th>{item.createDate}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
