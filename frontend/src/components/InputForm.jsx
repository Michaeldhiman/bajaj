import React, { useState, useEffect } from 'react';

const InputForm = ({ operation, onSubmit, isLoading }) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue('');
    }, [operation]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let processedData;
        
        // Basic processing based on type
        if (operation === 'fibonacci') {
            const num = parseInt(inputValue);
            if (isNaN(num)) return alert("Please enter a valid number");
            processedData = { fibonacci: num };
        } else if (['prime', 'lcm', 'hcf'].includes(operation)) {
            try {
                // Expecting comma separated numbers
                const nums = inputValue.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
                if (nums.length === 0) return alert("Please enter valid comma-separated numbers");
                processedData = { [operation]: nums };
            } catch (err) {
                return alert("Invalid array format. Use comma separated numbers (e.g., 1, 2, 3)");
            }
        } else if (operation === 'AI') {
            if (!inputValue.trim()) return alert("Please enter a question");
            processedData = { AI: inputValue };
        }

        onSubmit(processedData);
    };

    const getPlaceholder = () => {
        switch(operation) {
            case 'fibonacci': return "Enter a number (e.g., 7)";
            case 'prime': 
            case 'lcm': 
            case 'hcf': return "Enter numbers separated by comma (e.g., 10, 15, 20)";
            case 'AI': return "Ask a question...";
            default: return "Select an operation first";
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-2">Input</label>
            <div className="flex gap-2">
                <input
                    type={operation === 'fibonacci' ? 'number' : 'text'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={getPlaceholder()}
                    disabled={!operation || isLoading}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button 
                    type="submit" 
                    disabled={!operation || isLoading}
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${(!operation || isLoading) ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isLoading ? 'Processing...' : 'Submit'}
                </button>
            </div>
        </form>
    );
};

export default InputForm;
