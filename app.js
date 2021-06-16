const convert = (currency) => {
  let num;

  if (currency == 'DKK') {
    num = (document.getElementById('dkk').value * 3.63);
    document.getElementById('czk').value = num;
  } else if (currency == 'CZK') {
    num = (document.getElementById('czk').value / 3.63);
    document.getElementById('dkk').value = num;
  } else {
    console.log('An error occurred!');
  }
}
