function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    let salarioFixo = 2000
    if(qtdeCarrosVendidos !== 0) {
    let valorDocarro = qtdeCarrosVendidos / valorTotalVendas
    let comissao = (valorDocarro * 0,05) + 100
    let salarioFinal = (qtdeCarrosVendidos * comissao) + salarioFixo
       return salarioFinal
     } else {
       salarioFixo
     }
    
    }