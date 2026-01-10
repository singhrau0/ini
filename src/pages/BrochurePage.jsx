import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BrochurePage = () => {
  const { productId } = useParams();
  const [pdfError, setPdfError] = useState(false);
  
  // Product configurations
  const products = {
    'evalsea': {
      title: 'EvalSea Brochure',
      pdfFile: 'Evalsea_Brochure.pdf',
      downloadName: 'EvalSea-Institutional-Programme.pdf'
    },
    'posting-expert': {
      title: 'Posting Expert Brochure',
      pdfFile: 'PostingExpert_Brochure.pdf',
      downloadName: 'PostingExpert-Brochure.pdf'
    }
  };

  const product = products[productId];
  
  // If product not found, redirect to products page
  useEffect(() => {
    if (!product) {
      window.location.href = '/products';
    }
  }, [product]);

  if (!product) {
    return null;
  }

  const pdfUrl = `/brochures/${product.pdfFile}`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = product.downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md bg-black/90 border-b border-white/10 text-white z-50">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="INIKOLA Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="tracking-tight" style={{ fontWeight: 400 }}>
            INIKOLA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            to="/products"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition"
            style={{ fontWeight: 300 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Back to Products
          </Link>

          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm hover:bg-purple-700 transition flex items-center gap-2"
            style={{ fontWeight: 500 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
            Download
          </button>
        </div>
      </header>

      {/* PDF Viewer - Full Screen */}
      <div className="pt-16 h-screen bg-[#2A2A2A]">
        {!pdfError ? (
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full h-full"
            title={product.title}
            onError={() => setPdfError(true)}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center max-w-md px-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 mx-auto mb-4 text-red-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
              <h2 className="text-xl font-semibold mb-2">Unable to Display PDF</h2>
              <p className="text-white/60 mb-6">
                Your browser may not support inline PDF viewing. Please download the brochure to view it.
              </p>
              <button
                onClick={handleDownload}
                className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition inline-flex items-center gap-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrochurePage;