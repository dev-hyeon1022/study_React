import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RouteContext } from './context/RouteContext';

const Job = () => {
  const {table} = useContext(RouteContext);
  console.log(table);
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  return (
    <div>
      <table style={table}>
        <thead>
          <tr>
            <th>기술</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Job;