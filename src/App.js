import { Field, Formik } from 'formik';
import * as yup from 'yup';
import Hero from './assets/hero.png';
import Input, { EmailInput, PasswordInput } from './components/Input';
import PasswordStrength from './components/PasswordStrength';

function App() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    tac: true,
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required().label('Name'),
    email: yup.string().email().required().label('Email'),
    password: yup.string().required().label('Password'),
  });

  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="bg-sky-200 min-h-screen flex flex-wrap">
      <div className="w-full lg:w-1/3 h-screen bg-white shadow-md rounded-r-2xl">
        <div className="px-4 h-full flex flex-col justify-center">
          <div className="mt-10 text-center">
            <p className="text-sm text-coolGray-400">
              Create an account to continue
            </p>
            <h2 className="text-3xl text-coolGray-900 font-medium">
              Getting Started
            </h2>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => {
                return (
                  <form
                    onSubmit={handleSubmit}
                    className="p-8"
                    style={{ width: '520px' }}
                  >
                    <div className="mt-8">
                      <Input name="name" id="name" label="Full Name" />
                    </div>
                    <div className="mt-8">
                      <EmailInput
                        name="email"
                        id="email"
                        label="Email Address"
                        isValid={true}
                      />
                    </div>
                    <div className="mt-8">
                      <PasswordInput
                        name="password"
                        id="password"
                        label="Password"
                      />
                    </div>
                    <div className="mt-8">
                      <PasswordStrength password={values.password} />
                    </div>
                    <div className="mt-10 flex items-center">
                      <Field type="checkbox" name="tac" id="tac" />
                      <label
                        htmlFor="tac"
                        className="ml-2 text-sm text-gray-400"
                      >
                        By creating an account, you agree to your{' '}
                        <span className="font-bold text-gray-900">
                          Terms and Conditions
                        </span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting || !values.tac}
                      className="w-full bg-primary p-4 text-white mt-4 rounded-md uppercase"
                    >
                      Register
                    </button>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex flex-col items-center justify-between text-coolGray-800">
        <div className="mt-24 flex items-center">
          <i className="material-icons">house</i>
          <span className="ml-3">Happy Homes</span>
        </div>
        <img
          src={Hero}
          alt="Hero"
          className="object-cover origin-center w-3/5"
        />
        <div className="mb-40 text-center">
          <h2 className="text-3xl text-coolGray-800">Choose your companion</h2>
          <p className="text-coolGray-600">
            Pick a pet as your wish and help us find the right home for our cute
            friends
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
