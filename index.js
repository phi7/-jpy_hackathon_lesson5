async function myFunction() {
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const blocknumber = await provider.getBlockNumber();
  alert(blocknumber);
} 
