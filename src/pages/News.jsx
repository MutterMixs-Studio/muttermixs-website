import React from "react";

export default function News() {
    return (
        <div>
            <h1>Latest News</h1>
            <ul>
                {newsPosts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.date}</p>
                        <p>{post.description}</p>
                        <img src={post.image} alt={post.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}