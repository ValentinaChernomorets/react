import { Product } from '../model/Product';
import { Money } from '../model/Money';

const getProductItems = () => {
    return [
        new Product ("Pizza", "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/d6c392a84e4f665424d710649452e7f9/Derivates/a6bdb196bee23faef1d8020319c7c64750ef7686.jpg",
            new Money(100, 'MDL')
        ),
        new Product ("Burger", "https://www.shutterstock.com/image-photo/hand-takes-sandwich-on-white-260nw-2419275997.jpg",
            new Money(56, 'MDL')
        ),
        new Product ("Salat", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLoCTFTm9i5AYLnlApJxr6_ofPEkq04V0ddY3hfnulg&s",
            new Money(34, 'MDL')
        ),
    ]
}

export {getProductItems}