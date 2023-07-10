import './userInsights.css';
import './../../../App.css';


export default function UserInsights() {
  return (

      <div className="user-insights-panel flex-homepage-item">
          <h2>At a Glance</h2>
          <ul>
              <li>X Searches Performed</li>
              <li>Y Bookings Made</li>
              <li>Z Journeys Completed</li>
          </ul>
          <button type="button" className="quick-actions-button">View All</button>
      </div>

  );
};