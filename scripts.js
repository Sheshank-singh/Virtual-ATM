function transferFunds() {
  const accountNumber = document.getElementById('accountNumber').value;
  const transferAmount = document.getElementById('transferAmount').value;

  if (accountNumber === '' || transferAmount === '') {
    document.getElementById('transferMessage').innerHTML = "Please fill all required fields!";
    document.getElementById('transferMessage').style.color = "red";
    return;
  }

  if (accountNumber.length !== 10) {
    document.getElementById('transferMessage').innerHTML = "Account number must be 10 digits.";
    document.getElementById('transferMessage').style.color = "red";
    return;
  }

  if (parseFloat(transferAmount) <= 0) {
    document.getElementById('transferMessage').innerHTML = "Invalid amount!";
    document.getElementById('transferMessage').style.color = "red";
    return;
  }

  // Show success modal after transfer is successful
  document.getElementById('confirmationModal').style.display = "block";

  // Clear form fields
  document.getElementById('transferForm').reset();
}

function addMoney() {
  const addAmount = document.getElementById('addAmount').value;

  if (addAmount === '' || parseFloat(addAmount) < 10) {
    document.getElementById('addMoneyMessage').innerHTML = "Minimum amount to add is $10!";
    document.getElementById('addMoneyMessage').style.color = "red";
    return;
  }

  // Show OTP modal after form is submitted
  document.getElementById('otpModal').style.display = "block";
}

function confirmOtp() {
  const otp = document.getElementById('otpInput').value;

  if (otp === '' || otp.length !== 6) {
    document.getElementById('otpMessage').innerHTML = "OTP must be 6 digits!";
    document.getElementById('otpMessage').style.color = "red";
    return;
  }

  // Hide OTP modal and show success message
  document.getElementById('otpModal').style.display = "none";
  document.getElementById('addMoneyMessage').innerHTML = "Money added successfully!";
  document.getElementById('addMoneyMessage').style.color = "green";

  // Clear form fields
  document.getElementById('addMoneyForm').reset();
}

function closeOtpModal() {
  document.getElementById('otpModal').style.display = "none";
}

function closeModal() {
  document.getElementById('confirmationModal').style.display = "none";
}
