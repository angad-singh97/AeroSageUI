import './quickActions.css';
import './../../../App.css';

export default function QuickActions() {
    return (
        <div className="quick-actions-panel flex-homepage-item">
            <button type="button" className="quick-actions-button"><a href="/search/airports">Search Airports</a></button>
            <button type="button" className="quick-actions-button"><a href="/search">Search Flights</a></button>
            <button type="button" className="quick-actions-button"><a href="/search/airlines">Search Airlines</a></button>
            <button type="button" className="quick-actions-button"><a href="/search/planes">Search Planes</a></button>
        </div>
    );
};