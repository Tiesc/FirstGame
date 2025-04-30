System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _class2, _crd, ccclass, property, HexMetrics;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a258eJMzWxLVYM5SXk1erGH", "HexMetrics", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HexMetrics", HexMetrics = (_dec = ccclass('HexMetrics'), _dec(_class = (_class2 = class HexMetrics extends Component {}, _class2.outerRadius = 10, _class2.innerRadius = _class2.outerRadius * 0.866025404, _class2.corners = [new Vec3(0, 0, _class2.outerRadius), // 上
      new Vec3(_class2.innerRadius, 0, 0.5 * _class2.outerRadius), // 右上
      new Vec3(_class2.innerRadius, 0, -0.5 * _class2.outerRadius), // 右下
      new Vec3(0, 0, -_class2.outerRadius), // 下
      new Vec3(-_class2.innerRadius, 0, -0.5 * _class2.outerRadius), // 左下
      new Vec3(-_class2.innerRadius, 0, 0.5 * _class2.outerRadius) // 左上
      ], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee366502532a36024daa0da2d46f77dcdb3278a6.js.map