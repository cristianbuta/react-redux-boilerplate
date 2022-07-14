import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./analytics/reportWebVitals";
import { sendToVercelAnalytics } from "./analytics/vitals";

reportWebVitals(sendToVercelAnalytics);

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);
