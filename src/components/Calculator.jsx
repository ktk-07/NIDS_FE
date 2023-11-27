import { useState,useEffect,useRef } from "react";
import computeViaLocally from "../../lib/onermapp/computeViaLocally";

const Calculator = ()=>{
    const numArr = Array.from({length: 11})

    const weightRef = useRef(null)
    const repsRef = useRef(null)
    const exerciseRef = useRef(null)
    const lbsRef = useRef(null)
    const kiloRef = useRef(null)

    // const [operand1, setOperand1] = useState("")
    // const [operand2, setOperand2] = useState("")
    // //if 1 thenoperan 1 if not then operand 2
    // const [whichOperand, setWhichOperand] = useState(1)
    const [computationRes, setComputationRes] = useState(0);
    const [checkRadio, setCheckRadio] = useState(true);


    //     if(op)
    // }
    return(<>
        <div class="w-3/4 h-full flex justify-center items-center text-white ">
            <div class="border w-3/4 h-5/6 relative flex flex-col justify-center items-center bg-black text-white ">
                <div class="w-fit h-1/6 flex justify-center items-center">
                    <h1 class="font-bold text-2xl   ">One Rep Max Calculator</h1>
                </div>

                <div class="w-full h-5/6 flex justify-center items-center text-white ">
                    <div class=" w-full h-full flex flex-col justify-evenly items-center">
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
                        <div class="flex flex-col justify-start items-start  w-2/4 ">
                            <label>Input Weight in Selected Weight unit</label>
                            <input ref={weightRef} type="number" name="weight" class="text-black"/>
                        </div>
                        <div class="flex flex-col justify-start items-start  w-2/4 ">
                            <label>Input No Of Reps</label>
                            <input ref={repsRef} type="number" name="reps" class="text-black"/>
                        </div>
                        <div class="flex flex-col justify-start items-start  w-2/4 ">
                            <label>Exercise:</label>
                            <select ref={exerciseRef} name="TypeOfExer" class="text-black">
                                <option value="Bench Press">Bench Press</option>
                                <option value="Squat">Squat</option>
                                <option value="Deadlift">Deadlift</option>
                            </select>
                        </div>
                        <div class="w-2/4">
                            <div>
                                <h3>Choose Weight unit</h3>
                            </div>
                            <div>
                                <input type="radio" ref={lbsRef} name="weight" value="pounds" checked/>
                                <label for="age1">Pounds (lb)</label><br></br>
                                <input type="radio" ref={kiloRef} name="weight" value="kilos"/>
                                <label for="age2">Kilograms (kg)</label><br></br>  
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div class="w-1/4 h-5/6">
                        <div class="h-2/4">Result of computation: {computationRes}</div>
                        <div class= "h-2/4">
                            <button class="border hover:bg-lime-500" onClick={(e)=>{
                                let output = computeViaLocally(weightRef.current,repsRef.current,exerciseRef.current,lbsRef.current,kiloRef.current);
                                if(output.isComputed){
                                    setComputationRes(output.outputRes)
                                }else{
                                    setComputationRes(output.outputRes)
                                    alert("The value cannot be computed")
                                }
                            }}>Calcuate</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}

export default Calculator;