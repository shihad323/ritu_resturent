// Event listener for the "Donation" button
document.getElementById('donation').addEventListener('click', function(event) {
    event.preventDefault();

    // Hide the History section
    document.getElementById('history-1').classList.add('hidden');
    
    // Show the Donation section
    document.getElementById('donation-1').classList.remove('hidden');
});

// Event listener for the "History" button
document.getElementById('history').addEventListener('click', function(event) {
    event.preventDefault();

    // Hide the Donation section
    document.getElementById('donation-1').classList.add('hidden');
    
    // Show the History section
    document.getElementById('history-1').classList.remove('hidden');
});
