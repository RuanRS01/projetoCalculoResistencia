const encontrarResistencia = (ddp, intensidade) => {
    const valor = ddp / intensidade
    return valor.toFixed(2)
}
const encontrarIntensidade = (potenciaDissipada, ddp) => {
    const valor = potenciaDissipada / ddp
        return valor.toFixed(2)
    }
    
const encontrarPotenciaDissipada = (ddp, intensidade) => {
        const valor = ddp * intensidade
        return valor.toFixed(2)
    }
    
const encontrarDiferencaDePotencial = (resistencia, intensidade) => {
        const valor = resistencia * intensidade
        return valor.toFixed(2)
    }
    
const resistencia = document.querySelector('#resistencia')
const ddp = document.querySelector('#ddp')
const intensidade = document.querySelector('#intensidade')
const potencia = document.querySelector('#potencia')


const resultado = document.querySelector('#resultado')

const calcular = document.querySelector('#calcular')

calcular.addEventListener('click', () => {

const valorResistencia = Number(resistencia.value)
const valorDdp = Number(ddp.value)
const valorIntensidade = Number(intensidade.value)
const valorPotencia = Number(potencia.value)

    if (valorDdp && valorIntensidade) {
        resultado.innerHTML = encontrarResistencia(valorDdp, valorIntensidade)
    }
})

