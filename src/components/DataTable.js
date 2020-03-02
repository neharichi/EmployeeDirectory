import React, {useContext, useEffect} from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";
import DataContext from "../utils/DataContext.js"

const DataTable = () => {
  const data = useContext(DataContext)
  useEffect(()=>{
    console.log("DATATABLE", data)
  })

  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {data.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    data.handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <DataBody />
      </table>
    </div>
  );
}

export default DataTable;
