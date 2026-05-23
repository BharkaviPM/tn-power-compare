import { useState } from "react";

const ApplianceCalculator = () => {

  const [hours, setHours] =
    useState(5);

  const [result, setResult] =
    useState(null);


  const calculateUsage = () => {

    const ac = 1.5 * hours * 30;

    const fan = 0.075 * 10 * 30;

    const fridge = 0.15 * 24 * 30;

    const tv = 0.1 * 5 * 30;

    const total =
      ac + fan + fridge + tv;

    setResult(total.toFixed(0));
  };


  return (

    <div className="bg-zinc-900/70 border border-zinc-800 rounded-[40px] p-8 mt-20">

      <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">

        Appliance Usage Estimator

      </h2>


      <p className="text-gray-400 mt-4 text-xl">

        Estimate monthly electricity usage based on appliance usage.

      </p>



      <div className="mt-10">

        <label className="text-xl text-gray-300">

          Daily AC Usage Hours

        </label>

        <input
          type="range"
          min="1"
          max="24"
          value={hours}
          onChange={(e) =>
            setHours(e.target.value)
          }
          className="w-full mt-4"
        />

        <p className="text-cyan-300 text-2xl mt-3">

          {hours} Hours / Day

        </p>

      </div>



      <button
        onClick={calculateUsage}
        className="mt-8 bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl"
      >

        Calculate Estimated Usage

      </button>



      {
        result && (

          <div className="mt-10 bg-black/40 rounded-3xl p-8 border border-zinc-800">

            <h3 className="text-3xl font-black text-green-400">

              Estimated Monthly Usage

            </h3>

            <p className="text-6xl font-black mt-5">

              {result} Units

            </p>

          </div>

        )
      }

    </div>
  );
};

export default ApplianceCalculator;