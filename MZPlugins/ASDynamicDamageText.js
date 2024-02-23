/*:
 * @target MZ
 * @plugindesc 【V1.0.0】以图片的字体，动态修改伤害文本样式
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 这个插件以MIT协议发布
 * 这个插件主要用于通过图片字体，动态修改伤害文本的位置，颜色等样式
 * 
 *  【V1.0.0】
 *     1. 通过插件参数伤害数字默认样式设置全局的伤害数字样式
 *     2. 通过插件参数特殊被攻击对象偏移修正设置不同对象独立的偏移修正
 *     3. 通过插件参数设置特殊属性技能数字图，比如火属性技能伤害设置红色图
 *     4. 通过插件指令局部设置某一次或几次的伤害数字样式，一般用于动作序列
 * 
 *   注意：
 *     1. 字体图片没有宽高的限制，但是字体图片必须可以横向等分为10
 *        个单元，纵向等分为5个单元，数字字体的0-9必须按序均匀放入
 *        这10个单元，闪避字体同上，但是闪避字体的MISS四个字母按序
 *        分别放入前四个单元，代码中只取前四个单元，整图从上到下依次
 *        是HP伤害，HP恢复，MP伤害，MP恢复和Miss具体参考例图或者MV
 *        的伤害图片
 *     2. 数字或Miss弹出一次算一次局部次数
 *     3. 特殊被攻击对象偏移修正是在全局或局部的基础上偏移，所以最终
 *        的偏移等于（全局 + 修正）或者（局部 + 修正）
 *     4. 如果用了VS战斗核心插件，把此插件防止在VS战斗核心之后
 * 
 * @param globalDigitsImage
 * @text 伤害数字默认样式
 * @desc 伤害数字默认样式设置
 * @default
 * @type string
 * 
 * @param defaultOffsetX
 * @text 默认x坐标偏移
 * @desc 默认x坐标偏移设置
 * @parent globalDigitsImage
 * @type string
 * @default 0
 * 
 * @param defaultOffsetY
 * @text 默认y坐标偏移
 * @desc 默认y坐标偏移设置
 * @parent globalDigitsImage
 * @type string
 * @default 0
 * 
 * @param defaultDamageImage
 * @text 默认伤害数字图片
 * @desc 默认伤害数字图片设置
 * @parent globalDigitsImage
 * @type file
 * @dir img/system/
 * @default 
 * 
 * @param specialAttackedTargetDeflectionCorrection
 * @text 特殊被攻击对象偏移修正
 * @desc 特殊被攻击对象偏移修正设置
 * @default
 * @type string
 * 
 * @param specialEnemyDeflectionCorrectionList
 * @text 特殊敌人偏移修正列表
 * @desc 特殊敌人偏移修正列表设置（放入表中的敌人会在全局或局部偏移的基础上进一步偏移）
 * @parent specialAttackedTargetDeflectionCorrection
 * @type struct<SpecialEnemyAttackedTarget>[]
 * @default []
 * 
 * @param specialActorDeflectionCorrectionList
 * @text 特殊演员偏移修正列表
 * @desc 特殊演员偏移修正列表设置（放入表中的我方演员会在全局或局部偏移的基础上进一步偏移）
 * @parent specialAttackedTargetDeflectionCorrection
 * @type struct<SpecialActorAttackedTarget>[]
 * @default []
 * 
 * @param specialElementSkillList
 * @text 特殊属性技能数字图
 * @desc 特殊属性技能数字图设置（放入表中的属性，当被设置为技能的属性，在该技能被释放时使用设置的图来显示数字）
 * @type struct<SpecialElementSkill>[]
 * @default []
 * 
 * @command setPartialOffsetX
 * @text Set Partial OffsetX
 * @desc 设置局部的x坐标偏移
 * 
 * @arg partialOffsetXCount
 * @text 局部次数
 * @desc 局部次数设置（为了兼容默认的追加攻击次数）
 * @type number
 * @min 1
 * @default 1
 * 
 * @arg x
 * @type string
 * @default 0
 * @text 局部x坐标偏移
 * @desc 局部x坐标偏移设置
 * 
 * @command setPartialOffsetY
 * @text Set Partial OffsetY
 * @desc 设置局部的y坐标偏移
 * 
 * @arg partialOffsetYCount
 * @text 局部次数
 * @desc 局部次数设置（为了兼容默认的追加攻击次数）
 * @type number
 * @min 1
 * @default 1
 * 
 * @arg y
 * @type string
 * @default 0
 * @text 局部y坐标偏移
 * @desc 局部y坐标偏移设置
 * 
 * @command setPartialDamageImage
 * @text Set Partial DamageImage
 * @desc 设置局部的伤害数字图片
 * 
 * @arg partialDamageImageCount
 * @text 局部次数
 * @desc 局部次数设置（为了兼容默认的追加攻击次数）
 * @type number
 * @min 1
 * @default 1
 * 
 * @arg partialDamageImage
 * @text 局部伤害数字图片
 * @desc 局部伤害数字图片设置
 * @type file
 * @dir img/system/
 * @default 
 * 
 */

