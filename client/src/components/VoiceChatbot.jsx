import { useState } from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceChatbot = ({
  setUnits,
  calculateBill,
}) => {

  const [open, setOpen] =
    useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();



  // BROWSER CHECK

  if (
    !browserSupportsSpeechRecognition
  ) {

    return null;
  }



  // PROCESS VOICE

  const processVoiceCommand = () => {

    const numbers =
      transcript.match(/\d+/);

    if (numbers) {

      const detectedUnits =
        numbers[0];

      setUnits(detectedUnits);

      setTimeout(() => {

        calculateBill();

      }, 500);
    }
  };



  return (

    <div className="fixed bottom-6 right-6 z-50">

      {
        open && (

          <div className="w-[350px] bg-zinc-900 border border-zinc-800 rounded-[30px] p-6 shadow-2xl mb-4">

            <h2 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">

              AI Assistant

            </h2>

            <p className="text-gray-400 mt-3">

              Try saying:
              “350 units”

            </p>



            {/* BUTTONS */}

            <div className="mt-6 flex flex-wrap gap-3">

              <button
                onClick={() =>
                  SpeechRecognition.startListening({
                    continuous: true,
                    language: "en-IN",
                  })
                }
                className="bg-cyan-400 text-black font-bold px-4 py-3 rounded-2xl"
              >

                🎤 Start

              </button>



              <button
                onClick={() =>
                  SpeechRecognition.stopListening()
                }
                className="bg-red-400 text-black font-bold px-4 py-3 rounded-2xl"
              >

                Stop

              </button>



              <button
                onClick={resetTranscript}
                className="bg-yellow-400 text-black font-bold px-4 py-3 rounded-2xl"
              >

                Reset

              </button>

            </div>



            {/* TRANSCRIPT */}

            <div className="mt-6 bg-black/40 border border-zinc-800 rounded-3xl p-5">

              <p className="text-gray-400">

                Listening:
                {
                  listening
                    ? " YES"
                    : " NO"
                }

              </p>

              <p className="mt-4 text-lg text-white break-words">

                {
                  transcript ||
                  "Your voice input appears here..."
                }

              </p>

            </div>



            {/* PROCESS */}

            <button
              onClick={processVoiceCommand}
              className="mt-6 w-full bg-green-400 hover:bg-green-300 transition text-black font-bold px-6 py-4 rounded-2xl"
            >

              Process Command

            </button>

          </div>

        )
      }



      {/* FLOATING BOT */}

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-green-400 text-black text-3xl shadow-2xl hover:scale-110 transition"
      >

        🤖

      </button>

    </div>
  );
};

export default VoiceChatbot;