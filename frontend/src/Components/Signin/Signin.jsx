import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Signin = () => {
  return (
    //No me anda el size del container y del boton
    <div style={{ width: '600px', margin: 'auto' }}>
      <Container>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>

          <Button variant='warning' type='submit'>
            Submit
          </Button>
        </Form>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>New Customer ? </Form.Label>
          <span>Create your account</span>
        </Form.Group>
      </Container>
    </div>
  );
};
export default Signin;
