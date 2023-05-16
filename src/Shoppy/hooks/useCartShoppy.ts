import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { addOrUpdateToCart, getCart, removeFromCart } from "../apis/firebase";
import { IProduct } from "../components/CartItemShoppy";
import { IContext, useAuthContext } from "../context/ContextShoppy";
export default function useCart() {
	const { uid } = useAuthContext() as IContext;
	const queryClient = useQueryClient();
	const cartQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
		enabled: !!uid,
	});

	const addOrUpdateItem = useMutation(
		(product: IProduct) => addOrUpdateToCart(uid, product),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["carts", uid]);
			},
		}
	);
	const removeItem = useMutation((id: string) => removeFromCart(uid, id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["carts", uid]);
		},
	});
	return { cartQuery, addOrUpdateItem, removeItem };
}
