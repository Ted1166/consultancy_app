const inpKey = document. getElementById("inpKey");
const inpValue = document. getElementById("inpValue");
const inpInsert = document. getElementById("inInsert");
const isOutput = document. getElementById("isOutput");

btnInsert.onClick = function () {
    const key = inpKey.value;
    const value = inpValue.value;

    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key.value);
        location.reload;
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    isOutput.innerHTML += '${key}: ${value}<br />'; 
}
