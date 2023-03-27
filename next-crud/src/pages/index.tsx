import Layout from "../components/Layout";
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {
  const clientes =[
    new Cliente('Daniel', 21, '1'),
    new Cliente('Sofia', 21, '2'),
    new Cliente('Cristian', 21, '3'),
  ]
  function clienteSelecionado(cliente:Cliente) {
    console.log(cliente.nome)

  }
  function clienteExcluido(cliente:Cliente) {
    console.log(cliente.nome)
  }
  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-blue-700 to-purple-800
      text-white
   `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}
         clienteSelecionado={clienteSelecionado}
         clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  )
}