import React from 'react';

const operations = [
    { value: 'fibonacci', label: 'Fibonacci' },
    { value: 'prime', label: 'Prime Check' },
    { value: 'lcm', label: 'LCM' },
    { value: 'hcf', label: 'HCF' },
    { value: 'AI', label: 'AI Question' }
];

const OperationSelector = ({ selected, onSelect }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Select Operation</label>
            <select 
                value={selected} 
                onChange={(e) => onSelect(e.target.value)}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
                <option value="" disabled>Choose an operation...</option>
                {operations.map(op => (
                    <option key={op.value} value={op.value}>{op.label}</option>
                ))}
            </select>
        </div>
    );
};

export default OperationSelector;
