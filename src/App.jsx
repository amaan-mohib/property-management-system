import { useState } from "react";
import "./App.css";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-3">
      <Container as="header">
        <Container className="px-5 py-4 border rounded-3 bg-light">
          <h1 className="mb-3 text-center display-5">Properties to buy</h1>

          <InputGroup className="mt-5">
            <FormControl
              placeholder="Search for locality, landmark, or seller"
              aria-label="Search"
              aria-describedby="search"
            />
            <Button variant="outline-secondary" id="search">
              Search
            </Button>
          </InputGroup>
        </Container>
      </Container>
    </div>
  );
}

export default App;
