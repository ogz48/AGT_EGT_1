/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/agt/egitim/AGT_EGT_1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/agt/egitim/AGT_EGT_1/test/integration/pages/Deneme",
	"com/agt/egitim/AGT_EGT_1/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.agt.egitim.AGT_EGT_1.view.",
		autoWait: true
	});
});