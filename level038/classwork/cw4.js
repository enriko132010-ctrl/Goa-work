// logical operators

// 1 &&(და) ორივე true უნდა იყოს
const age = 18;
const hasPermission = true;
if (age >= 16 && hasPermission) {
    console.log("has a Permission")
}

// 2 ||(ან) ერთი მაინც უნდა იყოს true
const isUser = false;
const isAdmin = true;
if(isUser || isAdmin) {
    console.log("success")
};

// 3 !(არ) 
const football = true;

if (!football) {
    console.log("football")
} else {
    console.log("other")
}