import { HTTP_STATUS_CODES } from "../constants/response.codes.js";
import { responseFormat } from "../utils/response.formatter.js";
import { CustomRequest } from "../types/custom.request.js";
import { UserT } from "../types/user.type.js";
import { Product } from "../models/product.model.js";
import { ProductT } from "../types/product.type.js";
import { CartItemT, CartT } from "../types/cart.type.js";
import { Cart } from "../models/cart.model.js";

class CartService {
    async addToCart(req: CustomRequest) {
        const { product_id, quantity } = req.body;
        const auth: UserT = req.auth;

        const product: ProductT = await Product.findById(product_id);
        if (!product) throw new Error(JSON.stringify({ msg: "Product not found", code: HTTP_STATUS_CODES.NOT_FOUND }));

        let cart: CartT | null = await Cart.findOne({ user: auth._id });
        if (!cart) {
            cart = await Cart.create({ user: auth._id, items: [] });
        }
        const itemIndex = cart.items.findIndex((item) => {
            return item.product.toString() === product_id;
        });
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: product_id, quantity });
        }
        await cart.save();

        return responseFormat(true, "Added in the cart successfully", cart, HTTP_STATUS_CODES.OK);
    }
}
export default CartService;
