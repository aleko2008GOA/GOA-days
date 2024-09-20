import { dataToExport } from "./home";
import { Link } from 'react-router-dom'

function Weather(){
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-50 p-6">
          <div className="bg-white shadow-md rounded-lg p-6 w-72">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">{dataToExport[0]}°C</h1>
            <p className="text-xl mb-2">Feels like: {dataToExport[2]}°C</p>
            <p className="text-xl mb-6">Wind Speed: {dataToExport[1]} kph</p>
            <Link to="/" className="text-blue-500 hover:underline text-lg font-semibold"> Back to home </Link>
          </div>
        </div>
    );
}

export default Weather;