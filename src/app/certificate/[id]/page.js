'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import html2canvas from 'html2canvas';

export default function Certificate({ params }) {
  const [certificateUrl, setCertificateUrl] = useState(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      const response = await fetch(`https://gofr.dev/certificate-service/certificate/${params.id}`);
      const { data } = await response.json();
      setCertificateUrl(data.url);
    };

    fetchCertificate();
  }, [params.id]);

  const handleDownload = () => {
    const element = document.getElementById('certificate-container');
    if (!element) return;

    html2canvas(element).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'certificate.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  if (!certificateUrl) return <p className="text-center mt-10">Loading certificate...</p>;

  return (
    <div className="text-center mt-6">
      <button
        onClick={handleDownload}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Download Certificate
      </button>

      <div id="certificate-container">
        <Image
          className="mx-auto w-[90%] max-w-5xl"
          src={certificateUrl}
          alt="certificate"
          height={600}
          width={800}
          unoptimized
          priority
        />
      </div>
    </div>
  );
}
