import { useState } from 'react';

function Calculator() {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [output, setOutput] = useState('');
    const [memory, setMemory] = useState(0);

    const handleAddition = () => {
        const sum = Number(firstValue) + Number(secondValue);
        setOutput(sum);
    };

    const handleSubtraction = () => {
        const difference = Number(firstValue) - Number(secondValue);
        setOutput(difference);
    };

    const handleMultiplication = () => {
        const product = Number(firstValue) * Number(secondValue);
        setOutput(product);
    };

    const handleDivision = () => {
        if (Number(secondValue) === 0) {
            setOutput('Error: Division by zero');
        } else {
            const quotient = Number(firstValue) / Number(secondValue);
            setOutput(quotient);
        }
    };

    const handleExponentiation = () => {
        const power = Math.pow(Number(firstValue), Number(secondValue));
        setOutput(power);
    };

    const handleClear = () => {
        setFirstValue('');
        setSecondValue('');
        setOutput('');
    };

    const handleEquals = () => {
        // The equals button can show the current output
        // or you could implement last operation repeat
        if (output !== '') {
            alert(`Result: ${output}`);
        }
    };

    const handleMemoryRecall = () => {
        // Load memory value into first value field
        setFirstValue(memory);
    };

    const handleMemoryStore = () => {
        // Store current output to memory
        if (output !== '') {
            setMemory(Number(output));
        }
    };

    return (
       <center><div style={{ border: '1px solid black', padding: '20px', width: '300px', textAlign: 'inherit' }}>
            <h2>Calculator</h2>
            
            <div>
                <label>
                    First Value: 
                    <input 
                        type="number" 
                        value={firstValue} 
                        onChange={(e) => setFirstValue(e.target.value)} 
                    />
                </label>
            </div>
            
            <br />
            
            <div>
                <label>
                    Second Value: 
                    <input 
                        type="number" 
                        value={secondValue} 
                        onChange={(e) => setSecondValue(e.target.value)} 
                    />
                </label>
            </div>

            <br />

            <div>
                <label>
                    Output: 
                    <input 
                        type="text" 
                        value={output} 
                        readOnly 
                    />
                </label>
            </div>

            <br />

            <div>
                <button onClick={handleAddition}>+</button>
                <button onClick={handleMultiplication}>×</button>
                <button onClick={handleDivision}>÷</button>
            </div>

            <br />

            <div>
                <button onClick={handleSubtraction}>-</button>
                <button onClick={handleExponentiation}>^</button>
                <button onClick={handleMemoryRecall}>M</button>
            </div>

            <br />

            <div>
                <button onClick={handleClear}>C</button>
                <button onClick={handleEquals}>=</button>
                <button onClick={handleMemoryStore}>MS</button>
            </div>

            <br />

            <div>
                <small>Memory: {memory}</small>
            </div>
        </div>
        </center>
    );
}

export default Calculator;