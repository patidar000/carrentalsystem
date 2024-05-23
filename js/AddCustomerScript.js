var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["idNo"] = document.getElementById("idNo").value;
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["age"] = document.getElementById("age").value;
    formData["phoneNo"] = document.getElementById("phoneNo").value;
    formData["address"] = document.getElementById("address").value;
    formData["service"] = document.getElementById("service").value;
    formData["model"] = document.getElementById("model").value;
    formData["amount"] = document.getElementById("amount").value;
    formData["date"] = document.getElementById("date").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("customerList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.idNo;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.firstName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lastName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.phoneNo;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.address;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.service;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.model;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.amount;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = data.date;
    cell11 = newRow.insertCell(11);
    cell11.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("idNo").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phoneNo").value = "";
    document.getElementById("address").value = "";
    document.getElementById("service").value = "";
    document.getElementById("model").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("idNo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("firstName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
    document.getElementById("phoneNo").value = selectedRow.cells[5].innerHTML;
    document.getElementById("address").value = selectedRow.cells[6].innerHTML;
    document.getElementById("service").value = selectedRow.cells[7].innerHTML;
    document.getElementById("model").value = selectedRow.cells[8].innerHTML;
    document.getElementById("amount").value = selectedRow.cells[9].innerHTML;
    document.getElementById("date").value = selectedRow.cells[10].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.idNo;
    selectedRow.cells[1].innerHTML = formData.firstName;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow.cells[4].innerHTML = formData.age;
    selectedRow.cells[5].innerHTML = formData.phoneNo;
    selectedRow.cells[6].innerHTML = formData.address;
    selectedRow.cells[7].innerHTML = formData.service;
    selectedRow.cells[8].innerHTML = formData.model;
    selectedRow.cells[9].innerHTML = formData.amount;
    selectedRow.cells[10].innerHTML = formData.date;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("customerList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("idNo").value == "") {
        isValid = false;
        document.getElementById("idNoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("idNoValidationError").classList.contains("hide"))
            document.getElementById("idNoValidationError").classList.add("hide");
    }
    return isValid;
}
