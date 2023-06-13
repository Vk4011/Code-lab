import { useState } from 'react'
import './App.css'
import SignIn from "../src/Components/Auth/SignIn";
import SignUp from "../src/Components/Auth/SignUp";
import LandingPage  from './Components/LandingPage';
import { Routes, Route } from 'react-router-dom';
import axios from "axios";
import QuestionsView from "../src/Components/question/QuestionsView";
import CodeEditorPage from "../src/Components/CodeEditor/CodeEditorPage";
import CreateQuestionsPage from "../src/Components/teacher/CreateQuestionsPage";



function App() {
  axios.get('https://gatecodelab.onrender.com/')
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });



  return (
    
   <Routes>
    <Route path='/' Component={LandingPage} />
    <Route path='/auth/signin' element={<SignIn/>}/>
    <Route path='/auth/signup' element={<SignUp/>}/>
    <Route path="/allquestions" element={<QuestionsView />} />
      <Route path="/code_editor/:name/:testcase" element={<CodeEditorPage />} />
      <Route path="/teacher" element={<CreateQuestionsPage />} />
   

   </Routes>
    
  )
}

export default App
