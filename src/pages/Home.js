import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const Home = () => {
  const [downCounterValue, setDownCounterValue] = useState('');

  const [tableItem, setTableItem] = useState([]);

  const onChangeHandler = (e) => {
    setDownCounterValue(e.target.value);
  };

  const readExel = (file) => {
    const promise = new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: 'buffer' });

        const wsName = wb.SheetNames[0];

        const ws = wb.Sheets[wsName];

        const data = XLSX.utils.sheet_to_json(ws);
        res(data);
      };
      fileReader.onerror = (error) => {
        rej(error);
      };
    });
    promise.then((data) => {
      setTableItem(data);
    });
  };
  const onChangeInputFile = (e) => {
    const file = e.target.files[0];
    readExel(file);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    const createDate = `${month}/${date}/${year}`;

    tableItem.push({ createDate });

    const stringTable = JSON.stringify(tableItem);
    localStorage.setItem('inputTableData', stringTable);
    localStorage.setItem('inputTimeData', downCounterValue);

    window.location = '/data';
  };

  return (
    <div>
      <div>
        <h1>Welcome to our app</h1>
        <h3>Please, download your table</h3>
      </div>
      <form onSubmit={onSubmitHandler}>
        <input
          name="tableData"
          type="file"
          onChange={(e) => onChangeInputFile(e)}
        ></input>
        <input
          onChange={onChangeHandler}
          id="downCounterInput"
          type="text"
          value={downCounterValue}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
