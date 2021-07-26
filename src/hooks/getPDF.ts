import JsPDF from 'jspdf';
import html2Canvas from 'html2canvas';

const getA4 = (canvas: HTMLCanvasElement, title:string) => {
  const contentWidth = canvas.width;
  const contentHeight = canvas.height;
  const pageHeight = contentWidth / 592.28 * 841.89;
  let leftHeight = contentHeight;
  let position = 0;
  const imgWidth = 595.28;
  const imgHeight = 592.28 / contentWidth * contentHeight;
  const pageData = canvas.toDataURL('image/jpeg', 1.0);
  const PDF = new JsPDF('portrait', 'pt', 'a4');
  if (leftHeight < pageHeight) {
    PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
  } else {
    while (leftHeight > 0) {
      PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
      leftHeight -= pageHeight;
      position -= 841.89;
      if (leftHeight > 0) {
        PDF.addPage();
      }
    }
  }
  PDF.save(title + '.pdf');
}

const getNormal = (canvas: HTMLCanvasElement, scale: number, title: string) => {
  const contentWidth = canvas.width / scale;
  const contentHeight = canvas.height / scale;
  const pdf = new JsPDF('l', 'pt', [contentWidth, contentHeight]); //自定义宽高
  const pageData = canvas.toDataURL('image/jpeg', 1.0); //转换图片为dataURL
  pdf.addImage(pageData, 'JPEG', 0, 0, contentWidth, contentHeight); //添加图像到页面
  pdf.save(`${title}.pdf`);
}

const getPDF = (selector: HTMLElement | null, title?: string) => {
  if (selector === null) return;
  const height = selector.clientHeight;
  const width = selector.clientWidth;
  const scale = 3;

  const canvas = document.createElement("canvas"); // 生成canvas上下文
  const context = canvas.getContext("2d");
  canvas.width = width * scale;
  canvas.height = height * scale;
  context?.scale(scale, scale);

  html2Canvas(selector, {
    allowTaint: true,
    useCORS: true,
    scale:1,
    canvas
  }).then((canvas) => {
    title = title || "title" + Math.random().toString().slice(2, 8);

    /*
    getNormal(canvas, scale, title);
    */

    getA4(canvas, title);
    /*
    */
  })
}

export default getPDF;