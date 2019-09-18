sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.agt.egitim.AGT_EGT_1.controller.Deneme", {
		onInit: function () {
			
			var comboBox = this.getView().byId("idCombo");
			var item = new sap.ui.core.Item();
			var maxValue = this.getView().byId("idRating").getMaxValue();
			for(var i = 1; i<= maxValue; i++) {
				
				item = new sap.ui.core.Item();
				item.setKey(i.toString());
				item.setText(i.toString());
				
				comboBox.addItem(item);
			}
			
			
		},
		
		onButtonPress1: function(){
			var textElement = this.getView().byId("idText1");
			textElement.setText("Buton 1'e basıldı");
		},
		onLiveChange: function(event){

			var inputValue = event.getSource().getValue();
			var textElement = this.getView().byId("idText2");
			textElement.setText(inputValue);
		},
		
		onSelectionChange: function(event){
			//var comboValue = event.getSource().getValue();
			//var float = parseFloat(event.getSource().getValue());
			this.getView().byId("idRating").setValue(parseFloat(event.getSource().getValue()));
		}
	});
});