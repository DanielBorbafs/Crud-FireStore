import Layout from "../components/Layout";
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/botao"

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
        < div className="flex justify-end">
          <Botao cor="blue" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes}
         clienteSelecionado={clienteSelecionado}
         clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  )
}

