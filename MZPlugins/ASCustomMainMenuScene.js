/*:
 * @target MZ
 * @plugindesc [V1.0.0] Customized Main Menu Plugin
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * this._windowLayer(808, 616)
 * 
 * This plugin is released under the MIT license.

 * Copyright (c) 2024 Arrose

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
 * @param mainMenuSceneSet
 * @text Main Menu Scene Set
 * @desc Main Menu Scene Set
 * @type string
 * @default
 * 
 * @param sceneCancelButtonOffset
 * @text Cancel Button Offset
 * @desc Scene Cancel Button Offset
 * @parent mainMenuSceneSet
 * @type struct<Point>
 * @default {"x":"708","y":"2"}
 * 
 * @param sceneCancelButtonVisible
 * @text Cancel Button Visible
 * @desc Scene Cancel Button Visible
 * @parent mainMenuSceneSet
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param sceneBackGround
 * @text Scene BackGround
 * @desc Scene BackGround
 * @parent mainMenuSceneSet
 * @type select
 * @option none
 * @option image
 * @option video
 * @default none
 * 
 * @param sceneBackGroundImage
 * @text Scene BackGround Image
 * @desc Scene BackGround Image
 * @parent sceneBackGround
 * @type file
 * @dir img/titles1
 * @default
 * 
 * @param sceneBackGroundVideo
 * @text Scene BackGround Video
 * @desc No video file extension required, both mp4 and webm files are needed(Video format used by MZ), the video will loop 
 * @parent sceneBackGround
 * @type string
 * @default 
 * 
 * @param commandWindowSet
 * @text Command Window Set
 * @desc Command Window Set
 * @parent mainMenuSceneSet
 * @type string
 * @default
 * 
 * @param commandWindowWindowSkin
 * @text Window Skin
 * @desc Command Window WindowSkin
 * @parent commandWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @param commandWindowOffset
 * @text Offset
 * @desc Command Window Offset
 * @parent commandWindowSet
 * @type struct<Point>
 * @default {"x":"568","y":"52"}
 * 
 * @param commandWindowItemWidth
 * @text Item Width
 * @desc Command Window Item Width
 * @parent commandWindowSet
 * @type number
 * @min 0
 * @default 208
 * 
 * @param commandWindowItemHeight
 * @text Item Height
 * @desc Command Window Item Height
 * @parent commandWindowSet
 * @type number
 * @min 0
 * @default 40
 * 
 * @param commandWindowPadding
 * @text Padding
 * @desc Command Window Padding
 * @parent commandWindowSet
 * @type number
 * @default 12
 * 
 * @param commandWindowRowSpacing
 * @text Row Spacing
 * @desc Command Window Row Spacing
 * @parent commandWindowSet
 * @type number
 * @default 4
 * 
 * @param commandWindowColSpacing
 * @text Col Spacing
 * @desc Command Window Col Spacing
 * @parent commandWindowSet
 * @type number
 * @default 8
 * 
 * @param commandWindowMaxCols
 * @text MaxCols
 * @desc Command Window MaxCols
 * @parent commandWindowSet
 * @type number
 * @min 1
 * @default 1
 * 
 * @param commandWindowCursor
 * @text Cursor
 * @desc Command Window Cursor
 * @parent commandWindowSet
 * @type select
 * @option none
 * @option images
 * @default none
 * 
 * @param commandWindowCursorImages
 * @text Cursor Images
 * @desc Command Window Cursor Images
 * @parent commandWindowCursor
 * @type file[]
 * @dir img/
 * @default []
 * 
 * @param commandWindowCursorOffset
 * @text Cursor Offset
 * @desc Command Window Cursor Offset
 * @parent commandWindowCursor
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @param commandWindowCursorAnimationSpeed
 * @text Cursor Animation Speed
 * @desc Command Window Cursor Animation Speed
 * @parent commandWindowCursor
 * @type number
 * @min 1
 * @default 1
 * 
 * @param commandWindowItemStyle
 * @text Item Style
 * @desc Command Window Item Style
 * @parent commandWindowSet
 * @type string
 * @default
 * 
 * @param commandWindowItemBGOffset
 * @text BG Offset
 * @desc Command Window Item Background Offset
 * @parent commandWindowItemStyle
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @param commandWindowItemBGWidth
 * @text BG Width
 * @desc Command Window Item Background Width
 * @parent commandWindowItemStyle
 * @type number
 * @min 0
 * @default 208
 * 
 * @param commandWindowItemBGHeight
 * @text BG Height
 * @desc Command Window Item Background Height
 * @parent commandWindowItemStyle
 * @type number
 * @min 0
 * @default 40
 * 
 * @param commandWindowItemBGColor1
 * @text BG Color1
 * @desc Command Window Item Background Color1
 * @parent commandWindowItemStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"32","a":"0.5"}
 * 
 * @param commandWindowItemBGColor2
 * @text BG Color2
 * @desc Command Window Item Background Color2
 * @parent commandWindowItemStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"0.5"}
 * 
 * @param commandWindowItemBGBorderColor
 * @text BG Border Color
 * @desc Command Window Item Background Border Color
 * @parent commandWindowItemStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"32","a":"0.5"}
 * 
 * @param commandWindowItemBGBorderLineWidth
 * @text BG Border Width
 * @desc Command Window Item Background Border LineWidth
 * @parent commandWindowItemStyle
 * @type number
 * @min 0
 * @default 1
 * 
 * @param commandWindowItemBGBorderRadius
 * @text BG Border Radius
 * @desc Command Window Item Background Border Radius
 * @parent commandWindowItemStyle
 * @type number
 * @min 0
 * @default 0
 * 
 * @param commandWindowItemFontSize
 * @text Font Size
 * @desc Command Window Item Font Size
 * @parent commandWindowItemStyle
 * @type number
 * @default 26
 * 
 * @param commandWindowItemTextOffsetX
 * @text Text OffsetX
 * @desc Command Window Item Text OffsetX
 * @parent commandWindowItemStyle
 * @type number
 * @default 0
 * 
 * @param commandWindowItemTextAlign
 * @text Text Align
 * @desc Command Window Item Text Align
 * @parent commandWindowItemStyle
 * @type select
 * @option center
 * @option left
 * @option right
 * @default center
 * 
 * @param commandWindowItemTextColor
 * @text Text Color
 * @desc Command Window Item Text Color
 * @parent commandWindowItemStyle
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 * 
 * @param commandWindowItemTextOutlineColor
 * @text Text Outline Color
 * @desc Command Window Item Text Outline Color
 * @parent commandWindowItemStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param goldWindowSet
 * @text Gold Window Set
 * @desc Gold Window Set
 * @parent mainMenuSceneSet
 * @type string
 * @default
 * 
 * @param goldWindowVisible
 * @text Visible
 * @desc Gold Window Visible
 * @parent goldWindowSet
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowSet
 * @text Status Window Set
 * @desc Status Window Set
 * @parent mainMenuSceneSet
 * @type string
 * @default
 * 
 * @param statusWindowVisible
 * @text Visible
 * @desc Status Window Visible
 * @parent statusWindowSet
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowWindowSkin
 * @text Window Skin
 * @desc Status Window WindowSkin
 * @parent statusWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @param statusWindowOffset
 * @text Offset
 * @desc Status Window Offset
 * @parent statusWindowSet
 * @type struct<Point>
 * @default {"x":"0","y":"52"}
 * 
 * @param statusWindowItemWidth
 * @text Item Width
 * @desc Status Window Item Width
 * @parent statusWindowSet
 * @type number
 * @min 0
 * @default 536
 * 
 * @param statusWindowItemHeight
 * @text Item Height
 * @desc Status Window Item Height
 * @parent statusWindowSet
 * @type number
 * @min 0
 * @default 131
 * 
 * @param statusWindowPadding
 * @text Padding
 * @desc Status Window Padding
 * @parent statusWindowSet
 * @type number
 * @default 12
 * 
 * @param statusWindowRowSpacing
 * @text Row Spacing
 * @desc Status Window Row Spacing
 * @parent statusWindowSet
 * @type number
 * @default 4
 * 
 * @param statusWindowColSpacing
 * @text Col Spacing
 * @desc Status Window Col Spacing
 * @parent statusWindowSet
 * @type number
 * @default 8
 * 
 * @param statusWindowMaxCols
 * @text MaxCols
 * @desc Status Window MaxCols
 * @parent statusWindowSet
 * @type select
 * @option 1
 * @option 2
 * @option 4
 * @default 1
 * 
 * @param statusWindowItemStyle
 * @text Item Style
 * @desc Status Window Item Style
 * @parent statusWindowSet
 * @type string
 * @default
 * 
 * @param statusWindowItemBGStyle
 * @text Item BG Style
 * @desc Status Window Item Background Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemBGOffset
 * @text BG Offset
 * @desc Status Window Item Background Offset
 * @parent statusWindowItemBGStyle
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @param statusWindowItemBGWidth
 * @text BG Width
 * @desc Status Window Item Background Width
 * @parent statusWindowItemBGStyle
 * @type number
 * @min 0
 * @default 536
 * 
 * @param statusWindowItemBGHeight
 * @text BG Height
 * @desc Status Window Item Background Height
 * @parent statusWindowItemBGStyle
 * @type number
 * @min 0
 * @default 131
 * 
 * @param statusWindowItemBGColor1
 * @text BG Color1
 * @desc Status Window Item Background Color1
 * @parent statusWindowItemBGStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"32","a":"0.5"}
 * 
 * @param statusWindowItemBGColor2
 * @text BG Color2
 * @desc Status Window Item Background Color2
 * @parent statusWindowItemBGStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"0.5"}
 * 
 * @param statusWindowItemBGBorderColor
 * @text BG Border Color
 * @desc Status Window Item Background Border Color
 * @parent statusWindowItemBGStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"32","a":"0.5"}
 * 
 * @param statusWindowItemBGBorderLineWidth
 * @text BG Border Width
 * @desc Status Window Item Background Border LineWidth
 * @parent statusWindowItemBGStyle
 * @type number
 * @min 0
 * @default 1
 * 
 * @param statusWindowItemBGBorderRadius
 * @text BG Border Radius
 * @desc Status Window Item Background Border Radius
 * @parent statusWindowItemBGStyle
 * @type number
 * @min 0
 * @default 0
 * 
 * @param statusWindowPendingItemBGStyle
 * @text Pending Item BG Style
 * @desc Status Window Pending Item Background Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowPendingItemBGOffset
 * @text Pending BG Offset
 * @desc Status Window Pending Item Background Offset
 * @parent statusWindowPendingItemBGStyle
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @param statusWindowPendingItemBGWidth
 * @text Pending BG Width
 * @desc Status Window Pending Item Background Width
 * @parent statusWindowPendingItemBGStyle
 * @type number
 * @min 0
 * @default 536
 * 
 * @param statusWindowPendingItemBGHeight
 * @text Pending BG Height
 * @desc Status Window Pending Item Background Height
 * @parent statusWindowPendingItemBGStyle
 * @type number
 * @min 0
 * @default 131
 * 
 * @param statusWindowPendingItemBGColor
 * @text Pending BG Color
 * @desc Status Window Pending Item Background Color
 * @parent statusWindowPendingItemBGStyle
 * @type struct<Color>
 * @default {"r":"163","g":"255","b":"224","a":"1.0"}
 * 
 * @param statusWindowPendingItemBGRadius
 * @text Pending BG Radius
 * @desc Status Window Item Background Radius
 * @parent statusWindowPendingItemBGStyle
 * @type number
 * @min 0
 * @default 0
 * 
 * @param statusWindowItemFaceImageStyle
 * @text Face Image Style
 * @desc Status Window Item Face Image Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemFaceImageVisible
 * @text Face Image Visible
 * @desc Status Window Item Face Image Visible
 * @parent statusWindowItemFaceImageStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowItemFaceImageOffset
 * @text Face Image Offset
 * @desc Status Window Item Face Image Offset
 * @parent statusWindowItemFaceImageStyle
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @param statusWindowItemFaceImageWidth
 * @text Face Image Width
 * @desc Status Window Item Face Image Width
 * @parent statusWindowItemFaceImageStyle
 * @type number
 * @min 0
 * @default 131
 * 
 * @param statusWindowItemFaceImageHeight
 * @text Face Image Height
 * @desc Status Window Item Face Image Height
 * @parent statusWindowItemFaceImageStyle
 * @type number
 * @min 0
 * @default 131
 * 
 * @param statusWindowItemNameStyle
 * @text Item Name Style
 * @desc Status Window Item Name Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemNameVisible
 * @text Name Visible
 * @desc Status Window Item Name Visible
 * @parent statusWindowItemNameStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowItemNameOffset
 * @text Name Offset
 * @desc Status Window Item Name Offset
 * @parent statusWindowItemNameStyle
 * @type struct<Point>
 * @default {"x":"180","y":"11"}
 * 
 * @param statusWindowItemNameWidth
 * @text Name Width
 * @desc Status Window Item Name Width
 * @parent statusWindowItemNameStyle
 * @type number
 * @min 0
 * @default 168
 * 
 * @param statusWindowItemNameFontSize
 * @text Name Font Size
 * @desc Status Window Item Name Font Size
 * @parent statusWindowItemNameStyle
 * @type number
 * @default 26
 * 
 * @param statusWindowItemNameTextColor
 * @text Name Text Color
 * @desc Status Window Item Name Text Color
 * @parent statusWindowItemNameStyle
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 * 
 * @param statusWindowItemNameTextOutlineColor
 * @text Name Text Outline Color
 * @desc Status Window Item Name Text Outline Color
 * @parent statusWindowItemNameStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param statusWindowItemLevelStyle
 * @text Item Level Style
 * @desc Status Window Item Level Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemLevelVisible
 * @text Level Visible
 * @desc Status Window Item Level Visible
 * @parent statusWindowItemLevelStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowItemLevelLabelOffset
 * @text Level Label Offset
 * @desc Status Window Item Level Label Offset
 * @parent statusWindowItemLevelStyle
 * @type struct<Point>
 * @default {"x":"180","y":"47"}
 * 
 * @param statusWindowItemLevelLabelWidth
 * @text Level Label Width
 * @desc Status Window Item Level Label Width
 * @parent statusWindowItemLevelStyle
 * @type number
 * @min 0
 * @default 48
 * 
 * @param statusWindowItemLevelLabelFontSize
 * @text Level Label Font Size
 * @desc Status Window Item Level Label Font Size
 * @parent statusWindowItemLevelStyle
 * @type number
 * @default 26
 * 
 * @param statusWindowItemLevelLabelTextColor
 * @text Level Label Text Color
 * @desc Status Window Item Level Label Text Color
 * @parent statusWindowItemLevelStyle
 * @type struct<Color>
 * @default {"r":"132","g":"170","b":"255","a":"1"}
 * 
 * @param statusWindowItemLevelLabelTextOutlineColor
 * @text Level Label Text Outline Color
 * @desc Status Window Item Level Label Text Outline Color
 * @parent statusWindowItemLevelStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param statusWindowItemLevelValueOffset
 * @text Level Value Offset
 * @desc Status Window Item Level Value Offset
 * @parent statusWindowItemLevelStyle
 * @type struct<Point>
 * @default {"x":"264","y":"47"}
 * 
 * @param statusWindowItemLevelValueWidth
 * @text Level Value Width
 * @desc Status Window Item Level Value Width
 * @parent statusWindowItemLevelStyle
 * @type number
 * @min 0
 * @default 36
 * 
 * @param statusWindowItemLevelValueFontSize
 * @text Level Value Font Size
 * @desc Status Window Item Level Value Font Size
 * @parent statusWindowItemLevelStyle
 * @type number
 * @default 26
 * 
 * @param statusWindowItemLevelValueTextColor
 * @text Level Value Text Color
 * @desc Status Window Item Level Value Text Color
 * @parent statusWindowItemLevelStyle
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 * 
 * @param statusWindowItemLevelValueTextOutlineColor
 * @text Level Value Text Outline Color
 * @desc Status Window Item Level Value Text Outline Color
 * @parent statusWindowItemLevelStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param statusWindowItemIconsStyle
 * @text Item Icons Style
 * @desc Status Window Item Icons Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemIconsVisible
 * @text Icons Visible
 * @desc Status Window Item Icons Visible
 * @parent statusWindowItemIconsStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowItemIconsOffset
 * @text Icons Offset
 * @desc Status Window Item Icons Offset
 * @parent statusWindowItemIconsStyle
 * @type struct<Point>
 * @default {"x":"180","y":"85"}
 * 
 * @param statusWindowItemAllIconsWidth
 * @text All Icons Width
 * @desc Status Window Item Icons Width
 * @parent statusWindowItemIconsStyle
 * @type number
 * @min 0
 * @default 144
 * 
 * @param statusWindowItemIconWidth
 * @text Icon Width
 * @desc Status Window Item Icon Width
 * @parent statusWindowItemIconsStyle
 * @type number
 * @min 0
 * @default 32
 * 
 * @param statusWindowItemIconColSpacing
 * @text Icon Col Spacing
 * @desc Status Window Item Icon Col Spacing
 * @parent statusWindowItemIconsStyle
 * @type number
 * @default 0
 * 
 * @param statusWindowItemClassStyle
 * @text Item Class Style
 * @desc Status Window Item Class Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemClassVisible
 * @text Class Visible
 * @desc Status Window Item Class Visible
 * @parent statusWindowItemClassStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowItemClassOffset
 * @text Class Offset
 * @desc Status Window Item Class Offset
 * @parent statusWindowItemClassStyle
 * @type struct<Point>
 * @default {"x":"360","y":"11"}
 * 
 * @param statusWindowItemClassWidth
 * @text Class Width
 * @desc Status Window Item Class Width
 * @parent statusWindowItemClassStyle
 * @type number
 * @min 0
 * @default 168
 * 
 * @param statusWindowItemClassFontSize
 * @text Class Font Size
 * @desc Status Window Item Class Font Size
 * @parent statusWindowItemClassStyle
 * @type number
 * @default 26
 * 
 * @param statusWindowItemClassTextColor
 * @text Class Text Color
 * @desc Status Window Item Class Text Color
 * @parent statusWindowItemClassStyle
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 * 
 * @param statusWindowItemClassTextOutlineColor
 * @text Class Text Outline Color
 * @desc Status Window Item Class Text Outline Color
 * @parent statusWindowItemClassStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param statusWindowItemHPStyle
 * @text Item HP Style
 * @desc Status Window Item HP Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemHPContainerStyleStart
 * @text ------Container------
 * @desc Styles for the container of the HP view element
 * @parent statusWindowItemHPStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemHPVisible
 * @text HP Visible
 * @desc Status Window Item HP Visible
 * @parent statusWindowItemHPStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowItemHPOffset
 * @text HP Offset
 * @desc Status Window Item HP Offset
 * @parent statusWindowItemHPStyle
 * @type struct<Point>
 * @default {"x":"360","y":"47"}
 * 
 * @param statusWindowItemHPWidth
 * @text HP Width
 * @desc Status Window Item HP Width
 * @parent statusWindowItemHPStyle
 * @type number
 * @min 0
 * @default 128
 * 
 * @param statusWindowItemHPHeight
 * @text HP Height
 * @desc Status Window Item HP Height
 * @parent statusWindowItemHPStyle
 * @type number
 * @min 0
 * @default 32
 * 
 * @param statusWindowItemHPLabelStyleStart
 * @text --------Label--------
 * @desc Styles for the Label of the HP view element
 * @parent statusWindowItemHPStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemHPLabelFormality
 * @text HP Label Formality
 * @desc Status Window Item HP Label Formality
 * @parent statusWindowItemHPStyle
 * @type select
 * @option none
 * @option text
 * @option icon
 * @default text
 * 
 * @param statusWindowItemHPTextLabelOffset
 * @text HP Text Label
 * @desc Status Window Item HP Text Label
 * @parent statusWindowItemHPStyle
 * @type struct<Point>
 * @default {"x":"1","y":"3"}
 * 
 * @param statusWindowItemHPTextLabelWidth
 * @text HP Text Label Width
 * @desc Status Window Item HP Text Label Width
 * @parent statusWindowItemHPStyle
 * @type number
 * @min 0
 * @default 128
 * 
 * @param statusWindowItemHPTextLabelHeight
 * @text HP Text Label Height
 * @desc Status Window Item HP Text Label Height
 * @parent statusWindowItemHPStyle
 * @type number
 * @min 0
 * @default 24
 * 
 * @param statusWindowItemHPTextLabelFontSize
 * @text HP Text Label Font Size
 * @desc Status Window Item HP Text Label Font Size
 * @parent statusWindowItemHPStyle
 * @type number
 * @default 24
 * 
 * @param statusWindowItemHPTextLabelTextColor
 * @text HP Text Label Text Color
 * @desc Status Window Item HP Text Label Text Color
 * @parent statusWindowItemHPStyle
 * @type struct<Color>
 * @default {"r":"132","g":"170","b":"255","a":"1"}
 * 
 * @param statusWindowItemHPTextLabelTextOutlineColor
 * @text HP Text Label Text Outline Color
 * @desc Status Window Item HP Text Label Text Outline Color
 * @parent statusWindowItemHPStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param statusWindowItemHPTextLabelTextOutlineWidth
 * @text HP Text Label Text Outline Width
 * @desc Status Window Item HP Text Label Text Outline Width
 * @parent statusWindowItemHPStyle
 * @type number
 * @min 0
 * @default 2
 * 
 * @param statusWindowItemHPIconLabelIndex
 * @text HP Icon Label Index
 * @desc Status Window Item HP Icon Label Index (Index of the icon in the IconSet)
 * @parent statusWindowItemHPStyle
 * @type number
 * @min 0
 * @default 0
 * 
 * @param statusWindowItemHPIconLabelOffset
 * @text HP Icon Label Offset
 * @desc Status Window Item HP Icon Label Offset
 * @parent statusWindowItemHPStyle
 * @type struct<Point>
 * @default {"x":"1","y":"3"}
 * 
 * @param statusWindowItemHPIconLabelWidth
 * @text HP Icon Label Width
 * @desc Status Window Item HP Icon Label Width
 * @parent statusWindowItemHPStyle
 * @type number
 * @min 0
 * @default 32
 * 
 * @param statusWindowItemHPGaugeStyleStart
 * @text --------Gauge--------
 * @desc Styles for the Gauge of the HP view element
 * @parent statusWindowItemHPStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemHPGaugeOffset
 * @text HP Gauge Offset
 * @desc Status Window Item HP Gauge Offset
 * @parent statusWindowItemHPStyle
 * @type struct<Point>
 * @default {"x":"30","y":"12"}
 * 
 * @param statusWindowItemHPGaugeWidth
 * @text HP Gauge Width
 * @desc Status Window Item HP Gauge Width
 * @parent statusWindowItemHPStyle
 * @type number
 * @min 0
 * @default 98
 * 
 * @param statusWindowItemHPGaugeHeight
 * @text HP Gauge Height
 * @desc Status Window Item HP Gauge Height
 * @parent statusWindowItemHPStyle
 * @type number
 * @min 0
 * @default 12
 * 
 * @param statusWindowItemHPGaugeBackColor
 * @text HP Gauge BackColor
 * @desc Status Window Item HP Gauge BackColor
 * @parent statusWindowItemHPStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"64","a":"1.0"}
 * 
 * @param statusWindowItemHPGaugeColor1
 * @text HP Gauge Color1
 * @desc Status Window Item HP Gauge Color1
 * @parent statusWindowItemHPStyle
 * @type struct<Color>
 * @default {"r":"224","g":"128","b":"64","a":"1.0"}
 * 
 * @param statusWindowItemHPGaugeColor2
 * @text HP Gauge Color2
 * @desc Status Window Item HP Gauge Color2
 * @parent statusWindowItemHPStyle
 * @type struct<Color>
 * @default {"r":"240","g":"192","b":"64","a":"1.0"}
 * 
 * @param statusWindowItemHPGaugeBorderColor
 * @text HP Gauge Border Color
 * @desc Status Window Item HP Gauge Border Color
 * @parent statusWindowItemHPStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1.0"}
 * 
 * @param statusWindowItemHPGaugeBorderLineWidth
 * @text HP Gauge Border Width
 * @desc Status Window Item HP Gauge Border LineWidth
 * @parent statusWindowItemHPStyle
 * @type number
 * @min 0
 * @default 0
 * 
 * @param statusWindowItemHPGaugeBorderRadius
 * @text HP Gauge Border Radius
 * @desc Status Window Item HP Gauge Border Radius
 * @parent statusWindowItemHPStyle
 * @type number
 * @min 0
 * @default 0
 * 
 * @param statusWindowItemHPValueStyleStart
 * @text --------Value--------
 * @desc Styles for the Value of the HP view element
 * @parent statusWindowItemHPStyle
 * @type string
 * @default
 * 
 */

