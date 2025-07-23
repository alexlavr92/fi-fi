$(function () {

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('.ajax-response');

	// Set up an event listener for the contact form.
	$(form).submit(function (e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		let InvalidCount = 0,
			formInput = form.find('input')

		function AddInvalid(input, textInvalid) {
			if (!input.siblings('.invalid-text').length) {
				input.parent('div').addClass('invalid')
				const InvalidElem = '<span class="invalid-text">' + textInvalid + '</span>'
				$(InvalidElem).insertAfter(input)
			}
		}

		formInput.each(function (index, elem) {
			// console.log(elem)
			if ($(elem).val() == '' && !$(elem).hasClass('conf')) {
				AddInvalid($(elem), 'Заполните обязательное поле')
				InvalidCount++
			}
			if ($(elem).hasClass('conf') && $(elem).prop('checked') == false) {
				$(elem).closest('.default-input-wrapper').addClass('invalid')
				InvalidCount++
			}
		})
		// console.log(formInput)
		console.log(InvalidCount)
		if (InvalidCount == 0) {
			// Serialize the form data.
			var formData = $(form).serialize();

			// Submit the form using AJAX.
			$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			})
				.done(function (response) {
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass('error');
					$(formMessages).addClass('success');

					// Set the message text.
					$(formMessages).text(response);

					// Clear the form.
					$('#contact-form input,#contact-form textarea').val('');
				})
				.fail(function (data) {
					// Make sure that the formMessages div has the 'error' class.
					$(formMessages).removeClass('success');
					$(formMessages).addClass('error');

					// Set the message text.
					if (data.responseText !== '') {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text('Упс! Произошла ошибка, ваша заявка не отправлена, попробуйте ещё раз или позднее.');
					}
				});
		}


	});


	$('input').on('change input', function (e) {
		const $this = $(this)
		if ($this.val() != '') {
			$this.parent('.invalid').removeClass('invalid')
			$this.siblings('.invalid-text').remove()
		}
		if ($this.prop('checked') == true && this.hasClass('conf')) {
			$this.parent('.invalid').removeClass('invalid')
		}
		$('body').find('.td-contact-form-wrap .ajax-response').text('')
	})
});
