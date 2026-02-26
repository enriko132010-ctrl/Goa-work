function generateUsername(username) {
    let clean = username.trim().replace(/\s+/g, '');
    let rendomNum = Math.floor(Math.random() * 100) + 1;
     return clean + rendomNum
}

console.log(generateUsername('  enriko  '));
