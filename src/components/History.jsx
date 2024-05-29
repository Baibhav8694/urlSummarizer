// src/History.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function History() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        async function fetchHistory() {
            try {
                const response = await axios.get("/api/history");
                setHistory(response.data);
            } catch (error) {
                console.error(
                    "There was an error fetching the history!",
                    error
                );
            }
        }

        fetchHistory();
    }, []);

    return (
        <div>
            <h2>History</h2>
            {history.length === 0 ? (
                <p>No history available.</p>
            ) : (
                <ul>
                    {history.map((item) => (
                        <li key={item.id}>
                            <p>
                                <strong>URL:</strong> {item.url}
                            </p>
                            <p>
                                <strong>Summary:</strong> {item.summary}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default History;
