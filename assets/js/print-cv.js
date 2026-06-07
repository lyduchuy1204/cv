/**
 * print-cv.js
 * Triggers the browser's print dialog with a custom file name
 * suggested in the "Save as PDF" output. Bound to the
 * "Download PDF" button in index.html.
 */
function downloadPDF() {
    const originalTitle = document.title;
    document.title = 'CV-LyDucHuy-DevOpsEngineer';
    window.print();
    document.title = originalTitle;
}
