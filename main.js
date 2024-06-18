let string = ""
let buttons = document.querySelectorAll('button')

function divBtn() {

}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == 'AC') {string = ""}

        else if (e.target.id == "delBtn") {string = string.slice(0, -1)}

        else if (e.target.innerHTML == '=') {
            const safeString = string.replace("÷", "/")
            string = eval(safeString);
        }
        else {string = string + e.target.innerHTML}

        document.querySelector('.input').value = string;
    })
})