import { ChangeEvent, useState } from 'react';
import './App.css';
import Decoding from './Decoding'
import Encoding from './Encoding';
import React from 'react';
function App() {
  const [mode, setMode] = useState('Encode');
  const [text, setText] = useState('BLA BLA');
  const [M, setM] = useState(3);
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
  function encodeString(decodedText: string, rows: number)
  {
    //rows = Number(rows);
    if(rows === 1)  return decodedText;
    let len:number = decodedText.length;
    let res = "";

    if ((rows + 1) >= len) {
      res = "Please Reduce M ";
      return res;
    }
    
    let cols = Math.ceil(len / rows); //3
    
    
    console.log(rows,cols);//3,3
    let mat: string[][] = [];
    //BLA BLA
    // [
    //   [B  _   L]
    //   [_ L  B]
    //   [_ _  A]
    //   [_ _ ]
    // ]
    for (let i = 0; i < rows; i++){
      mat[i] = [];
      for (let j = 0; j < cols; j++){
        mat[i][j] = '_'; 
      }
    }
    let index = 0;
    let i = 0;
    let j = 0;
    while (index < len) {
      mat[i][j] = decodedText[index];
      if (i < rows && i!==rows-1 && j<cols && j!==cols-1) {
        i++;
        j++;
      }
      else{
        j = j - i +1;
        i = 0;
      }
      index++;
      if (index<len && (i >= rows || j >= cols)) {
        return 'Invalid M';
      }
      
    }
    for (const row of mat) {
      for (let c of row) {
        if (c === '') c = '_';
        res += c;
      }
    }
    console.log(mat);
    return res;  
  }

  function decodeString(encodedText: string, rows: number) {
      let len = encodedText.length;
      encodedText = encodedText.replace(/_/g, ' ');
      let cols = Math.floor(len / rows);

      let res = "";
      for (let i = 0; i < cols; ++i)
          for (let j = i; j < len; j += cols + 1)
              res += encodedText[j];
      while (res[res.length - 1] === ' ') {
          res = res.slice(0, res.length - 1);
      }
      return res;
  }
  function handleStringChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }
  function handleMChange(event: ChangeEvent<HTMLInputElement>) {
    let m = parseInt(event.target.value);
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
      <a href = 'https://github.com/Priyankg101/encrypt-decrypt' rel="noreferrer" target="_blank"><h2>Avegen Assessment</h2></a>
      <h4>{ `${mode}r`}</h4>
      <button className={`${(mode === 'Encode')? 'enc': 'dec'}`} onClick={handleMode}>Toggle</button>
      <input required type='text' value={ text } placeholder={mode} onChange={handleStringChange}></input>
      <input required type='number' value={ M } placeholder='Enter "M"' onChange={handleMChange}></input>
      <button className={`${(mode === 'Encode')? 'enc': 'dec'}`} onClick={handleSubmit} type="submit">{ mode }</button>
      <br />
      <p style={{color:'gray'}}>Underscores Represent Spaces</p>
      <p className='result'>{result}</p>
      <h4>{`${mode}r`} Explaination</h4>
      {(mode === 'Encode') ? <Encoding /> : <Decoding />}
      <div className="footer">
        <p>© 2023 Avegen FullStack Developer Assessment</p>
      </div>
    </div>
  );
}

export default App;
