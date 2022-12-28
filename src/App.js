import logo from './logo.svg';
import './App.css';
import { PDFDocument } from "pdf-lib";
import {useState} from "react";
import {saveAs} from 'file-saver';
function App() {
    const [pdfFileData, setPdfFileData] = useState();
    var baseOffsetPages=32;
    function readFileAsync(file) {
        return new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsArrayBuffer(file);
        });
    }
    function renderPdf(uint8array) {
        const tempblob = new Blob([uint8array], {
          type: "application/pdf",
        });
        saveAs(tempblob, 'About_the_author.pdf')
        const docUrl = URL.createObjectURL(tempblob);
        setPdfFileData(docUrl);
    }
    function range(start, end) {
        let length = end - start + 1;
        return Array.from({ length }, (_, i) => start+baseOffsetPages + i - 1);
    }
    async function extractPdfPage(arrayBuff) {
        const pdfSrcDoc = await PDFDocument.load(arrayBuff);
        const pdfNewDoc = await PDFDocument.create();
        const pages = await pdfNewDoc.copyPages(pdfSrcDoc, range(414, 415));
        pages.forEach(page=>pdfNewDoc.addPage(page));
        const newpdf= await pdfNewDoc.save();
        //save new pdf and create a new pdf file in the directory
        return newpdf;
    }
    const onFileSelected = async (e) => {
        const fileList = e.target.files;
        console.log(fileList);
        if (fileList?.length > 0) {
          const pdfArrayBuffer = await readFileAsync(fileList[0]);
          const newPdfDoc = await extractPdfPage(pdfArrayBuffer);
          renderPdf(newPdfDoc);

        }
    };



  return (
    <>
        <h1>Hello World</h1>
        <input type="file" id="file-selector" accept=".pdf" onChange={onFileSelected} />
        <iframe
            style={{display: "block", width: "100vw", height: "90vh"}}
            title="PdfFrame"
            src={pdfFileData}
            type="application/pdf"
        ></iframe>
    </>
  );
}

export default App;
