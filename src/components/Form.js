import React from 'react';
import '../style/Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }

  handleSubmit() {
    this.setState({ isSubmitted: true });
  }

  render() {
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          <p>Your message was sent😸<br />Thank you !!</p>
        </div>
      );
    } else {
      contactForm = (
        <form action="lxam2cctzwcn@gmail.com" method="post" onSubmit={() => { this.handleSubmit() }}>
          <div className="contactName">
            <label>NAME</label>
            <input type="text" />
          </div>
          <div className="contactEmail">
            <label>EMAIL</label>
            <input type="text" />
          </div>
          <div className="contactMessage">
            <label>MESSAGE</label>
            <textarea />
          </div>
          <button type='submit'>SUBMIT</button>
        </form>
      );
    }

    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}


export default Form;
