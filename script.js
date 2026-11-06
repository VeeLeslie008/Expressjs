// let studentName = 'Leslie';
// let s1 = 67, s2 = 70, s3= 89, s4 = 63, s5 = 30;
// let total = s1 + s2 + s3 + s4 + s5;
// let averageScore = total / 5;
// let grade;

// if (averageScore >= 70 && averageScore <=100) {
//     grade = 'A';
// }else if (averageScore >=60 && averageScore <=69){
//     grade = 'B'
// }else if (averageScore >=50 && averageScore <=59){
//     grade = 'C'
// }else if (averageScore >=45 && averageScore <=49){
//     grade = 'D'
// }else if (averageScore >=40 && averageScore <=44){
//     grade ='E'
// }else{
//     grade = 'F'
// }

// console.log('Name:', studentName);
// console.log('Total:', total);
// console.log('Average:', averageScore);
// console.log('Grade:', grade);


// document.getElementById('gradeForm').addEventListener('submit', function (e){
//             e.preventDefault

//             let name = document.getElementById('studentName').value;
//             let totalScore = 0;
//             for (let i = 1; i <= 5; i++) {
//                 totalScore = totalScore + Number(document.getElementById('score' + i).value);
//             }
//             let averageScore = totalScore / 5;
//             let grade;

//             if (averageScore >= 70) {
//                 grade = 'A';
//             } else if (averageScore >= 60 && averageScore < 70) {
//                 grade = 'B';
//             } else if (averageScore >= 50 && averageScore < 60) {
//                 grade = 'C';
//             } else if (averageScore >= 45 && averageScore < 50) {
//                 grade = 'D';
//             } else if (averageScore >= 40 && averageScore < 45) {
//                 grade = 'E';
//             } else {
//                 grade = 'F';
//             }
//             document.getElementById('result').innerHTML = 
//             `<p>Student: ${name}</p>
//             <p>Average Score: ${averageScore.toFixed(2)}</p>
//             <p>Grade: ${grade}</p>`;
//         });

// document.getElementById('salaryForm').addEventListener('submit', function (e){
//     e.preventDefault();

//     let ename = document.getElementById('eName').value;
//     let basic = document.getElementById('basic').value;

//     let housing = basic * 0.10;
//     let transport = basic * 0.05;
//     let taxDeduction = basic *0.03;
//     let netSalary = basic + housing + transport - taxDeduction;

//     document.getElementById('salaryResult').innerHTML = 
//     `<p>Employee: ${ename}</p>
//     <p>Basic Salary: ${basic}</p>
//     <p>Housing Allowance: ${housing.toFixed(2)}</p>
//     <p>Transport Allowance: ${transport.toFixed(2)}</p>
//     <p>Tax Deduction: ${taxDeduction.toFixed(2)}</p>
//     <p>Net Salary: ${netSalary.toFixed(2)}</p>`;
// });



document.getElementById('gradeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('studentName').value.trim();
    let totalScore = 0;

    for (let i = 1; i <= 5; i++) {
        totalScore += Number(document.getElementById('score' + i).value);
    }

    let averageScore = totalScore / 5;
    let grade;

    if (averageScore >= 70) {
        grade = 'A';
    } else if (averageScore >= 60) {
        grade = 'B';
    } else if (averageScore >= 50) {
        grade = 'C';
    } else if (averageScore >= 45) {
        grade = 'D';
    } else if (averageScore >= 40) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerHTML = `
        <p>Student: ${name}</p>
        <p>Average Score: ${averageScore.toFixed(2)}</p>
        <p>Grade: ${grade}</p>`;
});


