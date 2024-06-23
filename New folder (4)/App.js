document.getElementById('add-transaction-btn').addEventListener('click', addTransaction);

function addTransaction() {
    const name = document.getElementById('transaction-name').value;
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    const type = document.getElementById('transaction-type').value;

    if (name === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid name and amount');
        return;
    }

    const transactionList = document.getElementById('transactions');
    const li = document.createElement('li');
    li.textContent = `${name}: $${amount.toFixed(2)}`;
    li.classList.add(type);
    transactionList.appendChild(li);

    updateSummary(amount, type);

    document.getElementById('transaction-name').value = '';
    document.getElementById('transaction-amount').value = '';
    document.getElementById('transaction-type').value = 'expense';
}

function updateSummary(amount, type) {
    const totalIncomeElement = document.getElementById('total-income');
    const totalExpensesElement = document.getElementById('total-expenses');
    const balanceElement = document.getElementById('balance');

    let totalIncome = parseFloat(totalIncomeElement.textContent);
    let totalExpenses = parseFloat(totalExpensesElement.textContent);
    let balance = parseFloat(balanceElement.textContent);

    if (type === 'income') {
        totalIncome += amount;
    } else if (type === 'expense') {
        totalExpenses += amount;
    }

    balance = totalIncome - totalExpenses;

    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalExpensesElement.textContent = totalExpenses.toFixed(2);
    balanceElement.textContent = balance.toFixed(2);
}
