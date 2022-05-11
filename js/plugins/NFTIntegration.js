//=============================================================================
// BlockChain NFT Integration Plugin
//=============================================================================

/*:
 * @plugindesc Blockchain NFT Integration Plugin
 * @author @KD8112
 *
 * @help This plugin does not provide plugin commands.
 */

// Constants
const SoulLegacyTokenABI = [{"inputs":[{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"string","name":"_tokenSymbol","type":"string"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"uint256","name":"_maxSupply","type":"uint256"},{"internalType":"uint256","name":"_maxMintAmountPerTx","type":"uint256"},{"internalType":"string","name":"_hiddenMetadataUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hiddenMetadataUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmountPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintForAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_hiddenMetadataUri","type":"string"}],"name":"setHiddenMetadataUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintAmountPerTx","type":"uint256"}],"name":"setMaxMintAmountPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriSuffix","type":"string"}],"name":"setUriSuffix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setWhitelistMintEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"whitelistMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"whitelistMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Keyboard Shortcut
Input.keyMapper["80"] = "nftMenu";
nft_scene_map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
    nft_scene_map_update.call(this);
    if (Input.isTriggered('nftMenu')) SceneManager.push(BlockChainMenu_Integration);
};
// Keyboard Shortcut END


// Block Chain Menu
function BlockChainMenu_Integration() {
    this.initialize.apply(this, arguments);
};

BlockChainMenu_Integration.prototype = Object.create(Scene_MenuBase.prototype);
BlockChainMenu_Integration.prototype.constructor = BlockChainMenu_Integration;

BlockChainMenu_Integration.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
}

BlockChainMenu_Integration.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    const rect = this.commandWindowRect();
    this._customWindow = new Window_Custom(rect);
    // this.addWindow(this._customWindow);
    this.WalletWindow();
}

BlockChainMenu_Integration.prototype.update = function() {
    if (Input.isTriggered("cancel")) {
        htmlEmpty = ``;
        SceneManager.pop();
        document.getElementById('text_zone').innerHTML = htmlEmpty;
    }
}

// cancel Button and Help Window
BlockChainMenu_Integration.prototype.needsCancelButton = function() {
    return false;
};

BlockChainMenu_Integration.prototype.createHelpWindow = function() {
};
// END Cancel Button and Help Window 

