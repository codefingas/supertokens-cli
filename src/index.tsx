import React, {useState} from 'react';
import ReactDom from 'react-dom';

const App = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');
    return <div>
        <textarea value={input} onChange={e => setInput(e.target.value)}></textarea>
        <div>
            <button>Submit</button>
        </div>
        <pre>{code}</pre>
    </div>
};

ReactDom.render(<App />, document.querySelector('#root'));