window.onload = function(){
		var idCounter = 7; //id counter is for input id attribut. Set to 7 as there are already 6 inputs and 7 will be the first to be dynamically created
		$('button.ui-button').css('color', '#fff');

		//animate background color
		setInterval(function() {
			$('body').animate( { backgroundColor: '#66bf39' }, 3000).animate({backgroundColor: '#eb670f' }, 3000).animate({backgroundColor: '#f35' }, 3000)
			.animate({backgroundColor: '#864cbf' }, 3000).animate({backgroundColor: '#45a3e5' }, 3000); 
		}, 8000);

		//when submit button is clicked a border is added to that button
		$('.submit').click(function(){
			$('.submit').css('border', '2px solid #fff');
		});

		//validate the submitted input
		$('#calc-form').validate({
			errorPlacement: function() {
				return false;
			},
			//once all required fields are entered (valid form) run this
			submitHandler: function(form) {
				var percentage = 0;
				var index;
				
				//put entered marks and weight/percentages in separate arrays
				var mark_Values = $('.mark').map(function() {
					if($(this).val() != "")
						return parseInt($(this).val(), 10);
				}).toArray();
				var weight_Values = $('.weight').map(function() {
					if($(this).val() != "")
						return parseInt($(this).val(), 10);
				}).toArray();
				
				
				//iterate through the arrays and calculate the final average and set it to the variable percentage
				$.each(mark_Values, function(i, item) {
					//if weight > 100
					percentage = ( mark_Values[i]  * ( weight_Values[i] / 100 ) ) + percentage;
					
				});
					
				//debugging statements to check values are actually there
				console.log(percentage);
				console.log(JSON.stringify(mark_Values));
				console.log(JSON.stringify(weight_Values));
			}
		});

		//add extra input fields
		$('.add').click(function(){
			var lastFieldset = $('#calc-form fieldset:nth-last-child(2)'); //get 2nd last fieldset
			
			var clone = lastFieldset.clone(); //clone last fieldset
			
			clone.find('[name^="mark"]').attr('id', 'mark'+idCounter); //change id attributes for inputs in cloned fieldset
			clone.find('[name^="weight"]').attr('id', 'weight'+idCounter);
			
			idCounter++; //increment id counter
			
			lastFieldset.after(clone); //add cloned fieldset to page after the 2nd last fieldset
			
			return false; //stop refresh
		});
				
	}
