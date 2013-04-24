var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CZ;
(function (CZ) {
    (function (UI) {
        var FormCreateTimeline = (function (_super) {
            __extends(FormCreateTimeline, _super);
            function FormCreateTimeline(container, formInfo) {
                        _super.call(this, container, formInfo);
                this.saveButton = container.find(formInfo.saveButton);
                this.startDate = new CZ.UI.DatePicker(container.find(formInfo.startDate));
                this.endDate = new CZ.UI.DatePicker(container.find(formInfo.endDate));
                this.titleInput = container.find(formInfo.titleInput);
                this.timeline = formInfo.context;
                this.saveButton.off();
                this.initialize();
            }
            FormCreateTimeline.prototype.initialize = function () {
                var _this = this;
                this.isCancel = true;
                this.endDate.addEditMode_Infinite();
                this.titleInput.val(this.timeline.title);
                this.startDate.setDate(this.timeline.x);
                this.endDate.setDate(this.timeline.x + this.timeline.width);
                this.saveButton.click(function (event) {
                    var isValid = CZ.Authoring.ValidateTimelineData(_this.startDate.getDate(), _this.endDate.getDate(), _this.titleInput.val());
                    if(!isValid) {
                        _this.container.find("#error-create-timeline").css("display", "block");
                    }
                    if(isValid) {
                        var self = _this;
                        CZ.Authoring.updateTimeline(_this.timeline, {
                            title: _this.titleInput.val(),
                            start: _this.startDate.getDate(),
                            end: _this.endDate.getDate()
                        }).then(function (success) {
                            self.isCancel = false;
                            self.close();
                        }, function (error) {
                            alert("Unable to save changes. Please try again later.");
                            console.log(error);
                        });
                    }
                });
            };
            FormCreateTimeline.prototype.show = function () {
                _super.prototype.show.call(this);
                this.activationSource.addClass("activeButton");
            };
            FormCreateTimeline.prototype.close = function () {
                var _this = this;
                if(this.isCancel) {
                    CZ.Authoring.removeTimeline(this.timeline);
                }
                CZ.Authoring._isActive = false;
                this.container.hide("slow", function (event) {
                    _this.endDate.remove();
                    _this.startDate.remove();
                });
                this.activationSource.removeClass("active");
            };
            return FormCreateTimeline;
        })(CZ.UI.FormBase);
        UI.FormCreateTimeline = FormCreateTimeline;        
    })(CZ.UI || (CZ.UI = {}));
    var UI = CZ.UI;
})(CZ || (CZ = {}));