document.getElementById('salaryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let ename = document.getElementById('eName').value.trim();
    let basic = Number(document.getElementById('basic').value); 

    if (isNaN(basic) || basic <= 0) {
        document.getElementById('salaryResult').innerHTML =
            '<p style="color:red;">Please enter a valid basic salary.</p>';
        return;
    }

    let housing = basic * 0.10;
    let transport = basic * 0.05;
    let taxDeduction = basic * 0.03;
    let netSalary = basic + housing + transport - taxDeduction;

    document.getElementById('salaryResult').innerHTML = `
        <p>Employee: ${ename}</p>
        <p>Basic Salary: ${basic.toFixed(2)}</p>
        <p>Housing Allowance: ${housing.toFixed(2)}</p>
        <p>Transport Allowance: ${transport.toFixed(2)}</p>
        <p>Tax Deduction: ${taxDeduction.toFixed(2)}</p>
        <p>Net Salary: ${netSalary.toFixed(2)}</p>`;
});


let boxes = document.getElementById('numBoxes');
let html = '';

for (let k = 1; k <= 15; k++) {
    html += `<input id="n${k}" type="number" placeholder="Number ${k}" required> <br>`;
}
boxes.innerHTML = html;

document.getElementById('numberForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let numbers = [];
    for (let i = 1; i <= 15; i++) {
        numbers.push(Number(document.getElementById('n' + i).value));
    }

    let evens = [];
    let odds = [];
    let largest = numbers[0];
    let smallest = numbers[0];
    let sum = 0;

    for (let j = 0; j < numbers.length; j++) {
        let n = numbers[j];

        if (n % 2 === 0) {
            evens.push(n);
        } else {
            odds.push(n);
        }

        if (n > largest) {
            largest = n;
        }
        if (n < smallest) {
            smallest = n;
        }

        sum += n;
    }

    let average = sum / numbers.length;

    document.getElementById('numberResult').innerHTML = `
        <p>Even Numbers: ${evens.length ? evens.join(', ') : 'none'}</p>
        <p>Odd Numbers: ${odds.length ? odds.join(', ') : 'none'}</p>
        <p>Largest Number: ${largest}</p>
        <p>Smallest Number: ${smallest}</p>
        <p>Sum: ${sum}</p>
        <p>Average: ${average.toFixed(2)}</p>`;
});


const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function say(el, text, bad = false) {
    el.textContent = text;
    el.className = 'msg' + (bad ? ' error' : '');
}


let students = [];
let editingId = null;

function showStudents(list = students) {
    if (!list.length) {
        $('studentList').innerHTML = '<p class="hint">No students to show.</p>';
        return;
    }
    $('studentList').innerHTML = `<div class="table-wrap"><table>
        <tr><th>ID</th><th>Name</th><th>Email</th><th>Age</th><th>Course</th><th></th></tr>
        ${list.map(s => `<tr>
            <td>${esc(s.id)}</td><td>${esc(s.name)}</td><td>${esc(s.email)}</td>
            <td>${s.age}</td><td>${esc(s.course)}</td>
            <td class="actions">
                <button type="button" class="small secondary" data-act="edit" data-id="${esc(s.id)}">Edit</button>
                <button type="button" class="small secondary danger" data-act="del" data-id="${esc(s.id)}">Delete</button>
            </td></tr>`).join('')}
    </table></div>`;
}

$('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const s = {
        id: $('sId').value.trim(),
        name: $('sName').value.trim(),
        email: $('sEmail').value.trim(),
        age: Number($('sAge').value),
        course: $('sCourse').value.trim()
    };

    if (editingId === null) {                       
        if (students.some(x => x.id === s.id)) {
            return say($('studentMsg'), 'A student with this ID already exists.', true);
        }
        students.push(s);
        say($('studentMsg'), 'Student added.');
    } else {
        students[students.findIndex(x => x.id === editingId)] = s;
        editingId = null;
        $('sId').disabled = false;
        $('sSubmit').textContent = 'Add student';
        say($('studentMsg'), 'Student updated.');
    }
    this.reset();
    showStudents();
});

