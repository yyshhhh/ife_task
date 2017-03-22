/* global $ */
var startData, changedData, startCollums;

function table (data, collums) {
    startData = data;
    startCollums = collums;
    var table = document.createElement('table');
    var $table = $(table);
    var $thead = $('<thead></thead>');
    $table.append($thead);
    var $th_tr = $('<tr></tr>');
    $thead.append($th_tr);
    for (var j = 0; j < collums.length; j++) {
        if (collums[j].sort){
            var $th = $('<th>' + collums[j].colName + '<div><span></span><span></span></div></th>');
        }
        else {
            var $th = $('<th>' + collums[j].colName + '</th>');
        }
        $th_tr.append($th);
    }

    var $tbody = $('<tbody></tbody>');

    for (var i = 0; i < data.length; i++) {
        var $tr = $('<tr></tr>');
        for (var k = 0; k < collums.length; k++) {
            var $td = $('<td></td>');
            $td[0].innerHTML = data[i][collums[k].key];
            $tr.append($td);
        }
        $tbody.append($tr);
    }
    $table.append($tbody);

    return table;
}

window.table = table;

function sortStob (property) {
    return function (a, b) {
        if (a[property] < b[property]){
            return -1;
        }
        else if (a[property] == b[property]){
            return 0;
        }
        else if (a[property] > b[property]){
            return 1;
        }
    };
}

function sortBtos (property) {
    return function(a, b) {
        if (a[property] > b[property]){
            return -1;
        }
        else if (a[property] == b[property]){
            return 0;
        }
        else if (a[property] < b[property]){
            return 1;
        }
    };
}

$('#main').on('click', 'table thead th div span:first-child', function () {
    var property = $(this).parents('th').text();
    console.log(property);
    changedData = startData.sort(sortStob(property));
    console.log(changedData);
    var table2 = table(changedData, startCollums);
    main.innerHTML = '';
    main.appendChild(table2);
});

$('#main').on('click', 'table thead th div span:last-child', function () {
    var property = $(this).parents('th').text();
    console.log(property);
    changedData = startData.sort(sortBtos(property));
    console.log(changedData);
    var table2 = table(changedData, startCollums);
    main.innerHTML = '';
    main.appendChild(table2);
});


