jQuery( document ).ready(function() {

    if(jQuery("#_dsi_persona_ruolo_scuola option:selected").val() != "docente"){
        jQuery(".cmb2-id--dsi-persona-incarico-docente").hide();
        jQuery(".cmb2-id--dsi-persona-durata-incarico-docente").hide();
        jQuery(".cmb2-id--dsi-persona-tipo-supplenza").hide();

    }

    jQuery("#_dsi_persona_ruolo_scuola").change(
        function(){
            if (jQuery(this).val() == 'docente') {
                jQuery(".cmb2-id--dsi-persona-incarico-docente").show();
                jQuery(".cmb2-id--dsi-persona-durata-incarico-docente").show();
                jQuery(".cmb2-id--dsi-persona-tipo-supplenza").show();
            }else{
                jQuery(".cmb2-id--dsi-persona-incarico-docente").hide();
                jQuery(".cmb2-id--dsi-persona-durata-incarico-docente").hide();
                jQuery(".cmb2-id--dsi-persona-tipo-supplenza").hide();

            }
     });

});
