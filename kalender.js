document.addEventListener('DOMContentLoaded', function() {
    const monthName = document.querySelector('.month-name');
    const daysContainer = document.querySelector('.days');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentDate = new Date();

    function renderCalendar() {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        const firstDayOfWeek = firstDayOfMonth.getDay();
        const lastDayOfWeek = lastDayOfMonth.getDay();

        monthName.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);

        let daysHTML = '';

        for (let i = 0; i < firstDayOfWeek; i++) {
            daysHTML += `<div></div>`;
        }

        for (let i = 1; i <= daysInMonth; i++) {
            daysHTML += `<div>${i}</div>`;
        }

        for (let i = 0; i < (6 - lastDayOfWeek); i++) {
            daysHTML += `<div></div>`;
        }

        daysContainer.innerHTML = daysHTML;
    }

    prevButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});