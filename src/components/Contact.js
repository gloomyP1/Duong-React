import React from 'react';
import { Container, Icon, Select, Textarea, TextInput} from 'react-materialize';

export default function Contact() {
  const handleSubmit =(e)=> {
    e.preventDefault()
  }
  return (
    <Container>
    <div style={{backgroundColor:'rgb(255,182,193)',borderRadius:'15px', borderRadius:'15px 15px', borderRadius:'15px 15px 15px ', borderRadius:'15px 15px 15px 15px'}}>
      <h1>Contact Us</h1>
      <h4>Feel free to get in touch with us using the contact form below.</h4>
      <form onSubmit={handleSubmit}>
      <TextInput id="TextInput-38" label="Your Name"/>
      <TextInput email id="TextInput-41" label="Email" validate/>
      <TextInput id="TextInput-38" label="Message"/>
      <Select id="Select-46" multiple={false} onChange={function noRefCheck(){}} value="">
      <option disabled value="">
        Choose your favourite film
      </option>
      <option value="1">
        Business Propolsal
      </option>
      <option value="2">
        What is Wrong,Secretary Kim?
      </option>
      <option value="3">
        Forecasting love and Weather
      </option>
      <option value="4">
        Crash landing on you
      </option>
      <option value="5">
        Itaewon class
      </option>
      <option value="6">
        Parasite
      </option>
      <option value="7">
        The Penthouse: War in Life
      </option>
      <option value="8">
        Squid Games
      </option>
      <option value="9">
        Twenty-Five Twenty-one
      </option>
      </Select>
      <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-28" label="Your Content"/>
      <button style={{backgroundColor:'rgb(84,255,159)'}}>Submit</button>
      </form>
      {/* <form>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input type="email" className="form-control" id="emailInput" />
        </div>
        <div className="form-group">
          <label htmlFor="messageInput">Message</label>
          <textarea className="form-control" id="messageInput" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> */}
    </div>

    </Container>
  );
}
