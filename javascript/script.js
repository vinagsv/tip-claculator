function calculateTip() {
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);

  const tipAmount = billAmount * (tipPercent / 100);
  const totalAmount = billAmount + tipAmount;

  document.getElementById("result").innerText = `Total: Rs${totalAmount.toFixed(
    2
  )}`;
}
