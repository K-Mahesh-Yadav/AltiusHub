import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Invoiceform({ setData }) {
  let [ID, setID] = useState("");
  let [Date, setDate] = useState("");
  let [InvoiceNumber, setInvoiceNumber] = useState("");
  function handelSubmit(e) {
    e.preventDefault();
    setData((data) => [...data, { Id: ID, Date: Date, InvoiceNumber }]);
  }
  const currentDate = new window.Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return (
    <Form onSubmit={handelSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Id</Form.Label>
        <Form.Control
          type="text"
          placeholder="Id"
          onChange={(e) => {
            setID(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Select Date"
          min={formattedDate}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>InvoiceNumber</Form.Label>
        <Form.Control
          type="text"
          placeholder="InvoiceNumber"
          onChange={(e) => {
            setInvoiceNumber(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Invoiceform;
