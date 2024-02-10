/*Problem-1 */
function calculateMoney(numberOfTickets) {

    const ticketPrice = 120;
    const doormanSalary = 500;
    const staffcost = 50;
    const totalStaffcost = 8;
    const totalIncome = numberOfTickets * ticketPrice;
    const totalExpenses = doormanSalary + (staffcost * totalStaffcost);
    const remainingMoney = totalIncome - totalExpenses;

    if (numberOfTickets < 0) {
        return "Error: The number of tickets sold cannot be negative.";
    }

    return `Total income: ${totalIncome} taka, Total expenses: ${totalExpenses} taka, Remaining money: ${remainingMoney} taka`;
}


/*Problem-2 */
function checkName(name) {

    if (typeof name !== "string") {
        return "invalid";
    }

    if (name.endsWith("a") || name.endsWith("y") || name.endsWith("i") || name.endsWith("e") || name.endsWith("o") || name.endsWith("u") || name.endsWith("w")) {
        return "Bad Name";
    }

    return "Good Name";
}


/*Problem-3 */
function deleteInvalids(arr) {

    if (!Array.isArray(arr)) {
        return "Error: Input is not an array";
    }
    return arr.filter(item => typeof item === 'number' && !isNaN(item));
}

/*Problem-4 */
function password(obj) {
    if (!obj.hasOwnProperty("name") || !obj.hasOwnProperty("birthYear") || !obj.hasOwnProperty("siteName")) {
        return "Invalid";
    }

    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName;
    const password = `${siteName}#${name}@${birthYear}`;

    return password;
}


/*Problem-5*/
    function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return "Invalid input";
    }
    const totalIncome = arr.reduce((sum, payment) => {
        if (payment >= 3000) {
            return sum + payment * 0.8;
        } else {
            return sum + payment;
        }
     }, 0);
    const savings = totalIncome - livingCost;

    return savings >= 0 ? savings : "earn more";
    }

