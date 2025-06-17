import axios from "axios";

export default async function getImagesByQuery(query, page = 1) {
const API_KEY = "50767734-ec8f632e6fcf50a626b02f32f";

const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    page: page,
    per_page: 15,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});

const response = await axios.get(`https://pixabay.com/api/`, { params })

return response.data
}