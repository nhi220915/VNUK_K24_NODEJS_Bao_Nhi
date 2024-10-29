function getUsers() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Không thể lấy tài liệu từ API')

                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
getUsers()
    .then(data => {
        // for (let index = 0; index < user.length; index++) {
        // const element = users[index];
        // }
        // console.log('Danh sách người dùng: ', users[1].username);
        console.log('Danh sách người dùng: ', data);
        console.log('Tổng số người dùng: ', data.length);
    })
    .catch(error => {
        console.error('Đã xảy ra lỗi: ', error);
    })