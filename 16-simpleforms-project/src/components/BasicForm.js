import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredFirstname,
    isValid: firstnameIsValid,
    hasError: firstnameHasError,
    valueChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstnameBlurHandler,
    reset: firstnameReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastname,
    isValid: lastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: lastnameReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstnameIsValid && lastnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredFirstname + ' ' + enteredLastname + ' ' + enteredEmail);

    firstnameReset();
    lastnameReset();
    emailReset();
  };

  const firstnameInputClasses = firstnameHasError
    ? "form-control invalid"
    : "form-control";

  const lastnameInputClasses = lastnameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstnameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstnameChangeHandler}
            onBlur={firstnameBlurHandler}
            value={enteredFirstname}
          />
          {firstnameHasError && (
            <p className="error-text">Firstname must not be empty.</p>
          )}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
            value={enteredLastname}
          />
          {lastnameHasError && (
            <p className="error-text">Lastname must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Email must be correct.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
