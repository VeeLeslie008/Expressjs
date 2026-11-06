// // let studentName = 'Leslie';
// // let s1 = 67, s2 = 70, s3= 89, s4 = 63, s5 = 30;
// // let total = s1 + s2 + s3 + s4 + s5;
// // let averageScore = total / 5;
// // let grade;

// // if (averageScore >= 70 && averageScore <=100) {
// //     grade = 'A';
// // }else if (averageScore >=60 && averageScore <=69){
// //     grade = 'B'
// // }else if (averageScore >=50 && averageScore <=59){
// //     grade = 'C'
// // }else if (averageScore >=45 && averageScore <=49){
// //     grade = 'D'
// // }else if (averageScore >=40 && averageScore <=44){
// //     grade ='E'
// // }else{
// //     grade = 'F'
// // }

// // console.log('Name:', studentName);
// // console.log('Total:', total);
// // console.log('Average:', averageScore);
// // console.log('Grade:', grade);


// // document.getElementById('gradeForm').addEventListener('submit', function (e){
// //             e.preventDefault

// //             let name = document.getElementById('studentName').value;
// //             let totalScore = 0;
// //             for (let i = 1; i <= 5; i++) {
// //                 totalScore = totalScore + Number(document.getElementById('score' + i).value);
// //             }
// //             let averageScore = totalScore / 5;
// //             let grade;

// //             if (averageScore >= 70) {
// //                 grade = 'A';
// //             } else if (averageScore >= 60 && averageScore < 70) {
// //                 grade = 'B';
// //             } else if (averageScore >= 50 && averageScore < 60) {
// //                 grade = 'C';
// //             } else if (averageScore >= 45 && averageScore < 50) {
// //                 grade = 'D';
// //             } else if (averageScore >= 40 && averageScore < 45) {
// //                 grade = 'E';
// //             } else {
// //                 grade = 'F';
// //             }
// //             document.getElementById('result').innerHTML = 
// //             `<p>Student: ${name}</p>
// //             <p>Average Score: ${averageScore.toFixed(2)}</p>
// //             <p>Grade: ${grade}</p>`;
// //         });

// // document.getElementById('salaryForm').addEventListener('submit', function (e){
// //     e.preventDefault();

// //     let ename = document.getElementById('eName').value;
// //     let basic = document.getElementById('basic').value;

// //     let housing = basic * 0.10;
// //     let transport = basic * 0.05;
// //     let taxDeduction = basic *0.03;
// //     let netSalary = basic + housing + transport - taxDeduction;

// //     document.getElementById('salaryResult').innerHTML = 
// //     `<p>Employee: ${ename}</p>
// //     <p>Basic Salary: ${basic}</p>
// //     <p>Housing Allowance: ${housing.toFixed(2)}</p>
// //     <p>Transport Allowance: ${transport.toFixed(2)}</p>
// //     <p>Tax Deduction: ${taxDeduction.toFixed(2)}</p>
// //     <p>Net Salary: ${netSalary.toFixed(2)}</p>`;
// // });



// document.getElementById('gradeForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     let name = document.getElementById('studentName').value.trim();
//     let totalScore = 0;

//     for (let i = 1; i <= 5; i++) {
//         totalScore += Number(document.getElementById('score' + i).value);
//     }

//     let averageScore = totalScore / 5;
//     let grade;

//     if (averageScore >= 70) {
//         grade = 'A';
//     } else if (averageScore >= 60) {
//         grade = 'B';
//     } else if (averageScore >= 50) {
//         grade = 'C';
//     } else if (averageScore >= 45) {
//         grade = 'D';
//     } else if (averageScore >= 40) {
//         grade = 'E';
//     } else {
//         grade = 'F';
//     }

//     document.getElementById('result').innerHTML = `
//         <p>Student: ${name}</p>
//         <p>Average Score: ${averageScore.toFixed(2)}</p>
//         <p>Grade: ${grade}</p>`;
// });


// document.getElementById('salaryForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     let ename = document.getElementById('eName').value.trim();
//     let basic = Number(document.getElementById('basic').value); 

//     if (isNaN(basic) || basic <= 0) {
//         document.getElementById('salaryResult').innerHTML =
//             '<p style="color:red;">Please enter a valid basic salary.</p>';
//         return;
//     }

//     let housing = basic * 0.10;
//     let transport = basic * 0.05;
//     let taxDeduction = basic * 0.03;
//     let netSalary = basic + housing + transport - taxDeduction;

//     document.getElementById('salaryResult').innerHTML = `
//         <p>Employee: ${ename}</p>
//         <p>Basic Salary: ${basic.toFixed(2)}</p>
//         <p>Housing Allowance: ${housing.toFixed(2)}</p>
//         <p>Transport Allowance: ${transport.toFixed(2)}</p>
//         <p>Tax Deduction: ${taxDeduction.toFixed(2)}</p>
//         <p>Net Salary: ${netSalary.toFixed(2)}</p>`;
// });


// let boxes = document.getElementById('numBoxes');
// let html = '';

// for (let k = 1; k <= 15; k++) {
//     html += `<input id="n${k}" type="number" placeholder="Number ${k}" required> <br>`;
// }
// boxes.innerHTML = html;

// document.getElementById('numberForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     let numbers = [];
//     for (let i = 1; i <= 15; i++) {
//         numbers.push(Number(document.getElementById('n' + i).value));
//     }

//     let evens = [];
//     let odds = [];
//     let largest = numbers[0];
//     let smallest = numbers[0];
//     let sum = 0;

//     for (let j = 0; j < numbers.length; j++) {
//         let n = numbers[j];

//         if (n % 2 === 0) {
//             evens.push(n);
//         } else {
//             odds.push(n);
//         }

//         if (n > largest) {
//             largest = n;
//         }
//         if (n < smallest) {
//             smallest = n;
//         }

//         sum += n;
//     }

//     let average = sum / numbers.length;

//     document.getElementById('numberResult').innerHTML = `
//         <p>Even Numbers: ${evens.length ? evens.join(', ') : 'none'}</p>
//         <p>Odd Numbers: ${odds.length ? odds.join(', ') : 'none'}</p>
//         <p>Largest Number: ${largest}</p>
//         <p>Smallest Number: ${smallest}</p>
//         <p>Sum: ${sum}</p>
//         <p>Average: ${average.toFixed(2)}</p>`;
// });


// const $ = id => document.getElementById(id);
// const esc = s => String(s).replace(/[&<>"']/g, c =>
//     ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// function say(el, text, bad = false) {
//     el.textContent = text;
//     el.className = 'msg' + (bad ? ' error' : '');
// }


// let students = [];
// let editingId = null;

// function showStudents(list = students) {
//     if (!list.length) {
//         $('studentList').innerHTML = '<p class="hint">No students to show.</p>';
//         return;
//     }
//     $('studentList').innerHTML = `<div class="table-wrap"><table>
//         <tr><th>ID</th><th>Name</th><th>Email</th><th>Age</th><th>Course</th><th></th></tr>
//         ${list.map(s => `<tr>
//             <td>${esc(s.id)}</td><td>${esc(s.name)}</td><td>${esc(s.email)}</td>
//             <td>${s.age}</td><td>${esc(s.course)}</td>
//             <td class="actions">
//                 <button type="button" class="small secondary" data-act="edit" data-id="${esc(s.id)}">Edit</button>
//                 <button type="button" class="small secondary danger" data-act="del" data-id="${esc(s.id)}">Delete</button>
//             </td></tr>`).join('')}
//     </table></div>`;
// }

// $('studentForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const s = {
//         id: $('sId').value.trim(),
//         name: $('sName').value.trim(),
//         email: $('sEmail').value.trim(),
//         age: Number($('sAge').value),
//         course: $('sCourse').value.trim()
//     };

