// Images Extensions
const extensions = ['png', 'jpg', 'jpeg', 'gif', 'svg'];

// DOM Elements
const input = document.querySelector('#file');
const form = document.querySelector('form');
const h3 = document.querySelector('form h3');

// Upload and Catch Function 
$('#file').bind('change', function (e) {

    // Extension Extractor
    let ext = input.value.split('.')[input.value.split('.').length - 1].toLocaleLowerCase();

    // Extension for image check
    if (extensions.includes(ext)) {

        let img;

        var data = e.originalEvent.target.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            img = evt.target.result;
            success(img)
        };
        reader.readAsDataURL(data);

    } else {

        // Warning Declration
        form.style.borderColor = 'rgb(252, 47, 47)';
        h3.style.color = 'rgb(252, 47, 47)';

        // Form Reset
        input.value = '';
    }

});

function success(img) {

    // Success Declaration
    form.style.borderColor = 'rgb(47, 252, 156)';
    h3.style.color = 'rgb(47, 252, 156)';
    document.querySelector('.image').style.backgroundImage = `url(${img})`;
    document.querySelector('#html').innerText = '<img src="'+img+'" />';
    document.querySelector('#css').innerText = 'background-image: url("'+img+'");';
    document.querySelector('#base').innerText = img;

}