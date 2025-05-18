export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>

      {/* PDF Viewer */}
      <iframe
        src="/CV.pdf"
        width="100%"
        height="800px"
        className="border rounded shadow"
      >
        {/* Fallback if iframe doesn't load */}
        <p>
          Your browser does not support PDF viewing. You can{" "}
          <a href="/CV.pdf" download className="text-blue-600 underline">
            download it here
          </a>
          .
        </p>
      </iframe>

      {/* Download Link */}
      <p className="mt-4">
        <a
          href="/CV.pdf"
          download
          className="text-blue-600 hover:underline"
        >
          📄 Download PDF
        </a>
      </p>
    </div>
  );
}
