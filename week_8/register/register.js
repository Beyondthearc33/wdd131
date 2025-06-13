
function participantTemplate(count) {
    // return `
    // <section class="participant${count}">
    //     <label for="name${count}">Name:</label>
    //     <input type="text" id="name${count}" name="name${count}">
        
    //     <label for="email${count}">Email:</label>
    //     <input type="email" id="email${count}" name="email${count}">
    // </section>
    // `;
}

let participantCount = 0;
const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => {
    participantCount++;
    addBtn.insertAdjacentHTML('beforebegin', participantTemplate(participantCount));
});

const form = document.getElementById('submitButton');

form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    let adultName = document.getElementById('adult_name').value;
    let feeTotal = totalFees();
    //Form Object
    let info = {
        adultName: adultName,
        participantCount: participantCount,
        feeTotal: feeTotal
    };

}

function successTemplate(info) {
       return `
        <h2>Registration Successful!</h2>
        <p>Thank you, ${info.adultName}.</p>
        <p>Number of participants: ${info.participantCount}</p>
        <p>Total fee: $${info.feeTotal}</p>
    `;
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];

    // Use reduce to sum up all the fee values
    let total = feeElements.reduce((sum, input) => {
        let value = parseFloat(input.value);
        // If value is not a number (NaN), use 0
        if (isNaN(value)) value = 0;
        return sum + value;
    }, 0);

    return total;
}