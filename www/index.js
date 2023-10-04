// let endpoint = 'http://128.199.80.110:12111';
let endpoint = "http://localhost:3000/api";

// $(document).ready(function () {
// });

document.addEventListener("DOMContentLoaded", function () {

  axios
    .get(endpoint + "/get_item")
    .then((response) => {
      if (response.data.status == 200) {
        displayItems(response.data.data);
      } else {
        console.error("เกิดข้อผิดพลาดในการเรียก API");
      }
    })
    .catch((error) => {
      console.error("เกิดข้อผิดพลาดในการเรียก API:", error);
    });

  
  function displayItems(items) {
    const itemTableBody = document.getElementById("itemTableBody");
    itemTableBody.innerHTML = ""; 

    items.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>${item.description}</td>
                <td>
                    <button onclick="loadItemDetails('${item._id}')" class="btn btn-primary view-details" data-bs-toggle="modal" data-bs-target="#itemDetailsModal">View</button>
                </td>
                <td>
                    <button onclick="loadItemDetailsForEdit('${item._id}')" class="btn btn-warning view-details" data-bs-toggle="modal" data-bs-target="#updateModal">Edit</button>
                </td>
            `;
      itemTableBody.appendChild(row);
    });
  }
});

function loadItemDetails(itemId) {
  const apiUrl = `/get_item_by_id?_id=${itemId}`;
  axios
    .get(endpoint + apiUrl)
    .then((response) => {
      console.log(response.data.status + "test");
      if (response.data.status == 200) {
        console.log(response.data.data);
        const item = response.data.data;

        document.getElementById("idModal").value = item._id;
        document.getElementById("nameModal").value = item.name;
        document.getElementById("priceModal").value = item.price;
        document.getElementById("quantityModal").value = item.quantity;
        document.getElementById("descriptionModal").value =
          item.description;
      } else {
        console.error("Failed to fetch item details.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function insertItem() {
  const name = document.getElementById("add_name").value;
  const price = document.getElementById("add_price").value;
  const quantity = document.getElementById("add_quantity").value;
  const description = document.getElementById("add_description").value;

  const data = {
    name,
    price,
    quantity,
    description,
  };

  axios
    .post(endpoint + "/insert_item", data)
    .then((response) => {
      console.log(response.data);
      if (response.data.status == 200) {
        alert("Item inserted successfully");
        window.location.reload();
      } else {
        console.error("Failed to insert item.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function loadItemDetailsForEdit(itemId) {
  const apiUrl = `/get_item_by_id?_id=${itemId}`;
  axios
    .get(endpoint + apiUrl)
    .then((response) => {
      console.log(response.data.status + "test");
      if (response.data.status == 200) {
        console.log(response.data.data);
        const item = response.data.data;

        document.getElementById("edit_id").value = item._id;
        document.getElementById("edit_name").value = item.name;
        document.getElementById("edit_price").value = item.price;
        document.getElementById("edit_quantity").value = item.quantity;
        document.getElementById("edit_description").value = item.description;
      } else {
        console.error("Failed to fetch item details.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function updateItem() {
  const id = document.getElementById("edit_id").value;
  const name = document.getElementById("edit_name").value;
  const price = document.getElementById("edit_price").value;
  const quantity = document.getElementById("edit_quantity").value;
  const description = document.getElementById("edit_description").value;

  const data = {
    id,
    name,
    price,
    quantity,
    description,
  };

  axios
    .post(endpoint + "/update_item", data)
    .then((response) => {
      console.log(response.data);
      if (response.data.status == 200) {
        alert("Item updated successfully");
        window.location.reload();
      } else {
        console.error("Failed to update item.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


