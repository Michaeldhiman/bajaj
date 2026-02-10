import React, { useState } from 'react';
import OperationSelector from './components/OperationSelector';
import InputForm from './components/InputForm';
import ResultDisplay from './components/ResultDisplay';
import api from './api/api';

function App() {
  const [selectedOperation, setSelectedOperation] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOperationSelect = (operation) => {
    setSelectedOperation(operation);
    setResult(null);
    setError(null);
  };

  const handleSubmit = async (data) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await api.post('/bfhl', data);
      setResult(response.data);
    } catch (err) {
      const errorMessage = err.response?.data?.data || err.message || "An unexpected error occurred";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">BFHL API Frontend</h1>
            
            <OperationSelector 
              selected={selectedOperation} 
              onSelect={handleOperationSelect} 
            />

            {selectedOperation && (
              <InputForm 
                operation={selectedOperation} 
                onSubmit={handleSubmit}
                isLoading={isLoading}
              />
            )}

            <ResultDisplay result={result} error={error} />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
