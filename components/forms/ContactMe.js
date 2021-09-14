import { useState, useEffect, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, useToast } from '@chakra-ui/react';
import FormTextInput from './FormTextInput';
import FormCard from './FormCard';
import FormTextArea from './FormTextArea';
import { motion } from 'framer-motion';
import { primaryButton } from '../animation/Animations';

const MotionButton = motion(Button);

const initValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

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
          initialValues={initValues}
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
          onSubmit={async (values, { resetForm }) => {
            handleReCaptchaVerify();
            const body = { values, token };
            const res = fetch('api/sendContact', {
              method: 'POST',
              body: JSON.stringify(body),
            });
            const { status } = await res;
            //check status, render toast and handle reset
            if (status == 200) {
              toast(successToast);
              resetForm({ initValues });
            }
            status == 400 && toast(errorToast);
          }}
        >
          {(props) => (
            <Form>
              <FormTextInput
                aria-label='Enter First Name'
                label='First Name'
                name='firstName'
                type='text'
                placeholder='Jane'
                mb='1rem'
              />

              <FormTextInput
                aria-label='Enter Last Name'
                label='Last Name'
                name='lastName'
                type='text'
                placeholder='Doe'
                mb='1rem'
              />

              <FormTextInput
                aria-label='Enter Email Address'
                label='Email Address'
                name='email'
                type='email'
                placeholder='jane@example.com'
                mb='1rem'
              />

              <FormTextArea
                aria-label='Enter Message'
                label='Message'
                name='message'
                type='text'
                placeholder='Please type your message here...'
              />
              <MotionButton
                aria-label='Submit Contact Form'
                variant='ctaLight'
                size='normal'
                mt='2rem'
                type='submit'
                variants={primaryButton}
                whileHover='hover'
              >
                Submit
              </MotionButton>
            </Form>
          )}
        </Formik>
      </FormCard>
    </>
  );
};

export default ContactMe;
