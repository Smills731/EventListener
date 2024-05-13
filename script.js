document.addEventListener('DOMContentLoaded', () => {
  const clientId = 'NDEzMTAyNzd8MTcxNDY5MTQ3OC41OTk0OTEx';
  const affiliateId = 'YOUR_AFFILIATE_ID'; // Replace 'YOUR_AFFILIATE_ID' with your actual affiliate ID
  const clientSecret = '9a31c51dcdb3906164468998db3ea5ffa9ec045ea57a36e264b6969181f25bc0';
  const apiUrl = 'https://api.seatgeek.com/2/events';

  // Function to fetch events data from SeatGeek API
  const fetchEvents = async (queryParams) => {
    const queryString = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      ...queryParams
    }).toString();

    try {
      const response = await fetch(`${apiUrl}?${queryString}`);
      if (!response.ok) {
        throw new Error('Failed to fetch events data');
      }
      const data = await response.json();
      return data.events;
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  };

  // Function to display events in the UI
  const displayEvents = (events) => {
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = ''; // Clear previous events

    events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      eventElement.innerHTML = `
        <h2>${event.title}</h2>
        <p>${event.datetime_local}</p>
        <p>${event.venue.name}, ${event.venue.city}</p>
        <p>Ticket Price: $${event.stats.average_price}</p>
        <a href="${event.url}?aid=${affiliateId}" class="btn btn-primary" target="_blank">Buy Tickets</a>
      `;
      eventsList.appendChild(eventElement);
    });
  };

  // Handle form submission
  const form = document.getElementById('event-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const location = formData.get('location');
    const category = formData.get('category');
    const startDate = formData.get('start-date');
    const endDate = formData.get('end-date');

    const queryParams = {
      ...((location && { 'venue.city': location }) || {}),
      ...(category !== 'all' && { 'taxonomies.name': category }),
      ...(startDate && { 'datetime_utc.gte': new Date(startDate).toISOString() }),
      ...(endDate && { 'datetime_utc.lte': new Date(endDate).toISOString() })
    };

    const events = await fetchEvents(queryParams);
    displayEvents(events);
  });

  // Fetch events and display them when the page loads
  fetchEvents({})
    .then(displayEvents)
    .catch(error => console.error('Error:', error));
});
