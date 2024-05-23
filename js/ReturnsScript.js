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
    formData["Model"] = document.getElementById("Model").value;
    formData["Type"] = document.getElementById("Type").value;
    formData["Dates"] = document.getElementById("Dates").value;
    formData["Avail"] = document.getElementById("Avail").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("returnList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.CarIdNo;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Model;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Type;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Dates;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Avail;
    cell11.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("CarIdNo").value = "";
    document.getElementById("Model").value = "";
    document.getElementById("Type").value = "";
    document.getElementById("Dates").value = "";
    document.getElementById("Avail").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("CarIdNo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Model").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Type").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Dates").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Avail").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.CarIdNo;
    selectedRow.cells[1].innerHTML = formData.Model;
    selectedRow.cells[2].innerHTML = formData.Type;
    selectedRow.cells[3].innerHTML = formData.Dates;
    selectedRow.cells[4].innerHTML = formData.Avail;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("returnList").deleteRow(row.rowIndex);
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
