
let syno=(fruits)=>{
    let newList=fruits.map((fruit)=> `<span> ${fruit}</span>`)
    return(newList.join(''));
    
    
}
let synonames=['mango', 'banana', 'lichi']
let reruslt=syno(synonames);
console.log(reruslt);
