export const TripDetailsCard = ({ details }) => {
  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md bg-white">
      {Object.entries(details).map(([key, value]) => (
        <div key={key} className="mb-2">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            {key.replace(/([A-Z])/g, " $1")}
          </label>
          <input
            value={value}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
        </div>
      ))}
    </div>
  );
};