/*~struct~SpecialEnemyAttackedTarget:
 * 
 * @param id
 * @text 对象ID
 * @desc 对象ID设置
 * @type enemy
 * @min 0
 * @default 0
 * 
 * @param offsetXDeflectionCorrection
 * @text x坐标偏移修正
 * @desc x坐标偏移修正设置
 * @type string
 * @default 0
 * 
 * @param offsetYDeflectionCorrection
 * @text y坐标偏移修正
 * @desc y坐标偏移修正设置
 * @type string
 * @default 0
 * 
 */

/*~struct~SpecialActorAttackedTarget:
 * 
 * @param id
 * @text 对象ID
 * @desc 对象ID设置
 * @type actor
 * @min 0
 * @default 0
 * 
 * @param offsetXDeflectionCorrection
 * @text x坐标偏移修正
 * @desc x坐标偏移修正设置
 * @type string
 * @default 0
 * 
 * @param offsetYDeflectionCorrection
 * @text y坐标偏移修正
 * @desc y坐标偏移修正设置
 * @type string
 * @default 0
 * 
 */

/*~struct~SpecialElementSkill:
 * 
 * @param id
 * @text 元素ID
 * @desc 元素ID设置（-1代表普通攻击属性，0代表无属性，数据库->类型->属性从1开始累加）
 * @type number
 * @min -1
 * @default -1
 * 
 * @param damageImage
 * @text 数字图片
 * @desc 数字图片设置
 * @type file
 * @dir img/system/
 * @default 
 * 
 */

