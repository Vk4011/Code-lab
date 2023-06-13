import React from "react";
import { useNavigate } from "react-router-dom";

function Question({ ques }) {
  const navigate = useNavigate();
  return (
    <>
      
          <tr>
            <td>
              <b>{ques.no}</b>
            </td>
            <td>{ques.question}</td>
            <td>
              Python
              <button onClick={() => navigate(`/code_editor/${ques.question}/${ques.testcase}`)}>
                {""}
                Open Ques{" "}
              </button>
            </td>
            //{" "}
          </tr>

    </>
  );
}

export default Question;
