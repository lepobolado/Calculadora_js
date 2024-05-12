function calcularNum(){
    let resultado = document.getElementById('resultado');


    document.getElementById('soma').addEventListener('click', function(){
        let promptNum1 = document.getElementById('num1').value;

        let promptNum2 = document.getElementById('num2').value;
    
        let num1 = parseFloat(promptNum1);
    
        let num2 = parseFloat(promptNum2);
    
        resultado.textContent = num1 + num2;
    })
    
    document.getElementById('sub').addEventListener('click', function(){
        let promptNum1 = document.getElementById('num1').value;

        let promptNum2 = document.getElementById('num2').value;
    
        let num1 = parseFloat(promptNum1);
    
        let num2 = parseFloat(promptNum2);
    
        resultado.textContent = num1 - num2;
    })
    
    document.getElementById('mult').addEventListener('click', function(){
        let promptNum1 = document.getElementById('num1').value;

        let promptNum2 = document.getElementById('num2').value;
    
        let num1 = parseFloat(promptNum1);
    
        let num2 = parseFloat(promptNum2);
    
        resultado.textContent = num1 * num2;
    })
    
    document.getElementById('div').addEventListener('click', function(){
        let promptNum1 = document.getElementById('num1').value;

        let promptNum2 = document.getElementById('num2').value;
    
        let num1 = parseFloat(promptNum1);
    
        let num2 = parseFloat(promptNum2);

        if (num2 == 0){
            resultado.textContent = 'Impossível dividir por 0'
        }
        
        else{
        resultado.textContent = num1 / num2;
        }
    })

}

console.log(calcularNum())
calcularNum();  