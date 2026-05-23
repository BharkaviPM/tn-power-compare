const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// OLD SYSTEM
// 100 units free

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



// NEW SYSTEM
// 200 units free up to 500 units

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



app.post("/calculate", (req, res) => {

  const { units } = req.body;

  const oldBill =
    calculateOldBill(units);

  const newBill =
    calculateNewBill(units);

  const savings =
    oldBill - newBill;

  const percentage =
    oldBill > 0
      ? (
          (savings / oldBill) *
          100
        ).toFixed(1)
      : 0;

  res.json({
    units,
    oldBill,
    newBill,
    savings,
    percentage,
  });
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});