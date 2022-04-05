import SoulLegacyTokenABI from "./sLegacyToken.js"

document.addEventListener("DOMContentLoaded", () => {
  const web3 = new Web3(window.ethereum)

  document.getElementById("load_button").addEventListener("click", async () => {
    const contract = new web3.eth.Contract(SoulLegacyTokenABI, "0x9E9E4a52E25774Cb9d234170A5A5c3d7Af387a12")
    const walletAddress = document.getElementById("wallet_address").innerText
    contract.defaultAccount = walletAddress
    const sLegacyLegendBalance = await contract.methods.balanceOf(walletAddress).call()
    document.getElementById("nfts").innerHTML = ""
    document.getElementById("total-balance").innerHTML = `You have a total of ${sLegacyLegendBalance} Soul Legacy Legend NFTs.`;

    // Register Form
    var el = document.getElementById("formRegister");
    var content;
    if (sLegacyLegendBalance > 0) {
        content = `<li id="allfieldsrequired" style="color: black;">All fields are required</li>
        <li id="usernameformat" style="color: black;">Username will be the first 10 digits of your Wallet's Address </li>
        <div id="inputsZone" class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input id="username" value=${contract.defaultAccount.substring(0,10)}  type="text" class="validate" disabled>
              </div>
              <div class="input-field col s6">
                <input id="password" type="password" class="validate">
                <label for="password">Password</label>
              </div>
            </div>
          </form>
        </div>
        <div id="serverResponseZone" style="color: red; margin:8px; text-align: center;" class="row"></div>
        `
        
    } else {
        content = `<p>You need atleast 1 Soul Legacy Legends NFT to make an account.</p>`
    }
    el.insertAdjacentHTML('afterbegin', content);

    for(let i = 0; i < sLegacyLegendBalance; i++) {
      const tokenId = await contract.methods.walletOfOwner(walletAddress).call()

      let tokenMetadataURI = await contract.methods.tokenURI(tokenId[i]).call()
      
      if (tokenMetadataURI.startsWith("ipfs://")) {
        tokenMetadataURI = `https://soullegacy.mypinata.cloud/ipfs/${tokenMetadataURI.split("ipfs://")[1]}`
      }
      
      const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json())
      const sLegacyLegendTokenElement = document.getElementById("nft_template").content.cloneNode(true)
      sLegacyLegendTokenElement.querySelector("p").innerText = tokenMetadata["name"]
      sLegacyLegendTokenElement.querySelector("a").href = `https://opensea.io/assets/0x9e9e4a52e25774cb9d234170a5a5c3d7af387a12/${tokenId[i]}`
    //   sLegacyLegendTokenElement.querySelector("img").src = tokenMetadata["image"]
      sLegacyLegendTokenElement.querySelector("img").src = `https://soullegacy.mypinata.cloud/ipfs/${tokenMetadata["image"].split("ipfs://")[1]}`
      sLegacyLegendTokenElement.querySelector("img").alt = tokenMetadata["description"]

      document.getElementById("nfts").append(sLegacyLegendTokenElement)
    }
  })
})