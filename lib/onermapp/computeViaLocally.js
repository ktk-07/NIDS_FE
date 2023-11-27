//Return True if computed
//Return false if cannot be computed
export default function computeViaLocally(weightTag,repsTag,exerTag,lbsTag,kiloTag){
    let computedVal = {
        outputRes:0,
        isComputed:false
    }

    if(weightTag.value == "" || repsTag.value == ""){
        return computedVal;
    }

    let oneRM = Number(weightTag.value) * (1 + (0.025 * Number(repsTag.value)))
    computedVal.isComputed = true
    computedVal.outputRes = `Your one rep max for ${exerTag.value} is ${oneRM} ${lbsTag.checked ? "lbs" : "kg" }`
    return computedVal
}