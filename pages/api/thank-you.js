async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
    if (!body.fullname || !body.tel || !body.email || !body.message  )  {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Fullname or phone or email or address not found' })
    }
    res.redirect(307, '/about');
}

export default handler;