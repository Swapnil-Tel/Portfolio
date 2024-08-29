$(document).ready(function(){
	
		//alert("in js");
	$("#frm_contact_us").validate({
		rules: {
							txtname : {required: true,
								minlength:2,maxlength:70,
							},
							txtphone : {  required: true,
								       phoneUS:true},
							txtemail : { required: true },
							ta_msg : { required: true},
						},
						messages:{
							txtname : {required:"Please give your name"},
							txtphone : {required: "Please give your contact number"},
							txtemail : {required: "Please give your email ID"},
							ta_msg : {required: "Please write your message"},
						},


		onfocusout: function(element) {
			$(element).valid()
		  },
		  errorElement: 'div'
		});

	});
        

   
 
 
  
 