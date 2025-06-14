function participantTemplate(count) {
    return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select name="grade${count}">
          <option selected value="" disabled></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
    `;
}

let participantCount = 1;
const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => {
    participantCount++;
    addBtn.insertAdjacentHTML('beforebegin', participantTemplate(participantCount));
});

const form = document.getElementById('register-form');

form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    event.stopPropagation();
    let adultName = document.getElementById('adult_name').value;
    let feeTotal = totalFees();
    let info = {
        adultName: adultName,
        participantCount: participantCount,
        feeTotal: feeTotal
    };
    form.style.display = 'none';
    document.querySelector('.testbox').innerHTML = successTemplate(info);
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

    let total = feeElements.reduce((sum, input) => {
        let value = parseFloat(input.value);
        if (isNaN(value)) value = 0;
        return sum + value;
    }, 0);

    return total;
}
