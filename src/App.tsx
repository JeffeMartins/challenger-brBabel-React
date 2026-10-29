import { useState } from 'react';
import Home from './screens/home/home';
import logo from './static/images/brbabel.png';
import './styles.css';
export default function App() {
 const [query,setQuery]=useState('');
 return <><header><img src={logo} alt="BrBabel"/><label>Buscar empresa<input value={query} onChange={e=>setQuery(e.target.value)} type="search"/></label></header><main><h1>Empresas</h1><p>Catálogo demonstrativo com busca e paginação locais.</p><Home query={query}/></main></>;
}