//     if (editingId === null) {                       
//         if (students.some(x => x.id === s.id)) {
//             return say($('studentMsg'), 'A student with this ID already exists.', true);
//         }
//         students.push(s);
//         say($('studentMsg'), 'Student added.');
//     } else {
//         students[students.findIndex(x => x.id === editingId)] = s;
//         editingId = null;
//         $('sId').disabled = false;
//         $('sSubmit').textContent = 'Add student';
//         say($('studentMsg'), 'Student updated.');
//     }
//     this.reset();
//     showStudents();
// });

// $('studentList').addEventListener('click', function (e) {
//     const btn = e.target.closest('button');
//     if (!btn) return;
//     const id = btn.dataset.id;

//     if (btn.dataset.act === 'del') {
//         if (!confirm('Delete this student?')) return;
//         students = students.filter(s => s.id !== id);
//         say($('studentMsg'), 'Student deleted.');
//         showStudents();
//     } else {
//         const s = students.find(x => x.id === id);
//         $('sId').value = s.id;
//         $('sName').value = s.name;
//         $('sEmail').value = s.email;
//         $('sAge').value = s.age;
//         $('sCourse').value = s.course;
//         editingId = id;
//         $('sId').disabled = true;
//         $('sSubmit').textContent = 'Update student';
//         $('studentForm').scrollIntoView({ behavior: 'smooth' });
//     }
// });

// $('sSearchBtn').addEventListener('click', function () {
//     const id = $('sSearch').value.trim();
//     const found = students.filter(s => s.id === id);
//     if (found.length) {
//         say($('studentMsg'), 'Student found.');
//         showStudents(found);
//     } else {
//         say($('studentMsg'), 'No student with that ID.', true);
//         $('studentList').innerHTML = '';
//     }
// });

// $('sAllBtn').addEventListener('click', function () {
//     say($('studentMsg'), `${students.length} student(s) registered.`);
//     showStudents();
// });

// (function () {
//     const get = id => document.getElementById(id);
//     const money = n => '₦' + Number(n).toLocaleString('en-NG', {
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2
//     });
//     const safe = s => String(s).replace(/[&<>"']/g, c =>
//         ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

//     const msg = get('invMsg');
//     const out = get('invList');
//     let products = [];

//     function say(text, bad) {
//         msg.textContent = text;
//         msg.className = 'msg' + (bad ? ' error' : '');
//     }

//     function render(list) {
//         if (!list) list = products;
//         if (list.length === 0) {
//             out.innerHTML = '<p class="hint">No products to show.</p>';
//             return;
//         }
//         let rows = '';
//         for (let i = 0; i < list.length; i++) {
//             const p = list[i];
//             rows += '<tr>' +
//                 '<td>' + safe(p.id) + '</td>' +
//                 '<td>' + safe(p.name) + '</td>' +
//                 '<td>' + money(p.price) + '</td>' +
//                 '<td class="' + (p.qty < 5 ? 'low' : '') + '">' + p.qty + '</td>' +
//                 '<td>' + money(p.price * p.qty) + '</td>' +
//                 '</tr>';
//         }
//         out.innerHTML =
//             '<div class="table-wrap"><table>' +
//             '<tr><th>ID</th><th>Product</th><th>Price</th><th>In stock</th><th>Value</th></tr>' +
//             rows +
//             '</table></div>';
//     }

//     // Add product
//     get('productForm').addEventListener('submit', function (e) {
//         e.preventDefault();
//         const p = {
//             id: get('pId').value.trim(),
//             name: get('pName').value.trim(),
//             price: Number(get('pPrice').value),
//             qty: Number(get('pQty').value)
//         };
//         const exists = products.some(x => x.id.toLowerCase() === p.id.toLowerCase());
//         if (exists) {
//             say('A product with this ID already exists.', true);
//             return;
//         }
//         products.push(p);
//         this.reset();
//         say('Product added. Total products: ' + products.length);
//         render();
//     });

//     // Display all
//     get('pAllBtn').addEventListener('click', function () {
//         say(products.length + ' product(s) in inventory.');
//         render();
//     });

//     // Total value
//     get('pTotalBtn').addEventListener('click', function () {
//         let total = 0;
//         for (let i = 0; i < products.length; i++) {
//             total += products[i].price * products[i].qty;
//         }
//         say('Total inventory value: ' + money(total));
//         render();
//     });

//     // Search
//     get('pSearchBtn').addEventListener('click', function () {
//         const q = get('pSearch').value.trim().toLowerCase();
//         if (!q) {
//             say('Type an ID or product name to search.', true);
//             return;
//         }
//         const found = products.filter(p =>
//             p.id.toLowerCase() === q || p.name.toLowerCase().includes(q));
//         if (found.length) {
//             say(found.length + ' product(s) found.');
//             render(found);
//         } else {
//             say('Product not found.', true);
//             out.innerHTML = '';
//         }
//     });


//     get('qtyForm').addEventListener('submit', function (e) {
//         e.preventDefault();
//         const id = get('uId').value.trim().toLowerCase();
//         const p = products.find(x => x.id.toLowerCase() === id);
//         if (!p) {
//             say('No product with that ID.', true);
//             return;
//         }
//         p.qty = Number(get('uQty').value);
//         this.reset();
//         say('Quantity for ' + p.name + ' updated to ' + p.qty + '.');
//         render();
//     });


//     get('pLowBtn').addEventListener('click', function () {
//         const low = products.filter(p => p.qty < 5);
//         say(low.length ? low.length + ' product(s) below 5 in stock.'
//                        : 'No product is below 5 in stock.');
//         render(low);
//     });
// })();

// // ===== QUESTION 6: SHOPPING CART =====
// (function () {
//     const get = id => document.getElementById(id);
//     const money = n => '₦' + Number(n).toLocaleString('en-NG', {
//         minimumFractionDigits: 2, maximumFractionDigits: 2
//     });

//     const catalogue = [
//         { id: 1, name: 'Rice (5kg)', price: 8500 },
//         { id: 2, name: 'Beans (2kg)', price: 4200 },
//         { id: 3, name: 'Vegetable oil (3L)', price: 9800 },
//         { id: 4, name: 'Garri (5kg)', price: 3000 },
//         { id: 5, name: 'Indomie (carton)', price: 7500 },
//         { id: 6, name: 'Sugar (1kg)', price: 2200 },
//         { id: 7, name: 'Blender', price: 25000 },
//         { id: 8, name: 'Electric kettle', price: 18000 }
//     ];
//     let cart = [];

//     const productOf = id => catalogue.find(p => p.id === id);

//     function addToCart(id) {
//         const item = cart.find(i => i.id === id);
//         if (item) item.qty++;
//         else cart.push({ id: id, qty: 1 });
//     }

//     function removeFromCart(id) {
//         cart = cart.filter(i => i.id !== id);
//     }

//     function changeQty(id, change) {
//         const item = cart.find(i => i.id === id);
//         if (!item) return;
//         item.qty += change;
//         if (item.qty <= 0) removeFromCart(id);
//     }

//     function calcTotals() {
//         let subtotal = 0;
//         cart.forEach(i => { subtotal += productOf(i.id).price * i.qty; });
//         const discount = subtotal > 50000 ? subtotal * 0.10 : 0;
//         return { subtotal: subtotal, discount: discount, total: subtotal - discount };
//     }

//     function render() {
//         if (cart.length === 0) {
//             get('cartList').innerHTML = '<p class="hint">Your cart is empty.</p>';
//             get('cartSummary').innerHTML = '';
//             return;
//         }
//         let rows = '';
//         cart.forEach(i => {
//             const p = productOf(i.id);
//             rows += '<tr><td>' + p.name + '</td><td>' + money(p.price) + '</td>' +
//                 '<td><span class="stepper">' +
//                 '<button type="button" class="secondary" data-act="minus" data-id="' + i.id + '">−</button>' +
//                 '<b>' + i.qty + '</b>' +
//                 '<button type="button" class="secondary" data-act="plus" data-id="' + i.id + '">+</button>' +
//                 '</span></td><td>' + money(p.price * i.qty) + '</td>' +
//                 '<td><button type="button" class="small secondary danger" data-act="remove" data-id="' + i.id + '">Remove</button></td></tr>';
//         });
//         get('cartList').innerHTML = '<div class="table-wrap"><table>' +
//             '<tr><th>Item</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr>' +
//             rows + '</table></div>';

