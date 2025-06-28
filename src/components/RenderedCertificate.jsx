'use client';

import React, { useEffect, useRef } from 'react';

const RenderedCertificate = ({ name = "Poonam Rao", event = "GoFr-SOC 2025", date = "June 2025" }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Title
    ctx.font = "30px serif";
    ctx.fillStyle = "#333333";
    ctx.fillText("Certificate of Participation", 220, 100);

    // Subtitle
    ctx.font = "20px sans-serif";
    ctx.fillText("This is proudly presented to", 270, 160);

    // Name
    ctx.font = "bold 28px sans-serif";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, 300, 210);

    // Event
    ctx.font = "20px serif";
    ctx.fillText(`For contributing in ${event}`, 240, 260);

    // Date
    ctx.fillText(`Date: ${date}`, 320, 320);
  }, [name, event, date]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'certificate.png';
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="text-center mt-6">
      <canvas ref={canvasRef} width={800} height={450} className="border" />
      <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Download Certificate
      </button>
    </div>
  );
};

export default RenderedCertificate;
