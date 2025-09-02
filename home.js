const validPin = 1234;
document.getElementById("add-money-btn").addEventListener("click", function(e) {
  e.preventDefault();
  const bank = document.getElementById("bank").value;
  const accountNumber = document.getElementById("account-number").value;
  const addAmount = parseInt(document.getElementById("add-amount").value);
  const addPin = parseInt(document.getElementById("add-pin").value);
  const availableBalance = parseInt(document.getElementById("available-balance").innerText);

  console.log(bank, accountNumber, addAmount, addPin, availableBalance);

      if(accountNumber.length < 11) {
          alert("Please enter a valid account number");
          return;
      }

      if(addPin !== validPin) {
          alert("Please enter a valid PIN");
          return;
      }

  const totalNewAvailableBalance = addAmount + availableBalance;
  document.getElementById("available-balance").innerText = totalNewAvailableBalance;
});

// Cashout money feature
document.getElementById("withdraw-money-btn").addEventListener("click", function(e) {
  e.preventDefault();
  const agentNumber = document.getElementById("agent-number").value;
  const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value);
  const withdrawPin = parseInt(document.getElementById("withdraw-pin").value);
  const availableBalance = parseInt(document.getElementById("available-balance").innerText);

  if(agentNumber.length < 11) {
      alert("Please enter a valid agent number");
      return;
  }

  if(withdrawPin !== validPin) {
      alert("Please enter a valid PIN");
      return;
  }

  if(withdrawAmount > availableBalance) {
      alert("Insufficient balance");
      return;
  }

  const totalNewAvailableBalance = availableBalance - withdrawAmount;
  document.getElementById("available-balance").innerText = totalNewAvailableBalance;
});

// toggling feature
const addMoneyButton = document.getElementById("add-money-button");
const cashOutButton = document.getElementById("cash-out-button");
const addMoneyForm = document.getElementById("add-money-form");
const cashOutForm = document.getElementById("cash-out-form");

addMoneyButton.addEventListener("click", function() {
  addMoneyForm.style.display = "block";
  cashOutForm.style.display = "none";
});

cashOutButton.addEventListener("click", function() {
  addMoneyForm.style.display = "none";
  cashOutForm.style.display = "block";
});