$('studentList').addEventListener('click', function (e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const id = btn.dataset.id;

    if (btn.dataset.act === 'del') {
        if (!confirm('Delete this student?')) return;
        students = students.filter(s => s.id !== id);
        say($('studentMsg'), 'Student deleted.');
        showStudents();
    } else {
        const s = students.find(x => x.id === id);
        $('sId').value = s.id;
        $('sName').value = s.name;
        $('sEmail').value = s.email;
        $('sAge').value = s.age;
        $('sCourse').value = s.course;
        editingId = id;
        $('sId').disabled = true;
        $('sSubmit').textContent = 'Update student';
        $('studentForm').scrollIntoView({ behavior: 'smooth' });
    }
});

$('sSearchBtn').addEventListener('click', function () {
    const id = $('sSearch').value.trim();
    const found = students.filter(s => s.id === id);
    if (found.length) {
        say($('studentMsg'), 'Student found.');
        showStudents(found);
    } else {
        say($('studentMsg'), 'No student with that ID.', true);
        $('studentList').innerHTML = '';
    }
});

$('sAllBtn').addEventListener('click', function () {
    say($('studentMsg'), `${students.length} student(s) registered.`);
    showStudents();
});

(function () {
    const get = id => document.getElementById(id);
    const money = n => '₦' + Number(n).toLocaleString('en-NG', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    const safe = s => String(s).replace(/[&<>"']/g, c =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    const msg = get('invMsg');
    const out = get('invList');
    let products = [];

    function say(text, bad) {
        msg.textContent = text;
        msg.className = 'msg' + (bad ? ' error' : '');
    }

    function render(list) {
        if (!list) list = products;
        if (list.length === 0) {
            out.innerHTML = '<p class="hint">No products to show.</p>';
            return;
        }
        let rows = '';
        for (let i = 0; i < list.length; i++) {
            const p = list[i];
            rows += '<tr>' +
                '<td>' + safe(p.id) + '</td>' +
                '<td>' + safe(p.name) + '</td>' +
                '<td>' + money(p.price) + '</td>' +
                '<td class="' + (p.qty < 5 ? 'low' : '') + '">' + p.qty + '</td>' +
                '<td>' + money(p.price * p.qty) + '</td>' +
                '</tr>';
        }
        out.innerHTML =
            '<div class="table-wrap"><table>' +
            '<tr><th>ID</th><th>Product</th><th>Price</th><th>In stock</th><th>Value</th></tr>' +
            rows +
            '</table></div>';
    }

    // Add product
    get('productForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const p = {
            id: get('pId').value.trim(),
            name: get('pName').value.trim(),
            price: Number(get('pPrice').value),
            qty: Number(get('pQty').value)
        };
        const exists = products.some(x => x.id.toLowerCase() === p.id.toLowerCase());
        if (exists) {
            say('A product with this ID already exists.', true);
            return;
        }
        products.push(p);
        this.reset();
        say('Product added. Total products: ' + products.length);
        render();
    });

    // Display all
    get('pAllBtn').addEventListener('click', function () {
        say(products.length + ' product(s) in inventory.');
        render();
    });

    // Total value
    get('pTotalBtn').addEventListener('click', function () {
        let total = 0;
        for (let i = 0; i < products.length; i++) {
            total += products[i].price * products[i].qty;
        }
        say('Total inventory value: ' + money(total));
        render();
    });

    // Search
    get('pSearchBtn').addEventListener('click', function () {
        const q = get('pSearch').value.trim().toLowerCase();
        if (!q) {
            say('Type an ID or product name to search.', true);
            return;
        }
        const found = products.filter(p =>
            p.id.toLowerCase() === q || p.name.toLowerCase().includes(q));
        if (found.length) {
            say(found.length + ' product(s) found.');
            render(found);
        } else {
            say('Product not found.', true);
            out.innerHTML = '';
        }
    });


    get('qtyForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const id = get('uId').value.trim().toLowerCase();
        const p = products.find(x => x.id.toLowerCase() === id);
        if (!p) {
            say('No product with that ID.', true);
            return;
        }
        p.qty = Number(get('uQty').value);
        this.reset();
        say('Quantity for ' + p.name + ' updated to ' + p.qty + '.');
        render();
    });


    get('pLowBtn').addEventListener('click', function () {
        const low = products.filter(p => p.qty < 5);
        say(low.length ? low.length + ' product(s) below 5 in stock.'
                       : 'No product is below 5 in stock.');
        render(low);
    });
})();

