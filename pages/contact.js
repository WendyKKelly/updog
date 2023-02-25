import Layout from '../components/Layout';
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Contact.module.css'

export default function PageWithJSbasedForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      fullname: event.target.fullname.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name and email address and phone: ${result.data}`)
  }
  return (
    <Layout>
      <section>
<main>
  
    <div>
      <h1>Hello - Please fill out this form</h1>
    </div>
    <div className={styles.grid}>
    <form className={styles.form}onSubmit={handleSubmit}>
      <label className={styles.label}htmlFor="fullname">Full Name</label>
      <input className={styles.fullname}type="text" id="fullname" name="fullname" required />
      <label className={styles.label}htmlFor="phone">Phone</label>
      <input className={styles.phone}type="text" id="phone" name="phone" required />

      <label className={styles.label}htmlFor="email">Email</label>
      <input className={styles.email}type="text" id="email" name="email" required />

      <button className={styles.button}type="submit">Submit</button>
    </form>
    </div>
    </main>
    </section>
    </Layout>
  )
}
