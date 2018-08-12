var editor = new MediumEditor('.editable');
$(function () {
    $('.editable').mediumInsert({
        editor: editor,
        addons: { // (object) Addons configuration
	        images: { // (object) Image addon configuration
	            label: '<span class="fa fa-image"></span>', // (string) A label for an image addon
	            uploadScript: null, // DEPRECATED: Use fileUploadOptions instead
	            deleteScript: '{{ route('admin.deleteimage') }}', // (string) A relative path to a delete script
	            deleteMethod: 'DELETE',
	            fileDeleteOptions: {
	            	success: function(res){
	            		
	            	}
	            }, // (object) extra parameters send on the delete ajax request, see http://api.jquery.com/jquery.ajax/
	            preview: true, // (boolean) Show an image before it is uploaded (only in browsers that support this feature)
	            captions: true, // (boolean) Enable captions
	            captionPlaceholder: 'Type caption for image', // (string) Caption placeholder
	            autoGrid: 3, // (integer) Min number of images that automatically form a grid
	            formData: {}, // DEPRECATED: Use fileUploadOptions instead
	            fileUploadOptions: { // (object) File upload configuration. See https://github.com/blueimp/jQuery-File-Upload/wiki/Options
	                url: '{{ route('admin.uploadimage') }}',
	                // (string) A relative path to an upload script
	                maxFileSize: 10000000,
	                limitMultiFileUploads: 4,
	                limitMultiFileUploadSize: 4000000,
	                acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i // (regexp) Regexp of accepted file types,
	            },
	            styles: { // (object) Available image styles configuration
	                wide: { // (object) Image style configuration. Key is used as a class name added to an image, when the style is selected (.medium-insert-images-wide)
	                    label: '<span class="fa fa-align-justify"></span>', // (string) A label for a style
	                    added: function ($el) {}, // (function) Callback function called after the style was selected. A parameter $el is a current active paragraph (.medium-insert-active)
	                    removed: function ($el) {} // (function) Callback function called after a different style was selected and this one was removed. A parameter $el is a current active paragraph (.medium-insert-active)
	                },
	                left: {
	                    label: '<span class="fa fa-align-left"></span>'
	                },
	                right: {
	                    label: '<span class="fa fa-align-right"></span>'
	                },
	                grid: {
	                    label: '<span class="fa fa-th"></span>'
	                }
	            },
	            actions: { // (object) Actions for an optional second toolbar
	                remove: { // (object) Remove action configuration
	                    label: '<span class="fa fa-times"></span>', // (string) Label for an action
	                    clicked: function ($el) { // (function) Callback function called when an action is selected
	                        var $event = $.Event('keydown');
	                        $event.which = 8;
	                        $(document).trigger($event);

	                    }
	                }
	            },
	            messages: {
	                acceptFileTypesError: 'This file is not in a supported format: ',
	                maxFileSizeError: 'This file is too big: '
	            },
	            uploadCompleted: function ($el, data) {
	              
	            }, // (function) Callback function called when upload is completed
	            uploadFailed: function (uploadErrors, data) {
	              
	            } // (function) Callback function called when upload failed

	        },
	    }
    });
});
$(document).ready(function(){
	$('#form-submit').on('submit', function(e){
		var content =  editor.serialize()['element-0']['value'];
		$('#contentEditor').val(content);
	});
});
