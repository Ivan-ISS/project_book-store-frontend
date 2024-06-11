import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).send({ error: true, message: 'Only POST' });
    }

    const { email, password } = req.body;

    const response = await fetch('https://project-book-store-backend.vercel.app/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: password, email: email }),
    });

    if (!response.ok) {
        const error = await response.text();
        res.status(response.status).send(error);
    }

    const data = await response.json();
    console.log('login send: ', data);
    res.status(200).send({ success: true, data });
}