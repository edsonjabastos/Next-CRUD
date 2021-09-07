import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente'
import Layout from '../components/Layout';

export default function Home() {

  const clientes = [
    new Cliente('Edson', 34, '1'),
    new Cliente('Daiane', 241, '2'),
    new Cliente('Luizin', 3214, '3'),
    new Cliente('Yoshi', 12124, '4'),
  ]

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo='Cadastro Simples!'>
        <Tabela clientes={clientes} ></Tabela>
      </Layout>
    </div>
  )
}