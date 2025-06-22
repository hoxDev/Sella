 // Function to copy text to clipboard
function copyToClipboard(link) {
        navigator.clipboard.writeText(link)
                .then(() => {
                    showNotification();
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                    alert('حدث خطأ أثناء نسخ الرابط. يرجى المحاولة مرة أخرى.');
                });
        }

// Function to show notification
function showNotification() {
        const notification = document.getElementById('notification');
        notification.classList.add('show');
            
        setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        }

 // Function to open location in Google Map
function goToLocation(link) {
            window.open(link, '_blank');
        }