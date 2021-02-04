const pi = 3.1415962;

function doublePi(){
return pi*2;
}

function triplePi(){
return pi*3;
}

export default pi; // default export
export {doublePi, triplePi} // Multiple exports inside the curely brackets