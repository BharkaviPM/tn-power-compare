import { useState } from "react";

import Tesseract from "tesseract.js";

const OCRScanner = () => {

  const [image, setImage] =
    useState(null);

  const [text, setText] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  const extractText = async () => {

    if (!image) return;

    setLoading(true);

    const {
      data: { text },
    } = await Tesseract.recognize(
      image,
      "eng"
    );

    setText(text);

    setLoading(false);
  };


  return (

    <div className="bg-zinc-900/70 border border-zinc-800 rounded-[40px] p-8 mt-20">

      <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">

        OCR Bill Scanner

      </h2>


      <p className="text-gray-400 mt-4 text-xl">

        Upload your EB bill image and extract details automatically.

      </p>



      <input
        type="file"
        onChange={(e) =>
          setImage(e.target.files[0])
        }
        className="mt-8"
      />



      <button
        onClick={extractText}
        className="mt-8 bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl block"
      >

        {
          loading
            ? "Scanning..."
            : "Extract Bill Text"
        }

      </button>



      {
        text && (

          <div className="mt-10 bg-black/40 rounded-3xl p-8 border border-zinc-800 whitespace-pre-wrap">

            {text}

          </div>

        )
      }

    </div>
  );
};

export default OCRScanner;