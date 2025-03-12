import { HTTP_STATUS_CODES } from "../constants/response.codes.js";
import { responseFormat } from "../utils/response.formatter.js";
import { CustomRequest } from "../types/custom.request.js";
import { UserT } from "../types/user.type.js";
import { Product } from "../models/product.model.js";
import { ProductT } from "../types/product.type.js";
import { CartItemT, CartT } from "../types/cart.type.js";
import { Cart } from "../models/cart.model.js";

class CartService {
    async getCart(req: CustomRequest) {
        const auth: UserT = req.auth;

        const cart = await Cart.findOne({ user: auth._id }).populate("items.product");
        if (!cart) throw new Error(JSON.stringify({ msg: "Cart is empty", code: HTTP_STATUS_CODES.NOT_FOUND }));

        return responseFormat(true, "Your cart details", cart, HTTP_STATUS_CODES.OK);
    }

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

        const cartDetails = await this.getCart(req);

        return responseFormat(true, "Added in the cart successfully", cartDetails.data, HTTP_STATUS_CODES.OK);
    }

    async removeFromCart(req: CustomRequest) {
        const { product_id } = req.body;
        const auth: UserT = req.auth;

        let cart: CartT = await Cart.findOne({ user: auth._id });
        if (!cart) throw new Error(JSON.stringify({ msg: "Cart not found", code: HTTP_STATUS_CODES.NOT_FOUND }));

        if (product_id) {
            cart.items = cart.items.filter((item: CartItemT) => item.product.toString() != product_id);
        } else {
            cart.items = [];
        }
        await cart.save();

        const cartDetails = await this.getCart(req);

        return responseFormat(true, "Removed from cart successfully", cartDetails.data, HTTP_STATUS_CODES.OK);
    }
}
export default CartService;
