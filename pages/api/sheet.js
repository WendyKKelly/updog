async function handler (req, res) {
    if (req.method === "POST"){
    		const {name, message} = req.body;
		res.json({message: "It still works!"});
    }
}

export default handler;