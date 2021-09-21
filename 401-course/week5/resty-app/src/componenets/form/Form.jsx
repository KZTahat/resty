import { useState } from "react";
import "./form.scss";

const Form = (props) => {
  let handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      method: `${event.target.method.value}`,
      url: `${event.target.url.value}`,
      body: `${event.target.body.value}`,
    };
    props.handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label id="methods" className='formContents'>
          <select id="method" name="method" className='formContents'>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
        <label className='formContents'>
          URL :
          <input name="url" type="text" className='formContents' />
        </label>
        <button type="submit" className='formContents'>GO!</button>
        <label className='formContents' style={{display: 'block', marginLeft: '145px'}}>
          Body 
          <input name="body" type="text" className='formContents' />
        </label>
      </form>
    </>
  );
};

export default Form;
