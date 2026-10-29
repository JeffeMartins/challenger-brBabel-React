export function selectCompanies<T extends {name:string}>(companies:T[],query:string,page:number,size:number) {
 if(!Number.isInteger(size) || size<1)throw new Error('Invalid page size');
 const matches=companies.filter(company=>company.name.toLocaleLowerCase('pt-BR').includes(query.trim().toLocaleLowerCase('pt-BR')));
 const pages=Math.max(1,Math.ceil(matches.length/size));const current=Math.max(1,Math.min(page,pages));
 return {items:matches.slice((current-1)*size,current*size),total:matches.length,pages,page:current};
}
