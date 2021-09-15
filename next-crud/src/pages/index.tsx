import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente'
import Layout from '../components/Layout';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario'
import { useState } from 'react'

export default function Home() {

  const [cliente , setCliente] = useState(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Edson', 34, '1'),
    new Cliente('Daiane', 241, '2'),
    new Cliente('Luizin', 3214, '3'),
    new Cliente('Yoshi', 12124, '4'),
  ]
  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }
  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }
  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo='Cadastro Simples!'>
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor='green' className="mb-4"
                onClick={novoCliente}>
                Novo Cliente!
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}