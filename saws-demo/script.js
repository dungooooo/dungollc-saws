// Initialize PostHog
posthog.init('phc_demo_key', { api_host: 'https://app.posthog.com' });

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var select = document.getElementById('demoUser');
    var selectedOption = select.options[select.selectedIndex];
    var user = selectedOption.value;
    var accountId = selectedOption.getAttribute('data-account');

    // Identify user in PostHog
    posthog.identify(accountId, {
        name: user,
        account_id: accountId
    });
    // Track login success event
    posthog.capture('login_success', {
        user: user,
        account_id: accountId
    });

    alert('Logged in as ' + user + ' (Account ID: ' + accountId + ')');
});
