System.register("chunks:///main.js", ['cc'], function () {
  var cclegacy, _decorator, Node, Canvas, UITransform, instantiate, Label, Color, RichText, Toggle, Button, director, Component, SpriteFrame, tween, v3, Sprite;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      Color = module.Color;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      v3 = module.v3;
      Sprite = module.Sprite;
    }],
    execute: function () {
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;

        _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }

        return desc;
      }

      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);

      cclegacy._RF.pop();

      var _dec$1, _dec2$1, _class$1, _class2$1, _descriptor$1;

      cclegacy._RF.push({}, "a8b5aAjhmpODaT5esJfOy+D", "imgManager", undefined);

      var ccclass$1 = _decorator.ccclass,
          property$1 = _decorator.property;
      var imgManager = (_dec$1 = ccclass$1('imgManager'), _dec2$1 = property$1([SpriteFrame]), _dec$1(_class$1 = (_class2$1 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(imgManager, _Component);

        function imgManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "cardsSF", _descriptor$1, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = imgManager.prototype;

        _proto.getCardSFById = function getCardSFById(id) {
          return this.cardsSF[id];
        };

        _proto.getCardBeiSF = function getCardBeiSF() {
          return this.cardsSF[0];
        };

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        return imgManager;
      }(Component), _descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "cardsSF", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2$1)) || _class$1);

      cclegacy._RF.pop();

      var _dec$2, _dec2$2, _dec3$1, _class$2, _class2$2, _descriptor$2, _descriptor2$1;

      cclegacy._RF.push({}, "c5e0f0oho5MxL9vShmZzUC5", "gameRoot", undefined);

      var ccclass$2 = _decorator.ccclass,
          property$2 = _decorator.property;
      var gameRoot = (_dec$2 = ccclass$2('gameRoot'), _dec2$2 = property$2(imgManager), _dec3$1 = property$2(Node), _dec$2(_class$2 = (_class2$2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(gameRoot, _Component);

        function gameRoot() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "imgManager", _descriptor$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "pointRoot", _descriptor2$1, _assertThisInitialized(_this));

          _this.cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
          _this.currentOpenCard = {
            node: null,
            data: -1
          };
          return _this;
        }

        var _proto = gameRoot.prototype;

        _proto.start = function start() {
          this.orderAllCards();
          this.createAllCards();
          this.moveAllCards();
        };

        _proto.addCardsEvent = function addCardsEvent() {
          var _this2 = this;

          console.log("@@@addCardsEvent");
          this.node.children.forEach(function (node, index) {
            node.on(Node.EventType.TOUCH_END, function (event) {
              if (node === _this2.currentOpenCard.node) {
                return;
              }

              if (!_this2.currentOpenCard.node) {
                console.log("@@@index");
                var id = _this2.cards[index];
                tween(node).to(0.2, {
                  scale: v3(0, 1, 1)
                }).call(function () {
                  var sprite = node.getComponent(Sprite);
                  sprite.spriteFrame = _this2.imgManager.getCardSFById(id);
                }).to(0.2, {
                  scale: v3(1, 1, 1)
                }).start();
                _this2.currentOpenCard.node = node;
                _this2.currentOpenCard.data = id;
                console.log("當前打開的節點", _this2.currentOpenCard);
              } else {
                var _id = _this2.cards[index];

                if (_this2.currentOpenCard.data === _id) {
                  console.log("配對成功");
                  tween(node).to(0.2, {
                    scale: v3(0, 1, 1)
                  }).call(function () {
                    var sprite = node.getComponent(Sprite);
                    sprite.spriteFrame = _this2.imgManager.getCardSFById(_id);
                  }).to(0.2, {
                    scale: v3(1, 1, 1)
                  }).call(function () {
                    _this2.currentOpenCard.node.active = false;
                    _this2.currentOpenCard.node = null;
                    node.active = false;
                  }) // .to(0.2, { opacity: false })
                  .start();
                } else {
                  console.log("配對失敗");
                  tween(node).to(0.2, {
                    scale: v3(0, 1, 1)
                  }).call(function () {
                    var sprite = node.getComponent(Sprite);
                    sprite.spriteFrame = _this2.imgManager.getCardSFById(_id);
                  }).to(0.2, {
                    scale: v3(1, 1, 1)
                  }).call(function () {
                    tween(node).to(0.2, {
                      scale: v3(0, 1, 1)
                    }).call(function () {
                      var sprite = node.getComponent(Sprite);
                      sprite.spriteFrame = _this2.imgManager.getCardBeiSF();
                    }).to(0.2, {
                      scale: v3(1, 1, 1)
                    }).start();
                    tween(_this2.currentOpenCard.node).to(0.2, {
                      scale: v3(0, 1, 1)
                    }).call(function () {
                      var sprite = _this2.currentOpenCard.node.getComponent(Sprite);

                      sprite.spriteFrame = _this2.imgManager.getCardBeiSF();
                    }).to(0.2, {
                      scale: v3(1, 1, 1)
                    }).call(function () {
                      _this2.currentOpenCard.node = null;
                    }).start();
                  }).start();
                } // this.currentOpenCard.node = null

              }
            }, _this2);
          });
        };

        _proto.moveAllCards = function moveAllCards() {
          var _this3 = this;

          this.node.children.forEach(function (node, index) {
            var posX = _this3.pointRoot.children[index].position.x;
            var posY = _this3.pointRoot.children[index].position.y; // node.setPosition(posX, posY)

            tween(node).delay(index * 0.1).to(0.2, {
              position: v3(posX, posY, 0)
            }).start();
          });
          this.scheduleOnce(function () {
            _this3.node.children.forEach(function (node, index) {
              tween(node).to(0.2, {
                scale: v3(0, 1, 1)
              }).call(function () {
                var sprite = node.getComponent(Sprite);
                sprite.spriteFrame = _this3.imgManager.getCardBeiSF();
              }).to(0.2, {
                scale: v3(1, 1, 1)
              }).start();
            });

            _this3.scheduleOnce(function () {
              _this3.addCardsEvent();
            }, 1);
          }, 2);
        };

        _proto.orderAllCards = function orderAllCards() {
          this.cards.sort(function () {
            return 0.2 - Math.random();
          });
          this.cards.sort(function () {
            return 0.2 - Math.random();
          });
          this.cards.sort(function () {
            return 0.2 - Math.random();
          });
        };

        _proto.createAllCards = function createAllCards() {
          var _this4 = this;

          console.log("createAllCards", this.cards);
          this.cards.forEach(function (cardId) {
            _this4.createOneCard(cardId);
          });
        };

        _proto.createOneCard = function createOneCard(id) {
          var node = new Node('card');
          this.node.addChild(node);
          var tran = node.addComponent(UITransform);
          var sprite = node.addComponent(Sprite);
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          tran.setContentSize(140, 200);
          var sf = this.imgManager.getCardSFById(id);
          sprite.spriteFrame = sf;
        };

        _proto.update = function update(deltaTime) {};

        return gameRoot;
      }(Component), (_descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "imgManager", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$2.prototype, "pointRoot", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$2)) || _class$2);

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map