/*:
 * @target MZ
 * @plugindesc [V1.0.0] Event Hover Icon Plugin
 * @author Arrose
 * 
 * @url https://github.com/arrosev
 * 
 * @help
 *
 * This plugin is released under the MIT license.
 * 
 * Copyright (c) 2025 Arrose

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Place the tag <HoverIcon:talkIcon*8*1*16*0*-60> in the event notes.
 * The picture is placed in the "system" folder.
 * The tag from left to right are the image name talkIcon, with 8 columns
 * and 1 row.The animation is updated every 16 frames of the game, with 
 * an X-offset of 0 and a Y-offset of -60.
 * 
 * @noteParam HoverIcon
 * @noteRequire 1
 * @noteDir img/system/
 * @noteType file
 * @noteData events
 * 
 * @param showHoverIconInBusy
 * @text Show Hover Icon In Busy
 * @desc A hover icon is displayed when showing text or making a selection
 * @type boolean
 * @on ON
 * @off OFF
 * @default false
 *
 */

/*:zh
 * @target MZ
 * @plugindesc [V1.0.0] 事件悬浮图标插件
 * @author Arrose
 * 
 * @url https://github.com/arrosev
 * 
 * @help
 *
 * 这个插件在MIT许可下发布
 * 
 * Copyright (c) 2025 Arrose

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * <HoverIcon:talkIcon*8*1*16*0*-60>放入事件备注
 * 图片放在system文件夹内
 * 从左到右依次是图片名talkIcon，列数8，行数1，每16帧游戏循环更新一次动画，x偏移0，y偏移-60
 * 
 * @noteParam HoverIcon
 * @noteRequire 1
 * @noteDir img/system/
 * @noteType file
 * @noteData events
 * 
 * @param showHoverIconInBusy
 * @text 显示消息时显示浮动图标
 * @desc 显示文字或选择时显示浮动图标
 * @type boolean
 * @on ON
 * @off OFF
 * @default false
 *
 */

const ASEventHoverIconNameSpace = (() => {
    "use strict";

    const pluginName = "ASEventHoverIcon";
    const parameters = PluginManager.parameters(pluginName);

    const showHoverIconInBusy = parameters.showHoverIconInBusy !== "false";

    class FrameAnimationSprite extends Sprite {

        constructor(fileName, cols, rows, framesPerUpdate) {
            super();
            this._frames = [];
            const frameAnimationBitmap = ImageManager.loadSystem(fileName);
            frameAnimationBitmap.addLoadListener(() => {
                const cw = frameAnimationBitmap.width / cols;
                const ch = frameAnimationBitmap.height / rows;
                for (let i = 0; i < cols * rows; i++) {
                    const cellBitmap = new Bitmap(cw, ch);
                    const pw = frameAnimationBitmap.width / cols;
                    const ph = frameAnimationBitmap.height / rows;
                    const sx = (i % cols) * pw;
                    const sy = Math.floor(i / cols) * ph;
                    cellBitmap.blt(frameAnimationBitmap, sx, sy, pw, ph, 0, 0, cw, ch);
                    this._frames.push(cellBitmap);
                }
            });
            this._currentFrame = 0;
            this.bitmap = this._frames[0];
            this._frameCounter = 0;
            this._framesPerUpdate = framesPerUpdate;
        }

        resetFrame() {
            this._currentFrame = 0;
            this.bitmap = this._frames[0];
            this._frameCounter = 0;
        }

        update() {
            super.update();
            this._frameCounter++;
            if (this._frameCounter >= this._framesPerUpdate) {
                this._frameCounter = 0;
                this._currentFrame = (this._currentFrame + 1) % this._frames.length;
                this.bitmap = this._frames[this._currentFrame];
            }
        }

    }

    const _Sprite_Character_Initialize = Sprite_Character.prototype.initialize;
    Sprite_Character.prototype.initialize = function(character) {
        _Sprite_Character_Initialize.apply(this, arguments);
        if (this.isNeedHoverIcon()) {
            const metaArray = this._character.event().meta.HoverIcon.split("*");
            const iconName = metaArray[0];
            const cols = Number(metaArray[1]) || 0;
            const rows = Number(metaArray[2]) || 0;
            const framesPerUpdate = Number(metaArray[3]) || 0;
            const offsetX = Number(metaArray[4]);
            const offsetY = Number(metaArray[5]);
            this.hoverIconSprite = new FrameAnimationSprite(iconName, cols, rows, framesPerUpdate);
            this.hoverIconSprite.anchor.set(0.5, 0.5);
            this.hoverIconSprite.x = this.width / 2 + offsetX;
            this.hoverIconSprite.y = this.height / 2 + offsetY;
            this.hoverIconSprite.visible = false;
            this.addChild(this.hoverIconSprite);
        }
    };

    Sprite_Character.prototype.isNeedHoverIcon = function() {
        return (this._character instanceof Game_Event) && (this._character.event().meta.HoverIcon !== undefined);
    };

    Sprite_Character.prototype.isApproachingThePlayer = function(range = 1) {
        const dx = Math.abs($gamePlayer.x - this._character.x);
        const dy = Math.abs($gamePlayer.y - this._character.y);
        return (dx + dy) <= range && (dx === 0 || dy === 0);
    };

    const _Sprite_Character_Update = Sprite_Character.prototype.update;
    Sprite_Character.prototype.update = function() {
        _Sprite_Character_Update.apply(this, arguments);
        if (this.isNeedHoverIcon()) {
            if (!showHoverIconInBusy) {
                if (this.isApproachingThePlayer() && (!$gameMessage.isBusy())) {
                    if (this.hoverIconSprite.visible === false) {
                        this.hoverIconSprite.resetFrame();
                        this.hoverIconSprite.visible = true;
                    }
                } else {
                    this.hoverIconSprite.visible = false;
                }
            } else {
                if (this.isApproachingThePlayer()) {
                    if (this.hoverIconSprite.visible === false) {
                        this.hoverIconSprite.resetFrame();
                        this.hoverIconSprite.visible = true;
                    }
                } else {
                    this.hoverIconSprite.visible = false;
                }
            }
        }
    };

})();