function hello(name) {
    if (name===undefined || name==='') return 'Hello, World!';
    name = name.toLowerCase();
    let copiedName = [...name];
    copiedName.push('!');
    copiedName[0] = copiedName[0].toUpperCase();
    name = copiedName.join('');
    return 'Hello, '+name;
  }

console.log(hello('alice'));