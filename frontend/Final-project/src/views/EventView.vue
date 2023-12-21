<template>
    <div class="everything">
      <div class="perin">
        <h1 class="rentT">Event <RouterLink to="/event" class="plus">+</RouterLink></h1>
      </div>
      <div class="table-rents">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Event Name</th>
              <th>date</th>
              <th>venue</th>
              <th>description</th>
              <th>Style id</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in events" :key="event.id">
              <td>{{ event.id }}</td>
              <td>{{ event.event_name}}</td>
              <td>{{ event.date }}</td>
              <td>{{ event.venue }}</td>
              <td>{{ event.style_id }}</td>
              <td>
                <button @click="deleteEvent(event.id)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <!-- ... rest of your code ... -->
  

  <style>
  .everything {
  margin: 3.5rem 4rem;
  }
  
  .perin h1 {
  font-size: 45px;
  margin-left: 2px;
  font-weight: 1000;
  letter-spacing: -2px;
  font-family: 'Cavilant';
  }
  
  .perin {
  border-bottom: 1px solid #5c595a; /* Pink border */
  padding-bottom: 10px;
  display: flex;
  
  }
  
  .table-rents {
  margin-top: 20px;
  }
  
  table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  }
  
  th, td {
  border: 1px solid #696969; /* Pink border */
  padding: 8px;
  text-align: left;
  }
  
  th {
  background-color: #575757; /* Pink background for header */
  color: white; /* White text for header */
  }
  
  .rentT {
  color: white; /* White color for h1 */
  }
  .plus{
  padding: 5px;
  color: #4e4e4e;
  background-color: white;
  border-radius: 5px;
  font-size: 15px;
  text-decoration: none;
  }
  button{
  height: 30px;
  width: 30px;
  }
  </style>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const events = ref([]);
  const loading = ref(true);
  
  const fetchevents = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/events?include=style');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      events.value = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      loading.value = false;
    }
  };
  
  const deleteEvent = async (eventId) => {
  try {
    const response = await fetch(`http://localhost:8000/api/events/${eventId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      events.value = events.value.filter(event => event.id !== eventId);
      console.log('Event deleted successfully!');
      alert('Event deleted successfully!');
    } else {
      console.error('Failed to delete style:', response.statusText);
      const errorData = await response.json();
      console.error('Error data:', errorData);
      alert(`Failed to delete event. Error: ${errorData.message}`);
    }
  } catch (error) {
    console.error('Error deleting event:', error);
    alert('An unexpected error occurred while deleting the event.');
  }
};

onMounted(fetchevents);
  </script>
