import { useState,useEffect } from "react";

const Calculator = ()=>{
    const numArr = Array.from({length: 11})
    // const computeViaApi = (operandOne,operandTwo,operator)=>{
    //     switch(operator){
    //         case "+":
    //         default:
    //     }
    // }

    const [operand1, setOperand1] = useState("")
    const [operand2, setOperand2] = useState("")
    //if 1 thenoperan 1 if not then operand 2
    const [whichOperand, setWhichOperand] = useState(1)

    const [computationRes, setComputationRes] = useState(0);
    // const computeViaLocally = (operandOne,operandTwo,operator)=>{
    //     switch(operator){
    //         case "+":
    //             break;
    //         case "-":
    //             break;
    //         case "/":
    //             break;
    //         case "*":
    //             break;
    //         default:
    //             console.log("Nothing to computee")
    //     }
    // }

    // const fillOperand = (nO)=>{
    //     const number = Number(nO);
    //     if(operand1 !=)
    //     if(operand1 == "" && whichOperand == 1){
    //         setOperand1(operand1 + nO)
    //     }

    //     if(op)
    // }
    return(<>
        <div class="w-3/4 h-full flex justify-center items-center text-white ">
            <div class="border w-3/4 h-5/6 relative flex flex-col justify-center items-center bg-black text-white ">
                <div class="w-fit h-1/6 flex justify-center items-center">
                    <h1 class="font-bold text-2xl   ">One Rep Max Calculator</h1>
                </div>

                <div class="w-full h-5/6 flex justify-center items-center text-white ">
                    <div class="">
                    {/* {numArr.map((val,idx)=>{
                        switch(idx){
                            case idx==0:
                                break;
                            case idx==0:
                                break;
                            default:
                                return
                        }
                        return(
                            <div class="border">
                                <div class="border rounded-full w-[21px] h-[21px] font p-6 text-lg  bg-gray-700  text-white flex justify-center items-center">
                                    <span>{idx + 1}</span>
                                </div>
                            </div>)
                        })} */}
                        {/* <input></input>
                        <input></input> */}
                        <div>
                            <label>Input Weight in Selected Weight unit</label>
                            <input type="number" name="weight" class="text-black"/>
                        </div>
                        <div>
                            <label>Exercise:</label>
                            <select name="cars" id="cars" class="text-black">
                                <option value="volvo">Bench Press</option>
                                <option value="saab">Squat</option>
                                <option value="opel">Deadlift</option>
                            </select>
                        </div>
                        <div>
                            <div>
                                <h3>Choose Weight unit</h3>
                            </div>
                            <div>
                                <input type="radio" id="age1" name="age" value="30"/>
                                <label for="age1">Pounds (lb)</label><br></br>
                                <input type="radio" id="age2" name="age" value="60"/>
                                <label for="age2">Kilograms (kg)</label><br></br>  
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div class="w-1/4 h-5/6">
                        <div class="h-1/4">Result of computation: {computationRes}</div>
                        <div>
                            <button class="border hover:bg-lime-500">Calcuate</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}

export default Calculator;