BlockChainMenu_Integration.prototype.WalletWindow = function() {
    let html = `
    <div style="
        display: flex; 
        text-align: center; 
        position: fixed; 
        top: 5vh; 
        left: 50vw; 
        background-color: rgba(0, 0, 0, 0.3); 
        border-radius: 8px; 
        margin: 0 auto; 
        width: 1250px; 
        padding: 8px; 
        transform: translate(-50%, 0);
        z-index: 10; 
        overflow-y: auto; 
        height: 800px;
    ">
        <div style="width: 800px; text-align: center; padding-left: 50px;">
            <p id="total-balance" style="margin-top: 1rem; color: black; background-color: rgba(255, 255, 255, 0.6); font-size: 30px;"></p>
            <div id="nfts" style="display: flex; flex-wrap: wrap !important; gap: 1.75rem; padding: 1.75rem; background-color: rgba(255, 255, 255, 0.6); height: 750px; align-items: center; justify-content: center;">
                <p style="font-size: 40px;">Load a Collection to use a Avatar with specific Skills and Stats</p>
            </div>
        </div>
        <template id="nft_template">
            <section style="background-color: rgba(255, 255, 255, 0.7); padding: 20px;">
                <p class="font-bold bg-yellow-500 text-center rounded-t-md" style="padding: 5px; font-size: 24px;"></p>
        
                <a href="" target="_blank">
                    <img style="width: 200px; height: 200px; margin: 5;" src="" alt="">
                </a>
                <div style="text-align: center; padding: 10px;">
                    <button id="load_button_nft" style="border-radius: 15px; padding: 8px; font-size: 18px;">Use Avatar</button>
                    <button style="border-radius: 15px; padding: 8px; margin-left: 15px; font-size: 18px;">Details</button>
                </div>
            </section>
        </template>
        <div class="col" style="margin-left: 60px; ">
            <div class="row">
                <div>
                    <div class="card card-1" style="text-align: center; width: 300px; height: 750px; background-color: rgba(255, 255, 255, 0.6);">
                        <button id="enableEthereumButton" style="width: 200px;" class="btn waves-effect waves-light">Connect Wallet</button>
                        <p style="font-size: 16px; font-weight: bolder;">Account: <span id="wallet_address" class="showAccount"></span></p>
                        <div style="overflow-y: scroll; height: 650px; text-align: center; background-color: rgba(255, 255, 255, 1);">
                        <table>
                            <tr>
                                <th 
                                    style="
                                    text-align: center;
                                    padding: 8px;
                                ">
                                    Load Collections Sprites
                                </th>
                            </tr>
                            <tr>
                                <td >
                                    <img id="load_nft_list" style="object-fit: cover; height: 50px; width: 200px;" src="https://lh3.googleusercontent.com/UnO5MviIrX7afgV5jpuzDwLOZi3xbK8MBvm8fgnHX4MkoPbOqcWAxHCGwaDMT9X09D8Ng1LI0uWd1MI3kSmKGnHc64nzwXf8ZcsccQ=h600"/>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <img style="object-fit: cover; height: 50px; width: 200px;" src="https://pbs.twimg.com/profile_banners/1503620517219430405/1647532139/1500x500"/>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <img style="object-fit: cover; height: 50px; width: 200px;" src="https://lh3.googleusercontent.com/-5nkH_cDrY_dtI0GZZdUQJnEl7xDvDWm13mgX9KE2f7EBc16dBfTu6qYeJ1S8eXQypIsrWB06GGIvqcewkD3KpEPxefj2eD5ReTHrA=h600"/>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <img style="object-fit: cover; height: 50px; width: 200px;" src="https://pbs.twimg.com/profile_banners/1444937781441187842/1644429239/1500x500"/>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <img style="object-fit: cover; height: 50px; width: 200px;" src="https://pbs.twimg.com/profile_banners/1432072639774871552/1643169332/1500x500"/>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <img style="object-fit: cover; height: 50px; width: 200px;" src="https://pbs.twimg.com/profile_banners/1438550824108519426/1645232330/1500x500"/>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <img style="object-fit: cover; height: 50px; width: 200px;" src="https://pbs.twimg.com/profile_banners/1498857371547828224/1647619164/1500x500"/>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <img style="object-fit: cover; height: 50px; width: 200px;" src="https://pbs.twimg.com/profile_banners/1122468522297298945/1635524911/1500x500"/>
                                </td>
                            </tr>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

    document.getElementById('text_zone').innerHTML = html;
    
    // Javascript for NFT Integration Calls
    const web3 = new Web3(window.ethereum)
    
    const callNFT = async () => {
      const contract = new web3.eth.Contract(SoulLegacyTokenABI, "0x9E9E4a52E25774Cb9d234170A5A5c3d7Af387a12")
      const walletAddress = document.getElementById("wallet_address").innerText
      contract.defaultAccount = walletAddress
      const sLegacyLegendBalance = await contract.methods.balanceOf(walletAddress).call()
      document.getElementById("nfts").innerHTML = ""
      document.getElementById("nfts").style = "display: flex; flex-wrap: wrap !important; gap: 1.75rem; padding: 1.75rem; align-items: center; justify-content: center;"
      document.getElementById("total-balance").innerHTML = `You have a total of ${sLegacyLegendBalance} Soul Legacy Legend NFTs.`;
  
      for(let i = 0; i < sLegacyLegendBalance; i++) {
        const tokenId = await contract.methods.walletOfOwner(walletAddress).call()
  
        let tokenMetadataURI = await contract.methods.tokenURI(tokenId[i]).call()
        
        if (tokenMetadataURI.startsWith("ipfs://")) {
          tokenMetadataURI = `https://soullegacy.mypinata.cloud/ipfs/${tokenMetadataURI.split("ipfs://")[1]}`
        }
        
        const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json())
        if (document.getElementById("nft_template")) {
            const sLegacyLegendTokenElement = document.getElementById("nft_template").content.cloneNode(true)
            sLegacyLegendTokenElement.querySelector("p").innerText = tokenMetadata["name"]
            sLegacyLegendTokenElement.querySelector("a").href = `https://opensea.io/assets/0x9e9e4a52e25774cb9d234170a5a5c3d7af387a12/${tokenId[i]}`
            sLegacyLegendTokenElement.querySelector("img").src = `https://soullegacy.mypinata.cloud/ipfs/${tokenMetadata["image"].split("ipfs://")[1]}`
            sLegacyLegendTokenElement.querySelector("img").alt = tokenMetadata["description"]

            sLegacyLegendTokenElement.getElementById("load_button_nft").addEventListener("click", consoles);
            document.getElementById("nfts").append(sLegacyLegendTokenElement)
        }
      }
    }

    const callNFTTest = async () => {
        console.log(MMO_Core_Player.Player, 'first callllllll');
        const sLegacyLegendBalance = 50
        document.getElementById("nfts").innerHTML = ""
        document.getElementById("nfts").style = "display: flex; flex-wrap: wrap !important; gap: 1.75rem; padding: 1.75rem; align-items: center; justify-content: center;"
        document.getElementById("total-balance").innerHTML = `You have a total of ${sLegacyLegendBalance} Soul Legacy Legend NFTs.`;
    
        for(let i = 0; i < sLegacyLegendBalance; i++) {
          const sLegacyLegendTokenElement = document.getElementById("nft_template").content.cloneNode(true)
          sLegacyLegendTokenElement.querySelector("p").innerText = `Soul Legacy Legend #${i+1}`
          sLegacyLegendTokenElement.querySelector("a").href = `https://opensea.io/assets/0x9e9e4a52e25774cb9d234170a5a5c3d7af387a12/${i+1}`
          sLegacyLegendTokenElement.querySelector("img").src = `https://lh3.googleusercontent.com/TDTBAzyDcpffGBfGPX4AlplxXD7Q5m8GmEQvOJa_UddoySIMfmekuhy6qmsNzp3Zv6wJhbQElJ_ARadLJx7lrX-rTuyNfDlTbV-4Bg=s0`
          sLegacyLegendTokenElement.querySelector("img").alt = `empty`
          sLegacyLegendTokenElement.getElementById("load_button_nft").addEventListener("click", consoles);
          document.getElementById("nfts").append(sLegacyLegendTokenElement)
        }
      }

    const consoles = async () => {
        // GET AND EDIT PLAYER DETAILS SKIN
        console.log(MMO_Core_Player.Player, 'first');

        MMO_Core_Player.updateSkin({type: "sprite", characterName: 'Actor3', characterIndex: 0})   
        MMO_Core_Player.savePlayerClass({type: "class", classId: 2})   
        MMO_Core_Players.refreshPlayersOnMap();

        // END EDIT PLAYER DETAILS SKIN
    }

    // Connect Wallet
    const ethereumButton = document.getElementById('enableEthereumButton');
    const showAccount = document.querySelector('.showAccount');
    ethereumButton.addEventListener('click', () => {
      //Will Start the metamask extension
      getAccount();
      document.getElementById('enableEthereumButton').style.display = 'none';
    });
    async function getAccount() {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      showAccount.innerHTML = account;
    }

    document.getElementById("load_nft_list").addEventListener("click", callNFTTest)
    // })
    // END of Javascript NFT Integration Calls
}

BlockChainMenu_Integration.prototype.commandWindowRect = function() {
    const ww = 500;
    const wh = 500;
    const wx = 50;
    const wy = 50;
    return new Rectangle(wx, wy, ww, wh);
}
// BlockChain Menu END


// Window Custom
function Window_Custom () {
    this.initialize.apply(this, arguments);
}

Window_Custom.prototype = Object.create(Window_Base.prototype);
Window_Custom.prototype.constructor = Window_Custom;

Window_Custom.prototype.initialize = function (x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
}

// GET AND EDIT PLAYER DETAILS SKIN
// console.log(MMO_Core_Player.Player, 'first');

// MMO_Core_Player.updateSkin({type: "sprite", characterName: 'Actor3', characterIndex: 0})   
// MMO_Core_Players.refreshPlayersOnMap();

// END EDIT PLAYER DETAILS SKIN

// <-- TO USE COMMON EVENTS FROM RPG MAKER INTO JS CODE -->
// Event panel => Script => $gameTemp.reserveCommonEvent(ID) 