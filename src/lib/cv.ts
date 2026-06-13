// Currículo servido em /public — link único usado pelo hero e pela paleta de comandos.
export const CV_URL = "/jonas-almeida-cv.pdf";
export const CV_FILENAME = "Jonas-Almeida-CV.pdf";

export function downloadCV(): void {
  const link = document.createElement("a");
  link.href = CV_URL;
  link.download = CV_FILENAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
