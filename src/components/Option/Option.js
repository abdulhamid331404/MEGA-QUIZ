import React from 'react';
import { Form } from 'react-router-dom';
import './Option.css'

const Option = ({option}) => {
    return (
        <div>
         <Form  className='singleOption'>
            <input type="radio"  id="qs" />
            <label for='qs'>{option}</label>
         </Form>
        </div>
    );
};

export default Option;