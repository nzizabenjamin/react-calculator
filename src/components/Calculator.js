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
        <center>
            <div style={{ border: '2px solid black', padding: '20px', width: '350px', marginTop: '50px', textAlign: 'left' }}>
                <h2 style={{ textAlign: 'center' }}>Calculator</h2>
                
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block' }}>
                        First Value:
                    </label>
                    <input 
                        type="number" 
                        value={firstValue} 
                        onChange={(e) => setFirstValue(e.target.value)}
                        style={{ padding: '5px', width: '100%', boxSizing: 'border-box' }}
                    />
                </div>
                
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block' }}>
                        Second Value:
                    </label>
                    <input 
                        type="number" 
                        value={secondValue} 
                        onChange={(e) => setSecondValue(e.target.value)}
                        style={{ padding: '5px', width: '100%', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block' }}>
                        Output:
                    </label>
                    <input 
                        type="text" 
                        value={output} 
                        readOnly
                        style={{ padding: '5px', width: '100%', boxSizing: 'border-box', backgroundColor: '#f0f0f0' }}
                    />
                </div>

                <div style={{ marginBottom: '10px', display: 'flex', gap: '5px' }}>
                    <button onClick={handleAddition} style={{ padding: '10px 20px', fontSize: '18px', flex: 1 }}>+</button>
                    <button onClick={handleMultiplication} style={{ padding: '10px 20px', fontSize: '18px', flex: 1 }}>×</button>
                    <button onClick={handleDivision} style={{ padding: '10px 20px', fontSize: '18px', flex: 1 }}>÷</button>
                </div>

                <div style={{ marginBottom: '10px', display: 'flex', gap: '5px' }}>
                    <button onClick={handleSubtraction} style={{ padding: '10px 20px', fontSize: '18px', flex: 1 }}>-</button>
                    <button onClick={handleExponentiation} style={{ padding: '10px 20px', fontSize: '18px', flex: 1 }}>^</button>
                    <button onClick={handleMemoryRecall} style={{ padding: '10px 20px', fontSize: '18px', flex: 1 }}>M</button>
                </div>

                <div style={{ marginBottom: '10px', display: 'flex', gap: '5px' }}>
                    <button onClick={handleClear} style={{ padding: '10px 20px', fontSize: '18px', flex: 1 }}>C</button>
                    <button onClick={handleEquals} style={{ padding: '10px 20px', fontSize: '18px', flex: 1 }}>=</button>
                    <button onClick={handleMemoryStore} style={{ padding: '10px 20px', fontSize: '18px', flex: 1 }}>MS</button>
                </div>

                <div style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
                    Memory: {memory}
                </div>
            </div>
        </center>
    );
}

export default Calculator;