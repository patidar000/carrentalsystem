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
    formData["CarIdNo"] = document.getElementById("CarIdNo").value;
    formData["Chassis"] = document.getElementById("Chassis").value;
    formData["Intetior"] = document.getElementById("Intetior").value;
    formData["Mechanics"] = document.getElementById("Mechanics").value;
    formData["Thread"] = document.getElementById("Thread").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("damageList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.CarIdNo;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Chassis;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Intetior;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Mechanics;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Thread;
    cell11.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("CarIdNo").value = "";
    document.getElementById("Chassis").value = "";
    document.getElementById("Intetior").value = "";
    document.getElementById("Mechanics").value = "";
    document.getElementById("Thread").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("CarIdNo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Chassis").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Intetior").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Mechanics").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Thread").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.CarIdNo;
    selectedRow.cells[1].innerHTML = formData.Chassis;
    selectedRow.cells[2].innerHTML = formData.Intetior;
    selectedRow.cells[3].innerHTML = formData.Mechanics;
    selectedRow.cells[4].innerHTML = formData.Thread
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("damageList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("CarIdNo").value == "") {
        isValid = false;
        document.getElementById("idNoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("idNoValidationError").classList.contains("hide"))
            document.getElementById("idNoValidationError").classList.add("hide");
    }
    return isValid;
}
