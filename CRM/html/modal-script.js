// Modal functions
function openApplicationModal(id) {
    document.getElementById('applicationModal').classList.remove('hidden');
    // Load application data based on id
    console.log('Opening application:', id);
}

function closeApplicationModal() {
    document.getElementById('applicationModal').classList.add('hidden');
}

// Tab switching
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabContents = {
        'profile': document.getElementById('profile-tab'),
        'documents': document.getElementById('documents-tab'),
        'checklist': document.getElementById('checklist-tab'),
        'history': document.getElementById('history-tab')
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active classes
            tabs.forEach(t => {
                t.classList.remove('bg-blue-50', 'text-blue-600');
                t.classList.add('text-gray-500');
            });

            // Add active class to clicked tab
            tab.classList.remove('text-gray-500');
            tab.classList.add('bg-blue-50', 'text-blue-600');

            // Hide all tab contents
            Object.values(tabContents).forEach(content => {
                if (content) content.classList.add('hidden');
            });

            // Show selected tab content
            const selectedTab = tab.getAttribute('data-tab');
            if (tabContents[selectedTab]) {
                tabContents[selectedTab].classList.remove('hidden');
            }
        });
    });
});