// ===== QUESTION 6: SHOPPING CART =====
(function () {
    const get = id => document.getElementById(id);
    const money = n => '₦' + Number(n).toLocaleString('en-NG', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });

    const catalogue = [
        { id: 1, name: 'Rice (5kg)', price: 8500 },
        { id: 2, name: 'Beans (2kg)', price: 4200 },
        { id: 3, name: 'Vegetable oil (3L)', price: 9800 },
        { id: 4, name: 'Garri (5kg)', price: 3000 },
        { id: 5, name: 'Indomie (carton)', price: 7500 },
        { id: 6, name: 'Sugar (1kg)', price: 2200 },
        { id: 7, name: 'Blender', price: 25000 },
        { id: 8, name: 'Electric kettle', price: 18000 }
    ];
    let cart = [];

    const productOf = id => catalogue.find(p => p.id === id);

    function addToCart(id) {
        const item = cart.find(i => i.id === id);
        if (item) item.qty++;
        else cart.push({ id: id, qty: 1 });
    }

    function removeFromCart(id) {
        cart = cart.filter(i => i.id !== id);
    }

    function changeQty(id, change) {
        const item = cart.find(i => i.id === id);
        if (!item) return;
        item.qty += change;
        if (item.qty <= 0) removeFromCart(id);
    }

    function calcTotals() {
        let subtotal = 0;
        cart.forEach(i => { subtotal += productOf(i.id).price * i.qty; });
        const discount = subtotal > 50000 ? subtotal * 0.10 : 0;
        return { subtotal: subtotal, discount: discount, total: subtotal - discount };
    }

    function render() {
        if (cart.length === 0) {
            get('cartList').innerHTML = '<p class="hint">Your cart is empty.</p>';
            get('cartSummary').innerHTML = '';
            return;
        }
        let rows = '';
        cart.forEach(i => {
            const p = productOf(i.id);
            rows += '<tr><td>' + p.name + '</td><td>' + money(p.price) + '</td>' +
                '<td><span class="stepper">' +
                '<button type="button" class="secondary" data-act="minus" data-id="' + i.id + '">−</button>' +
                '<b>' + i.qty + '</b>' +
                '<button type="button" class="secondary" data-act="plus" data-id="' + i.id + '">+</button>' +
                '</span></td><td>' + money(p.price * i.qty) + '</td>' +
                '<td><button type="button" class="small secondary danger" data-act="remove" data-id="' + i.id + '">Remove</button></td></tr>';
        });
        get('cartList').innerHTML = '<div class="table-wrap"><table>' +
            '<tr><th>Item</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr>' +
            rows + '</table></div>';

        const t = calcTotals();
        get('cartSummary').innerHTML = '<dl class="rows">' +
            '<div><dt>Total</dt><dd>' + money(t.subtotal) + '</dd></div>' +
            (t.discount > 0 ? '<div><dt>Discount (10%)</dt><dd>− ' + money(t.discount) + '</dd></div>' : '') +
            '<div class="total"><dt>Amount to pay</dt><dd>' + money(t.total) + '</dd></div></dl>';
    }

    // Draw the product buttons
    get('catalog').innerHTML = catalogue.map(p =>
        '<button type="button" class="secondary" data-add="' + p.id + '">' +
        p.name + '<small>' + money(p.price) + '</small></button>').join('');

    get('catalog').addEventListener('click', function (e) {
        const btn = e.target.closest('button');
        if (!btn) return;
        addToCart(Number(btn.dataset.add));
        get('checkoutOut').innerHTML = '';
        render();
    });

    get('cartList').addEventListener('click', function (e) {
        const btn = e.target.closest('button');
        if (!btn) return;
        const id = Number(btn.dataset.id);
        if (btn.dataset.act === 'plus') changeQty(id, 1);
        if (btn.dataset.act === 'minus') changeQty(id, -1);
        if (btn.dataset.act === 'remove') removeFromCart(id);
        render();
    });

    get('clearCartBtn').addEventListener('click', function () {
        cart = [];
        get('checkoutOut').innerHTML = '';
        render();
    });

    get('checkoutBtn').addEventListener('click', function () {
        if (cart.length === 0) {
            get('checkoutOut').innerHTML = '<p class="msg error">Your cart is empty.</p>';
            return;
        }
        const t = calcTotals();
        let lines = '';
        cart.forEach(i => {
            const p = productOf(i.id);
            lines += '<div><dt>' + p.name + ' × ' + i.qty + '</dt><dd>' + money(p.price * i.qty) + '</dd></div>';
        });
        get('checkoutOut').innerHTML = '<h3>Checkout summary</h3><dl class="rows">' + lines +
            '<div><dt>Total</dt><dd>' + money(t.subtotal) + '</dd></div>' +
            '<div><dt>Discount</dt><dd>' + (t.discount > 0 ? '− ' + money(t.discount) : 'None') + '</dd></div>' +
            '<div class="total"><dt>Final amount</dt><dd>' + money(t.total) + '</dd></div></dl>' +
            '<p class="msg good">Thank you for shopping with us!</p>';
        cart = [];
        render();
    });

    render();
})();


