import fetch from 'node-fetch';

export async function getData() {
    try {
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!usersResponse.ok) {
            throw new Error("Kullanıcılar verisi alınamadı");
        }
        const users = await usersResponse.json();

        const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
        if (!postsResponse.ok) {
            throw new Error("Gönderiler verisi alınamadı");
        }
        const posts = await postsResponse.json();

        console.log("Kullanıcılar:", users);
        console.log("Gönderiler:", posts);
    } catch (error) {
        console.error("Veri alınırken bir hata oluştu:", error);
    }
}

