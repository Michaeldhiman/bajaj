import React from 'react';

const ResultDisplay = ({ result, error }) => {
    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
            </div>
        );
    }

    if (!result) return null;

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Result</h3>
            
            <div className="mb-4">
                <span className="font-bold text-gray-700">Status: </span>
                <span className={result.is_success ? "text-green-600 font-bold" : "text-red-600"}>
                    {result.is_success ? "Success" : "Failed"}
                </span>
            </div>

            <div className="mb-4">
                <span className="font-bold text-gray-700">Official Email: </span>
                <span className="text-gray-600">{result.official_email}</span>
            </div>

            <div className="bg-gray-100 p-4 rounded">
                <span className="font-bold text-gray-700 block mb-2">Data: </span>
                <pre className="whitespace-pre-wrap text-sm text-gray-800">
                    {JSON.stringify(result.data, null, 2)}
                </pre>
            </div>
        </div>
    );
};

export default ResultDisplay;
