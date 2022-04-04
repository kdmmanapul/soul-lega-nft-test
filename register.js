import SoulLegacyTokenABI from "./sLegacyToken.js"

document.addEventListener("DOMContentLoaded", () => {
  const web3 = new Web3(window.ethereum)

  document.getElementById("load_button").addEventListener("click", async () => {
    const contract = new web3.eth.Contract(SoulLegacyTokenABI, "0xd7A1358066C4d20C56Cb4f31C3d0bC516218bE59")
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
        tokenMetadataURI = `https://gateway.pinata.cloud/ipfs/${tokenMetadataURI.split("ipfs://")[1]}`
      }
      
      const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json())
      const sLegacyLegendTokenElement = document.getElementById("nft_template").content.cloneNode(true)
      sLegacyLegendTokenElement.querySelector("p").innerText = tokenMetadata["name"]
      sLegacyLegendTokenElement.querySelector("a").href = `https://opensea.io/assets/0x45db714f24f5a313569c41683047f1d49e78ba07/${tokenId}`
    //   sLegacyLegendTokenElement.querySelector("img").src = tokenMetadata["image"]
      sLegacyLegendTokenElement.querySelector("img").src = `https://gateway.pinata.cloud/${tokenMetadata["image"].split("ipfs://")[1]}`
      sLegacyLegendTokenElement.querySelector("img").alt = tokenMetadata["description"]

      document.getElementById("nfts").append(sLegacyLegendTokenElement)
    }
  })
})