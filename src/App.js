import { React, useState } from 'react';
import './App.css'
function App() {
  const [mode, setMode] = useState('Encode');
  const [text, setText] = useState('');
  const [M, setM] = useState(1);
  const [result, setResult] = useState('');

  function handleMode() {
    setText('');
    setM(1);
    setResult('');
  if(mode === 'Encode')
    setMode('Decode');
  else {
    setMode('Encode');
  }
  }
  function encodeString(decodedText) {
    return decodedText;  
  }

  function decodeString(encodedText) {
    return encodedText;
}
  function handleStringChange(event) {
    setText(event.target.value);
  }
  function handleMChange(event) {
    let m = event.target.value;
    setM(m);
  }
  function handleSubmit() {
    if (mode === 'Encode')
      setResult(encodeString(text, M));
    else
      setResult(decodeString(text, M));
  }

  return (
    <div className="App">
      <button className={`${(mode === 'Encode')? 'enc': 'dec'}`} onClick={handleMode}>Toggle</button>
      <input required type='text' value={ text } placeholder={mode} onChange={handleStringChange}></input>
      <input required type='number' value={ M } placeholder='Enter "M"' onChange={handleMChange}></input>
      <button onClick={handleSubmit} type="submit">{ mode }</button>
      <br/>
      <p>{ result }</p>
    </div>
  );
}

export default App;