(function () {
    const get = id => document.getElementById(id);
    const money = n => '₦' + Number(n).toLocaleString('en-NG', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });
    let account = null;

    function show(text, bad) {
        get('bankMsg').textContent = text;
        get('bankMsg').className = 'msg' + (bad ? ' error' : ' good');
    }

    function readAmount() {
        return Number(get('amount').value);
    }

    function deposit(amount) {
        if (!account) return { ok: false, text: 'Create an account first.' };
        if (get('amount').value === '' || isNaN(amount)) return { ok: false, text: 'Enter an amount.' };
        if (amount < 0) return { ok: false, text: 'You cannot deposit a negative amount.' };
        if (amount === 0) return { ok: false, text: 'Deposit must be more than ₦0.' };
        account.balance += amount;
        return { ok: true, text: 'Deposit successful. ' + money(amount) + ' added. New balance: ' + money(account.balance) };
    }

    function withdraw(amount) {
        if (!account) return { ok: false, text: 'Create an account first.' };
        if (get('amount').value === '' || isNaN(amount)) return { ok: false, text: 'Enter an amount.' };
        if (amount <= 0) return { ok: false, text: 'Withdrawal must be more than ₦0.' };
        if (amount > account.balance) {
            return { ok: false, text: 'Insufficient funds. Your balance is ' + money(account.balance) + '.' };
        }
        account.balance -= amount;
        return { ok: true, text: 'Withdrawal successful. ' + money(amount) + ' taken out. New balance: ' + money(account.balance) };
    }

    function checkBalance() {
        if (!account) return { ok: false, text: 'Create an account first.' };
        return { ok: true, text: 'Your available balance is ' + money(account.balance) + '.' };
    }

    function displayInfo() {
        if (!account) return { ok: false, text: 'Create an account first.' };
        get('bankOut').innerHTML = '<dl class="rows">' +
            '<div><dt>Account holder</dt><dd>' + account.name.replace(/</g, '&lt;') + '</dd></div>' +
            '<div><dt>Account number</dt><dd>' + account.number + '</dd></div>' +
            '<div class="total"><dt>Balance</dt><dd>' + money(account.balance) + '</dd></div></dl>';
        return { ok: true, text: 'Account information displayed below.' };
    }

    function run(result) {
        if (result.text.indexOf('information displayed') === -1) get('bankOut').innerHTML = '';
        show(result.text, !result.ok);
    }

    get('accountForm').addEventListener('submit', function (e) {
        e.preventDefault();
        account = {
            name: get('accName').value.trim(),
            number: get('accNo').value.trim(),
            balance: Number(get('accBal').value)
        };
        this.reset();
        get('bankOut').innerHTML = '';
        show('Account created for ' + account.name + '.', false);
    });

    get('depBtn').addEventListener('click', () => run(deposit(readAmount())));
    get('wdBtn').addEventListener('click', () => run(withdraw(readAmount())));
    get('balBtn').addEventListener('click', () => run(checkBalance()));
    get('infoBtn').addEventListener('click', () => run(displayInfo()));
})();


