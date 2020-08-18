let calculadora = true
let sidebar = false

const calcular = function() {
    if(document.getElementById("nome").value  && document.getElementById("valorHora").value && document.getElementById("horasTrabalhadas").value) {
        let valorHora = document.getElementById("valorHora").value
        let horasTrabalhadas = document.getElementById("horasTrabalhadas").value
        let salarioBruto = valorHora * horasTrabalhadas
        let irrfValor = 0
        let gratificacao = 0
        let salarioLiquido = 0
        let numReal = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
            currencyDisplay: "symbol"
        })
        document.getElementById("salarioBruto").value = numReal.format(salarioBruto)

        if(salarioBruto <= 1903.98) {
            document.getElementById("irrfList").value = "Menor ou igual a R$1.903,98"
            document.getElementById("aliquotaSelect").value = "Isento"
            document.getElementById("valorIrrf").value = numReal.format(salarioBruto)
            
        } else if(salarioBruto > 1903.98 && salarioBruto <= 2826.65) {
            document.getElementById("irrfList").value = "Entre R$1.903,99 e R$2.826,65"
            document.getElementById("aliquotaSelect").value = "7,5 %"
            irrfValor = salarioBruto * 0.075
            document.getElementById("valorIrrf").value = numReal.format(irrfValor)
        } else if(salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
            document.getElementById("irrfList").value = "Entre R$2.826,66 e R$3.751,05"
            document.getElementById("aliquotaSelect").value = "15,0 %"
            irrfValor = salarioBruto * 0.15
            document.getElementById("valorIrrf").value = numReal.format(irrfValor)
        } else if(salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
            document.getElementById("irrfList").value = "Entre R$3.751,06 e R$4.664,68"
            document.getElementById("aliquotaSelect").value = "22,5 %"
            irrfValor = salarioBruto * 0.225
            document.getElementById("valorIrrf").value = numReal.format(irrfValor)
        } else if(salarioBruto > 4664.68) {
            document.getElementById("irrfList").value = "Maior ou igual a R$4.664,68"
            document.getElementById("aliquotaSelect").value = "27,5 %"
            irrfValor = salarioBruto * 0.275
            document.getElementById("valorIrrf").value = numReal.format(irrfValor)
        } if(horasTrabalhadas > 160) {
            gratificacao = salarioBruto * 0.15
            document.getElementById("gratificacao").value = numReal.format(gratificacao)
        }
        salarioLiquido = salarioBruto + gratificacao - irrfValor
        document.getElementById("salarioLiquido").value = numReal.format(salarioLiquido)
        msgSucesso()
    }
    else{
        msgErro()
    }
}

const limpar = function() {
    document.getElementById("nome").value = null
    document.getElementById("valorHora").value = null
    document.getElementById("horasTrabalhadas").value = null
    document.getElementById("salarioBruto").value = null
    document.getElementById("irrfList").value = "Menor ou igual a R$1.903,98";
    document.getElementById("aliquotaSelect").value = "Isento"
    document.getElementById("valorIrrf").value = null
}

const msgErro = function() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Preencha os campos corretamente'
      })
}

const msgSucesso = function() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Seu cálculo foi realizado com sucesso'
      })
}




const abrirCalcSal = function() {
    if (calculadora == false) {
        document.getElementById("containerCalc").hidden=false
        calculadora = true
    } else {
        document.getElementById("containerCalc").hidden=true
        calculadora = false
    }   
}
