import { Link } from "react-router-dom";

const Slabs = () => {

  return (

    <div className="min-h-screen bg-black text-white relative overflow-hidden">


      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-700 opacity-30 blur-[140px]"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500 opacity-20 blur-[140px]"></div>

      </div>



      {/* NAVBAR */}

      <nav className="relative z-20 flex justify-center pt-6 px-4">

        <div className="bg-black/60 border border-zinc-800 backdrop-blur-xl rounded-full px-8 py-4 flex items-center gap-8 shadow-2xl">

          <Link
            to="/"
            className="text-gray-300 hover:text-blue-400 font-semibold"
          >
            Home
          </Link>

          <Link
            to="/slabs"
            className="text-yellow-400 font-bold"
          >
            Slabs
          </Link>

        </div>

      </nav>



      {/* TITLE */}

      <div className="relative z-10 text-center mt-16 px-6">

        <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">

          Tariff Slabs

        </h1>

        <p className="text-gray-400 text-2xl mt-6 max-w-4xl mx-auto">

          Compare the previous and revised
          Tamil Nadu electricity tariff structure
          officially announced under domestic
          LT-1A category.

        </p>

      </div>



      {/* BELOW 500 */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 mt-24">

        <h2 className="text-5xl font-black text-center mb-14">

          Consumption Below 500 Units

        </h2>



        <div className="grid md:grid-cols-2 gap-10">


          {/* OLD */}

          <div className="bg-zinc-900/80 border border-zinc-800 rounded-[40px] overflow-hidden backdrop-blur-xl">

            <div className="p-8 border-b border-zinc-800 bg-gradient-to-r from-blue-500/20 to-cyan-500/10">

              <h2 className="text-5xl font-black text-cyan-300">

                Old Tariff

              </h2>

              <p className="text-gray-400 mt-3">
                Previous Government • 100 Units Free
              </p>

            </div>


            <div>

              {
                [
                  ["0 - 100", "Free"],
                  ["101 - 200", "₹2.35 / unit"],
                  ["201 - 400", "₹4.70 / unit"],
                  ["401 - 500", "₹6.30 / unit"],
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex justify-between items-center px-10 py-8 border-b border-zinc-800"
                  >

                    <h3 className="text-3xl font-bold">

                      {item[0]}

                    </h3>

                    <p className={`text-3xl font-black ${
                      item[1] === "Free"
                        ? "text-green-400"
                        : "text-cyan-300"
                    }`}>

                      {item[1]}

                    </p>

                  </div>

                ))
              }

            </div>

          </div>



          {/* NEW */}

          <div className="bg-zinc-900/80 border border-zinc-800 rounded-[40px] overflow-hidden backdrop-blur-xl">

            <div className="p-8 border-b border-zinc-800 bg-gradient-to-r from-green-500/20 to-blue-500/10">

              <h2 className="text-5xl font-black text-green-300">

                Revised Tariff

              </h2>

              <p className="text-gray-400 mt-3">
                Current Government • 200 Units Free
              </p>

            </div>


            <div>

              {
                [
                  ["0 - 200", "Free"],
                  ["201 - 400", "₹4.70 / unit"],
                  ["401 - 500", "₹6.30 / unit"],
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex justify-between items-center px-10 py-8 border-b border-zinc-800"
                  >

                    <h3 className="text-3xl font-bold">

                      {item[0]}

                    </h3>

                    <p className={`text-3xl font-black ${
                      item[1] === "Free"
                        ? "text-green-400"
                        : "text-yellow-300"
                    }`}>

                      {item[1]}

                    </p>

                  </div>

                ))
              }

            </div>

          </div>

        </div>

      </section>



      {/* ABOVE 500 */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 mt-28">

        <h2 className="text-5xl font-black text-center mb-14">

          Consumption Above 500 Units

        </h2>


        <div className="bg-zinc-900/80 border border-zinc-800 rounded-[40px] overflow-hidden backdrop-blur-xl">

          <div className="grid grid-cols-2 bg-zinc-950">

            <div className="p-8 border-r border-zinc-800">

              <h2 className="text-4xl font-black text-cyan-300">

                Units

              </h2>

            </div>

            <div className="p-8">

              <h2 className="text-4xl font-black text-green-300">

                Rate

              </h2>

            </div>

          </div>


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
                className="grid grid-cols-2 border-t border-zinc-800"
              >

                <div className="p-8 border-r border-zinc-800 text-3xl font-bold">

                  {item[0]}

                </div>

                <div className={`p-8 text-3xl font-black ${
                  item[1] === "Free"
                    ? "text-green-400"
                    : "text-yellow-300"
                }`}>

                  {item[1]}

                </div>

              </div>

            ))
          }

        </div>

      </section>



      {/* EXPLANATION */}

      <section className="relative z-10 max-w-6xl mx-auto px-6 mt-28">

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-[40px] p-10 backdrop-blur-xl">

          <h2 className="text-5xl font-black mb-10 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">

            Important Billing Explanation

          </h2>


          <div className="space-y-8 text-xl text-gray-300 leading-relaxed">

            <p>

              Tamil Nadu electricity billing follows
              a telescopic slab system for domestic
              LT-1A consumers.

            </p>

            <p>

              Under the previous tariff system,
              consumers received 100 free units
              for bi-monthly usage below 500 units.

            </p>

            <p>

              Under the revised tariff policy,
              consumers now receive 200 free units
              if total consumption remains within
              500 units.

            </p>

            <p>

              If total consumption crosses
              500 units, billing automatically
              changes to the “Above 500 Units”
              slab system and only 100 free units
              continue.

            </p>

            <p>

              Due to telescopic billing,
              crossing 500 units can sharply
              increase the total electricity bill.

            </p>

          </div>

        </div>

      </section>



      {/* FOOTER */}

      <footer className="relative z-10 text-center py-16 text-gray-500">

        <p className="text-lg">
          TN Power Compare • React + Node.js
        </p>

        <p className="mt-3">
          For official tariff information visit
          TANGEDCO / TNERC
        </p>

      </footer>

    </div>
  );
};

export default Slabs;