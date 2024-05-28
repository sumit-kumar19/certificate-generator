const generatePDF = async(name)=>{
    const { PDFDocument, rgb } = PDFLib;
    const exBytes = await fetch("./certi.pdf").then((res) => {
        return res.arrayBuffer();
      });
      const exFont = await fetch("./GreatVibes-Regular.ttf").then((res) => {
        return res.arrayBuffer();
      });
    const pdfDoc = await PDFDocument.load(exBytes);
    pdfDoc.registerFontkit(fontkit);
    const myFont = await pdfDoc.embedFont(exFont);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    firstPage.drawText(name, {
      x: 370,
      y: 280,
      size: 45,
      font: myFont,
      color: rgb(0, 0, 0),
    });
    const uri = await pdfDoc.saveAsBase64({ dataUri: true });
    const pdf = document.getElementById("pdf");
    return uri.toString();
    ///pdf.src = uri;
    // saveAs(uri, "certificate.pdf");
  } 
  
