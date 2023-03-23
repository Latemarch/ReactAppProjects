import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import CartItemShoppy from "../components/CartItemShoppy";
import PriceCardShoppy from "../components/PriceCardShoppy";
import useCart from "../hooks/useCartShoppy";

export default function MyCartShoppy() {
	const {
		cartQuery: { isLoading, data: products },
	} = useCart();

	if (isLoading) return <p>Loading..</p>;

	const hasProducts = products && products.length > 0;
	const totalPrice =
		products &&
		products.reduce((acc, cur) => acc + parseInt(cur.price) * cur.quantity, 0);

	return (
		<section className="flex flex-col justify-center m-4 ">
			<p className="m-4 font-bold ">장바구니</p>
			{!hasProducts && <p>장바구니가 비었다.</p>}
			{hasProducts && (
				<>
					<ul>
						{products &&
							products.map((product) => (
								<CartItemShoppy key={product.id} product={product} />
							))}
					</ul>
					<div className="flex justify-between items-center">
						<PriceCardShoppy text="상품 총액" price={totalPrice} />
						<BsFillPlusCircleFill className="shrink-0" />
						<PriceCardShoppy text="상품 총액" price={3000} />
						<FaEquals className="shrink-0" />
						<PriceCardShoppy text="총 가격" price={totalPrice + 3000} />
					</div>
					<button className="bg-blue-200 w-full h-16 rounded-lg box-border mt-10 font-bold text-xl">
						구매하기
					</button>
				</>
			)}
		</section>
	);
}
