document.addEventListener('DOMContentLoaded', () => {
    const initTime = () => {
        const timeElement = document.querySelector('.time');
        const updateTime = () => {
            const now = new Date();
            timeElement.textContent = now.toLocaleTimeString();
        };
        setInterval(updateTime, 1000); // Update every second
    }
    initTime();

    // Function to update the notification count
    function toggleNotificationBadge(type, count) {
        const badge = document.querySelectorAll(`.notification__badge--${type}`);
        if (badge) {
            if (count > 0) {
                badge.forEach(el => el.classList.add('visible')); // Add class to show the red circle
            } else {
                badge.forEach(el => el.classList.remove('visible')); // Remove class to hide the red circle
            }
        }
    }

    toggleNotificationBadge('bell', 3);
    toggleNotificationBadge('home', 2);
    toggleNotificationBadge('messages', 24);

    // Function to update the subscriber count
    function updatePointBalanceCount(count) {
        const pointBalanceCount = document.querySelector('.point-balance__total');
        pointBalanceCount.textContent = count;
    }

    updatePointBalanceCount(123);

    const initHeaderForm = () => {
        let isLoggedIn = false;
        const closeBtnAll = document.querySelectorAll('.close-icon');
        const allWrapperForm = document.querySelectorAll('.wrapper-form');

        // Function for user login
        function login() {
            const usernameInput = document.querySelector('.login-form .username-input');
            const passwordInput = document.querySelector('.login-form .password-input');

            // Here you can add logic to check user credentials
            // For example, compare the entered data with data from the database or API
            if (usernameInput.value === 'admin' && passwordInput.value === '12345') {
                isLoggedIn = true;
                showSubscribersBlock();
            } else {
                alert('Invalid credentials');
            }
        }

        // Function for user registration
        function signup() {
            const usernameInput = document.querySelector('.signup-form .username-input');
            const emailInput = document.querySelector('.signup-form .email-input');
            const passwordInput = document.querySelector('.signup-form .password-input');

            // Here you can add logic to register the user
            // For example, send data to the server for storage in the database
            console.log('User registration:', {
                username: usernameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            });

            isLoggedIn = true;
            showSubscribersBlock();
        }

        // Function to display the subscribers block
        function showSubscribersBlock() {
            document.querySelector('.point-balance').style.display = 'flex';
            document.querySelector('.auth-container').style.display = 'none';
        }

        // Functions to display login and registration forms
        function showLoginForm() {
            document.querySelector('.wrapper-form-login').style.display = 'block';
            document.querySelector('.wrapper-form-sign-up').style.display = 'none';
        }

        function showSignupForm() {
            document.querySelector('.wrapper-form-sign-up').style.display = 'block';
            document.querySelector('.wrapper-form-login').style.display = 'none';
        }

        // Event handlers for buttons
        document.querySelector('.login-btn').addEventListener('click', () => {
            showLoginForm();
        });

        document.querySelector('.sign-up-btn').addEventListener('click', () => {
            showSignupForm();
        });

        document.querySelector('.login-form .submit-button').addEventListener('click', (e) => {
            e.preventDefault();
            login();
        });

        document.querySelector('.sign-up-form .submit-button').addEventListener('click', (e) => {
            e.preventDefault();
            signup();
        });

        closeBtnAll.forEach((btn, i) => {
            btn.addEventListener('click', () => allWrapperForm[i].style.display = 'none');
        });
    }
    initHeaderForm();

    const initLeftMenu = () => {
        const btnMenuLeft = document.querySelectorAll('.btn-menu');

        btnMenuLeft.forEach(btn => {
            btn.addEventListener('click', () => {
                btnMenuLeft.forEach((el, index) => {
                    const icon = el.querySelector('.btn-menu__icon');
                    const text = el.querySelector('.btn-menu__text');

                    if (!icon || !text) return;
                    icon.classList.remove('active-menu-img');
                    text.classList.remove('active-menu-text');
                });
                const activeIcon = btn.querySelector('.btn-menu__icon');
                const activeText = btn.querySelector('.btn-menu__text');
                if (!activeIcon || !activeText) return;

                btn.querySelector('.btn-menu__icon').classList.add('active-menu-img');
                btn.querySelector('.btn-menu__text').classList.add('active-menu-text');
            });
        });
    };

    initLeftMenu();

    const initSearchMobile = () => {
        const mobileFooterSearchForm = document.querySelector('.mobile-footer__search-form');
        const footerElem = document.querySelectorAll('.mobile-footer__item');
        const btnFooterSearch = document.querySelector('.btn-search--mobile');
        const inputSearchMobile = document.querySelector('.search-input--mobile-hidden');
        const closeBtnSearchInput = document.querySelector('.search-close');
        let inputActive = false;

        btnFooterSearch.addEventListener('click', () => {
            if (inputActive) return;
            footerElem.forEach(el => {
                if (el.classList.contains('mobile-footer__avatar') || el.classList.contains('search-block')) return;
                el.classList.add('d-none');
            });
            mobileFooterSearchForm.classList.add('active-footer-search-form');
            inputSearchMobile.classList.add('search-input--mobile-visible');
            btnFooterSearch.classList.remove('btn-search--mobile');
            closeBtnSearchInput.classList.remove('d-none');

            inputActive = true;

            console.log('click');
        });

        closeBtnSearchInput.addEventListener('click', () => {
            inputActive = false;

            footerElem.forEach(el => {
                if (el.classList.contains('mobile-footer__avatar') || el.classList.contains('search-block')) return;
                el.classList.remove('d-none');
            });
            mobileFooterSearchForm.classList.remove('active-footer-search-form');
            inputSearchMobile.classList.remove('search-input--mobile-visible');
            btnFooterSearch.classList.add('btn-search--mobile');
            closeBtnSearchInput.classList.add('d-none');
        });
    }

    initSearchMobile();
});