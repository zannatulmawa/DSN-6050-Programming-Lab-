function newRow(){
    var initialID = 1001;
    var d = new Date();
    var bankList = ["JP Morgan", "Wells Fargo", "Firth Third", "Ally", "BoA", "US Bank"];
    var tableRef = document.getElementById('transactionTbl').getElementsByTagName('tbody')[0];

    var row = 0;
    while (row < 1000) {
        var bank = bankList[Math.floor(Math.random()*bankList.length)];
        var amount = Math.floor(Math.random() * 1000000) + 100;
        var daysToAdd = Math.floor(Math.random() * 5) + 1;

        d.setDate(d.getDate() + daysToAdd);    

        var rowContent = 
            `<tr>
                <td>${initialID++}</td>
                <td>${d.toDateString()}</td>
                <td>${convert(amount)}</td>
                <td>${bank}</td>
            </tr>`;
        var newRow = tableRef.insertRow(tableRef.rows.length);
        newRow.innerHTML = rowContent;
        row++;
      }
}

function convert(amount){
    var format = new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD', 
        minimumFractionDigits: 2, 
    }); 

    return format.format(amount);
}