// src/SummarizeForm.jsx
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SummarizeForm() {
    const [url, setUrl] = useState("");
    const [summary, setSummary] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/api/summarize", { url });
            setSummary(response.data);
        } catch (error) {
            console.error("There was an error summarizing the URL!", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        URL:
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Summarize</button>
            </form>
            {summary && (
                <div>
                    <h2>Summary:</h2>
                    <p>{summary}</p>
                </div>
            )}
            <Link to="/history">View History</Link>
        </div>
    );
}

export default SummarizeForm;