/*~struct~Color:
 * 
 * @param r
 * @text R
 * @desc R
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * 
 * @param g
 * @text G
 * @desc G
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * 
 * @param b
 * @text B
 * @desc B
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * 
 * @param a
 * @text A
 * @desc A Range of values (0-1)
 * @type string
 * @min 0
 * @max 1
 * @default 1
 * 
 */

/*~struct~Point:
 * 
 * @param x
 * @text X
 * @desc X
 * @type number
 * @default 0
 * 
 * @param y
 * @text Y
 * @desc Y
 * @type number
 * @default 0
 * 
 */

/*~struct~Rect:
 * 
 * @param x
 * @text X
 * @desc X
 * @type number
 * @default 0
 * 
 * @param y
 * @text Y
 * @desc Y
 * @type number
 * @default 0
 * 
 * @param width
 * @text Width
 * @desc Width
 * @type number
 * @min 0
 * @default 0
 * 
 * @param height
 * @text Height
 * @desc Height
 * @type number
 * @min 0
 * @default 0
 * 
 */

// * @param sceneBackGroundMusic
// * @text Scene BackGround Music
// * @desc Scene BackGround Music
// * @parent mainMenuSceneSet
// * @type file
// * @dir audio/bgm
// * @default

const ASCustomMainMenuSceneNameSpace = (() => {
    "use strict";

    const pluginName = "ASCustomMainMenuScene";
    const parameters = PluginManager.parameters(pluginName);

    const sceneBackGroundSelectNone = "none";
    const sceneBackGroundSelectImage = "image";
    const sceneBackGroundSelectVideo = "video";

    const commandWindowCursorSelectNone = "none";
    const commandWindowCursorSelectImage = "images";

    const statusWindowItemLabelFormalitySelectNone = "none";
    const statusWindowItemLabelFormalitySelectText = "text";
    const statusWindowItemLabelFormalitySelectIcon = "icon";
    
    const sceneCancelButtonOffsetJsonObject = JSON.parse(parameters.sceneCancelButtonOffset);
    const sceneCancelButtonOffset = new Point(Number(sceneCancelButtonOffsetJsonObject.x) || 0, Number(sceneCancelButtonOffsetJsonObject.y) || 0);
    const sceneCancelButtonVisible = parameters.sceneCancelButtonVisible !== "false";

    const sceneBackGround = parameters.sceneBackGround;
    const sceneBackGroundImage = parameters.sceneBackGroundImage;
    const sceneBackGroundVideo = parameters.sceneBackGroundVideo;
    //const sceneBackGroundMusic = parameters.sceneBackGroundMusic;

    const commandWindowWindowSkin = parameters.commandWindowWindowSkin;
    const commandWindowOffsetJsonObject = JSON.parse(parameters.commandWindowOffset);
    const commandWindowOffset = new Point(Number(commandWindowOffsetJsonObject.x) || 0, Number(commandWindowOffsetJsonObject.y) || 0);

    const commandWindowItemWidth = Number(parameters.commandWindowItemWidth);
    const commandWindowItemHeight = Number(parameters.commandWindowItemHeight);
    const commandWindowPadding = Number(parameters.commandWindowPadding);
    const commandWindowRowSpacing = Number(parameters.commandWindowRowSpacing);
    const commandWindowColSpacing = Number(parameters.commandWindowColSpacing);
    const commandWindowMaxCols = Number(parameters.commandWindowMaxCols) || 1;

    const commandWindowCursor = parameters.commandWindowCursor;
    const commandWindowCursorImagesJsonObject = JSON.parse(parameters.commandWindowCursorImages !== undefined ? parameters.commandWindowCursorImages : "[]");
    const commandWindowCursorOffsetJsonObject = JSON.parse(parameters.commandWindowCursorOffset); 
    const commandWindowCursorOffset = new Point(Number(commandWindowCursorOffsetJsonObject.x) || 0, Number(commandWindowCursorOffsetJsonObject.y) || 0);
    const commandWindowCursorAnimationSpeed = Number(parameters.commandWindowCursorAnimationSpeed);

    const commandWindowItemBGOffsetJsonObject = JSON.parse(parameters.commandWindowItemBGOffset);
    const commandWindowItemBGOffset = new Point(Number(commandWindowItemBGOffsetJsonObject.x) || 0, Number(commandWindowItemBGOffsetJsonObject.y) || 0);
    const commandWindowItemBGWidth = Number(parameters.commandWindowItemBGWidth);
    const commandWindowItemBGHeight = Number(parameters.commandWindowItemBGHeight);
    const commandWindowItemBGColor1JsonObject = JSON.parse(parameters.commandWindowItemBGColor1);
    const commandWindowItemBGColor2JsonObject = JSON.parse(parameters.commandWindowItemBGColor2);
    const commandWindowItemBGBorderColorJsonObject = JSON.parse(parameters.commandWindowItemBGBorderColor);
    const commandWindowItemBGBorderLineWidth = Number(parameters.commandWindowItemBGBorderLineWidth);
    const commandWindowItemBGBorderRadius = Number(parameters.commandWindowItemBGBorderRadius);

    const commandWindowItemFontSize = Number(parameters.commandWindowItemFontSize) || 26;
    const commandWindowItemTextOffsetX = Number(parameters.commandWindowItemTextOffsetX) || 0;
    const commandWindowItemTextAlign = parameters.commandWindowItemTextAlign;
    const commandWindowItemTextColorJsonObject = JSON.parse(parameters.commandWindowItemTextColor);
    const commandWindowItemTextOutlineColorJsonObject = JSON.parse(parameters.commandWindowItemTextOutlineColor);
    
    const goldWindowVisible = parameters.goldWindowVisible !== "false";


    const statusWindowVisible = parameters.statusWindowVisible !== "false";
    const statusWindowWindowSkin = parameters.statusWindowWindowSkin;
    const statusWindowOffsetJsonObject = JSON.parse(parameters.statusWindowOffset);
    const statusWindowOffset = new Point(Number(statusWindowOffsetJsonObject.x) || 0, Number(statusWindowOffsetJsonObject.y) || 0);
    const statusWindowItemWidth = Number(parameters.statusWindowItemWidth);
    const statusWindowItemHeight = Number(parameters.statusWindowItemHeight);
    const statusWindowPadding = Number(parameters.statusWindowPadding);
    const statusWindowRowSpacing = Number(parameters.statusWindowRowSpacing);
    const statusWindowColSpacing = Number(parameters.statusWindowColSpacing);
    const statusWindowMaxCols = Number(parameters.statusWindowMaxCols) || 1;

    const statusWindowItemBGOffsetJsonObject = JSON.parse(parameters.statusWindowItemBGOffset);
    const statusWindowItemBGOffset = new Point(Number(statusWindowItemBGOffsetJsonObject.x) || 0, Number(statusWindowItemBGOffsetJsonObject.y) || 0);
    const statusWindowItemBGWidth = Number(parameters.statusWindowItemBGWidth);
    const statusWindowItemBGHeight = Number(parameters.statusWindowItemBGHeight);
    const statusWindowItemBGColor1JsonObject = JSON.parse(parameters.statusWindowItemBGColor1);
    const statusWindowItemBGColor2JsonObject = JSON.parse(parameters.statusWindowItemBGColor2);
    const statusWindowItemBGBorderColorJsonObject = JSON.parse(parameters.statusWindowItemBGBorderColor);
    const statusWindowItemBGBorderLineWidth = Number(parameters.statusWindowItemBGBorderLineWidth);
    const statusWindowItemBGBorderRadius = Number(parameters.statusWindowItemBGBorderRadius);

    const statusWindowPendingItemBGOffsetJsonObject = JSON.parse(parameters.statusWindowPendingItemBGOffset);
    const statusWindowPendingItemBGOffset = new Point(Number(statusWindowPendingItemBGOffsetJsonObject.x) || 0, Number(statusWindowPendingItemBGOffsetJsonObject.y) || 0);
    const statusWindowPendingItemBGWidth = Number(parameters.statusWindowPendingItemBGWidth);
    const statusWindowPendingItemBGHeight = Number(parameters.statusWindowPendingItemBGHeight);
    const statusWindowPendingItemBGColorJsonObject = JSON.parse(parameters.statusWindowPendingItemBGColor);
    const statusWindowPendingItemBGRadius = Number(parameters.statusWindowPendingItemBGRadius);

    const statusWindowItemFaceImageVisible = parameters.statusWindowItemFaceImageVisible !== "false";
    const statusWindowItemFaceImageOffsetJsonObject = JSON.parse(parameters.statusWindowItemFaceImageOffset);
    const statusWindowItemFaceImageOffset = new Point(Number(statusWindowItemFaceImageOffsetJsonObject.x) || 0, Number(statusWindowItemFaceImageOffsetJsonObject.y) || 0);
    const statusWindowItemFaceImageWidth = Number(parameters.statusWindowItemFaceImageWidth);
    const statusWindowItemFaceImageHeight = Number(parameters.statusWindowItemFaceImageHeight);

    const statusWindowItemNameVisible = parameters.statusWindowItemNameVisible !== "false";
    const statusWindowItemNameOffsetJsonObject = JSON.parse(parameters.statusWindowItemNameOffset);
    const statusWindowItemNameOffset = new Point(Number(statusWindowItemNameOffsetJsonObject.x) || 0, Number(statusWindowItemNameOffsetJsonObject.y) || 0);
    const statusWindowItemNameWidth = Number(parameters.statusWindowItemNameWidth);
    const statusWindowItemNameFontSize = Number(parameters.statusWindowItemNameFontSize) || 26;
    const statusWindowItemNameTextColorJsonObject = JSON.parse(parameters.statusWindowItemNameTextColor);
    const statusWindowItemNameTextOutlineColorJsonObject = JSON.parse(parameters.statusWindowItemNameTextOutlineColor);

    const statusWindowItemLevelVisible = parameters.statusWindowItemLevelVisible !== "false";
    const statusWindowItemLevelLabelOffsetJsonObject = JSON.parse(parameters.statusWindowItemLevelLabelOffset);
    const statusWindowItemLevelLabelOffset = new Point(Number(statusWindowItemLevelLabelOffsetJsonObject.x) || 0, Number(statusWindowItemLevelLabelOffsetJsonObject.y) || 0);
    const statusWindowItemLevelLabelWidth = Number(parameters.statusWindowItemLevelLabelWidth);
    const statusWindowItemLevelLabelFontSize = Number(parameters.statusWindowItemLevelLabelFontSize) || 26;
    const statusWindowItemLevelLabelTextColorJsonObject = JSON.parse(parameters.statusWindowItemLevelLabelTextColor);
    const statusWindowItemLevelLabelTextOutlineColorJsonObject = JSON.parse(parameters.statusWindowItemLevelLabelTextOutlineColor);
    const statusWindowItemLevelValueOffsetJsonObject = JSON.parse(parameters.statusWindowItemLevelValueOffset);
    const statusWindowItemLevelValueOffset = new Point(Number(statusWindowItemLevelValueOffsetJsonObject.x) || 0, Number(statusWindowItemLevelValueOffsetJsonObject.y) || 0);
    const statusWindowItemLevelValueWidth = Number(parameters.statusWindowItemLevelValueWidth);
    const statusWindowItemLevelValueFontSize = Number(parameters.statusWindowItemLevelValueFontSize) || 26;
    const statusWindowItemLevelValueTextColorJsonObject = JSON.parse(parameters.statusWindowItemLevelValueTextColor);
    const statusWindowItemLevelValueTextOutlineColorJsonObject = JSON.parse(parameters.statusWindowItemLevelValueTextOutlineColor);

    const statusWindowItemIconsVisible = parameters.statusWindowItemIconsVisible !== "false";
    const statusWindowItemIconsOffsetJsonObject = JSON.parse(parameters.statusWindowItemIconsOffset);
    const statusWindowItemIconsOffset = new Point(Number(statusWindowItemIconsOffsetJsonObject.x) || 0, Number(statusWindowItemIconsOffsetJsonObject.y) || 0);
    const statusWindowItemAllIconsWidth = Number(parameters.statusWindowItemAllIconsWidth);
    const statusWindowItemIconWidth = Number(parameters.statusWindowItemIconWidth);
    const statusWindowItemIconColSpacing = Number(parameters.statusWindowItemIconColSpacing);

    const statusWindowItemClassVisible = parameters.statusWindowItemClassVisible !== "false";
    const statusWindowItemClassOffsetJsonObject = JSON.parse(parameters.statusWindowItemClassOffset);
    const statusWindowItemClassOffset = new Point(Number(statusWindowItemClassOffsetJsonObject.x) || 0, Number(statusWindowItemClassOffsetJsonObject.y) || 0);
    const statusWindowItemClassWidth = Number(parameters.statusWindowItemClassWidth);
    const statusWindowItemClassFontSize = Number(parameters.statusWindowItemClassFontSize) || 26;
    const statusWindowItemClassTextColorJsonObject = JSON.parse(parameters.statusWindowItemClassTextColor);
    const statusWindowItemClassTextOutlineColorJsonObject = JSON.parse(parameters.statusWindowItemClassTextOutlineColor);

    const statusWindowItemHPVisible = parameters.statusWindowItemHPVisible !== "false";
    const statusWindowItemHPOffsetJsonObject = JSON.parse(parameters.statusWindowItemHPOffset);
    const statusWindowItemHPOffset = new Point(Number(statusWindowItemHPOffsetJsonObject.x) || 0, Number(statusWindowItemHPOffsetJsonObject.y) || 0);
    const statusWindowItemHPWidth = Number(parameters.statusWindowItemHPWidth);
    const statusWindowItemHPHeight = Number(parameters.statusWindowItemHPHeight);

    const statusWindowItemHPLabelFormality = parameters.statusWindowItemHPLabelFormality;
    const statusWindowItemHPTextLabelOffsetJsonObject = JSON.parse(parameters.statusWindowItemHPTextLabelOffset);
    const statusWindowItemHPTextLabelOffset = new Point(Number(statusWindowItemHPTextLabelOffsetJsonObject.x) || 0, Number(statusWindowItemHPTextLabelOffsetJsonObject.y) || 0);
    const statusWindowItemHPTextLabelWidth = Number(parameters.statusWindowItemHPTextLabelWidth);
    const statusWindowItemHPTextLabelHeight = Number(parameters.statusWindowItemHPTextLabelHeight);
    const statusWindowItemHPTextLabelFontSize = Number(parameters.statusWindowItemHPTextLabelFontSize) || 24;
    const statusWindowItemHPTextLabelTextColorJsonObject = JSON.parse(parameters.statusWindowItemHPTextLabelTextColor);
    const statusWindowItemHPTextLabelTextOutlineColorJsonObject = JSON.parse(parameters.statusWindowItemHPTextLabelTextOutlineColor);
    const statusWindowItemHPTextLabelTextOutlineWidth = Number(parameters.statusWindowItemHPTextLabelTextOutlineWidth);
    const statusWindowItemHPIconLabelIndex = Number(parameters.statusWindowItemHPIconLabelIndex);
    const statusWindowItemHPIconLabelOffsetJsonObject = JSON.parse(parameters.statusWindowItemHPIconLabelOffset);
    const statusWindowItemHPIconLabelOffset = new Point(Number(statusWindowItemHPIconLabelOffsetJsonObject.x) || 0, Number(statusWindowItemHPIconLabelOffsetJsonObject.y) || 0);
    const statusWindowItemHPIconLabelWidth = Number(parameters.statusWindowItemHPIconLabelWidth);

    const statusWindowItemHPGaugeOffsetJsonObject = JSON.parse(parameters.statusWindowItemHPGaugeOffset);
    const statusWindowItemHPGaugeOffset = new Point(Number(statusWindowItemHPGaugeOffsetJsonObject.x) || 0, Number(statusWindowItemHPGaugeOffsetJsonObject.y) || 0);
    const statusWindowItemHPGaugeWidth = Number(parameters.statusWindowItemHPGaugeWidth);
    const statusWindowItemHPGaugeHeight = Number(parameters.statusWindowItemHPGaugeHeight);
    const statusWindowItemHPGaugeBackColorJsonObject = JSON.parse(parameters.statusWindowItemHPGaugeBackColor);
    const statusWindowItemHPGaugeColor1JsonObject = JSON.parse(parameters.statusWindowItemHPGaugeColor1);
    const statusWindowItemHPGaugeColor2JsonObject = JSON.parse(parameters.statusWindowItemHPGaugeColor2);
    const statusWindowItemHPGaugeBorderColorJsonObject = JSON.parse(parameters.statusWindowItemHPGaugeBorderColor);
    const statusWindowItemHPGaugeBorderLineWidth = Number(parameters.statusWindowItemHPGaugeBorderLineWidth);
    const statusWindowItemHPGaugeBorderRadius = Number(parameters.statusWindowItemHPGaugeBorderRadius);

    // Custom Classes

    class Sprite_MenuGauge extends Sprite_Gauge {

        initialize() {
            Sprite_Gauge.prototype.initialize.call(this);
        }

        // redraw() {
        //     this.bitmap.clear();
        //     this.bitmap.strokeRect(0, 0, statusWindowItemHPWidth, statusWindowItemHPHeight, colorJsonObjectConvertToColorRGBA(statusWindowItemHPTextLabelTextColorJsonObject));
        //     const currentValue = this.currentValue();
        //     if (!isNaN(currentValue)) {
        //         this.drawGauge();
        //         if (this._statusType !== "time") {
        //             this.drawLabel();
        //             if (this.isValid()) {
        //                 this.drawValue();
        //             }
        //         }
        //     }
        // };

        setupAllData() {
            switch (this._statusType) {
                case "hp":
                    this.bitmapSize = {width: statusWindowItemHPWidth, height: statusWindowItemHPHeight};
                    this.bitmapLabelFontSize = statusWindowItemHPTextLabelFontSize;
                    this.bitmapLabelTextColor = colorJsonObjectConvertToColorRGBA(statusWindowItemHPTextLabelTextColorJsonObject);
                    this.bitmapLabelOutlineColor = colorJsonObjectConvertToColorRGBA(statusWindowItemHPTextLabelTextOutlineColorJsonObject);
                    this.bitmapLabelOutlineWidth = statusWindowItemHPTextLabelTextOutlineWidth;
                    this.textLabelRect = new Rectangle(statusWindowItemHPTextLabelOffset.x, statusWindowItemHPTextLabelOffset.y, statusWindowItemHPTextLabelWidth, statusWindowItemHPTextLabelHeight);
                    this.iconLabelRect = new Rectangle(statusWindowItemHPIconLabelOffset.x, statusWindowItemHPIconLabelOffset.y, statusWindowItemHPIconLabelWidth, statusWindowItemHPIconLabelWidth);
                    this.iconIndex = statusWindowItemHPIconLabelIndex;
                    this.gaugeBackColorRGBA = colorJsonObjectConvertToColorRGBA(statusWindowItemHPGaugeBackColorJsonObject);
                    this.gaugeColor1RGBA = colorJsonObjectConvertToColorRGBA(statusWindowItemHPGaugeColor1JsonObject);
                    this.gaugeColor2RGBA = colorJsonObjectConvertToColorRGBA(statusWindowItemHPGaugeColor2JsonObject);
                    this.gaugeBorderColorRGBA = colorJsonObjectConvertToColorRGBA(statusWindowItemHPGaugeBorderColorJsonObject);
                    this.gaugeRect = new Rectangle(statusWindowItemHPGaugeOffset.x, statusWindowItemHPGaugeOffset.y, statusWindowItemHPGaugeWidth, statusWindowItemHPGaugeHeight);
                    this.gaugeBorderLineWidth = statusWindowItemHPGaugeBorderLineWidth;
                    this.gaugeBorderRadius = statusWindowItemHPGaugeBorderRadius;
                case "mp":
                    
                case "tp":
                    
                default:
                    
            }
        }

        setup(battler, statusType) {
            this._battler = battler;
            this._statusType = statusType;
            this._value = this.currentValue();
            this._maxValue = this.currentMaxValue();
            this.setupAllData();
            this.width = this.bitmapSize.width;
            this.height = this.bitmapSize.height;
            this.bitmap.resize(this.bitmapSize.width, this.bitmapSize.height);
            this.updateBitmap();
        };

        drawIcon(iconIndex, x, y, width, height) {
            const bitmap = ImageManager.loadSystem("IconSet");
            const pw = ImageManager.iconWidth;
            const ph = ImageManager.iconHeight;
            const sx = (iconIndex % 16) * pw;
            const sy = Math.floor(iconIndex / 16) * ph;
            this.bitmap.blt(bitmap, sx, sy, pw, ph, x, y, width, height);
        };

        drawLabel() {
            if (statusWindowItemHPLabelFormality !== statusWindowItemLabelFormalitySelectNone) {
                if (statusWindowItemHPLabelFormality === statusWindowItemLabelFormalitySelectIcon) {
                    const index = this.iconIndex;
                    const rect = this.iconLabelRect;
                    this.drawIcon(index, rect.x, rect.y, rect.width, rect.height);
                } else {
                    const label = this.label();
                    const rect = this.textLabelRect;
                    this.bitmap.fontFace = this.labelFontFace();
                    this.bitmap.fontSize = this.bitmapLabelFontSize;
                    this.bitmap.textColor = this.bitmapLabelTextColor;
                    this.bitmap.outlineColor = this.bitmapLabelOutlineColor;
                    this.bitmap.outlineWidth = this.bitmapLabelOutlineWidth;
                    this.bitmap.paintOpacity = this.labelOpacity();
                    this.bitmap.drawText(label, rect.x, rect.y, rect.width, rect.height, "left");
                    this.bitmap.paintOpacity = 255;
                }
            }
        };

        drawGauge() {
            const rect = this.gaugeRect;
            this.drawGaugeRect(rect.x, rect.y, rect.width, rect.height);
        };
        
        drawGaugeRect(x, y, width, height) {
            const rate = this.gaugeRate();
            const fillW = Math.floor((width - 2) * rate);
            const fillH = height - 2;
            const color0 = this.gaugeBackColorRGBA;
            const color1 = this.gaugeColor1RGBA;
            const color2 = this.gaugeColor2RGBA;
            const color3 = this.gaugeBorderColorRGBA;
            const lineWidth = this.gaugeBorderLineWidth;
            const radius = this.gaugeBorderRadius;
            //console.log("x, y, width, height: ", x, y, width, height)
            this.bitmap.fillRoundRect(x, y, width, height, color0, radius);
            this.bitmap.gradientFillRoundRect(x + 1, y + 1, fillW, fillH, color1, color2, false, radius);
            if (lineWidth > 0) {
                this.bitmap.strokeRoundRect(x, y, width, height, color3, lineWidth, radius);
            }
        };

    }

    // Private Functions and System Class Extensions
    const colorJsonObjectConvertToColorRGBA = function(object) {
        return `rgba(${Number(object.r)}, ${Number(object.g)}, ${Number(object.b)}, ${Number(object.a)})`;
    }

    Bitmap.prototype.strokeRoundRect = function(x, y, width, height, color, lineWidth, radius) {
        const context = this.context;
        context.save();
        context.strokeStyle = color;
        context.lineWidth = lineWidth;

        context.beginPath();
        
        context.moveTo(x + radius, y);

        context.lineTo(x + width - radius, y);
        context.quadraticCurveTo(x + width, y, x + width, y + radius);
        
        context.lineTo(x + width, y + height - radius);
        context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

        context.lineTo(x + radius, y + height);
        context.quadraticCurveTo(x, y + height, x, y + height - radius);

        context.lineTo(x, y + radius);
        context.quadraticCurveTo(x, y, x + radius, y);

        context.closePath();

        context.stroke();

        context.restore();
        this._baseTexture.update();
    };

    Bitmap.prototype.fillRoundRect = function(x, y, width, height, color, radius) {
        const context = this.context;
        context.save();
        context.fillStyle = color;

        context.beginPath();
        
        context.moveTo(x + radius, y);

        context.lineTo(x + width - radius, y);
        context.quadraticCurveTo(x + width, y, x + width, y + radius);
        
        context.lineTo(x + width, y + height - radius);
        context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

        context.lineTo(x + radius, y + height);
        context.quadraticCurveTo(x, y + height, x, y + height - radius);

        context.lineTo(x, y + radius);
        context.quadraticCurveTo(x, y, x + radius, y);

        context.closePath();

        context.fill();

        context.restore();
        this._baseTexture.update();
    };

    Bitmap.prototype.gradientFillRoundRect = function (x, y, width, height, color1, color2, vertical, radius) {
        const context = this.context;
        const x1 = vertical ? x : x + width;
        const y1 = vertical ? y + height : y;
        const grad = context.createLinearGradient(x, y, x1, y1);
        grad.addColorStop(0, color1);
        grad.addColorStop(1, color2);
        context.save();
        context.fillStyle = grad;

        context.beginPath();
        
        context.moveTo(x + radius, y);

        context.lineTo(x + width - radius, y);
        context.quadraticCurveTo(x + width, y, x + width, y + radius);
        
        context.lineTo(x + width, y + height - radius);
        context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

        context.lineTo(x + radius, y + height);
        context.quadraticCurveTo(x, y + height, x, y + height - radius);

        context.lineTo(x, y + radius);
        context.quadraticCurveTo(x, y, x + radius, y);

        context.closePath();

        context.fill();

        context.restore();
        this._baseTexture.update();
    };

    //Scene

    const _Scene_Menu_Needs_Cancel_Button = Scene_Menu.prototype.needsCancelButton;
    Scene_Menu.prototype.needsCancelButton = function() {
        let visible = _Scene_Menu_Needs_Cancel_Button.apply(this, arguments);
        visible = sceneCancelButtonVisible;
        return visible;
    };

    const _Scene_Menu_Create_Cancel_Button = Scene_Menu.prototype.createCancelButton;
    Scene_Menu.prototype.createCancelButton = function() {
        _Scene_Menu_Create_Cancel_Button.apply(this, arguments);
        this._cancelButton.x = sceneCancelButtonOffset.x;
        this._cancelButton.y = sceneCancelButtonOffset.y;
    };

    const _Scene_Menu_Create_Background = Scene_Menu.prototype.createBackground;
    Scene_Menu.prototype.createBackground = function() {
        _Scene_Menu_Create_Background.apply(this, arguments);
        if (sceneBackGround !== sceneBackGroundSelectNone) {
            if (sceneBackGroundImage && sceneBackGround === sceneBackGroundSelectImage) {
                this._backgroundSprite.bitmap = ImageManager.loadTitle1(sceneBackGroundImage);
                this._backgroundSprite.filters = [];
                this.setBackgroundOpacity(255);
            }
            if (sceneBackGroundVideo && sceneBackGround === sceneBackGroundSelectVideo) {
                //this.removeChild(this._backgroundSprite);
                PIXI.utils.clearTextureCache();
                const fileExtension = Utils.canPlayWebm() ? ".webm" : ".mp4";
                const videoPath = sceneBackGroundVideo + fileExtension;
                const bg = PIXI.Texture.from(videoPath);
                const video = bg.baseTexture.resource.source;
                video.loop = true;
                video.preload = 'auto';
                const videoSprite = new PIXI.Sprite(bg);
                videoSprite.width = Graphics.width;
                videoSprite.height = Graphics.height;
                this.addChild(videoSprite);
            }
        } 
    };

    // const _Scene_Menu_Start = Scene_Menu.prototype.start;
    // Scene_Menu.prototype.start = function() {
    //     _Scene_Menu_Start.apply(this, arguments);
    //     this.lastBGM = AudioManager._currentBgm;
    //     AudioManager.playBgm({"name":"Theme5","pan":0,"pitch":100,"volume":90});
    //     AudioManager.stopBgs();
    //     AudioManager.stopMe();
    // };

    // const _Scene_Menu_Destroy = Scene_Menu.prototype.destroy;
    // Scene_Menu.prototype.destroy = function() {
    //     _Scene_Menu_Destroy.apply(this, arguments);
    //     this.fadeOutAll();
    //     // AudioManager.playBgm(this.lastBGM);
    // };

    // Scene_Menu.prototype.popScene = function() {
    //     AudioManager.playBgm(this.lastBGM);
    //     SceneManager.pop();
    // };

    //CommandWindow

    const _Scene_Menu_Create_Command_Window = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
        _Scene_Menu_Create_Command_Window.apply(this, arguments);
        // this._commandWindow.visible = false;
        this._commandWindow.windowskin = ImageManager.loadSystem(commandWindowWindowSkin);
        this._commandWindow._padding = commandWindowPadding;
    };

    const _Window_Menu_Command_Make_Command_List = Window_MenuCommand.prototype.makeCommandList;
    Window_MenuCommand.prototype.makeCommandList = function() {
        _Window_Menu_Command_Make_Command_List.apply(this, arguments);
        let rows = Math.ceil(this._list.length / commandWindowMaxCols);
        this.move(commandWindowOffset.x, commandWindowOffset.y, commandWindowItemWidth * commandWindowMaxCols + 2 * commandWindowPadding + commandWindowColSpacing * commandWindowMaxCols, commandWindowItemHeight * rows + 2 * commandWindowPadding + commandWindowRowSpacing * rows);
        this.contentsBack.resize(commandWindowItemWidth * commandWindowMaxCols + 2 * commandWindowPadding + commandWindowColSpacing * commandWindowMaxCols, commandWindowItemHeight * rows + 2 * commandWindowPadding + commandWindowRowSpacing * rows);
        this.contents.resize(commandWindowItemWidth * commandWindowMaxCols + 2 * commandWindowPadding + commandWindowColSpacing * commandWindowMaxCols, commandWindowItemHeight * rows + 2 * commandWindowPadding + commandWindowRowSpacing * rows);
    };

    const _Window_Menu_Command_Item_Width = Window_MenuCommand.prototype.itemWidth;
    Window_MenuCommand.prototype.itemWidth = function() {
        let width = _Window_Menu_Command_Item_Width.apply(this, arguments);
        width = commandWindowItemWidth + this.colSpacing();
        return width;
    }

    const _Window_Menu_Command_Item_Height = Window_MenuCommand.prototype.itemHeight;
    Window_MenuCommand.prototype.itemHeight = function() {
        let height = _Window_Menu_Command_Item_Height.apply(this, arguments);
        height = commandWindowItemHeight + this.rowSpacing();
        return height;
    }

    const _Window_Menu_Command_RowSpacing = Window_MenuCommand.prototype.rowSpacing;
    Window_MenuCommand.prototype.rowSpacing = function() {
        let rowSpacing = _Window_Menu_Command_RowSpacing.apply(this, arguments);
        rowSpacing = commandWindowRowSpacing;
        return rowSpacing;
    };

    const _Window_Menu_Command_ColSpacing = Window_MenuCommand.prototype.colSpacing;
    Window_MenuCommand.prototype.colSpacing = function() {
        let colSpacing = _Window_Menu_Command_ColSpacing.apply(this, arguments);
        colSpacing = commandWindowColSpacing;
        return colSpacing;
    };

    const _Window_Menu_Command_MaxCols = Window_MenuCommand.prototype.maxCols;
    Window_MenuCommand.prototype.maxCols = function() {
        let maxCols = _Window_Menu_Command_MaxCols.apply(this, arguments);
        maxCols = commandWindowMaxCols;
        return maxCols;
    };
    
    const _Window_Menu_Command_Create_Cursor_Sprite = Window_MenuCommand.prototype._createCursorSprite;
    Window_MenuCommand.prototype._createCursorSprite = function() {
        _Window_Menu_Command_Create_Cursor_Sprite.apply(this, arguments);
        if (commandWindowCursor === commandWindowCursorSelectImage && commandWindowCursorImagesJsonObject.length !== 0) {
            if (commandWindowCursorImagesJsonObject.length === 1) {
                this._cursorSprite = new Sprite();
                this._cursorSprite.addChild(new Sprite());
                this._cursorSprite.children[0].bitmap = ImageManager.loadBitmap("img/", commandWindowCursorImagesJsonObject[0]);
                this._cursorSprite.children[0].move(commandWindowCursorOffset.x, commandWindowCursorOffset.y); // 居中微调
                this._clientArea.addChild(this._cursorSprite);
            } else {
                this._cursorSprite = new Sprite();

                const commandWindowCursorImagesPathArray = [];
                for (const image of commandWindowCursorImagesJsonObject) {
                    commandWindowCursorImagesPathArray.push("img/" + image + ".png")
                }
                const animatedSprite = new PIXI.AnimatedSprite.fromImages(commandWindowCursorImagesPathArray);

                animatedSprite.animationSpeed = commandWindowCursorAnimationSpeed / 10.0;
                animatedSprite.x = commandWindowCursorOffset.x;
                animatedSprite.y = commandWindowCursorOffset.y;
            
                animatedSprite.gotoAndPlay(0);
                
                const animatedSpriteContainer = new PIXI.Container();
                animatedSpriteContainer.addChild(animatedSprite);
                
                this._cursorSprite.addChild(animatedSpriteContainer);
                this._clientArea.addChild(this._cursorSprite);
            }
        }
    }

    const _Window_Menu_Command_Update_Cursor = Window_MenuCommand.prototype._updateCursor;
    Window_MenuCommand.prototype._updateCursor = function() {
        if (commandWindowCursor === commandWindowCursorSelectImage && commandWindowCursorImagesJsonObject.length !== 0) {
            this._cursorSprite.visible = this.isOpen() && this.cursorVisible;
            this._cursorSprite.x = this._cursorRect.x;
            this._cursorSprite.y = this._cursorRect.y;
        } else {
            _Window_Menu_Command_Update_Cursor.apply(this, arguments);
        }
    }

    const _Window_Menu_Command_Refresh_Cursor = Window_MenuCommand.prototype._refreshCursor;
    Window_MenuCommand.prototype._refreshCursor = function() {
        if (commandWindowCursor === commandWindowCursorSelectNone || commandWindowCursorImagesJsonObject.length === 0) {
            _Window_Menu_Command_Refresh_Cursor.apply(this, arguments);
        }
    }

    //const _Window_Menu_Command_Draw_Background_Rect = Window_MenuCommand.prototype.drawBackgroundRect;
    Window_MenuCommand.prototype.drawBackgroundRect = function(rect) {
        //_Window_Menu_Command_Draw_Background_Rect.apply(this, arguments);
        //this.contentsBack.clearRect(rect.x, rect.y, rect.width, rect.height);
        const c1 = colorJsonObjectConvertToColorRGBA(commandWindowItemBGColor1JsonObject);
        const c2 = colorJsonObjectConvertToColorRGBA(commandWindowItemBGColor2JsonObject);
        const c3 = colorJsonObjectConvertToColorRGBA(commandWindowItemBGBorderColorJsonObject);
        const x = rect.x + commandWindowItemBGOffset.x;
        const y = rect.y + commandWindowItemBGOffset.y;
        const w = commandWindowItemBGWidth;
        const h = commandWindowItemBGHeight;
        this.contentsBack.gradientFillRoundRect(x, y, w, h, c1, c2, true, commandWindowItemBGBorderRadius);
        if (commandWindowItemBGBorderLineWidth > 0) {
            this.contentsBack.strokeRoundRect(x, y, w, h, c3, commandWindowItemBGBorderLineWidth, commandWindowItemBGBorderRadius);
        }
    };

    const _Window_Menu_Command_Reset_Text_Color = Window_MenuCommand.prototype.resetTextColor;
    Window_MenuCommand.prototype.resetTextColor = function() {
        _Window_Menu_Command_Reset_Text_Color.apply(this, arguments);
        this.changeTextColor(colorJsonObjectConvertToColorRGBA(commandWindowItemTextColorJsonObject));
        this.changeOutlineColor(colorJsonObjectConvertToColorRGBA(commandWindowItemTextOutlineColorJsonObject));
    };

    const _Window_Menu_Command_Item_Text_Align = Window_MenuCommand.prototype.itemTextAlign;
    Window_MenuCommand.prototype.itemTextAlign = function() {
        let textAlign = _Window_Menu_Command_Item_Text_Align.apply(this, arguments);
        textAlign = commandWindowItemTextAlign;
        return textAlign;
    };

    Window_MenuCommand.prototype.drawText = function(text, x, y, maxWidth, align) {
        this.contents.drawText(text, x + commandWindowItemTextOffsetX, y, maxWidth, this.lineHeight(), align);
    };

    const _Window_Menu_Command_Draw_Item = Window_MenuCommand.prototype.drawItem;
    Window_MenuCommand.prototype.drawItem = function(index) {
        this.contents.fontSize = commandWindowItemFontSize;
        _Window_Menu_Command_Draw_Item.apply(this, arguments);
    };
    

    //GoldWindow
    const _Scene_Menu_Create_Gold_Window = Scene_Menu.prototype.createGoldWindow;
    Scene_Menu.prototype.createGoldWindow = function() {
        _Scene_Menu_Create_Gold_Window.apply(this, arguments);
        this._goldWindow.visible = goldWindowVisible;
    };

    //StatusWindow
    const _Scene_Menu_Create_Status_Window = Scene_Menu.prototype.createStatusWindow;
    Scene_Menu.prototype.createStatusWindow = function() {
        _Scene_Menu_Create_Status_Window.apply(this, arguments);
        this._statusWindow.visible = statusWindowVisible;
        this._statusWindow.windowskin = ImageManager.loadSystem(statusWindowWindowSkin);
        this._statusWindow._padding = statusWindowPadding;
    };

    const _Scene_Menu_Status_Window_Rect = Scene_Menu.prototype.statusWindowRect;
    Scene_Menu.prototype.statusWindowRect = function() {
        let rect = _Scene_Menu_Status_Window_Rect.apply(this, arguments);
        rect = new Rectangle(statusWindowOffset.x, statusWindowOffset.y, statusWindowItemWidth + 2 * statusWindowPadding + statusWindowColSpacing, statusWindowItemHeight * 4 + 2 * statusWindowPadding + statusWindowRowSpacing * 4);
        if (statusWindowMaxCols === 2) {
            rect = new Rectangle(statusWindowOffset.x, statusWindowOffset.y, statusWindowItemWidth * 2 + 2 * statusWindowPadding + statusWindowColSpacing * 2, statusWindowItemHeight * 2 + 2 * statusWindowPadding + statusWindowRowSpacing * 2);
        }
        if (statusWindowMaxCols === 4) {
            rect = new Rectangle(statusWindowOffset.x, statusWindowOffset.y, statusWindowItemWidth * 4 + 2 * statusWindowPadding + statusWindowColSpacing * 4, statusWindowItemHeight + 2 * statusWindowPadding + statusWindowRowSpacing);
        }
        return rect;
    };

    const _Window_Menu_Status_Item_Width = Window_MenuStatus.prototype.itemWidth;
    Window_MenuStatus.prototype.itemWidth = function() {
        let width = _Window_Menu_Status_Item_Width.apply(this, arguments);
        width = statusWindowItemWidth + this.colSpacing();
        return width;
    }

    const _Window_Menu_Status_Item_Height = Window_MenuStatus.prototype.itemHeight;
    Window_MenuStatus.prototype.itemHeight = function() {
        let height = _Window_Menu_Status_Item_Height.apply(this, arguments);
        height = statusWindowItemHeight + this.rowSpacing();
        return height;
    }

    const _Window_Menu_Status_RowSpacing = Window_MenuStatus.prototype.rowSpacing;
    Window_MenuStatus.prototype.rowSpacing = function() {
        let rowSpacing = _Window_Menu_Status_RowSpacing.apply(this, arguments);
        rowSpacing = statusWindowRowSpacing;
        return rowSpacing;
    };

    const _Window_Menu_Status_ColSpacing = Window_MenuStatus.prototype.colSpacing;
    Window_MenuStatus.prototype.colSpacing = function() {
        let colSpacing = _Window_Menu_Status_ColSpacing.apply(this, arguments);
        colSpacing = statusWindowColSpacing;
        return colSpacing;
    };
    
    const _Window_Menu_Status_MaxCols = Window_MenuStatus.prototype.maxCols;
    Window_MenuStatus.prototype.maxCols = function() {
        let maxCols = _Window_Menu_Status_MaxCols.apply(this, arguments);
        maxCols = statusWindowMaxCols;
        return maxCols;
    };

    Window_MenuStatus.prototype.drawItemImage = function(index) {
        if (statusWindowItemFaceImageVisible === true) {
            const actor = this.actor(index);
            const rect = this.itemRect(index);
            const width = statusWindowItemFaceImageWidth;
            const height = statusWindowItemFaceImageHeight;
            this.changePaintOpacity(actor.isBattleMember());
            this.drawActorFace(actor, rect.x + statusWindowItemFaceImageOffset.x, rect.y + statusWindowItemFaceImageOffset.y, width, height);
            this.changePaintOpacity(true);
        }
    };

    Window_MenuStatus.prototype.drawFace = function(
        faceName, faceIndex, x, y, width, height
    ) {
        width = width || ImageManager.faceWidth;
        height = height || ImageManager.faceHeight;
        const bitmap = ImageManager.loadFace(faceName);
        const pw = ImageManager.faceWidth;
        const ph = ImageManager.faceHeight;
        const dx = Math.floor(x);
        const dy = Math.floor(y);
        const sx = Math.floor((faceIndex % 4) * pw);
        const sy = Math.floor(Math.floor(faceIndex / 4) * ph);
        this.contents.blt(bitmap, sx, sy, pw, ph, dx, dy, width, height);
    };

    Window_MenuStatus.prototype.drawBackgroundRect = function(rect) {
        const c1 = colorJsonObjectConvertToColorRGBA(statusWindowItemBGColor1JsonObject);
        const c2 = colorJsonObjectConvertToColorRGBA(statusWindowItemBGColor2JsonObject);
        const c3 = colorJsonObjectConvertToColorRGBA(statusWindowItemBGBorderColorJsonObject);
        const x = rect.x + statusWindowItemBGOffset.x;
        const y = rect.y + statusWindowItemBGOffset.y;
        const w = statusWindowItemBGWidth;
        const h = statusWindowItemBGHeight;
        this.contentsBack.gradientFillRoundRect(x, y, w, h, c1, c2, true, statusWindowItemBGBorderRadius);
        if (statusWindowItemBGBorderLineWidth > 0) {
            this.contentsBack.strokeRoundRect(x, y, w, h, c3, statusWindowItemBGBorderLineWidth, statusWindowItemBGBorderRadius);
        }
    };

    Window_MenuStatus.prototype.drawPendingItemBackground = function(index) {
        if (index === this._pendingIndex) {
            const rect = this.itemRect(index);
            const c1 = colorJsonObjectConvertToColorRGBA(statusWindowPendingItemBGColorJsonObject);
            const x = rect.x + statusWindowPendingItemBGOffset.x;
            const y = rect.y + statusWindowPendingItemBGOffset.y;
            const w = statusWindowPendingItemBGWidth;
            const h = statusWindowPendingItemBGHeight;
            this.changePaintOpacity(false);
            this.contents.fillRoundRect(x, y, w, h, c1, statusWindowPendingItemBGRadius);
            this.changePaintOpacity(true);
        }
    };

    Window_MenuStatus.prototype.drawItemStatus = function(index) {
        const actor = this.actor(index);
        const rect = this.itemRect(index);
        const x = rect.x;
        const y = rect.y;
        this.drawActorSimpleStatus(actor, x, y);
    };

    Window_MenuStatus.prototype.drawActorSimpleStatus = function(actor, x, y) {
        const lineHeight = this.lineHeight();
        const x2 = x + statusWindowItemNameOffset.x + 180;
        if (statusWindowItemNameVisible === true) {
            this.drawActorName(actor, x, y);
        }
        if (statusWindowItemLevelVisible === true) {
            this.drawActorLevel(actor, x, y);
        }
        if (statusWindowItemIconsVisible === true) {
            this.drawActorIcons(actor, x, y);
        }
        if (statusWindowItemClassVisible === true) {
            this.drawActorClass(actor, x, y);
        }
        //this.placeBasicGauges(actor, x2, y + lineHeight + 11);
        if (statusWindowItemHPVisible === true) {
            console.log("drawActorSimpleStatus placeGauge hp--------------start")
            this.placeGauge(actor, "hp", x + statusWindowItemHPOffset.x, y + statusWindowItemHPOffset.y);
            console.log("drawActorSimpleStatus placeGauge hp--------------end")
        }
        // this.placeGauge(actor, "mp", x2, y + lineHeight + 11 + this.gaugeLineHeight());
        // if ($dataSystem.optDisplayTp) {
        //     this.placeGauge(actor, "tp", x2, y + lineHeight + 11 + this.gaugeLineHeight() * 2);
        // }
    };

    Window_MenuStatus.prototype.drawActorName = function(actor, x, y, width) {
        width = width || 168;
        this.contents.fontSize = statusWindowItemNameFontSize;
        this.changeTextColor(colorJsonObjectConvertToColorRGBA(statusWindowItemNameTextColorJsonObject));
        this.changeOutlineColor(colorJsonObjectConvertToColorRGBA(statusWindowItemNameTextOutlineColorJsonObject));
        // console.log("x: ", x)//184
        // console.log("y: ", y)//13
        // console.log("width: ", width)//168
        this.drawText(actor.name(), x + statusWindowItemNameOffset.x, y + statusWindowItemNameOffset.y, statusWindowItemNameWidth);
    };

    Window_MenuStatus.prototype.drawActorLevel = function(actor, x, y) {
        this.contents.fontSize = statusWindowItemLevelLabelFontSize;
        this.changeTextColor(colorJsonObjectConvertToColorRGBA(statusWindowItemLevelLabelTextColorJsonObject));
        this.changeOutlineColor(colorJsonObjectConvertToColorRGBA(statusWindowItemLevelLabelTextOutlineColorJsonObject));
        this.drawText(TextManager.levelA, x + statusWindowItemLevelLabelOffset.x, y + statusWindowItemLevelLabelOffset.y, statusWindowItemLevelLabelWidth);

        this.contents.fontSize = statusWindowItemLevelValueFontSize;
        this.changeTextColor(colorJsonObjectConvertToColorRGBA(statusWindowItemLevelValueTextColorJsonObject));
        this.changeOutlineColor(colorJsonObjectConvertToColorRGBA(statusWindowItemLevelValueTextOutlineColorJsonObject));
        this.drawText(actor.level, x + statusWindowItemLevelValueOffset.x, y + statusWindowItemLevelValueOffset.y, statusWindowItemLevelValueWidth);
    };

    Window_MenuStatus.prototype.drawActorIcons = function(actor, x, y, width) {
        width = width || 144;
        const iconWidth = statusWindowItemIconWidth;
        const icons = actor.allIcons().slice(0, Math.floor(statusWindowItemAllIconsWidth / (iconWidth + statusWindowItemIconColSpacing)));
        let iconX = x + statusWindowItemIconsOffset.x;
        let iconY = y + statusWindowItemIconsOffset.y;
        let nextX = iconWidth + statusWindowItemIconColSpacing;
        for (const icon of icons) {
            this.drawIcon(icon, iconX, iconY);
            iconX += nextX;
        }
    };

    Window_MenuStatus.prototype.drawIcon = function(iconIndex, x, y) {
        const bitmap = ImageManager.loadSystem("IconSet");
        const pw = ImageManager.iconWidth;
        const ph = ImageManager.iconHeight;
        const sx = (iconIndex % 16) * pw;
        const sy = Math.floor(iconIndex / 16) * ph;
        this.contents.blt(bitmap, sx, sy, pw, ph, x, y, statusWindowItemIconWidth, statusWindowItemIconWidth);
    };

    Window_MenuStatus.prototype.drawActorClass = function(actor, x, y, width) {
        width = width || 168;
        this.contents.fontSize = statusWindowItemClassFontSize;
        this.changeTextColor(colorJsonObjectConvertToColorRGBA(statusWindowItemClassTextColorJsonObject));
        this.changeOutlineColor(colorJsonObjectConvertToColorRGBA(statusWindowItemClassTextOutlineColorJsonObject));
        this.drawText(actor.currentClass().name, x + statusWindowItemClassOffset.x, y + statusWindowItemClassOffset.y, statusWindowItemClassWidth);
    };

    // Window_MenuStatus.prototype.placeBasicGauges = function(actor, x, y) {
    //     this.placeGauge(actor, "hp", x, y);
    //     this.placeGauge(actor, "mp", x, y + this.gaugeLineHeight());
    //     if ($dataSystem.optDisplayTp) {
    //         this.placeGauge(actor, "tp", x, y + this.gaugeLineHeight() * 2);
    //     }
    // };

    Window_MenuStatus.prototype.placeGauge = function(actor, type, x, y) {
        const key = "actor%1-gauge-%2".format(actor.actorId(), type);
        const sprite = this.createInnerSprite(key, Sprite_MenuGauge);
        sprite.setup(actor, type);
        sprite.move(x, y);
        sprite.show();
    };

})();