//=============================================================================
// BlockChain Plugin
//=============================================================================

/*:
 * @plugindesc Blockchain Plugin
 * @author @KD8112
 *
 * @help This plugin does not provide plugin commands.
 */

function BlockChain_Integration() {
    this.initialize.apply(this, arguments);
}

BlockChain_Integration.prototype = Object.create(Scene_MenuBase.prototype);
BlockChain_Integration.prototype.constructor = BlockChain_Integration;

BlockChain_Integration.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

BlockChain_Integration.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    const rect = this.commandWindowRect();
    this._customWindow = new Window_Custom(rect);
    // this.addWindow(this._customWindow);
}

BlockChain_Integration.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    this.WalletConnect();
}

BlockChain_Integration.prototype.WalletConnect = function() {
    let html = `
    <div id="LoginForm" 
        style="
            position: fixed; 
            top: 25vh; 
            left: 20vw; 
            background-color: rgba(0, 0, 0, 0); 
            border-radius: 8px; 
            margin: 0 auto; 
            width: 350px; 
            padding: 8px; 
            transform: translate(-50%, 0);
            z-index: 10; /* yep it's a lot but eh */ 
        "
    >
        <div>
            <div style="margin-bottom: 10px; margin-top: 16px">
                <input id="inputUsername" type="text" placeholder="Username" class="login-input" autocomplete="off"
                    style="
                        display: block; 
                        margin: 0 auto 8px auto; 
                        font-size: 24px;
                        background-color: rgba(0, 0, 0, 0.5);
                        color: white;
                        padding: 5px;
                    "
                />
                <input id="inputPassword" type="password" placeholder="Password" class="login-input" autocomplete="off"
                    style="
                        display: block; 
                        margin: 0 auto; 
                        font-size: 24px;
                        background-color: rgba(0, 0, 0, 0.5);
                        color: white;
                        padding: 5px;
                    "
                />
            </div>

            <div id="loginErrBox" 
                style="
                    display: block; 
                    margin: 0 auto 0 auto; 
                    text-align: center; 
                    width: 100%; 
                    font-family: Comic Sans, arial; 
                    font-size: 18px;
                "
            ></div>

            <div style="display: flex; padding: 10px; justify-content: center;">
              <div style="
                  display: block; 
                  margin: 5px; 
                  border: 0; 
                  border-radius: 10px; 
                  padding: 8px; 
                  font-size: 24px;
                  background-color: rgba(0, 0, 0, 0.5);
                  width: 120px;
                  text-align: center;
              "
              >
                <a style="color: white; text-decoration: none;" href="https://mint.soullegacy.online" target="_blank">
                  Mint
                </a>
              </div>
              <div style="
                  display: block; 
                  margin: 5px; 
                  border: 0; 
                  border-radius: 10px; 
                  padding: 8px; 
                  font-size: 24px;
                  background-color: rgba(0, 0, 0, 0.5);
                  width: 120px;
                  text-align: center;
              "
              >
                <a style="color: white; text-decoration: none;" href="./register.html" target="_blank">
                  Sign up
                </a>
              </div>
              <button id="btnConnect" 
                style="
                    display: block; 
                    margin: 5px; 
                    border: 0; 
                    border-radius: 10px; 
                    padding: 8px; 
                    font-size: 22px;
                    background-color: rgba(0, 0, 0, 0.5);;
                    color: white;
                    width: 120px;
                "
              >
                  Login
              </button>
            </div>
            <div style="display: flex; padding: 10px; justify-content: center;">
              <button id="btnGuestConnect" 
                style="
                    display: block; 
                    margin: 5px; 
                    border: 0; 
                    border-radius: 10px; 
                    padding: 8px; 
                    font-size: 22px;
                    background-color: rgba(0, 0, 0, 0.5);;
                    color: white;
                    width: 280px;
                "
              >
                  Play as Guest
              </button>
            </div>
        </div>
    </div>
    `;


    document.getElementById('text_zone').innerHTML = html;
}

BlockChain_Integration.prototype.commandWindowRect = function() {
    const ww = 1200;
    const wh = 850;
    const wx = 50;
    const wy = 50;
    return new Rectangle(wx, wy, ww, wh);
}

function Window_Custom () {
    this.initialize.apply(this, arguments);
}

Window_Custom.prototype = Object.create(Window_Base.prototype);
Window_Custom.prototype.constructor = Window_Custom;

Window_Custom.prototype.initialize = function (x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
}

// Scene Map Button Screen

Scene_Map.prototype.createBlockchainScreen = function() {
    this._blockChainScreen = new Sprite_Button("down");
    this._blockChainScreen._clickHandler = console.log('test');
    this._blockChainScreen.x = Graphics.boxWidth - 110;
    this._blockChainScreen.y = this.buttonY();
    this.addWindow(this._blockChainScreen);
};

Scene_Map.prototype.updateCallMenu = function() {
    if (this.isMenuCalled()) {
        this.menuCalling = true;
    }
    if (this.menuCalling && !$gamePlayer.isMoving()) {
        SoundManager.playOk();
        SceneManager.push(BlockChain_Integration);
        Window_MenuCommand.initCommandPosition();
        $gameTemp.clearDestination();
        this._mapNameWindow.hide();
        this._waitCount = 2;
    }
};

Scene_Map.prototype.isMenuCalled = function() {
    return Input.isTriggered('down');
};