//         const t = calcTotals();
//         get('cartSummary').innerHTML = '<dl class="rows">' +
//             '<div><dt>Total</dt><dd>' + money(t.subtotal) + '</dd></div>' +
//             (t.discount > 0 ? '<div><dt>Discount (10%)</dt><dd>− ' + money(t.discount) + '</dd></div>' : '') +
//             '<div class="total"><dt>Amount to pay</dt><dd>' + money(t.total) + '</dd></div></dl>';
//     }

//     // Draw the product buttons
//     get('catalog').innerHTML = catalogue.map(p =>
//         '<button type="button" class="secondary" data-add="' + p.id + '">' +
//         p.name + '<small>' + money(p.price) + '</small></button>').join('');

//     get('catalog').addEventListener('click', function (e) {
//         const btn = e.target.closest('button');
//         if (!btn) return;
//         addToCart(Number(btn.dataset.add));
//         get('checkoutOut').innerHTML = '';
//         render();
//     });

//     get('cartList').addEventListener('click', function (e) {
//         const btn = e.target.closest('button');
//         if (!btn) return;
//         const id = Number(btn.dataset.id);
//         if (btn.dataset.act === 'plus') changeQty(id, 1);
//         if (btn.dataset.act === 'minus') changeQty(id, -1);
//         if (btn.dataset.act === 'remove') removeFromCart(id);
//         render();
//     });

//     get('clearCartBtn').addEventListener('click', function () {
//         cart = [];
//         get('checkoutOut').innerHTML = '';
//         render();
//     });

//     get('checkoutBtn').addEventListener('click', function () {
//         if (cart.length === 0) {
//             get('checkoutOut').innerHTML = '<p class="msg error">Your cart is empty.</p>';
//             return;
//         }
//         const t = calcTotals();
//         let lines = '';
//         cart.forEach(i => {
//             const p = productOf(i.id);
//             lines += '<div><dt>' + p.name + ' × ' + i.qty + '</dt><dd>' + money(p.price * i.qty) + '</dd></div>';
//         });
//         get('checkoutOut').innerHTML = '<h3>Checkout summary</h3><dl class="rows">' + lines +
//             '<div><dt>Total</dt><dd>' + money(t.subtotal) + '</dd></div>' +
//             '<div><dt>Discount</dt><dd>' + (t.discount > 0 ? '− ' + money(t.discount) : 'None') + '</dd></div>' +
//             '<div class="total"><dt>Final amount</dt><dd>' + money(t.total) + '</dd></div></dl>' +
//             '<p class="msg good">Thank you for shopping with us!</p>';
//         cart = [];
//         render();
//     });

//     render();
// })();


// (function () {
//     const get = id => document.getElementById(id);
//     const money = n => '₦' + Number(n).toLocaleString('en-NG', {
//         minimumFractionDigits: 2, maximumFractionDigits: 2
//     });
//     let account = null;

//     function show(text, bad) {
//         get('bankMsg').textContent = text;
//         get('bankMsg').className = 'msg' + (bad ? ' error' : ' good');
//     }

//     function readAmount() {
//         return Number(get('amount').value);
//     }

//     function deposit(amount) {
//         if (!account) return { ok: false, text: 'Create an account first.' };
//         if (get('amount').value === '' || isNaN(amount)) return { ok: false, text: 'Enter an amount.' };
//         if (amount < 0) return { ok: false, text: 'You cannot deposit a negative amount.' };
//         if (amount === 0) return { ok: false, text: 'Deposit must be more than ₦0.' };
//         account.balance += amount;
//         return { ok: true, text: 'Deposit successful. ' + money(amount) + ' added. New balance: ' + money(account.balance) };
//     }

//     function withdraw(amount) {
//         if (!account) return { ok: false, text: 'Create an account first.' };
//         if (get('amount').value === '' || isNaN(amount)) return { ok: false, text: 'Enter an amount.' };
//         if (amount <= 0) return { ok: false, text: 'Withdrawal must be more than ₦0.' };
//         if (amount > account.balance) {
//             return { ok: false, text: 'Insufficient funds. Your balance is ' + money(account.balance) + '.' };
//         }
//         account.balance -= amount;
//         return { ok: true, text: 'Withdrawal successful. ' + money(amount) + ' taken out. New balance: ' + money(account.balance) };
//     }

//     function checkBalance() {
//         if (!account) return { ok: false, text: 'Create an account first.' };
//         return { ok: true, text: 'Your available balance is ' + money(account.balance) + '.' };
//     }

//     function displayInfo() {
//         if (!account) return { ok: false, text: 'Create an account first.' };
//         get('bankOut').innerHTML = '<dl class="rows">' +
//             '<div><dt>Account holder</dt><dd>' + account.name.replace(/</g, '&lt;') + '</dd></div>' +
//             '<div><dt>Account number</dt><dd>' + account.number + '</dd></div>' +
//             '<div class="total"><dt>Balance</dt><dd>' + money(account.balance) + '</dd></div></dl>';
//         return { ok: true, text: 'Account information displayed below.' };
//     }

//     function run(result) {
//         if (result.text.indexOf('information displayed') === -1) get('bankOut').innerHTML = '';
//         show(result.text, !result.ok);
//     }

//     get('accountForm').addEventListener('submit', function (e) {
//         e.preventDefault();
//         account = {
//             name: get('accName').value.trim(),
//             number: get('accNo').value.trim(),
//             balance: Number(get('accBal').value)
//         };
//         this.reset();
//         get('bankOut').innerHTML = '';
//         show('Account created for ' + account.name + '.', false);
//     });

//     get('depBtn').addEventListener('click', () => run(deposit(readAmount())));
//     get('wdBtn').addEventListener('click', () => run(withdraw(readAmount())));
//     get('balBtn').addEventListener('click', () => run(checkBalance()));
//     get('infoBtn').addEventListener('click', () => run(displayInfo()));
// })();


// (function () {
//     const get = id => document.getElementById(id);

//     const rules = [
//         { text: 'At least 8 characters', test: p => p.length >= 8 },
//         { text: 'One uppercase letter', test: p => /[A-Z]/.test(p) },
//         { text: 'One lowercase letter', test: p => /[a-z]/.test(p) },
//         { text: 'One number', test: p => /[0-9]/.test(p) },
//         { text: 'One special character', test: p => /[^A-Za-z0-9]/.test(p) }
//     ];


//     function validatePassword(password) {
//         const missing = rules.filter(r => !r.test(password)).map(r => r.text);
//         return { valid: missing.length === 0, missing: missing };
//     }

//     function drawChecklist() {
//         const pw = get('pw').value;
//         get('reqList').innerHTML = rules.map(r =>
//             '<li class="' + (r.test(pw) ? 'ok' : '') + '">' + r.text + '</li>').join('');
//     }

//     get('pw').addEventListener('input', drawChecklist);

//     get('showPw').addEventListener('change', function () {
//         get('pw').type = this.checked ? 'text' : 'password';
//     });

//     get('pwForm').addEventListener('submit', function (e) {
//         e.preventDefault();
//         const result = validatePassword(get('pw').value);
//         const msg = get('pwMsg');
//         if (result.valid) {
//             msg.textContent = 'Valid password.';
//             msg.className = 'msg good';
//         } else {
//             msg.textContent = 'Invalid password. Missing: ' + result.missing.join(', ') + '.';
//             msg.className = 'msg error';
//         }
//         drawChecklist();
//     });

//     drawChecklist();
// })();


