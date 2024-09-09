sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project7.controller.View1", {
            onInit: function () {
                // Create a model for form data and set it to the view with the name "formModel"
                var onFormData = {
                    "name": "Sudheer",
                    "age": 23,
                    "gender": 0,
                    "Attendance": true
                };
                var oFormModel = new JSONModel({
                    formD: onFormData
                });
                this.getView().setModel(oFormModel);
                var oEmpModel = new JSONModel("/model/Emp.json");
                this.getView().setModel(oEmpModel, "empModel");
            },

            onAttendanceSelect: function (oEvent) {
                var oSel = oEvent.getParameter("selected");
                this.byId("douteqn").setVisible(oSel);
            }
        });
    });
