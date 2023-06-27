const apiKey = `cqt_rQKdFYkBvYbh7WRTdykMQkvbpr9p`;
const cName = document.querySelector('.chainName');
const txHash = document.querySelector('.tnxHash');
const btn = document.querySelector('button');

btn.addEventListener('click', async (e) => {
  e.preventDefault();

  const getChain = cName.value;

  const getTnx = txHash.value;

  const apiUrl = `https://api.covalenthq.com/v1/${getChain}/transaction_v2/${getTnx}/`;

  try{
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    console.log(data);
  }
  catch (err) {
    console.log(err);
  }
});



