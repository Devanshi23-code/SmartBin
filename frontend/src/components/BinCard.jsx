export default function BinCard({ id, location, fill }) {

  let color = "bg-green-500";
  let status = "OK";

  if (fill > 90) {
    color = "bg-red-500";
    status = "FULL";
  } else if (fill > 70) {
    color = "bg-yellow-400";
    status = "NEARLY FULL";
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-4">

      {/* Top */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-gray-800">
            Bin {id}
          </h3>
          <p className="text-gray-500 text-sm">
            {location}
          </p>
        </div>

        <span className={`${color} text-white px-3 py-1 rounded-full text-xs`}>
          {status}
        </span>
      </div>

      {/* Progress */}
      <div className="mt-3">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className={`${color} h-2 rounded-full`}
            style={{ width: `${fill}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {fill}% full
        </p>
      </div>

      {/* Button */}
      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        View Details
      </button>

    </div>
  );
}