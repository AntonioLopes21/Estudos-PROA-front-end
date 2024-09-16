document.addEventListener('DOMContentLoaded', () => {
    function rodarCarrossel(carrossel) {
        const slides = carrossel.querySelectorAll('img')
        const todasAsImagens = slides.length
        const quantidadeDeImagensVisiveis = 7
        const rodadasTotais = Math.ceil(todasAsImagens / quantidadeDeImagensVisiveis)

        let contador = 0

        function exibirImagens(i) {
            const tamanhoCarrossel = carrossel.clientWidth
            carrossel.style.transform = `translateX(${-i * tamanhoCarrossel}px)`
        }

        const setaDireita = carrossel.parentElement.querySelector('.seta.direita')
        const setaEsquerda = carrossel.parentElement.querySelector('.seta.esquerda')

        setaDireita.addEventListener('click', () => {
            contador = (contador + 1) % rodadasTotais
            exibirImagens(contador)
        })

        setaEsquerda.addEventListener('click', () => {
            contador = (contador -1 + rodadasTotais)% rodadasTotais
            exibirImagens(contador)
        })

        exibirImagens(contador)
    }

    document.querySelectorAll('.slides').forEach(carrossel => {
        rodarCarrossel(carrossel)
    })
})

