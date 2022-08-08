import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};
const LOCALSTORAGE_KEY = 'feedback-form-state';

refreshPage();

refs.form.addEventListener('input', throttle(saveDataToLocStor, 500));
refs.form.addEventListener('submit', submitForm);

function submitForm(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function saveDataToLocStor(evt) {
  const data = localStorage.getItem(LOCALSTORAGE_KEY);
  const userData = data ? JSON.parse(data) : {};
  userData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
}

function refreshPage() {
  const parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (!parsedData) return;
  refs.email.value = parsedData.email || '';
  refs.message.value = parsedData.message || '';
}

// refs.form.addEventListener('input', e => {
//   //console.log(e.target.name);
//   //console.log(e.target.value);

//   formData[e.target.name] = e.target.value;
//   const stringifiedData = JSON.stringify(formData);
//   localStorage.setItem(STORAGE_KEY, stringifiedData);
//   console.log(formData);
// });

// import '../css/common.css';
// import '../css/03-feedback.css';
// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const STORAGE_EMAIL = 'email';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   input: document.querySelector('input'),
// };

// populateTextarea();
// populateInput();

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.input.addEventListener('input', throttle(onEmailInput, 500));

// function onFormSubmit(e) {
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   localStorage.removeItem(STORAGE_EMAIL);
// }

// function onTextareaInput(e) {
//   const message = e.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function onEmailInput(e) {
//   const email = e.target.value;
//   localStorage.setItem(STORAGE_EMAIL, email);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     console.log(savedMessage);
//     refs.textarea.value = savedMessage;
//   }
// }

// function populateInput() {
//   const savedEmail = localStorage.getItem(STORAGE_EMAIL);

//   if (savedEmail) {
//     console.log(savedEmail);
//     refs.input.value = savedEmail;
//   }
// }
