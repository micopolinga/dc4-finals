<template>
  <div class="everything">
    <div class="perin">
      <h1 class="cust">
        Dancers
        <RouterLink to="/dancer" class="plus">+</RouterLink>
      </h1>
    </div>
    <div class="table-customers">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Birth Date</th>
            <th>gender</th>
            <th>Phone #</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dancer in dancers" :key="dancer.id">
            <td>{{ dancer.id }}</td>
            <td>{{ dancer.full_name }}</td>
            <td>{{ dancer.birth_date }}</td>
            <td>{{ dancer.gender }}</td>
            <td>{{ dancer.phone_number }}</td>
            <td>
              <button @click="deleteDancer(dancer.id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.everything {
  margin: 3.5rem 0rem;
}

.perin h1 {
  font-size: 45px;
  margin-left: 2px;
  font-weight: 1000;
  letter-spacing: -2px;
  font-family: 'Cavilant';
}

.perin {
  border-bottom: 1px solid #3d3b3c; /* Pink border */
  padding-bottom: 10px;
  display: flex;
}

.table-customers {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border-radius: 10px;
}

th, td {
  border: 1px solid #494848; /* Pink border */
  padding: 8px;
  text-align: left;
}

th {
  background-color: #535152; /* Pink background for header */
  color: white; /* White text for header */
}

.cust {
  color: white; /* White color for h1 */
}

.plus {
  padding: 5px;
  color: #333232;
  background-color: white;
  border-radius: 5px;
  font-size: 15px;
  text-decoration: none;
}

.btn {
  background-color: #222121; /* Bootstrap red color */
  color: #ffffff;
  border-radius: 5px;
  padding: 5px 10px;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';

const dancers = ref(null);

onMounted(() => {
  fetch('http://localhost:8000/api/dancers')
    .then(response => response.json().then(data => (dancers.value = data)));
});

const deleteDancer = async (dancerId) => {
  try {
    const response = await fetch(`http://localhost:8000/api/dancers/${dancerId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      dancers.value = dancers.value.filter((dancer) => dancer.id !== dancerId);
      alert('Dancer deleted successfully!');
    } else {
      console.error('Failed to delete dancer:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting dancer:', error);
  }
};
</script>