// const employees = [
//   {
//     name: "Alice Johnson",
//     salary: 250000,
//     department: "IT"
//   },
//   {
//     name: "Brian Smith",
//     salary: 180000,
//     department: "Sales"
//   },
//   {
//     name: "Chika Obi",
//     salary: 320000,
//     department: "IT"
//   },
//   {
//     name: "David Williams",
//     salary: 210000,
//     department: "HR"
//   },
//   {
//     name: "Fatima Bello",
//     salary: 150000,
//     department: "Sales"
//   }
// ];

// const output = document.getElementById("output");

// // Group employees by department
// function groupEmployeesByDepartment(employeeList) {
//   return employeeList.reduce((groups, employee) => {
//     const department = employee.department;

//     if (!groups[department]) {
//       groups[department] = [];
//     }

//     groups[department].push(employee);

//     return groups;
//   }, {});
// }

// // Find employees earning above ₦200,000
// function getEmployeesAbove200000(employeeList) {
//   return employeeList.filter(employee => employee.salary > 200000);
// }

// // Calculate the average salary
// function getAverageSalary(employeeList) {
//   const totalSalary = employeeList.reduce(
//     (total, employee) => total + employee.salary,
//     0
//   );

//   return totalSalary / employeeList.length;
// }

// // Find the employee with the highest salary
// function getHighestPaidEmployee(employeeList) {
//   return employeeList.reduce((highest, employee) => {
//     return employee.salary > highest.salary ? employee : highest;
//   });
// }

// // Return only the names of employees
// function getEmployeeNames(employeeList) {
//   return employeeList.map(employee => employee.name);
// }

// // Create one employee's details in div format
// function createEmployeeDiv(employee) {
//   return `
//     <div>
//       <p><strong>Name:</strong> ${employee.name}</p>
//       <p><strong>Salary:</strong> ₦${employee.salary.toLocaleString()}</p>
//       <p><strong>Department:</strong> ${employee.department}</p>
//       <hr>
//     </div>
//   `;
// }

// // Create several employees' details in div format
// function createEmployeesDiv(employeeList) {
//   return employeeList
//     .map(employee => createEmployeeDiv(employee))
//     .join("");
// }

// // Button 1: Group employees by department
// document
//   .getElementById("departmentButton")
//   .addEventListener("click", () => {
//     const groupedEmployees = groupEmployeesByDepartment(employees);

//     let result = "<h2>Employees Grouped by Department</h2>";

//     for (const department in groupedEmployees) {
//       result += `<h3>${department} Department</h3>`;
//       result += createEmployeesDiv(groupedEmployees[department]);
//     }

//     output.innerHTML = result;
//   });

// // Button 2: Employees earning above ₦200,000
// document
//   .getElementById("aboveSalaryButton")
//   .addEventListener("click", () => {
//     const employeesAbove200000 = getEmployeesAbove200000(employees);

//     output.innerHTML = `
//       <h2>Employees Earning Above ₦200,000</h2>
//       ${createEmployeesDiv(employeesAbove200000)}
//     `;
//   });

// // Button 3: Average salary of all employees
// document
//   .getElementById("averageSalaryButton")
//   .addEventListener("click", () => {
//     const averageSalary = getAverageSalary(employees);

//     output.innerHTML = `
//       <h2>Average Salary of All Employees</h2>
//       <div>
//         <p><strong>Average Salary:</strong>
//         ₦${averageSalary.toLocaleString()}</p>
//       </div>
//     `;
//   });

// // Button 4: Employee with the highest salary
// document
//   .getElementById("highestSalaryButton")
//   .addEventListener("click", () => {
//     const highestPaidEmployee = getHighestPaidEmployee(employees);

//     output.innerHTML = `
//       <h2>Employee with the Highest Salary</h2>
//       ${createEmployeeDiv(highestPaidEmployee)}
//     `;
//   });

// // Button 5: Display only employee names
// document
//   .getElementById("namesButton")
//   .addEventListener("click", () => {
//     const employeeNames = getEmployeeNames(employees);

//     output.innerHTML = `
//       <h2>Names of All Employees</h2>
//       <div>
//         ${employeeNames
//           .map(name => `<p>${name}</p>`)
//           .join("")}
//       </div>
//     `;
//   });



// const form = document.getElementById("registrationForm");
// const result = document.getElementById("result80");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   try {
//     const name = document.getElementById("fullName").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const age = document.getElementById("age").value.trim();
//     const password = document.getElementById("password").value;

//     if (name === "") {
//       throw new Error("Error: Name cannot be empty.");
//     }

//     if (email === "") {
//       throw new Error("Error: Email cannot be empty.");
//     }

//     if (!email.includes("@")) {
//       throw new Error("Error: Email must contain @.");
//     }

//     // Allows only normal email characters and rejects emojis
//     const emailPattern =
//       /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

//     if (!emailPattern.test(email)) {
//       throw new Error("Error: Enter a valid email address without emojis.");
//     }

//     if (age === "") {
//       throw new Error("Error: Age cannot be empty.");
//     }

//     if (Number(age) < 18) {
//       throw new Error("Error: User must be 18 years or older.");
//     }

//     if (password.length < 8) {
//       throw new Error("Error: Password must be at least 8 characters.");
//     }

//     if (!/[0-9]/.test(password)) {
//       throw new Error("Error: Password must contain a number.");
//     }

//     if (!/[^A-Za-z0-9]/.test(password)) {
//       throw new Error("Error: Password must contain a special symbol.");
//     }

//     result.innerHTML = `
//       <h2>Registration Successful</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Age:</strong> ${age}</p>
//     `;

//     result.style.color = "green";
//     form.reset();

//   } catch (error) {
//     result.innerHTML = `
//       <h2>Registration Error</h2>
//       <p>${error.message}</p>
//     `;

//     result.style.color = "red";
//   }
// });

// // Addition
// export function add(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// // Subtraction
// export function subtract(firstNumber, secondNumber) {
//   return firstNumber - secondNumber;
// }

// // Multiplication
// export function multiply(firstNumber, secondNumber) {
//   return firstNumber * secondNumber;
// }

// // Division
// export function divide(firstNumber, secondNumber) {
//   if (secondNumber === 0) {
//     throw new Error("Division by zero is not allowed.");
//   }

//   return firstNumber / secondNumber;
// }


// // Addition
// export function add(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// // Subtraction
// export function subtract(firstNumber, secondNumber) {
//   return firstNumber - secondNumber;
// }

// // Multiplication
// export function multiply(firstNumber, secondNumber) {
//   return firstNumber * secondNumber;
// }

// // Division
// export function divide(firstNumber, secondNumber) {
//   if (secondNumber === 0) {
//     throw new Error("Division by zero is not allowed.");
//   }

//   return firstNumber / secondNumber;
// }



/* ===== Shared helpers ===== */
const $ = (id) => document.getElementById(id);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
function say(el, text, bad = false) {
  el.textContent = text;
  el.className = "msg" + (bad ? " error" : "");
}

/* ===== 1. Grade Calculator ===== */
document.getElementById("gradeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("studentName").value.trim();
  let totalScore = 0;

  for (let i = 1; i <= 5; i++) {
    totalScore += Number(document.getElementById("score" + i).value);
  }

  let averageScore = totalScore / 5;
  let grade;

  if (averageScore >= 70) {
    grade = "A";
  } else if (averageScore >= 60) {
    grade = "B";
  } else if (averageScore >= 50) {
    grade = "C";
  } else if (averageScore >= 45) {
    grade = "D";
  } else if (averageScore >= 40) {
    grade = "E";
  } else {
    grade = "F";
  }

  document.getElementById("result").innerHTML = `
        <p>Student: ${name}</p>
        <p>Average Score: ${averageScore.toFixed(2)}</p>
        <p>Grade: ${grade}</p>`;
});

