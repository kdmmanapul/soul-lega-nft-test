Scene_Title.prototype.commandWindowRect = function() {
    const ww = 500;
    const wh = 300;
    const wx = 650;
    const wy = 650;
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

// 

Scene_Title.prototype.commandContinue = function() {
    DataManager.setupNewGame();
    this._commandWindow.close();
    this.fadeOutAll();
    const register = (username,password) => {
        const domain = 'https://server.soullegacy.online:8097'; // TODO : Set your own server (domain name + port, ex : http://mynew.mmo:8097/ )
        const socket = io.connect(domain);
        // Setting up UI behavior : 
        socket.on('login_error', (data,callback) => { // Display UI error when server returns any
          if (data) {
          }
        });
        socket.on('register_success', (data,callback) => { // On succes, just display the success msg from backend
          if (data) {
            var that = this;
            let payload = { username: username };
            payload.password = password;
        
            if (payload.username.length < 4 || payload.username.length >= 25) return this.displayError("Invalid username !");
            if(payload.username.includes(" ")) return this.displayError("No spaces !");
            if(!payload.username.match(/^(?=[a-zA-Z0-9\s]{2,25}$)(?=[a-zA-Z0-9\s])(?:([\w\s*?])\1?(?!\1))+$/)) return this.displayError("No special characters.");
        
            MMO_Core.socket.on("login_success", function(data){
              if (data.err) return that.displayError("Error : " + data.err);
              // $("#ErrorPrinter").fadeOut({duration: 1000}).html("");
              MMO_Core_Player.Player = data["msg"];
        
              that.fadeOutAll();
              DataManager.setupNewGame();
              
              if(document.getElementById('LoginForm')) {
                document.getElementById('LoginForm').style.display = 'none';
              }
        
              SceneManager.goto(Scene_Map);
              MMO_Core.allowTouch = true;
              // _requestNativeFullScreen({browserOnly:true});
              setTimeout(async () => {
                setTimeout(async () => MMO_Core.socket.emit("new_message", '/count'), 1);
                MMO_Core.socket.emit("new_message", '/all logged in');
              }, 1000);
              return true;
            });
        
            MMO_Core.socket.on("login_error", function(data) {
              that.displayError(data.msg);      
            })
        
            // If you're no longer connected to socket - retry connection and then continue
            if (!MMO_Core.socket.connected) {
              MMO_Core.socket.connect();
            }
        
            MMO_Core.socket.emit("login", payload);
            // return true;
          }
        });
        // Run the registration, passing username and password as payload. 
        socket.emit('register', {username, password});
        
    };
    let randomUser = (Math.random() + 1).toString(36).substring(4);
    let randomPass = (Math.random() + 1).toString(36).substring(4);
    if (randomUser.length > 3 && randomPass.length > 3) {
        register(randomUser, randomPass);
    };
};

Scene_Title.prototype.commandNewGame = function() {
    let html = `
    <div id="LoginForm" 
        style="
            position: fixed; 
            top: 75vh; 
            left: 50vw; 
            background-color: rgba(0, 0, 139, 0.5); 
            border-radius: 8px; 
            margin: 0 auto; 
            width: 350px; 
            padding: 8px; 
            transform: translate(-50%, 0);
            z-index: 999999999999999; /* yep it's a lot but eh */ 
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
        </div>
    </div>
    `;

    document.getElementById('text_zone').innerHTML = html;
    document.getElementById("inputUsername").focus();
    
    const verifyPass = () => {
      const pwdField = document.getElementById('inputPassword');
      const pwdValidPass = !!pwdField.value.length;
      const btnConnect = document.getElementById('btnConnect');
      if (pwdValidPass) {
        btnConnect.classList.remove('disabled');
        return true;
      } else {
        btnConnect.classList.add('disabled');
        return false;
      }
    };

    // Login Connect Attempt
    const connectAttempt = () => {
        const verifyPass = () => {
            const pwdField = document.getElementById('inputPassword');
            const pwdValidPass = !!pwdField.value.length;
            const btnConnect = document.getElementById('btnConnect');
            if (pwdValidPass) {
            btnConnect.classList.remove('disabled');
            return true;
            } else {
            btnConnect.classList.add('disabled');
            return false;
            }
        };
    
        if (!verifyPass()) return;
        
        var that = this;
        let payload = { username: document.getElementById("inputUsername").value }
        payload.password = document.getElementById("inputPassword").value;
    
        if (payload.username.length < 4 || payload.username.length >= 25) return this.displayError("Invalid username !");
        if(payload.username.includes(" ")) return this.displayError("No spaces !");
        if(!payload.username.match(/^(?=[a-zA-Z0-9\s]{2,25}$)(?=[a-zA-Z0-9\s])(?:([\w\s*?])\1?(?!\1))+$/)) return this.displayError("No special characters.");
    
        MMO_Core.socket.on("login_success", function(data){
            if (data.err) return that.displayError("Error : " + data.err);
            // $("#ErrorPrinter").fadeOut({duration: 1000}).html("");
    
            MMO_Core_Player.Player = data["msg"];

            // GET AND EDIT PLAYER DETAILS SKIN
            // console.log(MMO_Core_Player.Player, 'first');

            // MMO_Core_Player.updateSkin({type: "sprite", characterName: 'Actor3', characterIndex: 0})   
            // MMO_Core_Players.refreshPlayersOnMap();

            // END EDIT PLAYER DETAILS SKIN
    
            that.fadeOutAll();
            DataManager.setupNewGame();
    
            document.getElementById('LoginForm').style.display = 'none';
    
            SceneManager.goto(Scene_Map);
            MMO_Core.allowTouch = true;
            // _requestNativeFullScreen({browserOnly:true});
            setTimeout(async () => {
            setTimeout(async () => MMO_Core.socket.emit("new_message", '/count'), 1);
            MMO_Core.socket.emit("new_message", '/all logged in');
            }, 1000);
            return true;
        });
    
        MMO_Core.socket.on("login_error", function(data) {
            that.displayError(data.msg);      
        })
    
        // If you're no longer connected to socket - retry connection and then continue
        if (!MMO_Core.socket.connected) {
            MMO_Core.socket.connect();
        }
    
        MMO_Core.socket.emit("login", payload);
    }

    //Bind commands
    var that = this;
    document.getElementById("inputUsername").addEventListener('keypress', (e) => {
      verifyPass();
      if (e.which == 13) { //enter
        connectAttempt();
      }; 
    })
    document.getElementById("inputUsername").addEventListener('keydown', (e) => {
      if (e.which == 9) { // tabulation
        e.preventDefault();
        document.getElementById("inputPassword").focus();
      }
    });
    document.getElementById('inputPassword').addEventListener('keyup', () => {
      verifyPass();
    });
    document.getElementById('inputPassword').addEventListener('keydown', (e) => {
      verifyPass();
      if (e.which == 13) { //enter
        connectAttempt();
      }; 
    });
    document.getElementById('btnConnect').addEventListener('click', () => {
      if (verifyPass()) connectAttempt()
    });
    document.getElementById('inputPassword').addEventListener('keyup', () => {
      verifyPass();
    });
    // $("#ErrorPrinter").fadeIn({duration: 1000});
    MMO_Core.allowTouch = false;
};

Scene_Title.prototype.commandOptions = function() {
    window.open("https://discord.gg/soullegacy");
};

Scene_Title.prototype.createCommandWindow = function() {
    const background = $dataSystem.titleCommandWindow.background;
    const rect = this.commandWindowRect();
    this._commandWindow = new Window_TitleCommand(rect);
    this._commandWindow.setBackgroundType(background);
    this._commandWindow.setHandler("login", this.commandNewGame.bind(this));
    this._commandWindow.setHandler("playAsGuest", this.commandContinue.bind(this));
    this._commandWindow.setHandler("options", this.commandOptions.bind(this));
    this.addWindow(this._commandWindow);
};