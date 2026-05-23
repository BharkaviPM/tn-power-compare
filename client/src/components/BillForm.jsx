import { useState } from "react";
import axios from "axios";

function BillForm() {
  const [units, setUnits] = useState("");
  const [result, setResult] = useState(null);

  const calculateBill = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/calculate",
        {
          units: Number(units),
        }
      );

      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
      
      <h2 className="text-2xl font-bold mb-6 text-center">
        Electricity Bill Calculator
      </h2>

      <input
        type="number"
        placeholder="Enter Units Consumed"
        value={units}
        onChange={(e) => setUnits(e.target.value)}
        className="w-full p-4 border rounded-xl mb-4"
      />

      <button
        onClick={calculateBill}
        className="w-full bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700"
      >
        Compare Bills
      </button>

      {result && (
        <div className="mt-8 space-y-4">

          <div className="bg-red-100 p-4 rounded-xl">
            <h3 className="font-bold text-red-700">
              Old Bill
            </h3>

            <p className="text-2xl">
              ₹ {result.oldBill}
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-xl">
            <h3 className="font-bold text-green-700">
              New Bill
            </h3>

            <p className="text-2xl">
              ₹ {result.newBill}
            </p>
          </div>

          <div className="bg-blue-100 p-4 rounded-xl">
            <h3 className="font-bold text-blue-700">
              Savings
            </h3>

            <p className="text-2xl">
              ₹ {result.savings}
            </p>
          </div>

        </div>
      )}
    </div>
  );
}

export default BillForm;