/* ===== 2. Salary Calculator ===== */
document.getElementById("salaryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let ename = document.getElementById("eName").value.trim();
  let basic = Number(document.getElementById("basic").value);

  if (isNaN(basic) || basic <= 0) {
    document.getElementById("salaryResult").innerHTML =
      '<p style="color:red;">Please enter a valid basic salary.</p>';
    return;
  }

  let housing = basic * 0.1;
  let transport = basic * 0.05;
  let taxDeduction = basic * 0.03;
  let netSalary = basic + housing + transport - taxDeduction;

  document.getElementById("salaryResult").innerHTML = `
        <p>Employee: ${ename}</p>
        <p>Basic Salary: ${basic.toFixed(2)}</p>
        <p>Housing Allowance: ${housing.toFixed(2)}</p>
        <p>Transport Allowance: ${transport.toFixed(2)}</p>
        <p>Tax Deduction: ${taxDeduction.toFixed(2)}</p>
        <p>Net Salary: ${netSalary.toFixed(2)}</p>`;
});

/* ===== 3. Number Analysis System ===== */
let boxes = document.getElementById("numBoxes");
let html = "";

for (let k = 1; k <= 15; k++) {
  html += `<input id="n${k}" type="number" placeholder="Number ${k}" required> <br>`;
}
boxes.innerHTML = html;

document.getElementById("numberForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let numbers = [];
  for (let i = 1; i <= 15; i++) {
    numbers.push(Number(document.getElementById("n" + i).value));
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

  document.getElementById("numberResult").innerHTML = `
        <p>Even Numbers: ${evens.length ? evens.join(", ") : "none"}</p>
        <p>Odd Numbers: ${odds.length ? odds.join(", ") : "none"}</p>
        <p>Largest Number: ${largest}</p>
        <p>Smallest Number: ${smallest}</p>
        <p>Sum: ${sum}</p>
        <p>Average: ${average.toFixed(2)}</p>`;
});

/* ===== 4. Student Management ===== */
let students = [];
let editingId = null;

function showStudents(list = students) {
  if (!list.length) {
    $("studentList").innerHTML = '<p class="hint">No students to show.</p>';
    return;
  }
  $("studentList").innerHTML = `<div class="table-wrap"><table>
        <tr><th>ID</th><th>Name</th><th>Email</th><th>Age</th><th>Course</th><th></th></tr>
        ${list
          .map(
            (s) => `<tr>
            <td>${esc(s.id)}</td><td>${esc(s.name)}</td><td>${esc(s.email)}</td>
            <td>${s.age}</td><td>${esc(s.course)}</td>
            <td class="actions">
                <button type="button" class="small secondary" data-act="edit" data-id="${esc(s.id)}">Edit</button>
                <button type="button" class="small secondary danger" data-act="del" data-id="${esc(s.id)}">Delete</button>
            </td></tr>`
          )
          .join("")}
    </table></div>`;
}

$("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const s = {
    id: $("sId").value.trim(),
    name: $("sName").value.trim(),
    email: $("sEmail").value.trim(),
    age: Number($("sAge").value),
    course: $("sCourse").value.trim(),
  };

  if (editingId === null) {
    if (students.some((x) => x.id === s.id)) {
      return say($("studentMsg"), "A student with this ID already exists.", true);
    }
    students.push(s);
    say($("studentMsg"), "Student added.");
  } else {
    students[students.findIndex((x) => x.id === editingId)] = s;
    editingId = null;
    $("sId").disabled = false;
    $("sSubmit").textContent = "Add student";
    say($("studentMsg"), "Student updated.");
  }
  this.reset();
  showStudents();
});

$("studentList").addEventListener("click", function (e) {
  const btn = e.target.closest("button");
  if (!btn) return;
  const id = btn.dataset.id;

  if (btn.dataset.act === "del") {
    if (!confirm("Delete this student?")) return;
    students = students.filter((s) => s.id !== id);
    say($("studentMsg"), "Student deleted.");
    showStudents();
  } else {
    const s = students.find((x) => x.id === id);
    $("sId").value = s.id;
    $("sName").value = s.name;
    $("sEmail").value = s.email;
    $("sAge").value = s.age;
    $("sCourse").value = s.course;
    editingId = id;
    $("sId").disabled = true;
    $("sSubmit").textContent = "Update student";
    $("studentForm").scrollIntoView({ behavior: "smooth" });
  }
});

$("sSearchBtn").addEventListener("click", function () {
  const id = $("sSearch").value.trim();
  const found = students.filter((s) => s.id === id);
  if (found.length) {
    say($("studentMsg"), "Student found.");
    showStudents(found);
  } else {
    say($("studentMsg"), "No student with that ID.", true);
    $("studentList").innerHTML = "";
  }
});

$("sAllBtn").addEventListener("click", function () {
  say($("studentMsg"), `${students.length} student(s) registered.`);
  showStudents();
});

/* ===== 5. Inventory ===== */
(function () {
  const get = (id) => document.getElementById(id);
  const money = (n) =>
    "₦" +
    Number(n).toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  const safe = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  const msg = get("invMsg");
  const out = get("invList");
  let products = [];

  function say(text, bad) {
    msg.textContent = text;
    msg.className = "msg" + (bad ? " error" : "");
  }

  function render(list) {
    if (!list) list = products;
    if (list.length === 0) {
      out.innerHTML = '<p class="hint">No products to show.</p>';
      return;
    }
    let rows = "";
    for (let i = 0; i < list.length; i++) {
      const p = list[i];
      rows +=
        "<tr>" +
        "<td>" +
        safe(p.id) +
        "</td>" +
        "<td>" +
        safe(p.name) +
        "</td>" +
        "<td>" +
        money(p.price) +
        "</td>" +
        '<td class="' +
        (p.qty < 5 ? "low" : "") +
        '">' +
        p.qty +
        "</td>" +
        "<td>" +
        money(p.price * p.qty) +
        "</td>" +
        "</tr>";
    }
    out.innerHTML =
      '<div class="table-wrap"><table>' +
      "<tr><th>ID</th><th>Product</th><th>Price</th><th>In stock</th><th>Value</th></tr>" +
      rows +
      "</table></div>";
  }

  // Add product
  get("productForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const p = {
      id: get("pId").value.trim(),
      name: get("pName").value.trim(),
      price: Number(get("pPrice").value),
      qty: Number(get("pQty").value),
    };
    const exists = products.some(
      (x) => x.id.toLowerCase() === p.id.toLowerCase()
    );
    if (exists) {
      say("A product with this ID already exists.", true);
      return;
    }
    products.push(p);
    this.reset();
    say("Product added. Total products: " + products.length);
    render();
  });

  // Display all
  get("pAllBtn").addEventListener("click", function () {
    say(products.length + " product(s) in inventory.");
    render();
  });

  // Total value
  get("pTotalBtn").addEventListener("click", function () {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price * products[i].qty;
    }
    say("Total inventory value: " + money(total));
    render();
  });

  // Search
  get("pSearchBtn").addEventListener("click", function () {
    const q = get("pSearch").value.trim().toLowerCase();
    if (!q) {
      say("Type an ID or product name to search.", true);
      return;
    }
    const found = products.filter(
      (p) => p.id.toLowerCase() === q || p.name.toLowerCase().includes(q)
    );
    if (found.length) {
      say(found.length + " product(s) found.");
      render(found);
    } else {
      say("Product not found.", true);
      out.innerHTML = "";
    }
  });

  get("qtyForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const id = get("uId").value.trim().toLowerCase();
    const p = products.find((x) => x.id.toLowerCase() === id);
    if (!p) {
      say("No product with that ID.", true);
      return;
    }
    p.qty = Number(get("uQty").value);
    this.reset();
    say("Quantity for " + p.name + " updated to " + p.qty + ".");
    render();
  });

  get("pLowBtn").addEventListener("click", function () {
    const low = products.filter((p) => p.qty < 5);
    say(
      low.length
        ? low.length + " product(s) below 5 in stock."
        : "No product is below 5 in stock."
    );
    render(low);
  });
})();

