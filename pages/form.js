import {google} from "googleapis"

async function handler (req, res) {
    if (req.method === "POST"){
    		const {name, message} = req.body;
		res.json({message: "It works!"});
    }
}

export default handler;