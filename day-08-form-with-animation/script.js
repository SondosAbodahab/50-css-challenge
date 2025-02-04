const movePlaceholder =(ElementId)=>{
    const input = document.querySelector(ElementId)
   
    let placeholder =  input.placeholder
    input.placeholder =''
   
    let index = 0
    const interval = setInterval(()=>{
        if(index < placeholder.length){
            input.placeholder += placeholder[index]
            index++
        }
        else{
            clearInterval(interval)
        }
    }, 100)
}