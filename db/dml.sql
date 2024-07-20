INSERT INTO products VALUES (
        101,
        'pizza', 
        'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/d6c392a84e4f665424d710649452e7f9/Derivates/a6bdb196bee23faef1d8020319c7c64750ef7686.jpg',
        100,
        'MDL'
    ),
    (
        102,
        'burger', 
        'https://www.shutterstock.com/image-photo/hand-takes-sandwich-on-white-260nw-2419275997.jpg',
        56,
        'MDL'
    ),
    (
        103,
        'salat', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLoCTFTm9i5AYLnlApJxr6_ofPEkq04V0ddY3hfnulg&s',
        34,
        'MDL'
    );

    SELECT SUM(price_amount)
    FROM products JOIN order_products 
    ON order_products.product_id  = products.id 
    WHERE order_products.order_id = '';