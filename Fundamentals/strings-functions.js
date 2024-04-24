let company = 'TechGlobal';
console.log(company.length);//10
console.log(company.toUpperCase());//TECHGLOBAL
console.log(company.toLowerCase());//techglobal

console.log(company.charAt(4));//G
console.log(company.charAt(company.length-1));//l
console.log(company.charAt(-4));//empty
console.log(company.charAt(-100));//no error get empty 

//property acces 
console.log(company[3]);//h
console.log(company[-10]);//undefined
console.log(company[-100]);//undefined

console.log(company.charCodeAt(0));//84 return ASCII  decimal representation of the char we provide 


console.log('Chicago'.includes('C'));//true
console.log('Chicago'.includes('c'));//true
console.log('Chicago'.includes('A'));//false


console.log('Illinois'.startsWith('I'));//true
console.log('Illinois'.startsWith('Illinois'));//true

console.log('Illinois'.endsWith('i'));//false
console.log('Illinois'.endsWith('Illinois'));//true


console.log('Techglobal'.indexOf('l'));//5
console.log('TechGlobal'.lastIndexOf('l'));//5

//indexOf vs search -> search takes regex as well
console.log('TechGlobal'.search('G'));


//not existing caracters return -1
console.log('TechGlobal'.lastIndexOf('r'));//-1

console.log('TechGlobal'.search('Y'));//-1



console.log('  Google  '.trim());//Google
console.log('  Google  '.trimStart());//Google
console.log('  Google  '.trimEnd());//  Google



let language = 'JavaScript';

console.log(language.substring(0,4));//Java
console.log(language.substring(4));//Script

console.log(language.slice(0,4));//Java
console.log(language.slice(4));//Script


//substring vs slice 

console.log(language.substring(-4,-2));//empty

//slice going back with negative 
console.log(language.slice(-5,-2));//cri


//split => array

console.log('Java'.split(''));

console.log('Not Java But JavaScript'.split(' '));//[ 'Not', 'Java', 'But', 'JavaScript' ]
console.log('Not Java But JavaScript'.split('But'));//[ 'Not Java ', ' JavaScript' ]

console.log('Java or JavaScript'.replace('Java', '***'));//*** or JavaScript
console.log('Java or JavaScript'.replaceAll('Java', '***'));//*** or ***Script


let id1 = "1", id2 ="123";

console.log(id1.padStart(6,"0"));
console.log(id2.padStart(6,"0"));
console.log(id1.padEnd(6,"#"));