(function () {
    const get = id => document.getElementById(id);

    const rules = [
        { text: 'At least 8 characters', test: p => p.length >= 8 },
        { text: 'One uppercase letter', test: p => /[A-Z]/.test(p) },
        { text: 'One lowercase letter', test: p => /[a-z]/.test(p) },
        { text: 'One number', test: p => /[0-9]/.test(p) },
        { text: 'One special character', test: p => /[^A-Za-z0-9]/.test(p) }
    ];


    function validatePassword(password) {
        const missing = rules.filter(r => !r.test(password)).map(r => r.text);
        return { valid: missing.length === 0, missing: missing };
    }

    function drawChecklist() {
        const pw = get('pw').value;
        get('reqList').innerHTML = rules.map(r =>
            '<li class="' + (r.test(pw) ? 'ok' : '') + '">' + r.text + '</li>').join('');
    }

    get('pw').addEventListener('input', drawChecklist);

    get('showPw').addEventListener('change', function () {
        get('pw').type = this.checked ? 'text' : 'password';
    });

    get('pwForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const result = validatePassword(get('pw').value);
        const msg = get('pwMsg');
        if (result.valid) {
            msg.textContent = 'Valid password.';
            msg.className = 'msg good';
        } else {
            msg.textContent = 'Invalid password. Missing: ' + result.missing.join(', ') + '.';
            msg.className = 'msg error';
        }
        drawChecklist();
    });

    drawChecklist();
})();


const employees = [
  {
    name: "Alice Johnson",
    salary: 250000,
    department: "IT"
  },
  {
    name: "Brian Smith",
    salary: 180000,
    department: "Sales"
  },
  {
    name: "Chika Obi",
    salary: 320000,
    department: "IT"
  },
  {
    name: "David Williams",
    salary: 210000,
    department: "HR"
  },
  {
    name: "Fatima Bello",
    salary: 150000,
    department: "Sales"
  }
];

const output = document.getElementById("output");

// Group employees by department
function groupEmployeesByDepartment(employeeList) {
  return employeeList.reduce((groups, employee) => {
    const department = employee.department;

    if (!groups[department]) {
      groups[department] = [];
    }

    groups[department].push(employee);

    return groups;
  }, {});
}

// Find employees earning above ₦200,000
function getEmployeesAbove200000(employeeList) {
  return employeeList.filter(employee => employee.salary > 200000);
}

// Calculate the average salary
function getAverageSalary(employeeList) {
  const totalSalary = employeeList.reduce(
    (total, employee) => total + employee.salary,
    0
  );

  return totalSalary / employeeList.length;
}

// Find the employee with the highest salary
function getHighestPaidEmployee(employeeList) {
  return employeeList.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee : highest;
  });
}

// Return only the names of employees
function getEmployeeNames(employeeList) {
  return employeeList.map(employee => employee.name);
}

