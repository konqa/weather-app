import React from 'react';

const Form = props =>(
    <div>
      <form onSubmit={props.getWeather}>
        <input name="city" placeholder="City..." type="text"></input>
        <input name="country" placeholder="Country..." type="text"></input>
        <button>Get Weather</button>
      </form>
    </div>
  );

export default Form;