import {useState} from "react";
export default function Counter() {
    const [counter, setCounter] = useState(0);
    const handleIncrease  = () =>{
        setCounter(counter + 1);
    }
    const handleDecrease = () =>{
        if(counter > 0){
            setCounter(counter - 1);
        }else{
            setCounter(0);
        }

    }

    const handleReset = () =>{
        setCounter(0);
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

            <div className="card shadow-lg p-4 text-center" style={{ width: "350px" }}>

                <h1 className="mb-4 fw-bold text-primary">
                    Counter : {counter}
                </h1>

                <div className="d-flex justify-content-center gap-3">

                    <button
                        className="btn btn-success px-4"
                        onClick={handleIncrease}
                    >
                        Inc
                    </button>

                    <button
                        className="btn btn-danger px-4"
                        onClick={handleDecrease}
                    >
                        Dec
                    </button>

                    <button
                        className="btn btn-secondary px-4"
                        onClick={handleReset}
                    >
                        Reset
                    </button>

                </div>

            </div>

        </div>

    )
}