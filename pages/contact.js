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
      tel: event.target.tel.value,
      email: event.target.email.value,
      address: event.target.address.value,
      order: event.target.order.value,
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
      <section className={styles.section}>
<main>
  
    <div>
      <h1>Hello - Please fill out this form</h1>
    </div>
    <div >
    <form className={styles.grid}onSubmit={handleSubmit}>
      
        
      <label className={styles.label}htmlFor="fullname">Your name: (What would you like us to call you?)</label>
      <input className={styles.fullname}type="text" id="fullname" name="fullname" required />
     <label className={styles.label}htmlFor="phone">Phone</label>
      <input className={styles.phone}type="tel" id="tel" name="tel" required />

      <label className={styles.label}htmlFor="email">Email</label>
      <input className={styles.email}type="email" id="email" name="email" required />
      <label className={styles.label}htmlFor="order">What would you like? <ul><li>treats $10 for 120 grams</li><li>pouch $10 </li><li>sample $1</li></ul></label>
      <textarea 
      className={styles.order}type="text" id="order" name="order" required />
    <label className={styles.label}htmlFor="address">Address: (Where should we deliver your treats? Needs to be in Nelson area, from Nine Mile to Blewitt...call if you think you deserve treats but live at 10 Mile or just past Blewitt )</label>
      <input className={styles.address}type="text" id="address" name="address" required />
      


     <button className={styles.button}type="submit">Submit</button>
      
    </form>
    </div>
    </main>
    </section>
    </Layout>
  )
}
