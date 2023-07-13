import React, {useState} from 'react';
import { findFullName, testFunc } from '../utilities/APICall';

// import PDFParser from 'pdf-parse';

export default function ResumeUpload() {

  async function showFile(e) {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => { 
      let text = e.target.result;
      testFunc();
      window.location = '/preview';
    };
    reader.readAsText(e.target.files[0]);
}
    
      return (
        <div>
          <h1>PDF File Upload and Parse Example</h1>
          <input type="file" id="file" onChange={showFile} />
        </div>
      );
}

// export default function ResumeUpload() {
//    const [selectedFile, setSelectedFile] = useState();

// 	const changeHandler = (event) => {
// 		setSelectedFile(event.target.files[0]);
// 	};

// 	const handleSubmission = () => {
//       const reader = new FileReader();
		
// 	};
   
//    async function extractTextFromPDF(pdfPath) {
//       try {
//          const { text } = await PDFParser(dataBuffer, options);
//          return text;
//        } catch (error) {
//          console.error('Error extracting text from PDF:', error);
//          throw error;
//        }
//     }

// 	return(
//    <div>
// 			<input type="file" name="file" onChange={changeHandler} />
// 			<div>
// 				<button onClick={handleSubmission}>Process</button>
// 			</div>
// 		</div>
// 	);
// }
