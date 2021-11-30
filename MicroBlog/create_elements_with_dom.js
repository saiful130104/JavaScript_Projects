console.log(`Let's start DOM with JavaScript\n`);

/*
<tr>
    <td class="post">post 1</td>
    <td>
    <span class="fa fa-times float-right pr-3"></span>
    </td>
</tr>
*/
// create the above html element by DOM

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
td1.innerText = "post 6";
const span = document.createElement('span');
span.className = 'fa fa-times float-right pr-3';
td2.append(span)
tr.append(td1, td2)
const tbody = document.querySelector('tbody')
tbody.append(tr)
console.log(tr)