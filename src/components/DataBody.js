import React, {useContext, useEffect} from "react";
import "../styles/DataBody.css";
import DataContext from "../utils/DataContext.js"

const DataBody = () => {

  const data = useContext(DataContext)
  useEffect(()=>{
    console.log("DATABODY", data)
  })

  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  return (
    <tbody>
      {data.developerState.filteredUsers[0] !== undefined && data.developerState.filteredUsers[0].name !== undefined ? (
        data.developerState.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>            
              <td data-th="Name" className="name-cell align-middle">
                {name.first} {name.last}
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
              </td>
              <td data-th="Email" className="align-middle">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="DOB" className="align-middle">
                {formatDate(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default DataBody;
