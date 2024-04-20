import { useState } from 'react'
import fotoRestaurante from './assets/res.jpg'
import './App.css'
import { Navegacao } from './Navegacao.jsx'
import { ItemCardapio } from './ItemCardapio.jsx'
import { bebidas, pratosPrincipais, sobremesas } from './cardapio.js'

export function App(){
  const paginasMenu = [bebidas, pratosPrincipais, sobremesas]
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0)
  
  return <>
  
          <img src={fotoRestaurante} alt="" className='capa'/>
          < Navegacao atualizarPaginaSelecionada = {atualizarPaginaSelecionada} />
          <div className='menu'>
            {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
          </div>
          
        </>

}