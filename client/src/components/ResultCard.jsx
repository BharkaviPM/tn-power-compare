const ResultCard = ({
  title,
  value,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-lg font-semibold text-gray-600">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-3">
        ₹ {value}
      </p>
    </div>
  );
};

export default ResultCard;