const displayData = (data)=>{
    result.value += data
}

const calculatorClear =()=>{
    result.value=""
}

const calculatorResult =()=>{
    if(result.value!=""){
        try{result.value= eval(result.value)}
        catch{
            result.value = "Error!!!"
        }
    }
}