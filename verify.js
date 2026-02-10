import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const runTests = async () => {
    try {
        console.log("Starting Verification Tests...\n");

        // 1. Health Check
        try {
            const res = await axios.get(`${BASE_URL}/health`);
            console.log("Health Check: PASSED", res.data);
        } catch (e) {
            console.error("Health Check: FAILED", e.message);
        }

        // 2. Fibonacci
        try {
            const res = await axios.post(`${BASE_URL}/bfhl`, { fibonacci: 5 });
            console.log("Fibonacci Check: PASSED", res.data);
        } catch (e) {
            console.error("Fibonacci Check: FAILED", e.response ? e.response.data : e.message);
        }

        // 3. Prime
        try {
            const res = await axios.post(`${BASE_URL}/bfhl`, { prime: [10, 11, 13, 17] });
            console.log("Prime Check: PASSED", res.data);
        } catch (e) {
             console.error("Prime Check: FAILED", e.response ? e.response.data : e.message);
        }

        // 4. LCM
        try {
            const res = await axios.post(`${BASE_URL}/bfhl`, { lcm: [12, 15, 10] });
            console.log("LCM Check: PASSED", res.data);
        } catch (e) {
             console.error("LCM Check: FAILED", e.response ? e.response.data : e.message);
        }

         // 5. HCF
        try {
            const res = await axios.post(`${BASE_URL}/bfhl`, { hcf: [12, 15, 10] });
            console.log("HCF Check: PASSED", res.data);
        } catch (e) {
             console.error("HCF Check: FAILED", e.response ? e.response.data : e.message);
        }

        // 6. Invalid Input (Multiple Keys)
        try {
            await axios.post(`${BASE_URL}/bfhl`, { fibonacci: 5, prime: [10] });
            console.error("Multiple Keys Check: FAILED (Should have thrown error)");
        } catch (e) {
            if (e.response && e.response.status === 400) {
                console.log("Multiple Keys Check: PASSED (Correctly rejected)", e.response.data);
            } else {
                console.error("Multiple Keys Check: FAILED (Wrong status)", e.message);
            }
        }
        
        console.log("\nVerification Complete.");

    } catch (error) {
        console.error("Global Error:", error);
    }
};

// Wait for server to start (manual instruction: ensure server is running)
runTests();
