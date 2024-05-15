import React, { useState } from "react";
import "./home.css";

function Home(){

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState();
    const [bool, setBool] = useState(false);
    const [halfString, setHalfString] = useState("");

    const handleNumber = (e) =>
    {
        let num = "";
        if(!bool)
        {
            num = num1;
            num += e.target.value;
            document.getElementById("inputField").value = num;
            setNum1(num);
        } 
        else
        {
            let num = num2;
            num += e.target.value;
            setNum2(num);
            document.getElementById("inputField").value = halfString + num;
        }
    }


    const handleOperator = (e) => 
    {
        if(e.target.value != "=")
        {
            let str = num1;
            str += e.target.value;
            document.getElementById("inputField").value = str;
            setHalfString(str);
            setOperator(e.target.value);
            setBool(true);
        }
        else
        {
            if(num1.length == 0 || num2.length == 0)
            {
                document.getElementById("inputField").value = "Syntax Error";
            }
            else if(operator == "+")
            {
                document.getElementById("inputField").value = parseFloat(num1) + parseFloat(num2);
                setResult(parseFloat(num1) + parseFloat(num2));
                setNum1(parseFloat(num1) + parseFloat(num2));
                setNum2("");
            }
            else if(operator == "-")
            {
                document.getElementById("inputField").value = parseFloat(num1) - parseFloat(num2);
                setResult(parseFloat(num1) - parseFloat(num2));
                setNum1(parseFloat(num1) - parseFloat(num2));
                setNum2("");
            }
            else if(operator == "*")
            {
                document.getElementById("inputField").value = parseFloat(num1) * parseFloat(num2);
                setResult(parseFloat(num1) * parseFloat(num2));
                setNum1(parseFloat(num1) * parseFloat(num2));
                setNum2("");
            }
            else if(operator == "/")
            {
                document.getElementById("inputField").value = parseFloat(num1) / parseFloat(num2);
                setResult(parseFloat(num1) / parseFloat(num2));
                setNum1(parseFloat(num1) / parseFloat(num2));
                setNum2("");
            }
        }
    }

    const handleClear = (e) =>
    {
        setNum1("");
        setNum2("");
        setOperator("");
        setBool(false);
        document.getElementById("inputField").value = "";
    }

    return(
        <div className="home">
            <div className="calculator">
                <div className="displayRow">
                <div className="display">
                    <input type="text" className="displayInput" id="inputField" disabled/>
                </div>
                <button className="clear" onClick={handleClear}>C</button>
            </div>
            <div className="firstRow">
                <button className="one" onClick={handleNumber} value={"1"}>1</button>
                <button className="two" onClick={handleNumber} value={"2"}>2</button>
                <button className="three" onClick={handleNumber} value={"3"}>3</button>
                <button className="div" onClick={handleOperator} value={"/"}>/</button>
            </div>

            <div className="secondRow">
                <button className="four" onClick={handleNumber} value={"4"}>4</button>
                <button className="five" onClick={handleNumber} value={"5"}>5</button>
                <button className="six" onClick={handleNumber} value={"6"}>6</button>
                <button className="sub" onClick={handleOperator} value={"-"}>-</button>
            </div>

            <div className="thirdRow">
                <button className="seven" onClick={handleNumber} value={"7"}>7</button>
                <button className="eight" onClick={handleNumber} value={"8"}>8</button>
                <button className="nine" onClick={handleNumber} value={"9"}>9</button>
                <button className="sum" onClick={handleOperator} value={"+"}>+</button>
            </div>

            <div className="fourthRow">
                <button className="dot" onClick={handleNumber} value={"."}>.</button>
                <button className="zero" onClick={handleNumber} value={"0"}>0</button>
                <button className="eq" onClick={handleOperator} value={"="}>=</button>
                <button className="mul" onClick={handleOperator} value={"*"}>*</button>
            </div>
            </div>
        </div>
    );
}

export default Home;