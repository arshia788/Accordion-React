import React, {useState} from 'react';

import { Icon } from 'react-icons-kit';
import {plus} from 'react-icons-kit/fa/plus';
import {minus} from 'react-icons-kit/fa/minus'


const Question = ({data}) => {

    const [show, setShow]= useState(false);
    const [icon, setIcon]= useState(plus)

    return (
        <div className='question'>
            <header>
                <h4>{data.title}</h4>
                <span onClick={()=> setShow(!show)}>
                    {
                        show?
                         <Icon icon={minus} size={20}/>

                        :
                        <Icon icon={plus} size={20}/>
                    }
                    
                </span>
            </header>
            {show && <p>{data.info}</p>}
        </div>
    );
};

export default Question;