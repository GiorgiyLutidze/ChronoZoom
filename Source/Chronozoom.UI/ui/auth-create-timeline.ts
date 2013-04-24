/// <reference path='../NewScripts/controls/formbase.ts'/>
/// <reference path='../NewScripts/authoring.ts'/>

/// <reference path='../NewScripts/typings/jquery/jquery.d.ts'/>

module CZ {
    export module UI {
        export interface FormCreateTimelineInfo extends CZ.UI.FormBaseInfo {
            startDate: string;
            endDate: string;
            saveButton: string;
            titleInput: string;
            context: Object;
        }

        export class FormCreateTimeline extends CZ.UI.FormBase {
            private saveButton: JQuery;
            private startDate: CZ.UI.DatePicker;
            private endDate: CZ.UI.DatePicker;
            private titleInput: JQuery;

            public timeline: any;
            private isCancel: bool;

            // We only need to add additional initialization in constructor.
            constructor(container: JQuery, formInfo: FormCreateTimelineInfo) {
                super(container, formInfo);

                this.saveButton = container.find(formInfo.saveButton);
                this.startDate = new CZ.UI.DatePicker(container.find(formInfo.startDate));
                this.endDate = new CZ.UI.DatePicker(container.find(formInfo.endDate));
                this.titleInput = container.find(formInfo.titleInput);

                this.timeline = formInfo.context;

                this.saveButton.off();

                this.initialize();
            }

            private initialize(): void {
                this.isCancel = true;
                this.endDate.addEditMode_Infinite();

                this.titleInput.val(this.timeline.title);
                this.startDate.setDate(this.timeline.x);
                this.endDate.setDate(this.timeline.x + this.timeline.width);

                this.saveButton.click(event => {
                    var isValid = CZ.Authoring.ValidateTimelineData(this.startDate.getDate(), this.endDate.getDate(), this.titleInput.val());
                    if (!isValid) {
                        this.container.find("#TimelineErrorSpan").css("display", "block");
                    }
                    if (isValid) {
                        var self = this;
                        CZ.Authoring.updateTimeline(this.timeline, {
                            title: this.titleInput.val(),
                            start: this.startDate.getDate(),
                            end: this.endDate.getDate(),
                        }).then(
                            function (success) {
                                self.isCancel = false;
                                self.close();
                            },
                            function (error) {
                                alert("Unable to save changes. Please try again later.");
                                console.log(error);
                            });
                    }
                });
            }

            public show(): void {
                super.show();

                // Just an example how to highligh pressed "Show Form" button.
                // Ideally, it would be better to not place UI selectors in form code,
                // but pass them through parameters.
                this.activationSource.addClass("activeButton");
            }

            public close() {
                if (this.isCancel) {
                    CZ.Authoring.removeTimeline(this.timeline);
                }
                CZ.Authoring.isActive = false;

                this.container.hide("slow", event => {
                    this.endDate.remove();
                    this.startDate.remove();
                });
                
                this.activationSource.removeClass("active");
            }
        }
    }
}