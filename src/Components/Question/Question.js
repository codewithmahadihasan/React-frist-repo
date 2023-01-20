import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <div className='box'>
                <h3>How does react work ?</h3>
                <p>
                    React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
                </p>
            </div>
            <div className='box'>
                <h3>What is the difference between props and states ?</h3>
                <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component. Basically, the difference is that state is something like attributes in OOP : it's something local to a class (component), used to better describe it.</p>
            </div>
            <div className='box'>
                <h3>Where is the UseEffect used except when calling from the API ?</h3>
                <p>useEffect helps in adding componentDidUpdate and componentDidMount combined lifecycle in React's functional component. So far we know we can add lifecycle methods in stateful component only. To use it, we will need to import it from react If we run it, we will see the console log and alert on every render cycle.</p>
            </div>
        </div>
    );
};

export default Question;