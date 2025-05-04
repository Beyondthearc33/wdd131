const themeSelector = document.querySelector('#mode');
// replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
    // check to see what the current value of our select is.
    const selectedValue = themeSelector.value;
    // The current value is conveniently found in themeSelector.value!

    // if the value is dark then:
    if (selectedValue === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('#logo')
        document.getElementById('darkImage').classList.remove('hideImage');
        document.getElementById('lightImage').classList.add('hideImage');
    } else if (selectedValue === 'light') {
        document.body.classList.remove('dark');
        document.getElementById('lightImage').classList.remove('hideImage');
        document.getElementById('darkImage').classList.add('hideImage');
    }
    // add the dark class to the body
    // change the source of the logo img to point to the white logo.
    // otherwise
    // remove the dark class
    // make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);