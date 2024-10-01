document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector('[name="display"]');
    const buttons = document.querySelectorAll('.input input');

    let currentValue = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = button.value;

            if (value === "AC") {
                currentValue = "";
                display.value = "";
            } else if (value === "DE") {
                currentValue = currentValue.slice(0, -1);
                display.value = currentValue;
            } else if (value === "=") {
                try {
                    currentValue = currentValue.replace("X", "*");
                    currentValue = eval(currentValue);
                    display.value = currentValue;
                } catch (error) {
                    display.value = "Error";
                    display.value.style.textAlign = "center"
                }
            } else {
                currentValue += value;
                display.value = currentValue;
            }
        });
    });
});
