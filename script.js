// Initialize PostHog here
// PostHog code commented out for now

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var select = document.getElementById('demoUser');
    var selectedOption = select.options[select.selectedIndex];
    var user = selectedOption.value;
    var accountId = selectedOption.getAttribute('data-account');

    // PostHog tracking commented out for now
    // posthog.identify(accountId, {
    //     name: user,
    //     account_id: accountId
    // });
    // posthog.capture('login_success', {
    //     user: user,
    //     account_id: accountId
    // });

    alert('Logged in as ' + user + ' (Account ID: ' + accountId + ')');
        // Redirect to dashboard.html with user and account info
        window.location.href = `dashboard.html?user=${encodeURIComponent(user)}&account=${encodeURIComponent(accountId)}`;
});
