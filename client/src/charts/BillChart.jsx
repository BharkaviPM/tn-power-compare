import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BillChart = ({ oldBill, newBill }) => {

  const data = [
    {
      name: "Old Bill",
      amount: oldBill,
    },
    {
      name: "New Bill",
      amount: newBill,
    },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg mt-6">
      <h2 className="text-xl font-bold mb-4">
        Bill Comparison
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BillChart;