declare module 'html2pdf.js' {
    interface Html2PdfOptions {
        margin?: number | string;
        filename?: string;
        image?: { type: string; quality: number };
        html2canvas?: object;
        jsPDF?: object;
    }

    function html2pdf(element: HTMLElement, options?: Html2PdfOptions): void;

    export default html2pdf;
}
