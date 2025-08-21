import { createBem } from '@/utils/createBem';
import styles from './LogInFrom.module.scss';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LogInSchema } from '@/lib/validSchemas';

import { useState, useRef, forwardRef } from 'react';

const bem = createBem('logInForm', styles);

const LogInForm = ({ handleLogin, changeForm }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LogInSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleLogin(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={bem('form')}>
          <h2 className={`${bem('title')} ${bem('login-title')}`}>Log in</h2>

          <label className={bem('label')}>
            E-mail:
            <Field className={bem('input')} type="email" name="email" placeholder="E-mail" />
            {/* <ErrorMessage className={bem('errorMessage')} name="email" component="div" style={{ color: 'red' }} /> */}

          </label>

          <label className={bem('label')}>
            Password:
            <Field
              className={bem('input')}
              type="password"
              name="password"
              placeholder="Password"
            />
            {/* <ErrorMessage className={bem('errorMessage')} name="password" component="div" style={{ color: 'red' }} /> */}
          </label>

          <div>
            <div className={bem('btn')}>
              <button type="submit" className={bem('btnModal')} disabled={isSubmitting}>
                Log in
              </button>
            </div>

            <p className={`${bem('text')} ${bem('login-btn')}`}>
              No account?{' '}
              <button type="button" className={bem('loginLink')} onClick={changeForm}>
                Sign up
              </button>
            </p>
          </div>

          <div className={bem('errorBlock')}>
            <ErrorMessage className={bem('errorMessage')} name="email" component="div" style={{ color: 'red' }} />
            <ErrorMessage className={bem('errorMessage')} name="password" component="div" style={{ color: 'red' }} />


          </div>

        </Form>
      )}
    </Formik>
  );
};

// const LogInForm = ({refEmail, refPassword, handleLogin, changeForm}) => {
//   return (
//     <>
//       <h2 className={`${bem('title')} ${bem('login-title')}`}>Log in</h2>
//       <form className={bem('form')} onSubmit={handleLogin}>
//         <label className={bem('label')}>
//           E-mail:
//           <input className={bem('input')} ref={refEmail} name="email" placeholder="E-mail" />
//         </label>
//         <label className={bem('label')}>
//           Password:
//           <input
//             className={bem('input')}
//             ref={refPassword}
//             name="password"
//             placeholder="Password"
//           />
//         </label>
//         <div className={bem('btn')}>
//           <button type="submit" className={bem('btnModal')}>
//             Log in
//           </button>
//         </div>
//       </form>
//       <p className={`${bem('text')} ${bem('login-btn')}`}>
//         No account?{' '}
//         <button className={bem('loginLink')} onClick={changeForm}>
//           Sign up
//         </button>
//       </p>
//     </>
//   );
// }

export default LogInForm;
