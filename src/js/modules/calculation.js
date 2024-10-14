function calculation() {

    const thankYouMessage = document.getElementById('thank-you-message');
    const nextStepButtons = document.querySelectorAll('.next-step');
    const prevStepButtons = document.querySelectorAll('.prev-step');
    const sendButton = document.querySelector('.send');
    const stepElements = document.querySelectorAll('.step');


    let currentStepIndex = 0;

    // initially the step counter
    // updateStepCounter();

    // Function to update the step counter
    function updateStepCounter() {
        const currentStep = stepElements[currentStepIndex];
        const numberElements = currentStep.querySelector('.nambers').querySelectorAll('.number');

        numberElements.forEach((element, index) => {
            if (index === currentStepIndex) {
                element.classList.add('number--active');
            } else {
                element.classList.remove('number--active');
            }
        });
    }


    // Add event listeners to the step buttons
    nextStepButtons.forEach((button) => {
        button.addEventListener('click', () => {
            currentStepIndex++;
            showCurrentStep();
        });
    });

    prevStepButtons.forEach((button) => {
        button.addEventListener('click', () => {
            currentStepIndex--;
            showCurrentStep();
        });
    });


    // Hide all steps initially
    stepElements.forEach((step) => {
        step.style.display = 'none';
    });


    // Function to show the current step
    function showCurrentStep() {
        stepElements.forEach((step) => {

            step.style.display = 'none';
        });

        stepElements[currentStepIndex].style.display = 'flex';
        updateStepCounter();
    }
    // Call showCurrentStep initially to show only the first step
    showCurrentStep();


    // Add event listener to the send button
    sendButton.addEventListener('click', () => {
        const clothingType = document.querySelector('input[name="clothing-type"]:checked');
        const clothingTypeId = clothingType ? clothingType.value : null;
        console.log(clothingTypeId);

        const quantity = document.querySelector('input[name="quantity"]:checked');
        const quantityId = quantity ? quantity.value : null;
        console.log(quantityId);

        const comment = document.getElementById('comment').value;
        console.log(comment);

        const phone = document.getElementById('phone').value;
        console.log(phone);

        const email = document.getElementById('email').value;
        console.log(email);

        // Check if all fields are filled
        if (clothingTypeId && quantityId && phone && email) {
            //   if (clothingTypeId && quantityId && comment && phone && email) {
            thankYouMessage.style.display = 'flex';

            // Hide the current step
            document.getElementById('step-4').style.display = 'none';

            // Create a FormData object
            const formData = new FormData();

            // Add the data to the FormData object
            formData.append('clothingTypeId', clothingTypeId);
            formData.append('quantityId', quantityId);
            formData.append('comment', comment);
            formData.append('phone', phone);
            formData.append('email', email);

            // You can also use the Fetch API if you prefer
            fetch('handler.php', { method: 'POST', body: formData })
                .then(response => response.text())
                .then(data => console.log(data));
        } else {
            alert('Please fill all fields!');
        }
    });
}

export default calculation;