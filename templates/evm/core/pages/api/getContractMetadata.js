// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import alchemy from "../utils/alchemy";

export default async function handler(req, res) {
	const { method } = req;

	if (method == "POST") {
		const { contractAddress } = JSON.parse(req.body);
		if (contractAddress) {
			const contractMetadata = await alchemy.nft.getContractMetadata(
				contractAddress
			);
			res.status(200).json(contractMetadata);
			console.log(contractMetadata);
		} else {
			res.status(500).json({ error: "Missing contract address" });

		}
		return;

	}

	res.status(400).json({ error: "Request not supported" });
}