// Create one employee's details in div format
function createEmployeeDiv(employee) {
  return `
    <div>
      <p><strong>Name:</strong> ${employee.name}</p>
      <p><strong>Salary:</strong> ₦${employee.salary.toLocaleString()}</p>
      <p><strong>Department:</strong> ${employee.department}</p>
      <hr>
    </div>
  `;
}

// Create several employees' details in div format
function createEmployeesDiv(employeeList) {
  return employeeList
    .map(employee => createEmployeeDiv(employee))
    .join("");
}

// Button 1: Group employees by department
document
  .getElementById("departmentButton")
  .addEventListener("click", () => {
    const groupedEmployees = groupEmployeesByDepartment(employees);

    let result = "<h2>Employees Grouped by Department</h2>";

    for (const department in groupedEmployees) {
      result += `<h3>${department} Department</h3>`;
      result += createEmployeesDiv(groupedEmployees[department]);
    }

    output.innerHTML = result;
  });

// Button 2: Employees earning above ₦200,000
document
  .getElementById("aboveSalaryButton")
  .addEventListener("click", () => {
    const employeesAbove200000 = getEmployeesAbove200000(employees);

    output.innerHTML = `
      <h2>Employees Earning Above ₦200,000</h2>
      ${createEmployeesDiv(employeesAbove200000)}
    `;
  });

// Button 3: Average salary of all employees
document
  .getElementById("averageSalaryButton")
  .addEventListener("click", () => {
    const averageSalary = getAverageSalary(employees);

    output.innerHTML = `
      <h2>Average Salary of All Employees</h2>
      <div>
        <p><strong>Average Salary:</strong>
        ₦${averageSalary.toLocaleString()}</p>
      </div>
    `;
  });

// Button 4: Employee with the highest salary
document
  .getElementById("highestSalaryButton")
  .addEventListener("click", () => {
    const highestPaidEmployee = getHighestPaidEmployee(employees);

    output.innerHTML = `
      <h2>Employee with the Highest Salary</h2>
      ${createEmployeeDiv(highestPaidEmployee)}
    `;
  });

// Button 5: Display only employee names
document
  .getElementById("namesButton")
  .addEventListener("click", () => {
    const employeeNames = getEmployeeNames(employees);

    output.innerHTML = `
      <h2>Names of All Employees</h2>
      <div>
        ${employeeNames
          .map(name => `<p>${name}</p>`)
          .join("")}
      </div>
    `;
  });



const form = document.getElementById("registrationForm");
const result = document.getElementById("result80");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const password = document.getElementById("password").value;

    if (name === "") {
      throw new Error("Error: Name cannot be empty.");
    }

    if (email === "") {
      throw new Error("Error: Email cannot be empty.");
    }

    if (!email.includes("@")) {
      throw new Error("Error: Email must contain @.");
    }

    // Allows only normal email characters and rejects emojis
    const emailPattern =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailPattern.test(email)) {
      throw new Error("Error: Enter a valid email address without emojis.");
    }

    if (age === "") {
      throw new Error("Error: Age cannot be empty.");
    }

    if (Number(age) < 18) {
      throw new Error("Error: User must be 18 years or older.");
    }

    if (password.length < 8) {
      throw new Error("Error: Password must be at least 8 characters.");
    }

    if (!/[0-9]/.test(password)) {
      throw new Error("Error: Password must contain a number.");
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
      throw new Error("Error: Password must contain a special symbol.");
    }

    result.innerHTML = `
      <h2>Registration Successful</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>
    `;

    result.style.color = "green";
    form.reset();

  } catch (error) {
    result.innerHTML = `
      <h2>Registration Error</h2>
      <p>${error.message}</p>
    `;

    result.style.color = "red";
  }
});

// Addition
export function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// Subtraction
export function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

// Multiplication
export function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

// Division
export function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  return firstNumber / secondNumber;
}


// Addition
export function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// Subtraction
export function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

// Multiplication
export function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

// Division
export function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  return firstNumber / secondNumber;
}
