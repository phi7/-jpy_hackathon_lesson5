async function myFunction() {
  const provider = await new ethers.providers.Web3Provider(window.ehereum);
  const blocknumber = await provider.getBlockNumber();
  alert(blocknumber);
} 
