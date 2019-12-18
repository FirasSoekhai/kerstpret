const kersturls = ["https://images.unsplash.com/photo-1482517716521-3120e5340ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
    "https://n3x0.com/wp-content/uploads/2019/11/very-tugs-at-the-heartstrings-in-community-cartoon-the-marketing-week-christmas-blog-2019.jpg", 
    "https://images.unsplash.com/photo-1543760717-653d5232e432?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1548101539-a8650373c725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1544863308-ec385bbf5caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1561506694-f97e677ff3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1511268011861-691ed210aae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];

var parent    = document.getElementById('images');

for (let i = 0; i < kersturls.length; i ++ ) {
    let img = new Image();
    img.src = kersturls[i];
    img.alt = "leuk plaatje";
    img.className = "kerstfoto" + i;
    parent.appendChild(img);
}