import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css'; // Make sure this file exists, or remove this line if you don't have CSS

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);