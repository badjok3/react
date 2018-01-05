const host = 'http://localhost:5000/';

async function register(name, email, password) {
    const res = await fetch(host + 'auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });
    return await res.json();
}

async function login(email, password) {
    const res = await fetch(host + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    return await res.json();
}

async function getYear(year = (new Date()).getFullYear()) {
    const res = await fetch(host + 'plan/' + year, {
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
}

async function getMonthDetails(year, month) {
    const res = await fetch(host + `plan/${year}/${month}`, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),            
        }
    });
    return await res.json();
}

async function createExpense(exp) {
    let {year, month, date, name, category, amount} = exp;
    const res = await fetch(host + `plan/${year}/${month}/expense`, {
        method: 'POST',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date,
            name,
            category,
            amount
        })
    });
    return await res.json();
}

async function changeBudget(month, year, income, budget, expenses) {
    const res = await fetch(host + `plan/${year}/${month}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
        body: JSON.stringify({
            income: +income,
            budget: +budget,
            expenses: expenses
        })
    });
    return res.json()
}

async function removeExpense(id) {
    const res = await fetch(host + `plan/expense/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),            
        }
    });
    return await res.json();
}

export { register, login, createExpense, getYear, getMonthDetails, removeExpense, changeBudget };