/* ===== 6. Shopping Cart ===== */
(function () {
  const get = (id) => document.getElementById(id);
  const money = (n) =>
    "₦" +
    Number(n).toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const catalogue = [
    { id: 1, name: "Rice (5kg)", price: 8500 },
    { id: 2, name: "Beans (2kg)", price: 4200 },
    { id: 3, name: "Vegetable oil (3L)", price: 9800 },
    { id: 4, name: "Garri (5kg)", price: 3000 },
    { id: 5, name: "Indomie (carton)", price: 7500 },
    { id: 6, name: "Sugar (1kg)", price: 2200 },
    { id: 7, name: "Blender", price: 25000 },
    { id: 8, name: "Electric kettle", price: 18000 },
  ];
  let cart = [];

  const productOf = (id) => catalogue.find((p) => p.id === id);

  function addToCart(id) {
    const item = cart.find((i) => i.id === id);
    if (item) item.qty++;
    else cart.push({ id: id, qty: 1 });
  }

  function removeFromCart(id) {
    cart = cart.filter((i) => i.id !== id);
  }

  function changeQty(id, change) {
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    item.qty += change;
    if (item.qty <= 0) removeFromCart(id);
  }

  function calcTotals() {
    let subtotal = 0;
    cart.forEach((i) => {
      subtotal += productOf(i.id).price * i.qty;
    });
    const discount = subtotal > 50000 ? subtotal * 0.1 : 0;
    return { subtotal: subtotal, discount: discount, total: subtotal - discount };
  }

  function render() {
    if (cart.length === 0) {
      get("cartList").innerHTML = '<p class="hint">Your cart is empty.</p>';
      get("cartSummary").innerHTML = "";
      return;
    }
    let rows = "";
    cart.forEach((i) => {
      const p = productOf(i.id);
      rows +=
        "<tr><td>" +
        p.name +
        "</td><td>" +
        money(p.price) +
        "</td>" +
        '<td><span class="stepper">' +
        '<button type="button" class="secondary" data-act="minus" data-id="' +
        i.id +
        '">−</button>' +
        "<b>" +
        i.qty +
        "</b>" +
        '<button type="button" class="secondary" data-act="plus" data-id="' +
        i.id +
        '">+</button>' +
        "</span></td><td>" +
        money(p.price * i.qty) +
        "</td>" +
        '<td><button type="button" class="small secondary danger" data-act="remove" data-id="' +
        i.id +
        '">Remove</button></td></tr>';
    });
    get("cartList").innerHTML =
      '<div class="table-wrap"><table>' +
      "<tr><th>Item</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr>" +
      rows +
      "</table></div>";

    const t = calcTotals();
    get("cartSummary").innerHTML =
      '<dl class="rows">' +
      "<div><dt>Total</dt><dd>" +
      money(t.subtotal) +
      "</dd></div>" +
      (t.discount > 0
        ? '<div><dt>Discount (10%)</dt><dd>− ' + money(t.discount) + "</dd></div>"
        : "") +
      '<div class="total"><dt>Amount to pay</dt><dd>' +
      money(t.total) +
      "</dd></div></dl>";
  }

  // Draw the product buttons
  get("catalog").innerHTML = catalogue
    .map(
      (p) =>
        '<button type="button" class="secondary" data-add="' +
        p.id +
        '">' +
        p.name +
        "<small>" +
        money(p.price) +
        "</small></button>"
    )
    .join("");

  get("catalog").addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;
    addToCart(Number(btn.dataset.add));
    get("checkoutOut").innerHTML = "";
    render();
  });

  get("cartList").addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (btn.dataset.act === "plus") changeQty(id, 1);
    if (btn.dataset.act === "minus") changeQty(id, -1);
    if (btn.dataset.act === "remove") removeFromCart(id);
    render();
  });

  get("clearCartBtn").addEventListener("click", function () {
    cart = [];
    get("checkoutOut").innerHTML = "";
    render();
  });

  get("checkoutBtn").addEventListener("click", function () {
    if (cart.length === 0) {
      get("checkoutOut").innerHTML =
        '<p class="msg error">Your cart is empty.</p>';
      return;
    }
    const t = calcTotals();
    let lines = "";
    cart.forEach((i) => {
      const p = productOf(i.id);
      lines +=
        "<div><dt>" +
        p.name +
        " × " +
        i.qty +
        "</dt><dd>" +
        money(p.price * i.qty) +
        "</dd></div>";
    });
    get("checkoutOut").innerHTML =
      "<h3>Checkout summary</h3><dl class=\"rows\">" +
      lines +
      "<div><dt>Total</dt><dd>" +
      money(t.subtotal) +
      "</dd></div>" +
      "<div><dt>Discount</dt><dd>" +
      (t.discount > 0 ? "− " + money(t.discount) : "None") +
      "</dd></div>" +
      '<div class="total"><dt>Final amount</dt><dd>' +
      money(t.total) +
      "</dd></div></dl>" +
      '<p class="msg good">Thank you for shopping with us!</p>';
    cart = [];
    render();
  });

  render();
})();

/* ===== 7. Bank Account ===== */
(function () {
  const get = (id) => document.getElementById(id);
  const money = (n) =>
    "₦" +
    Number(n).toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  let account = null;

  function show(text, bad) {
    get("bankMsg").textContent = text;
    get("bankMsg").className = "msg" + (bad ? " error" : " good");
  }

  function readAmount() {
    return Number(get("amount").value);
  }

  function deposit(amount) {
    if (!account) return { ok: false, text: "Create an account first." };
    if (get("amount").value === "" || isNaN(amount))
      return { ok: false, text: "Enter an amount." };
    if (amount < 0)
      return { ok: false, text: "You cannot deposit a negative amount." };
    if (amount === 0) return { ok: false, text: "Deposit must be more than ₦0." };
    account.balance += amount;
    return {
      ok: true,
      text:
        "Deposit successful. " +
        money(amount) +
        " added. New balance: " +
        money(account.balance),
    };
  }

  function withdraw(amount) {
    if (!account) return { ok: false, text: "Create an account first." };
    if (get("amount").value === "" || isNaN(amount))
      return { ok: false, text: "Enter an amount." };
    if (amount <= 0)
      return { ok: false, text: "Withdrawal must be more than ₦0." };
    if (amount > account.balance) {
      return {
        ok: false,
        text:
          "Insufficient funds. Your balance is " + money(account.balance) + ".",
      };
    }
    account.balance -= amount;
    return {
      ok: true,
      text:
        "Withdrawal successful. " +
        money(amount) +
        " taken out. New balance: " +
        money(account.balance),
    };
  }

  function checkBalance() {
    if (!account) return { ok: false, text: "Create an account first." };
    return {
      ok: true,
      text: "Your available balance is " + money(account.balance) + ".",
    };
  }

  function displayInfo() {
    if (!account) return { ok: false, text: "Create an account first." };
    get("bankOut").innerHTML =
      '<dl class="rows">' +
      "<div><dt>Account holder</dt><dd>" +
      account.name.replace(/</g, "&lt;") +
      "</dd></div>" +
      "<div><dt>Account number</dt><dd>" +
      account.number +
      "</dd></div>" +
      '<div class="total"><dt>Balance</dt><dd>' +
      money(account.balance) +
      "</dd></div></dl>";
    return { ok: true, text: "Account information displayed below." };
  }

  function run(result) {
    if (result.text.indexOf("information displayed") === -1)
      get("bankOut").innerHTML = "";
    show(result.text, !result.ok);
  }

  get("accountForm").addEventListener("submit", function (e) {
    e.preventDefault();
    account = {
      name: get("accName").value.trim(),
      number: get("accNo").value.trim(),
      balance: Number(get("accBal").value),
    };
    this.reset();
    get("bankOut").innerHTML = "";
    show("Account created for " + account.name + ".", false);
  });

  get("depBtn").addEventListener("click", () => run(deposit(readAmount())));
  get("wdBtn").addEventListener("click", () => run(withdraw(readAmount())));
  get("balBtn").addEventListener("click", () => run(checkBalance()));
  get("infoBtn").addEventListener("click", () => run(displayInfo()));
})();

