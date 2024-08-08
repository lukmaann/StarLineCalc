declare module 'html2pdf.js' {
    interface Html2PdfOptions {
        margin?: number | string;
        filename?: string;
        image?: { type: string; quality: number };
        html2canvas?: object;
        jsPDF?: {
            unit?: string;
            format?: string | string[];
            orientation?: string;
        };
    }

    function html2pdf(): {
        from(element: HTMLElement): {
            set(options: Html2PdfOptions): any;
            save(): void;
        };
    }

    export default html2pdf;
}
