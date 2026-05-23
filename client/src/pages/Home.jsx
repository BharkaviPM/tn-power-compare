import { useState } from "react";

import API from "../services/api";
import BillChart from "../charts/BillChart";

import oldCM from "../assets/old-cm.png";
import newCM from "../assets/new-cm.png";

import { generateInsight } from "../utils/aiInsights";

import ApplianceCalculator from "../components/ApplianceCalculator";
import OCRScanner from "../components/OCRScanner";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import ThemeToggle from "../components/ThemeToggle";
import VoiceChatbot from "../components/VoiceChatbot";

const Home = () => {

  const [units, setUnits] = useState("");

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const [language, setLanguage] =
    useState("english");

  const [activeTab, setActiveTab] =
    useState("home");

  const [darkMode, setDarkMode] =
  useState(true);



  // BILL CALCULATION

  const calculateBill = async () => {

    if (!units) return;

    try {

      setLoading(true);

      const response = await API.post(
        "/calculate",
        {
          units: Number(units),
        }
      );

      setResult(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };



  // PDF DOWNLOAD

  const downloadPDF = async () => {

    const input =
      document.getElementById(
        "report-section"
      );

    const canvas =
      await html2canvas(input);

    const imgData =
      canvas.toDataURL("image/png");

    const pdf = new jsPDF();

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      210,
      120
    );

    pdf.save(
      "tn-power-compare-report.pdf"
    );
  };



  return (

    <div className={`min-h-screen overflow-hidden relative transition-all duration-500 ${
  darkMode
    ? "bg-black text-white"
    : "bg-gray-100 text-black"
}`}>


      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-700 opacity-30 blur-[140px]"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500 opacity-20 blur-[140px]"></div>

      </div>



      {/* NAVBAR */}

      <nav className="relative z-20 flex justify-center pt-6 px-4">

        <div className="bg-black/60 border border-zinc-800 backdrop-blur-xl rounded-full px-8 py-4 flex items-center gap-8 shadow-2xl">

          <div className="flex items-center gap-2">

            <span className="text-cyan-300 text-2xl">
              ⚡
            </span>

            <h1 className="text-2xl font-bold text-cyan-300">
              TNEB
            </h1>

          </div>



          {/* NAVIGATION */}

          <div className="hidden md:flex items-center gap-8">

            <button
              onClick={() =>
                setActiveTab("home")
              }
              className={`font-semibold transition ${
                activeTab === "home"
                  ? "text-cyan-300"
                  : "text-gray-400"
              }`}
            >
              Home
            </button>


            <button
              onClick={() =>
                setActiveTab("slabs")
              }
              className={`font-semibold transition ${
                activeTab === "slabs"
                  ? "text-cyan-300"
                  : "text-gray-400"
              }`}
            >
              Slabs
            </button>

          </div>



          {/* LANGUAGE */}

          <button
            onClick={() =>
              setLanguage(
                language === "english"
                  ? "tamil"
                  : "english"
              )
            }
            className="bg-zinc-800 hover:bg-zinc-700 transition px-5 py-2 rounded-full border border-zinc-700"
          >
            {
              language === "english"
                ? "தமிழ்"
                : "English"
            }
            <ThemeToggle
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>
          </button>

          <button
    onClick={() =>
      setActiveTab("appliance")
    }
    className={`font-semibold transition ${
      activeTab === "appliance"
        ? "text-cyan-300"
        : "text-gray-400"
    }`}
  >
    Appliance
  </button>


  <button
    onClick={() =>
      setActiveTab("ocr")
    }
    className={`font-semibold transition ${
      activeTab === "ocr"
        ? "text-cyan-300"
        : "text-gray-400"
    }`}
  >
    OCR
  </button>

        </div>

      </nav>





      {/* HOME PAGE */}

      {
        activeTab === "home" && (

          <>

            {/* HERO */}

            <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid xl:grid-cols-[1fr_1.2fr_1fr] gap-8 items-center">



              {/* LEFT IMAGE */}

              <div className="hidden xl:block">

                <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">

                  <img
                    src={oldCM}
                    alt="Old Tariff"
                    className="h-[500px] w-full object-cover"
                  />

                  <div className="bg-black/80 p-6 text-center">

                    <h2 className="text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-5xl font-black">
                      2021 - 2026
                    </h2>

                    <p className="text-cyan-300 text-2xl mt-2">
                      Previous Tariff
                    </p>

                  </div>

                </div>

              </div>





              {/* CENTER */}

              <div className="text-center lg:text-left">



                {/* BADGE */}

                <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-5 py-2 mb-6">

                  <span className="text-cyan-300">
                    ⚡
                  </span>

                  <p className="text-sm text-gray-300">

                    Tamil Nadu Smart Electricity Calculator

                  </p>

                </div>





                {/* TITLE */}

                <h1 className="text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-5xl md:text-6xl xl:text-4xl md:text-4xl md:text-7xl font-black leading-[0.95] tracking-tight">

                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">

                    TNEB Bill

                  </span>

                  <br />

                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">

                    Comparison

                  </span>

                  <br />

                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">

                    Calculator

                  </span>

                </h1>





                {/* SUBTITLE */}

                <p className="text-gray-300 text-xl md:text-2xl mt-8 leading-relaxed">

                  {
                    language === "english"

                      ? "Compare old and revised Tamil Nadu electricity tariff instantly and discover your savings under the latest subsidy policy."

                      : "பழைய மற்றும் புதிய தமிழ்நாடு மின்சார கட்டணத்தை உடனடியாக ஒப்பிட்டு உங்கள் சேமிப்பை அறியுங்கள்."
                  }

                </p>





                {/* INPUT */}

                <div className="mt-10 bg-zinc-900/70 border border-zinc-700 rounded-[32px] p-6 backdrop-blur-xl">

                  <input
                    type="number"
                    placeholder={
                      language === "english"
                        ? "Enter 2-month usage (units)"
                        : "2 மாத மின்சார பயன்பாடு"
                    }
                    value={units}
                    onChange={(e) =>
                      setUnits(e.target.value)
                    }
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-5 text-xl outline-none focus:border-cyan-300 transition"
                  />


                  <button
                    onClick={calculateBill}
                    className="w-full mt-6 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 text-black text-2xl font-bold rounded-2xl p-5"
                  >

                    {
                      loading
                        ? "Calculating..."
                        : "⚡ Calculate Savings"
                    }

                  </button>

                </div>

              </div>





              {/* RIGHT IMAGE */}

              <div className="hidden xl:block">

                <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">

                  <img
                    src={newCM}
                    alt="New Tariff"
                    className="h-[500px] w-full object-cover"
                  />

                  <div className="bg-black/80 p-6 text-center">

                    <h2 className="text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-5xl font-black">
                      2026+
                    </h2>

                    <p className="text-green-400 text-2xl mt-2">
                      Revised Tariff
                    </p>

                  </div>

                </div>

              </div>

            </section>





            {/* SMART DASHBOARD */}

            {
              result && (

                <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">


                  {/* TITLE */}

                  <div className="text-center mb-14">

                    <h2 className="text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">

                      Smart Energy Dashboard

                    </h2>

                    <p className="text-gray-400 text-xl mt-4">

                      AI-powered electricity analysis and smart tools

                    </p>

                  </div>





                  {/* GRID */}

                  <div className="grid lg:grid-cols-2 gap-10 items-start">



                    {/* LEFT */}

                    <div className="space-y-10">



                      {/* RESULT CARDS */}

                      <div
                        id="report-section"
                        className="grid md:grid-cols-2 gap-5"
                      >

                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

                          <p className="text-gray-400 text-lg">
                            Old Bill
                          </p>

                          <h2 className="text-4xl font-black mt-3">

                            ₹ {result.oldBill}

                          </h2>

                        </div>



                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

                          <p className="text-gray-400 text-lg">
                            New Bill
                          </p>

                          <h2 className="text-4xl font-black text-green-400 mt-3">

                            ₹ {result.newBill}

                          </h2>

                        </div>



                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

                          <p className="text-gray-400 text-lg">
                            Savings
                          </p>

                          <h2 className="text-4xl font-black text-cyan-300 mt-3">

                            ₹ {result.savings}

                          </h2>

                        </div>



                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

                          <p className="text-gray-400 text-lg">
                            Bill Reduced
                          </p>

                          <h2 className="text-4xl font-black text-green-400 mt-3">

                            {result.reductionPercentage}%

                          </h2>

                        </div>

                      </div>





                      {/* AI INSIGHT */}

                      <div className="bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-3xl p-8">

                        <h2 className="text-3xl font-bold text-cyan-300 mb-4">

                          ⚡ AI Smart Insight

                        </h2>

                        <p className="text-gray-300 text-xl leading-relaxed">

                          {
                            generateInsight(
                              result.units,
                              result.savings
                            )
                          }

                        </p>

                      </div>





                      {/* PDF BUTTON */}

                      <button
                        onClick={downloadPDF}
                        className="w-full bg-green-400 hover:bg-green-300 transition text-black font-black text-2xl py-5 rounded-3xl"
                      >

                        Download PDF Report

                      </button>

                    </div>





                    {/* RIGHT */}

                    <div className="space-y-10">



                      {/* CHART */}

                      <div className="bg-zinc-900/70 border border-zinc-800 rounded-[40px] p-6">

                        <BillChart
                          oldBill={result.oldBill}
                          newBill={result.newBill}
                        />

                      </div>

    

                    </div>

                  </div>

                </section>

              )
            }

          </>

        )
      }






      {/* SLABS SECTION */}

      {
        activeTab === "slabs" && (

          <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

            <div className="text-center">

              <h1 className="text-4xl md:text-4xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">

                {
  language === "english"
    ? "Tariff Slabs"
    : "மின்சார கட்டண பிரிவுகள்"
}

              </h1>

              <p className="text-gray-400 text-2xl mt-6">

                {
  language === "english"

    ? "Compare old and revised Tamil Nadu electricity tariff structure."

    : "பழைய மற்றும் புதிய தமிழ்நாடு மின்சார கட்டண அமைப்பை ஒப்பிடுங்கள்."
}

              </p>

            </div>





            <div className="grid md:grid-cols-2 gap-10 mt-20">



              {/* OLD */}

              <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] overflow-hidden">

                <div className="p-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/10">

                  <h2 className="text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-5xl font-black text-cyan-300">

                  {
  language === "english"
    ? "Old Tariff"
    : "பழைய கட்டணம்"
}

                  </h2>

                  <p className="text-gray-400 mt-3">
                    {
  language === "english"
    ? "100 Units Free"
    : "100 யூனிட் இலவசம்"
}
                  </p>

                </div>


                {
                  [
                    ["0 - 100", "Free"],
                    ["101 - 200", "₹2.35 / unit"],
                    ["201 - 400", "₹4.70 / unit"],
                    ["401 - 500", "₹6.30 / unit"],
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="flex justify-between px-10 py-8 border-t border-zinc-800"
                    >

                      <h3 className="text-3xl font-bold">

                        {item[0]}

                      </h3>

                      <p className="text-3xl font-black text-cyan-300">

                        {item[1]}

                      </p>

                    </div>

                  ))
                }

              </div>





              {/* NEW */}

              <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] overflow-hidden">

                <div className="p-8 bg-gradient-to-r from-green-500/20 to-blue-500/10">

                  <h2 className="text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-5xl font-black text-green-300">

                    {
  language === "english"
    ? "Revised Tariff"
    : "புதிய கட்டணம்"
}

                  </h2>

                  <p className="text-gray-400 mt-3">
                    {
  language === "english"
    ? "200 Units Free"
    : "200 யூனிட் இலவசம்"
}
                  </p>

                </div>


                {
                  [
                    ["0 - 200", "Free"],
                    ["201 - 400", "₹4.70 / unit"],
                    ["401 - 500", "₹6.30 / unit"],
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="flex justify-between px-10 py-8 border-t border-zinc-800"
                    >

                      <h3 className="text-3xl font-bold">

                        {item[0]}

                      </h3>

                      <p className="text-3xl font-black text-green-300">

                        {item[1]}

                      </p>

                    </div>

                  ))
                }

              </div>

            </div>





            {/* ABOVE 500 */}

            <div className="mt-24">

              <h2 className="text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-5xl font-black text-center mb-14">

                {
  language === "english"
    ? "Consumption Above 500 Units"
    : "500 யூனிட் மேல் பயன்பாடு"
}

              </h2>


              <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] overflow-hidden">

                {
                  [
                    ["0 - 100", "Free"],
                    ["101 - 400", "₹4.70 / unit"],
                    ["401 - 500", "₹6.30 / unit"],
                    ["501 - 600", "₹8.40 / unit"],
                    ["601 - 800", "₹9.45 / unit"],
                    ["801 - 1000", "₹10.50 / unit"],
                    ["Above 1000", "₹11.55 / unit"],
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="flex justify-between px-10 py-8 border-t border-zinc-800"
                    >

                      <h3 className="text-3xl font-bold">

                        {item[0]}

                      </h3>

                      <p className="text-3xl font-black text-yellow-300">

                        {item[1]}

                      </p>

                    </div>

                  ))
                }

              </div>

            </div>





            {/* BILLING INFO */}

            <div className="mt-24 bg-zinc-900/70 border border-zinc-800 rounded-[40px] p-10">

              <h2 className="text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-3xl md:text-5xl font-black mb-10 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">

                {
  language === "english"
    ? "Important Billing Explanation"
    : "முக்கிய கட்டண விளக்கம்"
}

              </h2>


              <div className="space-y-8 text-xl text-gray-300 leading-relaxed">

  {
    language === "english"
      ? (
        <>
          <p>
            Tamil Nadu electricity billing follows a telescopic slab system for domestic LT-1A consumers.
          </p>

          <p>
            Under the previous tariff system, consumers received 100 free units for bi-monthly usage below 500 units.
          </p>

          <p>
            Under the revised tariff policy, consumers now receive 200 free units if total consumption remains within 500 units.
          </p>

          <p>
            If total consumption crosses 500 units, billing automatically changes to the “Above 500 Units” slab system and only 100 free units continue.
          </p>

          <p>
            Due to telescopic billing, crossing 500 units can sharply increase the total electricity bill.
          </p>
        </>
      )

      : (
        <>
          <p>
            தமிழ்நாடு மின்சார கட்டணம் வீட்டு பயன்பாட்டிற்கு telescopic slab முறையில் கணக்கிடப்படுகிறது.
          </p>

          <p>
            பழைய கட்டண முறையில் 500 யூனிட்டிற்குள் பயன்படுத்தும் பயனர்களுக்கு 100 யூனிட் இலவசமாக வழங்கப்பட்டது.
          </p>

          <p>
            புதிய கட்டண முறையில் 500 யூனிட்டிற்குள் பயன்படுத்தினால் 200 யூனிட் இலவசமாக வழங்கப்படுகிறது.
          </p>

          <p>
            மொத்த பயன்பாடு 500 யூனிட்டை கடந்தால் “Above 500 Units” slab கட்டண முறை தானாக செயல்படும் மற்றும் 100 யூனிட் மட்டுமே இலவசமாகும்.
          </p>

          <p>
            இதனால் 500 யூனிட்டை கடந்தால் மின்சார கட்டணம் திடீரென அதிகரிக்கலாம்.
          </p>
        </>
      )
  }

