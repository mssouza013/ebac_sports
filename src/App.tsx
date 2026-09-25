import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetProdutosQuery } from './Service/Api'
import { GlobalStyle } from './styles'

function App() {
  const { data: produtos = [], isLoading } = useGetProdutosQuery()
  if (isLoading) {
    return <p> Carregando ... </p>
  }

  return (
    <>
      {' '}
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} />
      </div>
    </>
  )
}

export default App
