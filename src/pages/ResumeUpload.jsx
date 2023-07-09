import React, {useState} from 'react';
import PDFParser from 'pdf-parse';

export default function ResumeUpload() {
   const handleFileUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = async (event) => {
        const fileContent = event.target.result;
        
        try {
          const parsedData = await PDFParser(fileContent);
          console.log('PDF text content:', parsedData.text);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      reader.readAsArrayBuffer(file);
    };
  
    
      return (
        <div>
          <h1>PDF File Upload and Parse Example</h1>
          <input type="file" onChange={handleFileUpload} />
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
