import React,{useState} from 'react'
// const [text, setText] = useState("Enter the Text here");
export default function Textform(props) {
  const [text,setText] = useState("");
  function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  const downloadTxtFile = (text) => {
    const element = document.createElement("a");
  const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };
  const handleUpClick=()=>{
    // console.log("uppercase is clicked!" + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  }
  const handleLoClick=()=>{
    // console.log("uppercase is clicked!" + text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  }
  const handleClear=()=>{
    // console.log("uppercase is clicked!" + text);
    let newText="";
    setText(newText);
    props.showAlert("Cleared","success");
  }
  const handleSentenseCase=()=>{
    // console.log("uppercase is clicked!" + text);
    let newText=titleCase(text);
    setText(newText);
    props.showAlert("Converted to Sentense Case!","success");
  }
  const handleCopyClipboard=()=>{
    // console.log("uppercase is clicked!" + text);
    copyToClipboard(text);
    props.showAlert("Copied to clipboard","success");

  }
  const handleDownloadTxtFile=()=>{
    // console.log("uppercase is clicked!" + text);
    downloadTxtFile(text);
    props.showAlert("file downloaded!","success");

  }
  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const handleReverse=()=>{
    let newText=text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text Reversed","success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");
  }
  // text = "new text" //wrong way to change the text
  // setText("new text");
  return (
    <>
      <div className="container">
              <div className="mb-3" style={{color: (props.mode==='dark' ?'white' : 'black')}}>
                  <h1>{props.heading}</h1>
                  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: (props.mode==='dark' ?'grey' : 'white'),color: (props.mode==='dark' ?'white' : 'black')}} id="myBox" rows="8"></textarea>
              </div>
              <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
              <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To LowerCase</button>
              <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
              <button className="btn btn-primary mx-2 my-2" onClick={handleSentenseCase}>Convert to Sentence Case</button>
              <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClipboard}>Copy to clipboard</button>
              <button className="btn btn-primary mx-2 my-2" onClick={handleDownloadTxtFile}>Download</button>
              <button className="btn btn-primary mx-2 my-2" onClick={handleReverse}>Reverse</button>
              <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className="container my-3" style={{color: (props.mode==='dark' ?'white' : 'black')}}>
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").length} words and {text.length} character and {text.split(/\r\n|\r|\n/).length} lines </p>
          <p>{0.008*text.split(" ").length} Minutes To read the text.</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Enter the text in above box to preveiw"}</p>
      </div>
    </>

  )
}