/* ===== 8. Password Validator ===== */
(function () {
  const get = (id) => document.getElementById(id);

  const rules = [
    { text: "At least 8 characters", test: (p) => p.length >= 8 },
    { text: "One uppercase letter", test: (p) => /[A-Z]/.test(p) },
    { text: "One lowercase letter", test: (p) => /[a-z]/.test(p) },
    { text: "One number", test: (p) => /[0-9]/.test(p) },
    { text: "One special character", test: (p) => /[^A-Za-z0-9]/.test(p) },
  ];

  function validatePassword(password) {
    const missing = rules.filter((r) => !r.test(password)).map((r) => r.text);
    return { valid: missing.length === 0, missing: missing };
  }

  function drawChecklist() {
    const pw = get("pw").value;
    get("reqList").innerHTML = rules
      .map((r) => '<li class="' + (r.test(pw) ? "ok" : "") + '">' + r.text + "</li>")
      .join("");
  }

  get("pw").addEventListener("input", drawChecklist);

  get("showPw").addEventListener("change", function () {
    get("pw").type = this.checked ? "text" : "password";
  });

  get("pwForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const result = validatePassword(get("pw").value);
    const msg = get("pwMsg");
    if (result.valid) {
      msg.textContent = "Valid password.";
      msg.className = "msg good";
    } else {
      msg.textContent =
        "Invalid password. Missing: " + result.missing.join(", ") + ".";
      msg.className = "msg error";
    }
    drawChecklist();
  });

  drawChecklist();
})();

/* ===== 9. Employee Data Processing ===== */
const employees = [
  { name: "Alice Johnson", salary: 250000, department: "IT" },
  { name: "Brian Smith", salary: 180000, department: "Sales" },
  { name: "Chika Obi", salary: 320000, department: "IT" },
  { name: "David Williams", salary: 210000, department: "HR" },
  { name: "Fatima Bello", salary: 150000, department: "Sales" },
];

const output = document.getElementById("output");

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

function getEmployeesAbove200000(employeeList) {
  return employeeList.filter((employee) => employee.salary > 200000);
}

function getAverageSalary(employeeList) {
  const totalSalary = employeeList.reduce(
    (total, employee) => total + employee.salary,
    0
  );
  return totalSalary / employeeList.length;
}

function getHighestPaidEmployee(employeeList) {
  return employeeList.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee : highest;
  });
}

function getEmployeeNames(employeeList) {
  return employeeList.map((employee) => employee.name);
}

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

function createEmployeesDiv(employeeList) {
  return employeeList.map((employee) => createEmployeeDiv(employee)).join("");
}

document.getElementById("departmentButton").addEventListener("click", () => {
  const groupedEmployees = groupEmployeesByDepartment(employees);
  let result = "<h2>Employees Grouped by Department</h2>";
  for (const department in groupedEmployees) {
    result += `<h3>${department} Department</h3>`;
    result += createEmployeesDiv(groupedEmployees[department]);
  }
  output.innerHTML = result;
});

document.getElementById("aboveSalaryButton").addEventListener("click", () => {
  const employeesAbove200000 = getEmployeesAbove200000(employees);
  output.innerHTML = `
      <h2>Employees Earning Above ₦200,000</h2>
      ${createEmployeesDiv(employeesAbove200000)}
    `;
});

document.getElementById("averageSalaryButton").addEventListener("click", () => {
  const averageSalary = getAverageSalary(employees);
  output.innerHTML = `
      <h2>Average Salary of All Employees</h2>
      <div>
        <p><strong>Average Salary:</strong>
        ₦${averageSalary.toLocaleString()}</p>
      </div>
    `;
});

document.getElementById("highestSalaryButton").addEventListener("click", () => {
  const highestPaidEmployee = getHighestPaidEmployee(employees);
  output.innerHTML = `
      <h2>Employee with the Highest Salary</h2>
      ${createEmployeeDiv(highestPaidEmployee)}
    `;
});

document.getElementById("namesButton").addEventListener("click", () => {
  const employeeNames = getEmployeeNames(employees);
  output.innerHTML = `
      <h2>Names of All Employees</h2>
      <div>
        ${employeeNames.map((name) => `<p>${name}</p>`).join("")}
      </div>
    `;
});

/* ===== 10. User Registration Form ===== */
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
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

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

/* ===== 11. Mathematical Utility Application ===== */
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return firstNumber / secondNumber;
}

function getMathInputs() {
  const first = Number(document.getElementById("firstNumber").value);
  const second = Number(document.getElementById("secondNumber").value);
  return { first, second };
}

function showMathResult(label, value) {
  document.getElementById("result90").innerHTML = `<p><strong>${label}:</strong> ${value}</p>`;
}

document.getElementById("addButton").addEventListener("click", function () {
  const { first, second } = getMathInputs();
  showMathResult("Addition", add(first, second));
});

document.getElementById("subtractButton").addEventListener("click", function () {
  const { first, second } = getMathInputs();
  showMathResult("Subtraction", subtract(first, second));
});

document.getElementById("multiplyButton").addEventListener("click", function () {
  const { first, second } = getMathInputs();
  showMathResult("Multiplication", multiply(first, second));
});

document.getElementById("divideButton").addEventListener("click", function () {
  const { first, second } = getMathInputs();
  try {
    showMathResult("Division", divide(first, second));
  } catch (error) {
    document.getElementById("result90").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
});


function runDemo() {
    const output = document.getElementById('outputjson');

    // 1. Create objects
    const users = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com" },
        { id: 2, name: "Brian Smith", email: "brian@example.com" },
        { id: 3, name: "Chika Obi", email: "chika@example.com" },
        { id: 4, name: "David Williams", email: "david@example.com" },
        { id: 5, name: "Fatima Bello", email: "fatima@example.com" }
    ];

    // 2. Stringify
    const usersString = JSON.stringify(users, null, 2); // null, 2 for pretty print

    // 3. Parse
    const parsedUsers = JSON.parse(usersString);

    // 4. Search
    const searchEmail = "chika@example.com";
    const foundUser = parsedUsers.find(u => u.email === searchEmail);

    // 5. Display
    output.innerHTML = `
        <div class="result-box">
            <h3>Step 1 & Difference: Object vs String</h3>
            <p>The original data is a JavaScript <strong>${typeof users}</strong>.</p>
            <p>After using <code>JSON.stringify()</code>, it becomes a <strong>${typeof usersString}</strong> (a JSON string).</p>
            <p>After using <code>JSON.parse()</code>, it becomes a <strong>${typeof parsedUsers}</strong> again.</p>
        </div>

        <div class="result-box">
            <h3>Step 2: The JSON String</h3>
            <p>This is how the data looks as a JSON string:</p>
            <pre>${usersString}</pre>
        </div>

        <div class="result-box">
            <h3>Step 3: Search Result</h3>
            <p>Searching for user with email: <strong>${searchEmail}</strong></p>
            ${foundUser
                ? `<p class="success">User Found!</p>
                   <p><strong>Name:</strong> ${foundUser.name}<br>
                      <strong>Email:</strong> ${foundUser.email}<br>
                      <strong>ID:</strong> ${foundUser.id}</p>`
                : `<p style="color:red;">User not found.</p>`
            }
        </div>
    `;
}

