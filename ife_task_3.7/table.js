/* global $ */

function table (data, collums) {
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
