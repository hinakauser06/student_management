      // table-body
      let tableBody = document.getElementById("table-body");
      let userArray = [
        {
          id: 0,
          name: "Mahesh Gaikwad",
          email: "mahesh@gmail.com",
          password: "123",
          isBlocked: true,
        },
        {
          id: 1,
          name: "Hina Gaikwad",
          email: "hina@gmail.com",
          password: "admin123",
          isBlocked: false,
        },
        {
          id: 2,
          name: "Anisha",
          email: "reshma@gmail.com",
          password: "admin90",
          isBlocked: false,
        },
      ];

      //   [todo]-> fix this issue need to show all the data in array
      //   [todo]-> show block or unblock btn using array data
      userArray.forEach((data) => {
        // const newRow= document.createElement('tr');
        tableBody.innerHTML += `
            <tr>
                <th>${data.id}</th>
                <td scope="row">${data.name}</td>
                <td>${data.email}</td>
                <td>${data.password}</td>
                <td>
                ${data.isBlocked ? '<button type="button" class="btn btn-success btn-sm">Blocked</button>' : '<button type="button" class="btn btn-warning btn-sm">Unblocked</button>'}
                
                </td>
                <td>
                <button type="button" class="btn btn-danger btn-sm">
                    Delete
                </button>
                </td>
                <td>
                </tr>
            `;
            // tableBody.appendChild(newRow); 
            



}); 
     