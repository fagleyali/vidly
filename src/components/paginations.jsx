import React, { useState } from "react";

const Paginations = props => {
  const { onSelect, pages } = props;
  
  return (
    <div>
      <ul className="pagination justify-content-end">
        <select onChange={(e)=> onSelect(e.target.value)} className="page-item page-link m-1">
          <option value={10} selected>
            10
          </option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <li className="page-item disabled">
          <span className="page-link">Previous</span>
        </li>
        {pages
          ? Array.from(Array(pages)).map((page, id) => {
              // if(id===0)return null;
              return <li className="page-item page-link">{id + 1}</li>;
            })
          : "No pages"}

        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Paginations;
