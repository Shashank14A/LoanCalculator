document.getElementById('loan-form').addEventListener('submit', calculate);
function calculate(e) {
  const amount = document.getElementById('loan_amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly_payment');
  const totalAmount = document.getElementById('total_amount');
  const totalInterest = document.getElementById('total_interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * calculatedInterest * x) / (x - 1);

  if (principal > 0 && calculatedPayments > 0 && isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalAmount.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    document.getElementById('result').style.display = 'block';
  } else {
    showAlert('Please Enter The Value');
  }
  e.preventDefault();
}

function showAlert(error) {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  card.insertBefore(errorDiv, heading);

  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 2000);
}
