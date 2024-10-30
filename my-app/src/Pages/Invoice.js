import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Invoiceform from "./Invoiceform";

function InvoiceDetailComponent(params) {
  let [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
  }, []);
  return (
    <Container>
      <h1>Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>InvoiceNumber</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => {
            return (
              <tr>
                <td>{x.Id}</td>
                <td>{x.Date}</td>
                <td>{x.InvoiceNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div style={{ marginTop: "100px" }}>
        <h1>Form to add data</h1>
        <Invoiceform setData={setData} />
      </div>
    </Container>
  );
}

export default InvoiceDetailComponent;
