// hàm để lấy dlieu từ API bằng callback
function fetchDataFromAPI(callback) {
    // giả sử đây là url của api
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

    // gửi request để lấy dl từ api
    fetch(apiUrl)
        .then(response => repsponse.json())
        .then(data => {
            // gọi callback và truyền dl nhận được từ api vào
            callback(null, data);
        })

        .catch(error => {
            // nếu có lỗi, gọi callback với thông báo lỗi
            callback(error, null);
        });
}

// hàm callbackđể xử lý dl nhận được từ api
function handleAPIData(error, data) {
    if (error) {
        console.log('Đã xảy ra lỗi khi lấy dl từ API: ', error);
    } else {
        console.log('Dl từ API: ', data);
    }
}

// gọi hàm để lấy dl từ API và truyền hàm callback để xử lý dl
fetchDataFromAPI(handleAPIData);