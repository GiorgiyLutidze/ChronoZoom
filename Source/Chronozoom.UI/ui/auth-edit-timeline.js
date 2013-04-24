var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CZ;
(function (CZ) {
    (function (UI) {
        var FormEditTimeline = (function (_super) {
            __extends(FormEditTimeline, _super);
            function FormEditTimeline(container, formInfo) {
                        _super.call(this, container, formInfo);
                this.saveButton = container.find(formInfo.saveButton);
                this.deleteButton = container.find(formInfo.deleteButton);
                this.startDate = new CZ.UI.DatePicker(container.find(formInfo.startDate));
                this.endDate = new CZ.UI.DatePicker(container.find(formInfo.endDate));
                this.titleInput = container.find(formInfo.titleInput);
                this.timeline = formInfo.context;
                this.saveButton.off();
                this.deleteButton.off();
                this.initialize();
            }
            FormEditTimeline.prototype.initialize = function () {
                var _this = this;
                this.endDate.addEditMode_Infinite();
                this.titleInput.val(this.timeline.title);
                this.startDate.setDate(this.timeline.x);
                this.endDate.setDate(this.timeline.x + this.timeline.width);
                this.saveButton.click(function (event) {
                    var isValid = CZ.Authoring.ValidateTimelineData(_this.startDate.getDate(), _this.endDate.getDate(), _this.titleInput.val());
                    if(!isValid) {
                        _this.container.find("#error-edit-timeline").css("display", "block");
                    }
                    if(isValid) {
                        var self = _this;
                        CZ.Authoring.updateTimeline(_this.timeline, {
                            title: _this.titleInput.val(),
                            start: _this.startDate.getDate(),
                            end: _this.endDate.getDate()
                        }).then(function (success) {
                            self.close();
                        }, function (error) {
                            alert("Unable to save changes. Please try again later.");
                            console.log(error);
                        });
                    }
                });
                this.deleteButton.click(function (event) {
                    if(confirm("Are you sure want to delete timeline and all of its nested timelines and exhibits? Delete can't be undone!")) {
                        CZ.Authoring.removeTimeline(_this.timeline);
                        _this.close();
                    }
                });
            };
            FormEditTimeline.prototype.show = function () {
                _super.prototype.show.call(this);
                this.activationSource.addClass("activeButton");
            };
            FormEditTimeline.prototype.close = function () {
                var _this = this;
                this.container.hide("slow", function (event) {
                    _this.endDate.remove();
                    _this.startDate.remove();
                });
                CZ.Authoring._isActive = false;
                this.activationSource.removeClass("activeButton");
            };
            return FormEditTimeline;
        })(CZ.UI.FormBase);
        UI.FormEditTimeline = FormEditTimeline;        
    })(CZ.UI || (CZ.UI = {}));
    var UI = CZ.UI;
})(CZ || (CZ = {}));
