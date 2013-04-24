var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CZ;
(function (CZ) {
    var FormTest = (function (_super) {
        __extends(FormTest, _super);
        function FormTest(container, formInfo) {
            _super.call(this, container, formInfo);
            this.SaveCIButton = container.find(formInfo.SaveCIButton);
            this.SaveCIButton.click(function (event) {
                console.log("it works");
                var contentitems = CZ.Authoring.UI._getContentItemsData();
                console.log(contentitems);
            });
        }
        FormTest.prototype.show = function () {
            _super.prototype.show.call(this);
            this.activationSource.addClass("activeButton");
        };
        FormTest.prototype.close = function () {
            _super.prototype.close.call(this);
            this.activationSource.removeClass("activeButton");
        };
        return FormTest;
    })(CZ.UI.FormBase);    
})(CZ || (CZ = {}));
