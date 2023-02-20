import Head from 'next/head';
import styles from '../styles/Contact.module.css';


import { useForm } from 'react-hook-form';

export default function Contact() {
  const {
    register,
    formState: { errors }, // catch error messages
  } = useForm();


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        
          <h5>
            Your response matters!
          </h5>

          
            <form action="/api/sheet" method="post">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                
                {...register('Phone', { required: 'Please enter your phone' })}
              />
              {errors.Phone && errors.Phone.message}
              <input
                type="text"
                id="message"
                {...register('Feedback', { required: 'Enter your feedback!' })}
              />
              {errors.Feedback && errors.Feedback.message}
              
                <button type="submit"
                 
                >
                  Submit Form
                </button>
              
            </form>
       
      </main>
    </div>
  );
}