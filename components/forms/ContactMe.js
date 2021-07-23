import { useState, useEffect, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, useToast } from '@chakra-ui/react';
import FormTextInput from './FormTextInput';
import FormCard from './FormCard';
import FormTextArea from './FormTextArea';

const successToast = {
  title: 'Message Sent',
  description: 'Thanks for your message. We will be in touch ASAP',
  status: 'success',
  duration: 3000,
  isClosable: true,
};

const errorToast = {
  title: 'Error',
  description: 'Google is having trouble verifying you are a human. Try again.',
  status: 'error',
  duration: 3000,
  isClosable: true,
};

const ContactMe = ({ ...rest }) => {
  const [recLoading, setRecLoading] = useState(true);

  const { executeRecaptcha } = useGoogleReCaptcha();

  //wait for recpatcha scripts to finish loading before generating a token
  useEffect(() => {
    !executeRecaptcha && null;
    executeRecaptcha && setRecLoading(false);
  }, [executeRecaptcha]);

  useEffect(async () => {
    if (recLoading === false) {
      setToken(await executeRecaptcha('submit'));
    }
  }, [recLoading]);

  const [token, setToken] = useState();

  //event handler to call the verification on  form submit
  const handleReCaptchaVerify = useCallback(async () => {
    !executeRecaptcha && null;
    executeRecaptcha && setToken(await executeRecaptcha('submit'));
  }, []);

  const toast = useToast();

  return (
    <>
      <FormCard {...rest}>
        <Formik
          initialValues={{
            firstName: '',

            lastName: '',

            email: '',

            message: '',
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()

              .max(15, 'Must be 15 characters or less')

              .required('Required'),

            lastName: Yup.string()

              .max(20, 'Must be 20 characters or less')

              .required('Required'),

            email: Yup.string()

              .email('Invalid email address')

              .required('Required'),

            message: Yup.string().max(
              1000,
              'Must be less than 1000 characters'
            ),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            handleReCaptchaVerify();
            const body = { values, token };
            const res = fetch('api/sendContact', {
              method: 'POST',
              body: JSON.stringify(body),
            });
            const { status } = await res;
            //check status and render toast
            status == 200 && toast(successToast);
            status == 400 && toast(errorToast);
            //reset button loading state
            setSubmitting(false);
          }}
        >
          {(props) => (
            <Form>
              <FormTextInput
                label='First Name'
                name='firstName'
                type='text'
                placeholder='Jane'
                mb='1rem'
              />

              <FormTextInput
                label='Last Name'
                name='lastName'
                type='text'
                placeholder='Doe'
                mb='1rem'
              />

              <FormTextInput
                label='Email Address'
                name='email'
                type='email'
                placeholder='jane@example.com'
                mb='1rem'
              />

              <FormTextArea
                label='Message'
                name='message'
                type='text'
                placeholder='Please type your message here...'
              />
              <Button mt='2rem' isLoading={props.isSubmitting} type='submit'>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </FormCard>
    </>
  );
};

export default ContactMe;
