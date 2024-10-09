'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { empresas } from './empresas';

export default function Home() {
  const [cidade, setCidade] = useState("vassouras")
  const [categoria, setCategoria] = useState("jornal")

  const [empresasSelecionadas, setEmpresasSelecionadas] = useState(empresas)

  function selecionarEmpresas(categoria: string, cidade: string) {
    const empresasFiltradas = empresas.filter(empresa => {
      return (
        (cidade === '' || empresa.cidade.toLowerCase() === cidade.toLowerCase()) &&
        (categoria === '' || empresa.categoria.toLowerCase() === categoria.toLowerCase())
      );
    });

    setEmpresasSelecionadas(empresasFiltradas);
  }

  function buscarEmpresasPeloForm(event: any) {
    event.preventDefault();
    selecionarEmpresas(categoria, cidade)
  }

  useEffect(() => {
    selecionarEmpresas("jornal", "vassouras")
  }, [])

  return (
    <>
      <Header />

      {/* Container */}
      <div className="mx-4 md:mx-20">
        
        <form onSubmit={buscarEmpresasPeloForm} className="py-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label>Cidade</label><br />
              <select 
                className="mt-3 w-full h-10 rounded text-black px-2"
                id="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              >
                <option value="vassouras">Vassouras</option>
              </select>
            </div>
            <div className="flex-1">
              <label>Categoria</label><br />
              <select 
                className="mt-3 w-full h-10 rounded text-black px-2"
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="jornal">Jornal</option>
                <option value="barbearia">Barbearia</option>
              </select>
            </div>
          </div>
          <button
            type='submit' 
            className="bg-[#1E40AF] font-bold w-full p-2 mt-4 rounded"
          >
            Filtrar
          </button>
        </form>

        {empresasSelecionadas.length > 0 ?
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {empresasSelecionadas.map((empresa) => (
              <Link href={empresa.site_url} target="_blank">
                <div className="bg-white w-auto rounded cursor-pointer hover:border-4 hover:border-blue-700">
                  <Image  
                    src={empresa.imagem}
                    width={288}
                    height={200}
                    alt=""
                    className='rounded-sm'
                  />
                  <div className='mt-2'>
                    <h3 className='text-black font-bold text-2xl text-center'>{empresa.nome}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        :
            <div className='text-center p-10'>
              <h1>Nenhum registro encontrado.</h1>
            </div>
        }
        

      </div>
      {/* fim do container */}

      <footer className='text-center py-1 mt-10 text-sm'>
        Desenvolvido por Kelvyn Telles.
      </footer>
    </>
  );
}
