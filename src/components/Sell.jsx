import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Sell = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <Container className="px-4 py-4" style={{ maxWidth: "720px" }}>
        <h1 className="mb-3">Add a listing</h1>
        <Form
          noValidate
          //   validated={validated}
          className="p-4 p-md-5 border rounded-3 bg-light"
          onSubmit={handleSubmit}>
          <Form.Group className="mb-3 form-floating" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="name"
              required
              placeholder="Enter name"
            />
            <Form.Label>Name</Form.Label>
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 form-floating" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="area"
              required
              placeholder="Enter area"
            />
            <Form.Label>Area</Form.Label>
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 form-floating" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="image"
              required
              placeholder="Enter name"
            />
            <Form.Label>Image</Form.Label>
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 form-floating" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="description"
              required
              placeholder="Enter description"
            />
            <Form.Label>Description</Form.Label>
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Row className="align-items-center">
            <Col xs="auto">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Sell;
