import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, useToast, Flex } from '@chakra-ui/react';
import FormTextInput from './FormTextInput';
import FormCard from './FormCard';
import FormTextArea from './FormTextArea';

const ContactMe = ({ ...rest }) => {
  const toast = useToast();
  const reRef = useRef();

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

            message: Yup.string().max(500, 'Must be less than 1000 characters'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              const token = reRef.current.getValue();
              reRef.current.reset();
              const body = { values, token };
              const res = fetch('api/sendContact', {
                method: 'POST',
                body: JSON.stringify(body),
              });
              const { status } = await res;

              status == 200 &&
                toast({
                  title: 'Message Sent',
                  description:
                    'Thanks for your message. We will be in touch ASAP',
                  status: 'success',
                  duration: 5000,
                  isClosable: true,
                });
              status == 400 &&
                toast({
                  title: 'Error',
                  description:
                    'Google is having trouble verifying you are a human. Try again.',
                  status: 'error',
                  duration: 5000,
                  isClosable: true,
                });
              setSubmitting(false);
            }, 400);
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
                placeholder='jane@formik.com'
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
      <Flex width='100%' justifyContent='center' pb='2rem'>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}
          ref={reRef}
        />
      </Flex>
    </>
  );
};

export default ContactMe;
