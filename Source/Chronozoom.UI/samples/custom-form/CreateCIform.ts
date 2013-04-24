/// <reference path='../../NewScripts/controls/formbase.ts'/>

/// <reference path='../../NewScripts/typings/jquery/jquery.d.ts'/>

/// <reference path='../../NewScripts/authoring.ui.ts'/>
module CZ {
    interface FormTestInfo extends CZ.UI.FormBaseInfo {
        SaveCIButton: string;
    }

    class FormTest extends CZ.UI.FormBase {
        private SaveCIButton: JQuery;

        // We only need to add additional initialization in constructor.
        constructor(container: JQuery, formInfo: FormTestInfo) {
            super(container, formInfo);

            this.SaveCIButton = container.find(formInfo.SaveCIButton);

            this.SaveCIButton.click(event => {
                // alert("It Works for me!");
                console.log("it works");
                var contentitems = CZ.Authoring.UI._getContentItemsData();
                console.log(contentitems);
            });
        }

        public show(): void {
            super.show();

            // Just an example how to highligh pressed "Show Form" button.
            // Ideally, it would be better to not place UI selectors in form code,
            // but pass them through parameters.
            this.activationSource.addClass("activeButton");
        }

        public close(): void {
            super.close();

            this.activationSource.removeClass("activeButton");
        }
    }
}