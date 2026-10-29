import { useState } from 'react';
import companies from '../../api/MOCK_DATA.json';
import image from '../../static/images/cards/commercial.jpg';
import { selectCompanies } from '../../catalog';
export default function Home({query}:{query:string}) {
 const [page,setPage]=useState(1);const result=selectCompanies(companies,query,page,8);
 return <><p role="status">{result.total} empresas encontradas</p><section className="cards" aria-label="Empresas">{result.items.map((company,index)=><article key={company.cnpj || company.name+'-'+index}><img src={image} alt=""/><h2>{company.name}</h2><p>{company.sobre}</p><p>CNPJ: {company.cnpj}</p></article>)}</section><nav aria-label="Paginação"><button disabled={result.page<=1} onClick={()=>setPage(result.page-1)}>Anterior</button><span>Página {result.page} de {result.pages}</span><button disabled={result.page>=result.pages} onClick={()=>setPage(result.page+1)}>Próxima</button></nav></>;
}
