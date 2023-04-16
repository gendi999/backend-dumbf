import React, { useEffect } from "react";
import "react-bootstrap";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import transaction from "../data/transaction.json";
function Transaction() {
    useEffect(() => {
        console.log(transaction);
      }, []);
    return(
        <>
        <div style={{ background: "black", height: "100vh" }}>
      <div className="container">
        <h3 className="text-white py-4">Incoming Transaction</h3>
        <Table striped hover>
          <thead>
            <tr style={{  background: "#1F1F1F", color: "red" }}>
              <th>No</th>
              <th>Users</th>
              <th>Bukti Transfer</th>
              <th>Remaining Active</th>
              <th>Status User</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {transaction.map((item) => {
              return (
                <tr style={{ background: "#2B2B2B" }}>
                  <td style={{height:"70px"}} className="text-white">{item.id}</td>
                  <td className="text-white">{item.name}</td>
                  <td className="text-white">{item.image}</td>
                  <td className="text-white">{item.Day}</td>
                  <td style={{ color: "green" }}>Active</td>
                  <td style={{ color: "green" }}>Approve</td>
                  <td>
                    <Dropdown className="m-1">
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <bsFillCaretDownFill style={{ color: "#42cef5" }} />
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ background: "#2B2B2B" }}>
                        <Dropdown.Item style={{ color: "green" }}>
                          Approve
                        </Dropdown.Item>
                        <Dropdown.Item style={{ color: "red" }}>
                          Cancel
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              );
            })}
              
              </tbody>
        </Table>
      </div>
    </div>
  
    </>
    )
}
export default Transaction