function addToTable() {
    const email = document.getElementById("email").value
    const surname = document.getElementById("surname").value
    const name = document.getElementById("name").value
    const middleName = document.getElementById("middle-name").value
    const gender = document.querySelector('input[name="gender"]:checked').value
    const phone = document.getElementById("phone").value
    const date = document.getElementById("date").value
    const group = document.getElementById("group").value

    const table = document.getElementById("user-table")
    const newRow = table.insertRow(-1)

    const cellCheckbox = newRow.insertCell(0)
    const cellEmail = newRow.insertCell(1)
    const cellFullName = newRow.insertCell(2)
    const cellGender = newRow.insertCell(3)
    const cellPhone = newRow.insertCell(4)
    const cellDate = newRow.insertCell(5)
    const cellGroup = newRow.insertCell(6)

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    cellCheckbox.appendChild(checkbox)
    cellEmail.innerHTML = email
    cellFullName.innerHTML = surname + " " + name + " " + middleName
    cellGender.innerHTML = gender
    cellPhone.innerHTML = phone
    cellDate.innerHTML = date
    cellGroup.innerHTML = group
}

function clearForm() {
    document.getElementById("email").value = ""
    document.getElementById("surname").value = ""
    document.getElementById("name").value = ""
    document.getElementById("middle-name").value = ""
    document.querySelector('input[name="gender"]:checked').checked = false
    document.getElementById("phone").value = ""
    document.getElementById("date").value = ""
    document.getElementById("group").value = ""
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault()

    if (validateForm()) {
        addToTable()
        clearForm()
    }
})

function deleteSelectedRows() {
    const table = document.getElementById("user-table")
    const checkboxes = document.querySelectorAll("input[type='checkbox']")

    for (let i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            table.deleteRow(i + 1)
        }
    }
}

function duplicateSelectedRows() {
    const table = document.getElementById("user-table")
    const checkboxes = document.querySelectorAll("input[type='checkbox']")

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const rowToDuplicate = table.rows[index + 1]
            const newRow = table.insertRow(index + 2)
            for (let i = 0; i < rowToDuplicate.cells.length; i++) {
                const cell = newRow.insertCell(i)
                cell.innerHTML = rowToDuplicate.cells[i].innerHTML
            }
        }
    })
}

document.getElementById("delete-selected").addEventListener("click", deleteSelectedRows)
document.getElementById("duplicate-selected").addEventListener("click", duplicateSelectedRows)

