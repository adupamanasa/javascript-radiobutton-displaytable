
//function to Display Sales
function showTables(){

    document.getElementById('tablesales').style.display = "none";
}

//function to Hide Sales
function hideTables() {

    document.getElementById('tablesales').style.display = "block";
}

//Array of TABLE DATA
var tabArray = [{year: '<b>Year</b>',totsal: '<b>TotalSales</b>',},{year: '2010',totsal: '$150,000',},{year: '2011',totsal: '$200,000',},{year: '2012',totsal: '$250,000',}, {year: '2013',totsal: '$300,000',}];

//Loop for Array of TABLE DATA
function displayTable(tablesales)
{   var table = document.getElementById('tablesales');
    for (var i = 0; i < tablesales.length; ++i)
    { 
        var yeartab = tablesales[i];
        var row = document.createElement('tr');
        var properties = ['year', 'totsal'];
        for (var j = 0; j < properties.length; ++j)
        { 
            var cell = document.createElement('td');
            cell.innerHTML = yeartab[properties[j]];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
displayTable(tabArray);
