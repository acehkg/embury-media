import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Heading, Box, Button } from '@chakra-ui/react';
import FormTextInput from './FormTextInput';

const ContactMe = () => {
  return (
    <Box>
      <Heading>Contact Me</Heading>
      <Formik
        initialValues={{
          firstName: '',

          lastName: '',

          email: '',
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
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

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
            />

            <FormTextInput
              label='Last Name'
              name='lastName'
              type='text'
              placeholder='Doe'
            />

            <FormTextInput
              label='Email Address'
              name='email'
              type='email'
              placeholder='jane@formik.com'
            />
            <Button isLoading={props.isSubmitting} type='submit'>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactMe;
