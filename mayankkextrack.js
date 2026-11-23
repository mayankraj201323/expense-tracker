let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function displayExpenses() {
    expenseList.innerHTML = "";

    let total = 0;

    if (expenses.length === 0) {
        expenseList.innerHTML =
            '<p class="empty">No expenses added yet.</p>';
    }

    expenses.forEach((expense, index) => {
        total += expense.amount;

        const item = document.createElement("div");
        item.className = "expense-item";

        const info = document.createElement("div");
        info.className = "expense-info";

        const description = document.createElement("strong");
        description.textContent = expense.description;

        const details = document.createElement("p");
        details.textContent =
            `${expense.date} • ${expense.category}`;

        info.append(description, details);

        const right = document.createElement("div");
        right.className = "expense-right";

        const amount = document.createElement("span");
        amount.className = "expense-amount";
        amount.textContent =
            "₹" + expense.amount.toFixed(2);

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            expenses.splice(index, 1);
            saveExpenses();
            displayExpenses();
        });

        right.append(amount, deleteButton);
        item.append(info, right);

        expenseList.appendChild(item);
    });

    totalDisplay.textContent =
        "₹" + total.toFixed(2);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description =
        document.getElementById("description").value.trim();
    const amount =
        Number(document.getElementById("amount").value);

    if (!date || !category || !description || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    expenses.push({
        date,
        category,
        description,
        amount
    });

    saveExpenses();
    displayExpenses();

    form.reset();
});

document.getElementById("clear-all").addEventListener("click", function() {
    if (confirm("Are you sure you want to delete all expenses?")) {
        expenses = [];
        saveExpenses();
        displayExpenses();
    }
});

displayExpenses();