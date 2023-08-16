import React from "react";
import "./Table.css";
import Editimg from "../images/Edit.svg";

function Table() {
    const rowData = [
    {
      username: "Name 1",
      admin: true,
      physician: false,
      email: "abc@gmail.com",
      password: "***********",
      lastUpdated: "2 days ago",
      facilities: [
        "Bedford Center for Nursing and Rehabilitation",
        "King David Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
        "Crown Heights Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
      ],
    },
    // Add more data objects here
    {
      username: "Name 2",
      admin: true,
      physician: false,
      email: "abc@gmail.com",
      password: "***********",
      lastUpdated: "2 days ago",
      facilities: [
        "Bedford Center for Nursing and Rehabilitation",
        "King David Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
        "Crown Heights Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
      ],
    },
    {
      username: "Name 3",
      admin: true,
      physician: false,
      email: "abc@gmail.com",
      password: "***********",
      lastUpdated: "2 days ago",
      facilities: [
        "Bedford Center for Nursing and Rehabilitation",
        "King David Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
        "Crown Heights Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
      ],
    },
    {
      username: "Name 4",
      admin: false,
      physician: true,
      email: "abc@gmail.com",
      password: "***********",
      lastUpdated: "2 days ago",
      facilities: [
        "Bedford Center for Nursing and Rehabilitation",
        "King David Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
        "Crown Heights Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
      ],
    },
    {
      username: "Name 5",
      admin: false,
      physician: true,
      email: "abc@gmail.com",
      password: "***********",
      lastUpdated: "2 days ago",
      facilities: [
        "Bedford Center for Nursing and Rehabilitation",
        "King David Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
        "Crown Heights Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
      ],
    },
    {
      username: "Name 6",
      admin: false,
      physician: true,
      email: "abc@gmail.com",
      password: "***********",
      lastUpdated: "2 days ago",
      facilities: [
        "Bedford Center for Nursing and Rehabilitation",
        "King David Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
        "Crown Heights Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
      ],
    },
    {
      username: "Name 7",
      admin: true,
      physician: false,
      email: "abc@gmail.com",
      password: "***********",
      lastUpdated: "2 days ago",
      facilities: [
        "Bedford Center for Nursing and Rehabilitation",
        "King David Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
        "Crown Heights Center for Nursing and Rehabilitation",
        "Linden Center for Nursing and Rehabilitation",
      ],
    },
  ];
  return (
    <div>
      {/* table */}
      <table className="rounded-table-container">
        <thead>
          <tr>
            <th>Username</th>
            <th>Admin</th>
            <th>Physician</th>
            <th>Email</th>
            <th>Password</th>
            <th>Last Updated</th>
            <th>Facility</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((data, index) => (
            <tr key={index}>
              <td>{data.username}</td>
              <td>
                <input className="checkbox-data" type="checkbox" />
              </td>
              <td>
                <input className="checkbox-physician" type="checkbox" />
              </td>
              <td>{data.email}</td>
              <td>
                {data.password} {/* Display the password */}
                <div className="reset-password">Reset Password</div>
              </td>

              <td>
                <span className="last-updated">{data.lastUpdated}</span>
              </td>
              <td>
                <select className="dropdown2">
                  {data.facilities.map((facility, idx) => (
                    <option key={idx} value={facility}>
                      {facility}
                    </option>
                  ))}
                </select>
              </td>

              <td>
                <img src={Editimg} alt="Edit" className="Edit" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