function printQ13(message, className = "") {
            const box = document.getElementById('q13-output');
            box.innerHTML += `<p class="${className}">${message}</p>`;
            box.scrollTop = box.scrollHeight; // Auto-scroll to bottom
        }

        // The Promise Functions
        function receiveOrder() {
            return new Promise((resolve) => {
                printQ13("1. Receiving customer's order...");
                setTimeout(() => resolve("Order #1001"), 1000);
            });
        }

        function verifyOrder(orderId) {
            return new Promise((resolve) => {
                printQ13(`2. Verifying order ${orderId}...`);
                setTimeout(() => resolve(orderId), 1000);
            });
        }

        function processPayment(orderId, shouldFail) {
            return new Promise((resolve, reject) => {
                printQ13(`3. Processing payment for ${orderId}...`);
                setTimeout(() => {
                    if (shouldFail) {
                        reject("Payment Failed: Insufficient funds.");
                    } else {
                        resolve(orderId);
                    }
                }, 1500);
            });
        }

        function confirmOrder(orderId) {
            return new Promise((resolve) => {
                printQ13(`4. Confirming order ${orderId}...`);
                setTimeout(() => resolve(`Order ${orderId} is successfully confirmed!`), 1000);
            });
        }

        // Main function that uses .then() and .catch()
        function runOrderSystem(simulateFailure) {
            const box = document.getElementById('q13-output');
            box.innerHTML = ""; // Clear previous output
            printQ13("--- Starting Order Process ---");

            receiveOrder()
                .then(orderId => verifyOrder(orderId))
                .then(orderId => processPayment(orderId, simulateFailure))
                .then(orderId => confirmOrder(orderId))
                .then(finalMessage => {
                    printQ13(finalMessage, "success");
                    printQ13("--- Order Process Complete ---");
                })
                .catch(error => {
                    printQ13(`ERROR: ${error}`, "error");
                    printQ13("--- Order Process Halted ---");
                });
        }


        // ==========================================
        // QUESTION 14 CODE
        // ==========================================

        async function fetchUsersAPI() {
            const box = document.getElementById('q14-output');
            box.innerHTML = "<p><em>Fetching data from API, please wait...</em></p>";
            
            const url = "https://jsonplaceholder.typicode.com/users";

            try {
                // 1. Fetch data
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }

                const users = await response.json();

                // 2. Display names and emails
                let html = "<h3>All Users:</h3><ul>";
                users.forEach(user => {
                    html += `<li><strong>${user.name}</strong> (${user.email})</li>`;
                });
                html += "</ul><hr>";

                // 3 & 4. Search for a user by email
                const searchEmail = "Nathan@yesenia.net"; // A real email from the API
                html += `<h3>Searching for: ${searchEmail}</h3>`;

                const foundUser = users.find(user => user.email.toLowerCase() === searchEmail.toLowerCase());

                if (foundUser) {
                    html += `<p class="success">User Found: ${foundUser.name} - ${foundUser.email}</p>`;
                } else {
                    html += `<p class="error">Appropriate Message: User with email ${searchEmail} does not exist.</p>`;
                }

                // Test a search that doesn't exist
                const fakeEmail = "notreal@email.com";
                html += `<h3>Searching for: ${fakeEmail}</h3>`;
                const fakeUser = users.find(user => user.email === fakeEmail);

                if (!fakeUser) {
                    html += `<p class="error">Appropriate Message: User with email ${fakeEmail} does not exist.</p>`;
                }

                // Display everything on the page
                box.innerHTML = html;

            } catch (error) {
                // 5. Handle possible API errors
                box.innerHTML = `<p class="error">Failed to fetch data. Error: ${error.message}</p>`;
            }
        }



        // ==========================================
// Question 15 - User Management
// ==========================================
const userDatabase = []; 
let idCounter = 1;

function registerUser(userData) {
    if (!userData.fullName || !userData.email || !userData.age) {
        throw new Error("All fields are required.");
    }
    const ageNum = Number(userData.age);
    if (isNaN(ageNum) || ageNum < 18) {
        throw new Error("User must be at least 18 years old.");
    }
    const emailExists = userDatabase.some(
        user => user.email.toLowerCase() === userData.email.toLowerCase()
    );
    if (emailExists) {
        throw new Error("A user with this email already exists.");
    }
    const newUser = {
        id: idCounter++, 
        fullName: userData.fullName,
        email: userData.email,
        age: ageNum,
        registrationDate: new Date().toLocaleDateString()
    };
    userDatabase.push(newUser);
    return newUser;
}

function getAllUsers() { return [...userDatabase]; }
function getUserById(id) { return userDatabase.find(user => user.id === Number(id)); }

function updateUser(id, updatedData) {
    const userIndex = userDatabase.findIndex(user => user.id === Number(id));
    if (userIndex === -1) throw new Error("User not found.");
    if (!updatedData.fullName || !updatedData.email || !updatedData.age) {
        throw new Error("All fields are required.");
    }
    const ageNum = Number(updatedData.age);
    if (isNaN(ageNum) || ageNum < 18) {
        throw new Error("User must be at least 18 years old.");
    }
    const emailConflict = userDatabase.some(
        user => user.id !== Number(id) && user.email.toLowerCase() === updatedData.email.toLowerCase()
    );
    if (emailConflict) throw new Error("Email is already in use by another user.");

    userDatabase[userIndex] = {
        ...userDatabase[userIndex],
        fullName: updatedData.fullName,
        email: updatedData.email,
        age: ageNum
    };
    return userDatabase[userIndex];
}

function deleteUser(id) {
    const userIndex = userDatabase.findIndex(user => user.id === Number(id));
    if (userIndex === -1) throw new Error("User not found.");
    userDatabase.splice(userIndex, 1);
    return true;
}

function searchUsersByName(nameQuery) {
    return userDatabase.filter(user => 
        user.fullName.toLowerCase().includes(nameQuery.toLowerCase())
    );
}

// ==========================================
// FRONTEND LOGIC
// ==========================================
const userForm = document.getElementById('userForm');
const userTableBody = document.getElementById('userTableBody');
const alertBox = document.getElementById('alertBox');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');

let messageTimeout;

function showMessage(msg, type) {
    alertBox.textContent = msg;
    alertBox.className = `message ${type}`;
    clearTimeout(messageTimeout);
    messageTimeout = setTimeout(() => { 
        alertBox.className = 'message'; 
    }, 3000);
}

function loadUsers(usersToDisplay = null) {
    const users = usersToDisplay || getAllUsers();
    userTableBody.innerHTML = ''; 

    if (users.length === 0) {
        userTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No users found.</td></tr>';
        return;
    }

    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.fullName}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>${user.registrationDate}</td>
            <td>
                <button type="button" onclick="editUser(${user.id})">Edit</button>
                <button type="button" class="danger" onclick="removeUser(${user.id})">Delete</button>
            </td>
        `;
        userTableBody.appendChild(tr);
    });
}

userForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Button clicked! Attempting to register..."); // FOR DEBUGGING

    const id = document.getElementById('userId').value;
    const data = {
        fullName: document.getElementById('uFullName').value.trim(),
        email: document.getElementById('uEmail').value.trim(),
        age: document.getElementById('uAge').value.trim()
    };

    try {
        if (id) {
            updateUser(id, data);
            showMessage("User updated successfully!", "success");
        } else {
            registerUser(data);
            showMessage("User registered successfully!", "success");
        }
        resetForm();
        loadUsers(); 
        console.log("Registration successful!"); // FOR DEBUGGING
    } catch (error) {
        console.log("Error thrown:", error.message); // FOR DEBUGGING
        showMessage(error.message, "error");
    }
});

function editUser(id) {
    try {
        const user = getUserById(id);
        if (!user) throw new Error("User not found");

        document.getElementById('userId').value = user.id;
        document.getElementById('uFullName').value = user.fullName;
        document.getElementById('uEmail').value = user.email;
        document.getElementById('uAge').value = user.age;

        submitBtn.textContent = "Update User";
        cancelBtn.style.display = "inline-block";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        showMessage(error.message, "error");
    }
}

function removeUser(id) {
    if (confirm("Are you sure you want to delete this user?")) {
        try {
            deleteUser(id);
            showMessage("User deleted successfully.", "success");
            loadUsers();
        } catch (error) {
            showMessage(error.message, "error");
        }
    }
}

function searchUsers() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        loadUsers(); 
        return;
    }
    const results = searchUsersByName(query);
    loadUsers(results);
}

function resetForm() {
    userForm.reset();
    document.getElementById('userId').value = "";
    submitBtn.textContent = "Register User";
    cancelBtn.style.display = "none";
}

// Initial Load
loadUsers();