</div>

            </div>

          </section>

        )
      }
      {/* AC */}
      {
  activeTab === "appliance" && (

    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-14">

        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">

          Appliance Usage Estimator

        </h1>

        <p className="text-gray-400 text-xl mt-5">

          Estimate monthly electricity consumption using appliance usage.

        </p>

      </div>


      <div className="max-w-4xl mx-auto">

        <ApplianceCalculator />

      </div>

    </section>

  )
}
{/*OCR*/}
{
  activeTab === "ocr" && (

    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-14">

        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">

          OCR Bill Scanner

        </h1>

        <p className="text-gray-400 text-xl mt-5">

          Upload your EB bill image and extract details automatically.

        </p>

      </div>


      <div className="max-w-4xl mx-auto">

        <OCRScanner />

      </div>

    </section>

  )
}



      
<VoiceChatbot
  setUnits={setUnits}
  calculateBill={calculateBill}
  floating={true}
/>
{/* FOOTER */}

      <footer className="relative z-10 text-center text-gray-500 py-10 border-t border-zinc-800 mt-10">

        <p>
          Powered by TN Power Compare • Built with React & Node.js
        </p>

        <p className="mt-2 text-sm">
          For official tariff details visit TANGEDCO / TNERC
        </p>

      </footer>

    </div>
  );
};

export default Home;