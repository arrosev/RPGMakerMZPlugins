/*:
 * @target MZ
 * @plugindesc 【V1.0.0】独立的整队场景
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * 这个插件主要用于跳转到一个独立的，与主菜单场景分离的整队场景
 * 
 * 【V1.0.0】
 *     1. 独立于主菜单的整队场景，只是对系统默认的整队的拷贝
 *     2. 主要是用于对环形菜单插件的整队做兼容
 * 
 * 使用脚本：
 * SceneManager.push(ASSeparateFormationSceneNameSpace.Scene_SeparateFormation);
 * 或使用插件命令，打开独立整队场景
 * 
 * @param formationCommandTopMargin
 * @text 整队按钮顶部外边距
 * @desc 整队按钮顶部距离角色状态窗口的距离设置
 * @type number
 * @default 10
 * 
 * @command openSeparateFormationScene
 * @text 打开独立的整队场景
 * @desc 打开独立的整队场景
 * 
 */

const ASSeparateFormationSceneNameSpace = (() => {
    "use strict";

    const pluginName = "ASSeparateFormationScene";
    const parameters = PluginManager.parameters(pluginName);
    const formationCommandTopMargin = Number(parameters.formationCommandTopMargin);

    PluginManager.registerCommand(pluginName, "openSeparateFormationScene", args => {
        SceneManager.push(Scene_SeparateFormation);
    });

    class Window_FormationCommand extends Window_MenuCommand {

        makeCommandList() {
            this.addFormationCommand();
        }

    }

    class Scene_SeparateFormation extends Scene_MenuBase {

        constructor() {
            super();
        }

        initialize() {
            Scene_MenuBase.prototype.initialize.call(this);
        }

        create() {
            Scene_MenuBase.prototype.create.call(this);
            this.createCommandWindow();
            this.createStatusWindow();
        }

        start() {
            Scene_MenuBase.prototype.start.call(this);
            this._statusWindow.refresh();
        }

        goldWindowRect() {
            const ww = this.mainCommandWidth();
            const wh = this.calcWindowHeight(1, true);
            const wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;
            const wy = this.mainAreaBottom() - wh;
            return new Rectangle(wx, wy, ww, wh);
        }

        commandWindowRect() {
            const ww = this.mainCommandWidth();
            const wh = this.calcWindowHeight(1, true);
            const wx = (Graphics.boxWidth - ww) / 2.0;
            const wy = this.mainAreaTop() + this.mainAreaHeight() + formationCommandTopMargin;
            return new Rectangle(wx, wy, ww, wh);
        }

        createCommandWindow() {
            const rect = this.commandWindowRect();
            const commandWindow = new Window_FormationCommand(rect);
            commandWindow.setHandler("formation", this.commandFormation.bind(this));
            commandWindow.setHandler("cancel", this.popScene.bind(this));
            this.addWindow(commandWindow);
            this._commandWindow = commandWindow;
        }

        statusWindowRect() {
            const ww = Graphics.boxWidth - this.mainCommandWidth();
            const wh = this.mainAreaHeight();
            const wx = (Graphics.boxWidth - ww) / 2.0;
            const wy = this.mainAreaTop();
            return new Rectangle(wx, wy, ww, wh);
        }

        createStatusWindow() {
            const rect = this.statusWindowRect();
            this._statusWindow = new Window_MenuStatus(rect);
            this.addWindow(this._statusWindow);
        }

        commandFormation() {
            this._statusWindow.setFormationMode(true);
            this._statusWindow.selectLast();
            this._statusWindow.activate();
            this._statusWindow.setHandler("ok", this.onFormationOk.bind(this));
            this._statusWindow.setHandler("cancel", this.onFormationCancel.bind(this));
        };

        onFormationOk() {
            const index = this._statusWindow.index();
            const pendingIndex = this._statusWindow.pendingIndex();
            if (pendingIndex >= 0) {
                $gameParty.swapOrder(index, pendingIndex);
                this._statusWindow.setPendingIndex(-1);
                this._statusWindow.redrawItem(index);
            } else {
                this._statusWindow.setPendingIndex(index);
            }
            this._statusWindow.activate();
        };

        onFormationCancel() {
            if (this._statusWindow.pendingIndex() >= 0) {
                this._statusWindow.setPendingIndex(-1);
                this._statusWindow.activate();
            } else {
                this._statusWindow.deselect();
                this._commandWindow.activate();
            }
        };

    }

    return {
        Scene_SeparateFormation
    };

})();