# tgm_grids

##Besonderheiten
Man kann die Flexform leider nicht über das Page TsConfig überschreiben(z.B. bei login TCEFORM.tt_content.pi_flexform.login.sDEF.showForgotPassword.label = testerROOT).  
Deswegen müssen wir einen neuen Pfad angeben wo wir dann eine Kopie anlegen und die Optionen dann ersetzen oder erweitern können.   
Das geht dann so   
tx_gridelements.setup.mastergrid.flexformDS = FILE:fileadmin/tgm_pitb/_global/tmpl/ext/grids/mastergrid-flexform.xml    
Wenn das zugehörige fluid Template verändert werden muss, muss mann den Typoscript Pfad dementsprechend anpassen
 