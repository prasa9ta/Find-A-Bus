import React, { useEffect } from 'react'

const About = () => {

    const callAboutPage = async () => {
        try {
            const res = fetch('/about', {
                mathod: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json;
            console.log(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
            
    
        } catch (err) {
            console.log(err);
            // nevigate('/');
        }
    }


    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <>
            <h1>This is about us page</h1>
        </>
    )
}

export default About