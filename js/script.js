
function myFunction() {
    let table = document.getElementById("myTable");
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerHTML = document.getElementById('Task').value;
    td2.innerHTML = document.getElementById('date').value;
    td3.innerHTML = document.getElementById('Urgency').value;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    table.children[0].appendChild(row);
};
function DeleteMyFunction(){
    
    document.getElementById("myTable").delet;
}
