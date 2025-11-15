import { useState } from 'react';

function Calculator() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState(null);

    const handleAddition = () => {
        const sum = Number(number1) + Number(number2);
        setResult({operation: 'Addition', value: sum});
    }

    const handleSubtraction = () => {
        const difference = Number(number1) - Number(number2);
        setResult({operation: 'Subtraction', value: difference});
    }

    const handleMultiplication = () => {
        const product = Number(number1) * Number(number2);
        setResult({operation: 'Multiplication', value: product});
    }

    const handleDivision = () => {
        if (Number(number2) === 0) {
            setResult({operation: 'Division', value: 'Cannot divide by zero'});
        } else {
            const quotient = Number(number1) / Number(number2);
            setResult({operation: 'Division', value: quotient});
        }
    };

    const handleExponentiation = () => {
        const power = Math.pow(Number(number1), Number(number2));
        setResult({operation: 'Exponentiation', value: power});
    };

    const handleModulus = () => {
        const modulus = Number(number1) % Number(number2);
        setResult({operation: 'Modulus', value: modulus});
    };

    return (
        <div>
            <h2>Calculator</h2>
            
            <div>
            <label>First value <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} /></label>
            </div>
            
            <div>
            <label>Second value <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} /></label>
            </div>

            <div>
                <button onClick={handleAddition}>+</button>
                <button onClick={handleSubtraction}>-</button>
                <button onClick={handleMultiplication}>*</button>
                <button onClick={handleDivision}>/</button>
                <button onClick={handleExponentiation}>^</button>
                <button onClick={handleModulus}>M</button>
            </div>
            
            {result && (
                <div>
                    <h3>Result of {result.operation}: {result.value}</h3>
                </div>
            )}
        </div>
    );
}

export default Calculator;