import React, {useState} from 'react';
import { findFullName, findPhoneNumber, generateTagline, generateFirstWorkExperienceSynopsis, generateSecondWorkExperienceSynopsis, generateThirdWorkExperienceSynopsis } from '../utilities/APICall';

// import PDFParser from 'pdf-parse';

export default function ResumeUpload() {
  const [loading, setLoading] = useState(false);

  async function showFile(e) {
    e.preventDefault();
    setLoading(true);
    const reader = new FileReader();
    reader.onload = async (e) => { 
      let text = e.target.result;
      setTimeout(() => console.log('loading'), 10000);
      // await findFullName(text);
      // await findPhoneNumber(text);
      // await generateTagline(text);
      // await generateFirstWorkExperienceSynopsis(text);
      // await generateSecondWorkExperienceSynopsis(text);
      // await generateThirdWorkExperienceSynopsis(text);
      window.location = '/preview';
    };
    reader.readAsText(e.target.files[0]);
}
    
      return (
        <div>
          <h1>PDF File Upload and Parse Example</h1>
          {!loading && <input type="file" id="file" onChange={showFile} />}
          {loading && <p>Loading...</p>}
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
