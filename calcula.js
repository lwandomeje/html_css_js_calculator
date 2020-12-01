function view(val){
    document.getElementById("show").value +=val
}
function equal(){
    let input = document.getElementById("show").value 
    let answer = eval(input)
    document.getElementById("show").value = answer
}
function clear(){
    document.getElementById('show').value = ''
}