import QuestionsNav from "./QuestionsNav";
import QuestionText from "./QuestionText";
import OutputArea from "./OutputArea";
import Editor from "@monaco-editor/react";
import Button from "react-bootstrap/Button";
const CodeEditorPage = () => {
  const [code, setCode] = useState('hi')
  const editorRef = useRef();
  const getCodeString = () => {

      // const codeString = editorRef.current.value;
      console.log(code); // Output the code string
   
  };
  const codeChange = (e)=>{
    setCode(e.target.value)
  }
  const {name, testcase} = useParams()
  return (
    <>
      
      <QuestionText name={name}/>
      <Editor
      ref={editorRef}
        onChange={codeChange}
        height="50vh"
        width="100%"
        value={code}
        theme="vs-dark"
        defaultLanguage="python"
      />
      <p style={{margin:'1rem'}}>testcase : {testcase}</p>
      <OutputArea />

      <div className="foot">
        <div className="foot-container">
          <span variant="outline-warning" className="b"  onClick={getCodeString}>Run</span>{" "}
          <span variant="outline-success"  className="b" >Submit</span>{" "}
        </div>
      </div>
    </>
  );
};
import "bootstrap/dist/css/bootstrap.min.css"; 
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
export default CodeEditorPage;
