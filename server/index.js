const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());



/* =========================================
   OLD TARIFF SYSTEM
   100 Units Free
========================================= */

function calculateOldBill(units) {

  let amount = 0;

  if (units <= 100) {

    amount = 0;

  }

  else if (units <= 200) {

    amount =
      (units - 100) * 2.35;

  }

  else if (units <= 400) {

    amount =
      (100 * 2.35) +
      ((units - 200) * 4.70);

  }

  else if (units <= 500) {

    amount =
      (100 * 2.35) +
      (200 * 4.70) +
      ((units - 400) * 6.30);

  }

  else {

    amount =
      (300 * 4.70) +
      (100 * 6.30);

    if (units <= 600) {

      amount +=
        (units - 500) * 8.40;

    }

    else if (units <= 800) {

      amount +=
        (100 * 8.40) +
        ((units - 600) * 9.45);

    }

    else if (units <= 1000) {

      amount +=
        (100 * 8.40) +
        (200 * 9.45) +
        ((units - 800) * 10.50);

    }

    else {

      amount +=
        (100 * 8.40) +
        (200 * 9.45) +
        (200 * 10.50) +
        ((units - 1000) * 11.55);

    }
  }

  return Math.round(amount);
}



/* =========================================
   NEW TARIFF SYSTEM
   200 Units Free up to 500 Units
========================================= */

function calculateNewBill(units) {

  let amount = 0;

  if (units <= 200) {

    amount = 0;

  }

  else if (units <= 400) {

    amount =
      (units - 200) * 4.70;

  }

  else if (units <= 500) {

    amount =
      (200 * 4.70) +
      ((units - 400) * 6.30);

  }

  else {

    amount =
      (300 * 4.70) +
      (100 * 6.30);

    if (units <= 600) {

      amount +=
        (units - 500) * 8.40;

    }

    else if (units <= 800) {

      amount +=
        (100 * 8.40) +
        ((units - 600) * 9.45);

    }

    else if (units <= 1000) {

      amount +=
        (100 * 8.40) +
        (200 * 9.45) +
        ((units - 800) * 10.50);

    }

    else {

      amount +=
        (100 * 8.40) +
        (200 * 9.45) +
        (200 * 10.50) +
        ((units - 1000) * 11.55);

    }
  }

  return Math.round(amount);
}



/* =========================================
   API ROUTE
========================================= */

app.post("/calculate", (req, res) => {

  try {

    const { units } = req.body;

    if (!units || units < 0) {

      return res.status(400).json({
        error: "Invalid units",
      });

    }

    const oldBill =
      calculateOldBill(units);

    const newBill =
      calculateNewBill(units);

    const savings =
      oldBill - newBill;

    const reductionPercentage =
      oldBill > 0
        ? (
            (savings / oldBill) *
            100
          ).toFixed(1)
        : 0;

    res.status(200).json({

      units,

      oldBill,

      newBill,

      savings,

      reductionPercentage,

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      error:
        "Server error while calculating bill",
    });

  }

});



/* =========================================
   ROOT ROUTE
========================================= */

app.get("/", (req, res) => {

  res.send(
    "TN Power Compare Backend Running Successfully"
  );

});



/* =========================================
   SERVER
========================================= */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});