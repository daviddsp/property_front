<template>
   <!-- Modal Structure -->
   <div id="modal1" class="modal modal-fixed-footer">
     <div class="modal-content">
       <h4>Create Property</h4>
			 <div class="row">
				<form class="col s12" @submit.prevent="getPropertyCreate">
					<div class="row">
						<div class="input-field col s12">
							<input id="title" v-model="newProperty.title" type="text">
							<label for="title">Title</label>
						</div>
						<div class="input-field col s12">
							<input id="description" v-model="newProperty.description" type="text">
							<label for="description">Description</label>
						</div>
						<div class="input-field col s12">
							<input id="address" v-model="newProperty.address" type="text">
							<label for="address">Address</label>
						</div>
						<div class="input-field col s12">
							<input id="town" v-model="newProperty.town" type="text">
							<label for="town">Town</label>
						</div>
						<div class="input-field col s12">
							<input id="country" v-model="newProperty.country" type="text">
							<label for="country">Country</label>
						</div>
						<div class="input-field col s12">
							<input id="state_id" v-model="newProperty.state_id" type="text">
							<label for="state_id">state_id</label>
						</div>
						<div class="input-field col s12">
							<input id="id_facility" v-model="newProperty.id_facility" type="text">
							<label for="id_facility">state_id</label>
						</div>
					</div>

			</div>
     </div>
     <div class="modal-footer">
			 <a v-on:click.stop.prevent="getPropertyCreate" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
     </div>
		 </form>
   </div>
   <div id="modal2" class="modal">
     <div class="modal-content">
       <h4>Modal Header</h4>
       <p>A bunch of text</p>
     </div>
     <div class="modal-footer">
       <a class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
     </div>
   </div>

	<div class="section no-pad-bot" id="index-banner">
		<div class="container">
			<div class="fixed-action-btn">
			    <a class="btn-floating btn-large red">
			      <i class="large material-icons" data-target="modal1">add</i>
			    </a>
			  </div>
			<table>
				<thead>
					<tr>
						<th data-field="id">Title</th>
						<th data-field="name">Description</th>
						<th data-field="price">Address</th>
						<th data-field="price">Town</th>
						<th data-field="price">Country</th>
						<th data-field="price">State</th>
						<th data-field="price">Acciones</th>
					</tr>
				</thead>

				<tbody v-for="data in property">
					<tr>
						<td>{{data.title}}</td>
						<td>{{data.description}}</td>
						<td>{{data.address}}</td>
						<td>{{data.town}}</td>
						<td>{{data.country}}</td>
						<td>{{data.state_id}}</td>
						<td>
							<a class="btn-floating btn-small green btn">
      					<i class="large material-icons" data-target="modal2">mode_edit</i>
    					</a>
							<a class="btn-floating btn-small red">
      					<i class="large material-icons" @click="getPropertyDelete(data.id)">delete</i>
    					</a>
						</td>
					</tr>
				</tbody>
			</table>

		</div>
	</div>

</template>

<script>
export default {
  data () {
    return {
      property: {},
      newProperty: {
        title: '',
        description: '',
        address: '',
        town: '',
        country: '',
        state_id: '',
        user_id: '1',
        id_facility: ''
      }
    }
  },
  components: {
    // Modal: require('./Modal.vue')
  },
  ready: function () {
    this.getProperty()
  },
  methods: {
    getProperty: function () {
      this.$http.get('http://localhost:8000/api/v1/property')
			.then(
				function (response) {
  this.$set('property', response.data.data)
				},
				function (response) {
  console.log(response.data.errors.detail)
				}
			)
    },
    getPropertyCreate: function () {
      console.log('llego')
      const property = this.newProperty
      this.$http.post('http://localhost:8000/api/v1/property', property)
			.then(
				function (response) {
  this.getProperty()
  this.$set('property', response.data.data)
				},
				function (response) {
  console.log(response.data.errors.detail)
				}
			)
    },
    getPropertyEdit: function (id) {
      const property = this.newProperty
      this.$http.post('http://localhost:8000/api/v1/property', property)
			.then(
				function (response) {
  this.$set('property', response.data.data)
				},
				function (response) {
  console.log(response.data.errors.detail)
				}
			)
    },
    getPropertyDelete: function (id) {
      this.$http.delete('http://localhost:8000/api/v1/property/' + id)
			.then(
				function (response) {
  this.getProperty()
  this.$set('property', response.data.data)
				},
				function (response) {
  console.log(response.data.errors.detail)
				}
			)
    }
  }
}
</script>