const ASDynamicDamageTextNameSpace = (() => {
    "use strict";

    const pluginName = "ASDynamicDamageText";
    const parameters = PluginManager.parameters(pluginName);

    const defaultOffsetX = Number(parameters.defaultOffsetX) || 0;
    const defaultOffsetY = Number(parameters.defaultOffsetY) || 0;

    const defaultDamageImagePath = parameters.defaultDamageImage;
    const defaultDamageImage = ImageManager.loadSystem(defaultDamageImagePath);

    let setPartialOffsetX = false;
    let partialOffsetXCount = 1;
    let partialOffsetX = 0;

    let setPartialOffsetY = false;
    let partialOffsetYCount = 1;
    let partialOffsetY = 0;

    let setPartialDamageImage = false;
    let partialDamageImageCount = 1;
    let partialDamageImage = defaultDamageImage;

    const specialEnemyDeflectionCorrectionList = JSON.parse(parameters.specialEnemyDeflectionCorrectionList !== undefined ? parameters.specialEnemyDeflectionCorrectionList : "[]");
    let specialEnemyDeflectionCorrectionDic = {};
    for (const enemyString of specialEnemyDeflectionCorrectionList) {
        const enemy = JSON.parse(enemyString);
        specialEnemyDeflectionCorrectionDic[enemy.id] = { x: Number(enemy.offsetXDeflectionCorrection) || 0, y: Number(enemy.offsetYDeflectionCorrection) || 0 };
    }

    const specialActorDeflectionCorrectionList = JSON.parse(parameters.specialActorDeflectionCorrectionList !== undefined ? parameters.specialActorDeflectionCorrectionList : "[]");
    let specialActorDeflectionCorrectionDic = {};
    for (const actorString of specialActorDeflectionCorrectionList) {
        const actor = JSON.parse(actorString);
        specialActorDeflectionCorrectionDic[actor.id] = { x: Number(actor.offsetXDeflectionCorrection) || 0, y: Number(actor.offsetYDeflectionCorrection) || 0 };
    }

    const specialElementSkillList = JSON.parse(parameters.specialElementSkillList !== undefined ? parameters.specialElementSkillList : "[]");
    let tempSkillElement = -1;
    let specialElementSkillListDic = {};
    for (const elementString of specialElementSkillList) {
        const element = JSON.parse(elementString);
        specialElementSkillListDic[element.id] = { damageImage: element.damageImage };
    }

    let specialOffsetXDeflectionCorrection = 0;
    let specialOffsetYDeflectionCorrection = 0;

    PluginManager.registerCommand(pluginName, "setPartialOffsetX", args => {
        setPartialOffsetX = true;
        partialOffsetXCount = Number(args.partialOffsetXCount) || 1;
        partialOffsetX = Number(args.x) || 0;
    });

    PluginManager.registerCommand(pluginName, "setPartialOffsetY", args => {
        setPartialOffsetY = true;
        partialOffsetYCount = Number(args.partialOffsetYCount) || 1;
        partialOffsetY = Number(args.y) || 0;
    });

    PluginManager.registerCommand(pluginName, "setPartialDamageImage", args => {
        setPartialDamageImage = true;
        partialDamageImageCount = Number(args.partialDamageImageCount) || 1;
        partialDamageImage = ImageManager.loadSystem(args.partialDamageImage) || defaultDamageImage;
    });

    //重载Sprite_Damage
    Sprite_Damage.prototype.initialize = function () {
        Sprite.prototype.initialize.call(this);
        this._duration = 90;
        this._flashColor = [0, 0, 0, 0];
        this._flashDuration = 0;
        this._colorType = 0;

        this._damageImage = defaultDamageImage;
    };

    Sprite_Damage.prototype.digitWidth = function() {
        return this._damageImage ? this._damageImage.width / 10 : 0;
    };
    
    Sprite_Damage.prototype.digitHeight = function() {
        return this._damageImage ? this._damageImage.height / 5 : 0;
    };

    Sprite_Damage.prototype.createMiss = function () {
        const w = this.digitWidth();
        const h = this.digitHeight();
        const sprite = this.createChildSprite(w * 4, h);
        if (setPartialDamageImage === true) {
            partialDamageImage.addLoadListener(() => {
                sprite.bitmap.blt(partialDamageImage, 0, h * 4, w * 4, h, 0, 0, w * 4, h);
            });
            if (partialDamageImageCount !== 1) {
                partialDamageImageCount--;
            } else {
                setPartialDamageImage = false;
            }
        } else {
            if (specialElementSkillListDic[tempSkillElement]) {
                const skillElementImage = ImageManager.loadSystem(specialElementSkillListDic[tempSkillElement].damageImage) || defaultDamageImage;
                skillElementImage.addLoadListener(() => {
                    sprite.bitmap.blt(skillElementImage, 0, h * 4, w * 4, h, 0, 0, w * 4, h);
                });
            } else {
                this._damageImage.addLoadListener(() => {
                    sprite.bitmap.blt(this._damageImage, 0, h * 4, w * 4, h, 0, 0, w * 4, h);
                });
            }
        }
        sprite.dy = 0;
    };

    Sprite_Damage.prototype.drawSeparateDigit = function (valueString, bitmap) {
        const w = this.digitWidth();
        const h = this.digitHeight();
        for (let i = 0; i < valueString.length; i++) {
            const sprite = this.createChildSprite(w, h);
            const n = Number(valueString[i]);
            bitmap.addLoadListener(() => {
                sprite.bitmap.blt(bitmap, n * w, this._colorType * h, w, h, 0, 0, w, h);
            });
            sprite.x = (i - (valueString.length - 1) / 2) * w;
            sprite.dy = -i;
        }
    };

    Sprite_Damage.prototype.createDigits = function(value) {
        const string = Math.abs(value).toString();
        if (setPartialDamageImage === true) {
            this.drawSeparateDigit(string, partialDamageImage);
            if (partialDamageImageCount !== 1) {
                partialDamageImageCount--;
            } else {
                setPartialDamageImage = false;
            }
        } else {
            if (specialElementSkillListDic[tempSkillElement]) {
                const skillElementImage = ImageManager.loadSystem(specialElementSkillListDic[tempSkillElement].damageImage) || defaultDamageImage;
                this.drawSeparateDigit(string, skillElementImage);

            } else {
                this.drawSeparateDigit(string, this._damageImage);
            }
        }
    };

    Sprite_Damage.prototype.createBitmap = function(width, height) {
        const bitmap = new Bitmap(width, height);
        return bitmap;
    };

    //重载Game_Action
    const _Game_Action_Apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        _Game_Action_Apply.apply(this, arguments);
        tempSkillElement = this.item().damage.elementId;
    };

    //重载Sprite_Battler
    const _Create_Damage_Sprite = Sprite_Battler.prototype.createDamageSprite;
    Sprite_Battler.prototype.createDamageSprite = function () {

        specialOffsetXDeflectionCorrection = 0;
        specialOffsetYDeflectionCorrection = 0;

        if (this instanceof Sprite_Enemy) {
            if (specialEnemyDeflectionCorrectionDic[this._battler._enemyId]) {
                const offset = specialEnemyDeflectionCorrectionDic[this._battler._enemyId];
                specialOffsetXDeflectionCorrection = offset.x;
                specialOffsetYDeflectionCorrection = offset.y;
            }
        }

        if (this instanceof Sprite_Actor) {
            if (specialActorDeflectionCorrectionDic[this._battler._actorId]) {
                const offset = specialActorDeflectionCorrectionDic[this._battler._actorId];
                specialOffsetXDeflectionCorrection = offset.x;
                specialOffsetYDeflectionCorrection = offset.y;
            }
        }

        _Create_Damage_Sprite.apply(this, arguments);

    };

    const _Damage_Offset_X = Sprite_Battler.prototype.damageOffsetX;
    Sprite_Battler.prototype.damageOffsetX = function () {
        let offsetX = _Damage_Offset_X.apply(this, arguments);
        if (setPartialOffsetX === true) {
            offsetX = partialOffsetX + specialOffsetXDeflectionCorrection;
            if (partialOffsetXCount !== 1) {
                partialOffsetXCount--;
            } else {
                setPartialOffsetX = false;
            }
        } else {
            offsetX = defaultOffsetX + specialOffsetXDeflectionCorrection;
        } 
        return offsetX;
    }

    const _Damage_Offset_Y = Sprite_Battler.prototype.damageOffsetY;
    Sprite_Battler.prototype.damageOffsetY = function () {
        let offsetY = _Damage_Offset_Y.apply(this, arguments);
        if (setPartialOffsetY === true) {
            offsetY = partialOffsetY + specialOffsetYDeflectionCorrection;
            if (partialOffsetYCount !== 1) {
                partialOffsetYCount--;
            } else {
                setPartialOffsetY = false;
            }
        } else {
            offsetY = defaultOffsetY + specialOffsetYDeflectionCorrection;
        }
        return offsetY;
    };

})();